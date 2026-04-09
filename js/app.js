/**
 * ============================================================
 * app.js — Main Application Logic
 * CBT Engine · Faculty/Materials · Dashboard · Admin Panel
 * ============================================================
 */

import './firebase-config.js';
import './auth.js';
import './router.js';
import './database.js';
import './storage.js';
import './questions.js'; 
"use strict";

// ── GLOBAL CBT STATE ──────────────────────────────────────────
let currentExam = {
  courseId:null, courseName:"", courseCode:"", ordered:false,
  questions:[], answers:[], currentQ:0,
  startTime:null, duration:60, timerInterval:null, submitted:false
};
let pendingExamSetup = { courseId:null, questionCount:10, duration:30 };

// ── INIT ON PAGE LOAD ─────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  // Show spinner while Firebase resolves auth state
  showLoadingSpinner("Loading...");
  // onAuthStateChanged in auth.js will hide spinner + navigate
});

// ── HOME PAGE ─────────────────────────────────────────────────
function initHomePage() {
  updateLandingStats();
}

async function updateLandingStats() {
  try {
    const results = await getUserResults();
    const el1 = document.getElementById("stat-tests");
    const el2 = document.getElementById("stat-avg");
    if (el1) el1.textContent = results.length;
    if (el2 && results.length) {
      el2.textContent = Math.round(results.reduce((s,r)=>s+(r.pct||0),0)/results.length) + "%";
    }
  } catch { /* silent */ }
}

// ── FACULTY GRID ──────────────────────────────────────────────
function renderFacultyGrid() {
  const grid = document.getElementById("faculty-grid");
  if (!grid) return;
  grid.innerHTML = FACULTIES.map(f => `
    <div class="faculty-card" onclick="openFaculty('${f.name.replace(/'/g,"\\'")}')">
      <div class="faculty-icon">${f.icon}</div>
      <div class="faculty-name">${f.name}</div>
      <div class="faculty-desc">${f.desc}</div>
      <div class="faculty-arrow">Browse materials →</div>
    </div>`).join("");
}

async function openFaculty(facultyName) {
  document.getElementById("faculty-detail-title").textContent = facultyName;
  const content = document.getElementById("faculty-detail-content");
  content.innerHTML = `<div class="loading-state"><div class="spin"></div><p>Loading materials...</p></div>`;
  navigateTo("faculty-detail");

  try {
    const files = await getFiles({ faculty: facultyName });
    if (!files.length) {
      content.innerHTML = `<div class="empty-state"><div class="empty-icon">📭</div><h3>No materials yet</h3><p>Check back later or ask your administrator to upload files.</p></div>`;
      return;
    }
    // Group by level
    const byLevel = {};
    files.forEach(f => {
      const lvl = f.level || "General";
      if (!byLevel[lvl]) byLevel[lvl] = [];
      byLevel[lvl].push(f);
    });
    content.innerHTML = Object.entries(byLevel).map(([level, items]) => `
      <div class="level-section">
        <div class="level-title">📚 ${level}</div>
        <div class="course-list">
          ${items.map(item => `
            <div class="course-item">
              <div class="course-info">
                <div class="course-title-text">${item.course}</div>
                <div class="course-file">📄 ${item.fileName} &nbsp;·&nbsp; ${formatFileSize(item.fileSize)}</div>
              </div>
              <a href="${item.fileURL}" target="_blank" download="${item.fileName}" class="btn-download">⬇ Download</a>
            </div>`).join("")}
        </div>
      </div>`).join("");
  } catch (e) {
    content.innerHTML = `<div class="empty-state"><p>Error loading files. Please try again.</p></div>`;
  }
}

// ── CBT COURSE GRID ───────────────────────────────────────────
function renderCBTCourses() {
  const grid = document.getElementById("cbt-course-grid");
  if (!grid) return;
  grid.innerHTML = CBT_COURSES.map(c => {
    const qCount    = (CBT_QUESTIONS[c.id] || []).length;
    const staClass  = c.id === "STA101" ? "sta-card" : "";
    const ordBadge  = c.ordered ? `<div class="ordered-badge">📋 Fixed Order</div>` : "";
    return `
      <div class="cbt-course-card ${staClass}">
        <div class="cbt-code">${c.code}<span class="cbt-q-badge">${qCount} Qs</span></div>
        <div class="cbt-name">${c.name}</div>
        ${ordBadge}
        <div class="cbt-meta">${c.faculty} · Up to ${c.maxDuration} min</div>
        <button class="btn-start-cbt" onclick="openExamModal('${c.id}')">▶ SET UP &amp; START</button>
      </div>`;
  }).join("");
}

// ── EXAM SETUP MODAL ──────────────────────────────────────────
function openExamModal(courseId) {
  const course = CBT_COURSES.find(c => c.id === courseId);
  if (!course) return;
  const bank = CBT_QUESTIONS[courseId] || [];
  if (!bank.length) { showToast("No questions available.", "info"); return; }

  pendingExamSetup.courseId = courseId;
  pendingExamSetup.questionCount = Math.min(course.questionsPool[0], bank.length);

  document.getElementById("modal-course-code").textContent = course.code;
  document.getElementById("modal-course-name").textContent = course.name;

  const optsCont = document.getElementById("q-count-options");
  optsCont.innerHTML = "";
  course.questionsPool.forEach(n => {
    const avail = Math.min(n, bank.length);
    const btn   = document.createElement("button");
    btn.className = "q-count-btn" + (avail === pendingExamSetup.questionCount ? " active" : "");
    btn.textContent = avail + " Qs";
    btn.onclick = () => {
      pendingExamSetup.questionCount = avail;
      optsCont.querySelectorAll(".q-count-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      _updateModalDuration(avail, course.maxDuration);
    };
    optsCont.appendChild(btn);
  });
  _updateModalDuration(pendingExamSetup.questionCount, course.maxDuration);
  document.getElementById("exam-setup-modal").style.display = "flex";
}

function _updateModalDuration(q, max) {
  const mins = Math.min(Math.ceil(q * 1.5), max);
  document.getElementById("duration-display").textContent = mins + " minutes";
  pendingExamSetup.duration = mins;
}

function closeExamModal()   { document.getElementById("exam-setup-modal").style.display = "none"; }
function confirmStartExam() { closeExamModal(); startExam(pendingExamSetup.courseId, pendingExamSetup.questionCount, pendingExamSetup.duration); }

// ── CBT ENGINE ────────────────────────────────────────────────
function startExam(courseId, questionCount, duration) {
  const course = CBT_COURSES.find(c => c.id === courseId);
  if (!course) return;
  const allQ     = CBT_QUESTIONS[courseId] || [];
  const selected = course.ordered ? allQ.slice(0, questionCount) : shuffleArray([...allQ]).slice(0, questionCount);

  currentExam = {
    courseId, courseName: course.name, courseCode: course.code,
    ordered: !!course.ordered, questions: selected,
    answers: new Array(selected.length).fill(null),
    currentQ: 0, startTime: Date.now(), duration,
    timerInterval: null, submitted: false
  };

  document.getElementById("exam-course-label").textContent = course.code + " — " + course.name;
  renderQuestion(); renderPalette(); startTimer();
  navigateTo("cbt-exam");
}

function renderQuestion() {
  const q     = currentExam.questions[currentExam.currentQ];
  const n     = currentExam.currentQ;
  const total = currentExam.questions.length;

  document.getElementById("q-number").textContent = `Question ${n+1} of ${total}`;
  const qEl = document.getElementById("q-text");
  if (q.html) qEl.innerHTML = q.question; else qEl.textContent = q.question;

  document.getElementById("exam-q-count").textContent       = `${n+1} / ${total}`;
  document.getElementById("exam-progress-fill").style.width = `${((n+1)/total)*100}%`;
  document.getElementById("btn-prev").disabled = n === 0;
  document.getElementById("btn-next").disabled = n === total-1;

  const letters = ["A","B","C","D"];
  document.getElementById("options-grid").innerHTML = q.options.map((opt,i) => `
    <button class="option-btn ${currentExam.answers[n]===i?"selected":""}" onclick="selectOption(${i})">
      <span class="option-letter">${letters[i]}</span>
      <span>${opt}</span>
    </button>`).join("");

  renderPalette();
  const card = document.getElementById("question-card");
  card.style.animation = "none"; card.offsetHeight; card.style.animation = "fadeIn .25s ease";
}

function selectOption(i) {
  if (currentExam.submitted) return;
  currentExam.answers[currentExam.currentQ] = i;
  renderQuestion();
}

function examNav(dir) {
  if (dir==="prev" && currentExam.currentQ > 0)                                        currentExam.currentQ--;
  else if (dir==="next" && currentExam.currentQ < currentExam.questions.length-1)      currentExam.currentQ++;
  renderQuestion();
}

function togglePalette() { document.getElementById("q-palette").classList.toggle("open"); }

function renderPalette() {
  const grid = document.getElementById("palette-grid");
  if (!grid) return;
  grid.innerHTML = currentExam.questions.map((_,i) => {
    const cls = i===currentExam.currentQ ? "current" : currentExam.answers[i]!==null ? "answered" : "";
    return `<button class="palette-btn ${cls}" onclick="jumpToQ(${i});togglePalette();">${i+1}</button>`;
  }).join("");
}

function jumpToQ(i) { currentExam.currentQ = i; renderQuestion(); }

function startTimer() {
  clearInterval(currentExam.timerInterval);
  const durSec = currentExam.duration * 60;
  currentExam.timerInterval = setInterval(() => {
    const rem = durSec - Math.floor((Date.now()-currentExam.startTime)/1000);
    if (rem <= 0) { clearInterval(currentExam.timerInterval); submitExam(true); return; }
    const m=Math.floor(rem/60), s=rem%60;
    const el = document.getElementById("exam-timer");
    if (el) {
      el.textContent = `⏱ ${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
      if (rem<300) el.classList.add("warning"); else el.classList.remove("warning");
    }
  }, 1000);
}

// ── SUBMIT ────────────────────────────────────────────────────
function submitExam(timeUp=false) {
  if (currentExam.submitted) return;
  if (!timeUp) { openSubmitModal(); return; }
  _doSubmit();
}

function openSubmitModal() {
  const answered   = currentExam.answers.filter(a=>a!==null).length;
  const total      = currentExam.questions.length;
  document.getElementById("submit-modal-stats").innerHTML = `
    <div class="sms-item sms-answered"><span class="sms-num">${answered}</span><span class="sms-label">Answered</span></div>
    <div class="sms-item sms-unanswered"><span class="sms-num">${total-answered}</span><span class="sms-label">Unanswered</span></div>
    <div class="sms-item"><span class="sms-num" style="color:var(--neon)">${total}</span><span class="sms-label">Total</span></div>`;
  document.getElementById("submit-confirm-modal").style.display = "flex";
}

function closeSubmitModal() { document.getElementById("submit-confirm-modal").style.display = "none"; }
function confirmSubmitExam() { closeSubmitModal(); _doSubmit(); }

async function _doSubmit() {
  if (currentExam.submitted) return;
  clearInterval(currentExam.timerInterval);
  currentExam.submitted = true;
  let correct=0, wrong=0, skipped=0;
  currentExam.questions.forEach((q,i) => {
    const a = currentExam.answers[i];
    if (a===null) skipped++;
    else if (a===q.answer) correct++;
    else wrong++;
  });
  const pct = Math.round((correct/currentExam.questions.length)*100);
  await saveResult({ courseId:currentExam.courseId, courseCode:currentExam.courseCode,
    courseName:currentExam.courseName, total:currentExam.questions.length,
    correct, wrong, skipped, pct });
  renderResults(correct, wrong, skipped, pct);
  navigateTo("results");
}

function renderResults(correct, wrong, skipped, pct) {
  const trophy = pct>=70?"🏆":pct>=50?"🎯":"📚";
  const title  = pct>=70?"Excellent Work!":pct>=50?"Good Effort!":"Keep Practicing!";
  document.getElementById("results-trophy").textContent      = trophy;
  document.getElementById("results-title").textContent       = title;
  document.getElementById("results-course-label").textContent= currentExam.courseCode+" — "+currentExam.courseName;
  document.getElementById("score-pct").textContent           = pct+"%";
  document.getElementById("ss-correct").textContent          = correct;
  document.getElementById("ss-wrong").textContent            = wrong;
  document.getElementById("ss-skipped").textContent          = skipped;
  const ring  = document.getElementById("score-ring-fill");
  if (ring) {
    const color = pct>=70?"#00e676":pct>=50?"#ffd700":"#ff5252";
    ring.style.stroke = color;
    ring.style.filter = `drop-shadow(0 0 7px ${color})`;
    setTimeout(()=>{ ring.style.strokeDashoffset = 314*(1-pct/100); },100);
  }
  document.getElementById("review-section").style.display = "none";
}

function showReview() {
  const sec = document.getElementById("review-section");
  sec.style.display = "block"; sec.scrollIntoView({ behavior:"smooth" });
  const L = ["A","B","C","D"];
  document.getElementById("review-list").innerHTML = currentExam.questions.map((q,i)=>{
    const ua=currentExam.answers[i], isC=ua===q.answer, isS=ua===null;
    return `
      <div class="review-item ${isS?"r-skipped":isC?"r-correct":"r-wrong"}">
        <div class="review-q-num">QUESTION ${i+1} ${isS?"⬜":isC?"✅":"❌"}</div>
        <div class="review-q-text">${q.html?q.question:q.question.replace(/</g,"&lt;")}</div>
        <div class="review-answers">
          <span class="rev-your ${isC?"was-correct":""}">Your answer: ${ua!==null?L[ua]+". "+q.options[ua]:"Not answered"}</span>
          ${!isC?`<span class="rev-correct">✅ Correct: ${L[q.answer]}. ${q.options[q.answer]}</span>`:""}
        </div>
        <div class="review-explanation"><strong>📖 Explanation:</strong><br>${q.explanation}</div>
      </div>`;
  }).join("");
}

// ── DASHBOARD ─────────────────────────────────────────────────
async function initDashboard() {
  // Try Firebase user first, then fall back to session cache
  const user    = getCurrentUser();
  const session = getSession();
  const name    = user?.displayName || (session && session.name) || "Student";
  const email   = user?.email       || (session && session.email) || "";
  const photo   = user?.photoURL    || (session && session.photo) || "assets/Admin.png";

  const avEl = document.getElementById("dash-avatar");
  if (avEl) { avEl.src = photo; avEl.onerror = ()=>{ avEl.src="assets/Admin.png"; }; }
  const nmEl = document.getElementById("dash-name");  if (nmEl) nmEl.textContent = name;
  const emEl = document.getElementById("dash-email"); if (emEl) emEl.textContent = email;

  // Stats
  ["track-total","track-avg","track-best","track-streak"].forEach(id=>{
    const el=document.getElementById(id); if(el) el.textContent="...";
  });

  const results = await getUserResults();
  const totEl   = document.getElementById("track-total");
  if (totEl) totEl.textContent = results.length;

  if (!results.length) {
    ["track-avg","track-best","track-streak"].forEach(id=>{
      const el=document.getElementById(id); if(el) el.textContent="—";
    });
    const hl = document.getElementById("history-list");
    if (hl) hl.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📭</div>
        <p>No tests taken yet. Start a CBT test to see your history here!</p>
        <button class="btn-action primary" onclick="navigateTo('cbt')">Take a Test</button>
      </div>`;
    return;
  }

  const avg  = Math.round(results.reduce((s,r)=>s+(r.pct||0),0)/results.length);
  const best = Math.max(...results.map(r=>r.pct||0));
  const days = new Set(results.map(r=> r.dateStr ? r.dateStr.split("T")[0] : "")).size;

  const avgEl = document.getElementById("track-avg");  if (avgEl) avgEl.textContent = avg+"%";
  const bstEl = document.getElementById("track-best"); if (bstEl) bstEl.textContent = best+"%";
  const strEl = document.getElementById("track-streak"); if (strEl) strEl.textContent = days;

  const hl = document.getElementById("history-list");
  if (!hl) return;
  hl.innerHTML = results.map(r=>{
    const color = r.pct>=70?"#00e676":r.pct>=50?"#ffd700":"#ff5252";
    const ds    = r.dateStr
      ? new Date(r.dateStr).toLocaleDateString("en-NG",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})
      : (r.date?.toDate ? r.date.toDate().toLocaleDateString("en-NG") : "—");
    return `
      <div class="history-item">
        <div class="history-test-info">
          <div class="history-course">${r.courseCode||r.courseId||""}</div>
          <div style="font-size:.88rem;font-weight:600;margin:2px 0;font-family:var(--fu)">${r.courseName||""}</div>
          <div class="history-date">🕒 ${ds} &nbsp;·&nbsp; ${r.correct}/${r.total} correct</div>
        </div>
        <div class="history-score-wrap">
          <div class="history-score-bar"><div class="history-score-fill" style="width:${r.pct}%;background:${color}"></div></div>
          <div class="history-score-pct" style="color:${color}">${r.pct}%</div>
        </div>
      </div>`;
  }).join("");
}

async function renderTracking() { await initDashboard(); }

// ── ADMIN PANEL ───────────────────────────────────────────────
function initAdminPanel() {
  if (!isAdmin()) { navigateTo("admin-login"); return; }
  _buildFacultySelect("upload-faculty");
  loadAdminFiles();
}

function _buildFacultySelect(id) {
  const sel = document.getElementById(id);
  if (!sel) return;
  sel.innerHTML = `<option value="">-- Select Faculty --</option>` +
    FACULTIES.map(f=>`<option value="${f.name}">${f.name}</option>`).join("");
}

async function handlePDFUpload(e) {
  e.preventDefault();
  const faculty = document.getElementById("upload-faculty").value;
  const level   = document.getElementById("upload-level").value;
  const course  = document.getElementById("upload-course").value.trim();
  const file    = document.getElementById("upload-file").files[0];

  if (!faculty||!level||!course||!file) { showToast("Fill all fields and select a PDF.", "error"); return; }

  const btn  = document.getElementById("upload-btn");
  const prog = document.getElementById("upload-progress");
  const bar  = document.getElementById("upload-progress-bar");

  btn.disabled=true; btn.textContent="Uploading...";
  prog.style.display="block";

  try {
    await uploadCoursePDF(file, {faculty,level,course}, pct=>{ bar.style.width=pct+"%"; bar.textContent=pct+"%"; });
    showToast("✅ File uploaded!", "success");
    document.getElementById("upload-form").reset();
    bar.style.width="0%"; bar.textContent=""; prog.style.display="none";
    const fn = document.getElementById("selected-file-name");
    if (fn) fn.textContent="";
    loadAdminFiles();
  } catch (err) {
    showToast("Upload failed: "+err.message, "error");
    bar.style.width="0%"; prog.style.display="none";
  } finally {
    btn.disabled=false; btn.textContent="⬆ Upload PDF";
  }
}

async function loadAdminFiles() {
  const list = document.getElementById("admin-files-list");
  if (!list) return;
  list.innerHTML = `<div class="loading-state"><div class="spin"></div><p>Loading...</p></div>`;
  try {
    const files = await getFiles();
    if (!files.length) { list.innerHTML=`<div class="empty-state"><p>No files uploaded yet.</p></div>`; return; }
    list.innerHTML = files.map(f=>`
      <div class="admin-file-row">
        <div class="admin-file-info">
          <div class="admin-file-name">📄 ${f.fileName}</div>
          <div class="admin-file-meta">${f.faculty} · ${f.level} · ${f.course}</div>
          <div class="admin-file-size">${formatFileSize(f.fileSize)}</div>
        </div>
        <div class="admin-file-actions">
          <a href="${f.fileURL}" target="_blank" class="btn-file-view">👁 View</a>
          <button class="btn-file-delete" onclick="confirmDeleteFile('${f.id}','${f.fileURL}','${f.fileName.replace(/'/g,"\\'")}')">🗑 Delete</button>
        </div>
      </div>`).join("");
  } catch { list.innerHTML=`<div class="empty-state"><p>Error loading files.</p></div>`; }
}

async function confirmDeleteFile(id, url, name) {
  if (!confirm(`Delete "${name}"?`)) return;
  await deleteCoursePDF(url, id);
  loadAdminFiles();
}

async function handleAdminLogin(e) {
  e.preventDefault();
  const user = document.getElementById("admin-username").value.trim();
  const pass = document.getElementById("admin-password").value;
  const btn  = document.getElementById("admin-login-btn");
  btn.disabled=true; btn.textContent="Verifying...";
  const ok = await adminLogin(user, pass);
  if (!ok) { btn.disabled=false; btn.textContent="Access Admin Panel"; }
}

// ── APK MODAL ─────────────────────────────────────────────────
function openAPKModal()  { document.getElementById("apk-modal").style.display="flex"; }
function closeAPKModal() { document.getElementById("apk-modal").style.display="none"; }

// ── TOAST ─────────────────────────────────────────────────────
function showToast(msg, type="info") {
  let box = document.getElementById("toast-container");
  if (!box) { box=document.createElement("div"); box.id="toast-container"; document.body.appendChild(box); }
  const t = document.createElement("div");
  const icons = {success:"✅",error:"❌",info:"ℹ️",warning:"⚠️"};
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span class="toast-icon">${icons[type]||"ℹ️"}</span><span class="toast-msg">${msg}</span>`;
  box.appendChild(t);
  setTimeout(()=>t.classList.add("show"),10);
  setTimeout(()=>{ t.classList.remove("show"); setTimeout(()=>t.remove(),400); },3500);
}

// ── SPINNER ───────────────────────────────────────────────────
function showLoadingSpinner(msg="Loading...") {
  let el = document.getElementById("global-spinner");
  if (!el) {
    el=document.createElement("div"); el.id="global-spinner";
    el.innerHTML=`<div class="spinner-inner"><div class="spin-large"></div><p></p></div>`;
    document.body.appendChild(el);
  }
  el.querySelector("p").textContent = msg;
  el.style.display="flex";
}

function hideLoadingSpinner() {
  const el = document.getElementById("global-spinner");
  if (el) el.style.display="none";
}

// ── UTILITIES ─────────────────────────────────────────────────
function shuffleArray(arr) {
  for (let i=arr.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; }
  return arr;
}

// ── PARTICLES ─────────────────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W=canvas.width=window.innerWidth, H=canvas.height=window.innerHeight;
  const N = Math.min(48, Math.floor(W*H/18000));
  const pts = Array.from({length:N},()=>({
    x:Math.random()*W, y:Math.random()*H,
    r:Math.random()*1.4+.3,
    vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4,
    a:Math.random()*.5+.1
  }));
  function draw() {
    ctx.clearRect(0,0,W,H);
    for (let i=0;i<pts.length;i++) for (let j=i+1;j<pts.length;j++) {
      const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<110){ctx.beginPath();ctx.strokeStyle=`rgba(0,210,255,${.05*(1-d/110)})`;ctx.lineWidth=.5;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke();}
    }
    pts.forEach(p=>{
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(0,210,255,${p.a})`;ctx.fill();
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
    });
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener("resize",()=>{ W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight; });
}
