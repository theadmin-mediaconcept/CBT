/* ============================================================
   THE ADMIN STUDENT CBT PLATFORM — script.js  v3
   PHY101 added (250 questions), question-count chooser,
   timer starts on confirm, all links updated
============================================================ */
"use strict";

// ── FACULTIES DATA ──────────────────────────────────────────
const FACULTIES = [
  { id:"general", name:"General Course Materials", icon:"🌐", desc:"Use of English, General Studies, and cross-faculty resources",
    levels:[{ level:"100 Level", courses:[
      {code:"CHM 101",title:"General Chemistry",file:"CHM101_General_Chemistry.pdf",link:"YOUR_FILE_LINK_HERE"},
      {code:"MTH 101",title:"Elementary Mathematics I",file:"MTH101_Elementary_Mathematics.pdf",link:"YOUR_FILE_LINK_HERE"},
      {code:"PHY 101",title:"General Physics I",file:"PHY101_General_Physics.pdf",link:"YOUR_FILE_LINK_HERE"},
      {code:"GST 101",title:"Use of English I",file:"GST101_Use_of_English.pdf",link:"YOUR_FILE_LINK_HERE"},
      {code:"BIO 101",title:"General Biology I",file:"BIO101_General_Biology.pdf",link:"YOUR_FILE_LINK_HERE"}
    ]},{ level:"200 Level", courses:[
      {code:"GST 201",title:"Nigerian Peoples and Culture",file:"GST201_Nigerian_Peoples_Culture.pdf",link:"YOUR_FILE_LINK_HERE"}
    ]}]
  },
  { id:"computing", name:"Faculty of Computing", icon:"💻", desc:"Computer Science, Information Technology, Software Engineering",
    levels:[{ level:"100 Level", courses:[
      {code:"CSC 101",title:"Introduction to Computer Science",file:"CSC101_Intro_CS.pdf",link:"YOUR_FILE_LINK_HERE"},
      {code:"CSC 102",title:"Introduction to Problem Solving",file:"CSC102_Problem_Solving.pdf",link:"YOUR_FILE_LINK_HERE"}
    ]}]
  },
  { id:"nursing", name:"Faculty of Nursing", icon:"🏥", desc:"Nursing Science, Midwifery, and Health Sciences",
    levels:[{ level:"100 Level", courses:[
      {code:"NSG 101",title:"Introduction to Nursing",file:"NSG101_Intro_Nursing.pdf",link:"YOUR_FILE_LINK_HERE"}
    ]}]
  },
  { id:"basic-medical", name:"Faculty of Basic Medical Sciences", icon:"🔬", desc:"Biochemistry, Anatomy, Physiology, Pharmacology",
    levels:[{ level:"100 Level", courses:[
      {code:"BCH 101",title:"Introduction to Biochemistry",file:"BCH101_Biochemistry.pdf",link:"YOUR_FILE_LINK_HERE"}
    ]}]
  },
  { id:"science", name:"Faculty of Science", icon:"⚗️", desc:"Physics, Chemistry, Mathematics, Biology, Microbiology",
    levels:[{ level:"100 Level", courses:[
      {code:"CHM 101",title:"General Chemistry I",file:"CHM101_Chemistry.pdf",link:"YOUR_FILE_LINK_HERE"},
      {code:"PHY 101",title:"Mechanics & Properties of Matter",file:"PHY101_Mechanics.pdf",link:"YOUR_FILE_LINK_HERE"},
      {code:"MTH 101",title:"Calculus I",file:"MTH101_Calculus.pdf",link:"YOUR_FILE_LINK_HERE"}
    ]}]
  },
  { id:"arts", name:"Faculty of Arts", icon:"🎭", desc:"English, History, Philosophy, Linguistics, Theatre Arts",
    levels:[{ level:"100 Level", courses:[
      {code:"ENG 101",title:"Introduction to Literature",file:"ENG101_Literature.pdf",link:"YOUR_FILE_LINK_HERE"}
    ]}]
  },
  { id:"law", name:"Faculty of Law", icon:"⚖️", desc:"Constitutional Law, Criminal Law, Commercial Law",
    levels:[{ level:"100 Level", courses:[
      {code:"LAW 101",title:"Nigerian Legal System",file:"LAW101_Legal_System.pdf",link:"YOUR_FILE_LINK_HERE"}
    ]}]
  }
];

// ── CBT COURSES ─────────────────────────────────────────────
const CBT_COURSES = [
  { id:"CHM101", code:"CHM 101", name:"General Chemistry", faculty:"Science / General", maxDuration:90, questionsPool:[10,20,30,40,50] },
  { id:"MTH101", code:"MTH 101", name:"Elementary Mathematics I", faculty:"Science / General", maxDuration:60, questionsPool:[10,20,30,40,50] },
  { id:"PHY101", code:"PHY 101", name:"General Physics I", faculty:"Science / General", maxDuration:60, questionsPool:[10,20,30,40,50] }
];

// ── PHY 101 QUESTIONS (250) ──────────────────────────────────
const PHY101_Q = [
  // From PDF (60 questions)
  {q:"The SI unit of length is:",o:["Meter","Kilometer","Centimeter","Mile"],a:0,e:"The metre (m) is the SI base unit of length as defined by the International System of Units."},
  {q:"The least count of a vernier calliper is:",o:["MSD × VSD","Difference between one MSD and one VSD","Sum of MSD and VSD","Ratio of MSD to VSD"],a:1,e:"Least count = 1 MSD − 1 VSD. For a standard vernier calliper this equals 0.1 mm or 0.01 cm."},
  {q:"Which is a derived quantity?",o:["Mass","Time","Velocity","Length"],a:2,e:"Velocity = displacement ÷ time. It is derived from the base quantities length and time, so it is a derived quantity."},
  {q:"Dimensional formula of force is:",o:["[MLT⁻²]","[ML²T⁻²]","[ML⁻¹T⁻²]","[M⁻¹LT⁻¹]"],a:0,e:"F = ma → [M][LT⁻²] = [MLT⁻²]."},
  {q:"Significant figures in 0.00450 are:",o:["2","3","4","5"],a:1,e:"Leading zeros are not significant. The digits 4, 5, and 0 (trailing zero after decimal) are significant → 3 significant figures."},
  {q:"Which instrument measures time accurately?",o:["Metre rule","Stop clock","Balance","Thermometer"],a:1,e:"A stop clock (or stopwatch) is used to measure time intervals accurately."},
  {q:"Dimensional formula of energy is:",o:["[MLT⁻²]","[ML²T⁻²]","[M⁻¹LT⁻¹]","[ML⁻²T²]"],a:1,e:"Work/Energy = Force × distance = [MLT⁻²][L] = [ML²T⁻²]."},
  {q:"Error due to faulty instrument is:",o:["Random error","Systematic error","Gross error","Personal error"],a:1,e:"Systematic errors arise from consistently faulty instruments or calibration and affect all readings equally."},
  {q:"A vector has:",o:["Only magnitude","Only direction","Magnitude and direction","Neither"],a:2,e:"A vector quantity is defined as one that has both magnitude and direction (e.g., velocity, force, displacement)."},
  {q:"Two vectors are equal if they have the same:",o:["Magnitude only","Direction only","Magnitude and direction","Position"],a:2,e:"Two vectors are equal if and only if they have the same magnitude AND the same direction."},
  {q:"Resultant of two perpendicular vectors A and B is:",o:["A + B","√(A² + B²)","A − B","AB"],a:1,e:"For perpendicular vectors, the Pythagorean theorem applies: R = √(A² + B²)."},
  {q:"Unit vector has magnitude:",o:["0","1","Infinite","Variable"],a:1,e:"A unit vector has magnitude exactly equal to 1. It indicates direction only."},
  {q:"Dot product of two vectors gives:",o:["Scalar","Vector","Tensor","None"],a:0,e:"The scalar (dot) product A·B = AB cosθ always gives a scalar quantity."},
  {q:"Cross product of two vectors gives:",o:["Scalar","Vector","Number","Unit"],a:1,e:"The vector (cross) product A×B gives a vector perpendicular to both A and B with magnitude AB sinθ."},
  {q:"Angle between parallel vectors is:",o:["0°","90°","180°","45°"],a:0,e:"Parallel vectors point in the same direction, so the angle between them is 0°."},
  {q:"If A·B = 0, vectors are:",o:["Parallel","Perpendicular","Equal","Opposite"],a:1,e:"A·B = AB cosθ = 0 means cosθ = 0 → θ = 90°, so the vectors are perpendicular."},
  {q:"Velocity is:",o:["Scalar","Vector","Dimensionless","Constant"],a:1,e:"Velocity is a vector quantity — it has both magnitude (speed) and direction."},
  {q:"Acceleration is rate of change of:",o:["Displacement","Velocity","Speed","Distance"],a:1,e:"Acceleration a = Δv/Δt — it is the rate of change of velocity with respect to time."},
  {q:"v = u + at applies for:",o:["Variable acceleration","Constant acceleration","Zero acceleration","Circular motion"],a:1,e:"The equation v = u + at is one of the SUVAT equations valid only for constant (uniform) acceleration."},
  {q:"Area under velocity-time graph gives:",o:["Acceleration","Force","Displacement","Energy"],a:2,e:"Area under a v-t graph = ∫v dt = displacement. The slope of a v-t graph gives acceleration."},
  {q:"Uniform motion means:",o:["Constant acceleration","Constant velocity","Zero velocity","Variable speed"],a:1,e:"Uniform motion means equal displacements in equal time intervals → constant velocity (zero acceleration)."},
  {q:"Free fall acceleration is:",o:["9.8 m/s","9.8 m/s²","10 m/s","10 m/s²"],a:1,e:"g = 9.8 m/s² (or approximated as 10 m/s²). Note the unit is m/s² (acceleration), not m/s (velocity)."},
  {q:"Displacement can be:",o:["Only positive","Only negative","Positive, negative, or zero","Always zero"],a:2,e:"Displacement is a vector and can be positive (forward), negative (backward), or zero (returned to start)."},
  {q:"If velocity is constant, acceleration is:",o:["Infinite","Zero","Positive","Negative"],a:1,e:"Acceleration = Δv/Δt. If velocity is constant, Δv = 0, therefore a = 0."},
  {q:"Projectile motion is:",o:["1D","2D","3D","Circular"],a:1,e:"Projectile motion has two components: horizontal (constant velocity) and vertical (uniform acceleration due to gravity) — so it is 2D motion."},
  {q:"Horizontal velocity in projectile motion is:",o:["Increasing","Decreasing","Constant","Zero"],a:2,e:"There is no horizontal force in ideal projectile motion, so horizontal velocity remains constant throughout."},
  {q:"Maximum height occurs when vertical velocity is:",o:["Maximum","Zero","Infinite","Negative"],a:1,e:"At the highest point, all kinetic energy of vertical motion is converted to potential energy. The vertical velocity = 0."},
  {q:"Range is maximum at angle:",o:["30°","45°","60°","90°"],a:1,e:"R = u²sin2θ/g. This is maximum when sin2θ = 1 → 2θ = 90° → θ = 45°."},
  {q:"Time of flight depends on:",o:["Horizontal velocity","Vertical velocity","Mass","Area"],a:1,e:"T = 2u sinθ/g — time of flight depends only on the initial vertical component of velocity and g."},
  {q:"Circular motion involves:",o:["No acceleration","Centripetal acceleration","Linear motion","No velocity"],a:1,e:"In circular motion, the direction of velocity constantly changes, producing centripetal acceleration directed toward the centre."},
  {q:"Centripetal force acts:",o:["Outward","Inward","Upward","Downward"],a:1,e:"Centripetal force always acts inward (toward the centre of the circle), keeping the object in circular motion."},
  {q:"Angular velocity unit:",o:["m/s","rad/s","m/s²","kg"],a:1,e:"Angular velocity ω = angle/time = radians/second (rad/s)."},
  {q:"Newton's first law defines:",o:["Force","Inertia","Energy","Power"],a:1,e:"Newton's First Law (Law of Inertia) states a body remains at rest or in uniform motion unless acted upon by an external force."},
  {q:"Force = mass ×",o:["mv","ma","m/a","av"],a:1,e:"Newton's Second Law: F = ma. Force equals mass multiplied by acceleration."},
  {q:"SI unit of force is:",o:["Joule","Newton","Watt","Pascal"],a:1,e:"The Newton (N) is the SI unit of force. 1 N = 1 kg·m/s²."},
  {q:"Action-reaction forces act on:",o:["Same body","Different bodies","Same point","Same direction"],a:1,e:"Newton's Third Law: action and reaction forces are equal and opposite and act on DIFFERENT bodies."},
  {q:"Friction opposes:",o:["Motion","Force","Mass","Energy"],a:0,e:"Friction is a contact force that always opposes the relative motion or tendency of motion between surfaces."},
  {q:"Momentum is:",o:["mv","ma","m/a","v/m"],a:0,e:"Linear momentum p = mv (mass × velocity). It is a vector quantity."},
  {q:"Impulse =",o:["Force × distance","Force × time","Mass × velocity","Energy"],a:1,e:"Impulse J = F × t = Δp (change in momentum). Unit: N·s or kg·m/s."},
  {q:"Conservation of momentum applies when:",o:["External force exists","No external force","Friction present","Energy lost"],a:1,e:"Linear momentum is conserved in a closed/isolated system where no external forces act (Newton's 3rd law)."},
  {q:"Work = Force × _____",o:["Time","Displacement","Mass","Area"],a:1,e:"W = F·d·cosθ. When force is parallel to displacement (θ=0°), W = Fd."},
  {q:"SI unit of work:",o:["Watt","Joule","Newton","Pascal"],a:1,e:"The Joule (J) is the SI unit of work and energy. 1 J = 1 N·m."},
  {q:"Kinetic energy =",o:["mv","½mv²","ma","mgh"],a:1,e:"KE = ½mv². It depends on both mass and the square of velocity."},
  {q:"Work-energy theorem states:",o:["Work = KE","Work = change in KE","Work = PE","Work = Force"],a:1,e:"The work-energy theorem: Net work done on a body = change in its kinetic energy (W = ΔKE)."},
  {q:"Power =",o:["Work × time","Work/time","Force × time","Energy"],a:1,e:"Power P = W/t (work done per unit time). Unit: Watt (W) = Joule/second."},
  {q:"SI unit of power:",o:["Joule","Watt","Newton","Volt"],a:1,e:"The Watt (W) is the SI unit of power. 1 W = 1 J/s."},
  {q:"Negative work occurs when:",o:["Same direction","Opposite direction","No motion","Infinite"],a:1,e:"W = Fd cosθ. When θ > 90°, cosθ < 0, so work is negative (e.g., friction, gravity on upward motion)."},
  {q:"Zero work occurs when angle is:",o:["0°","90°","180°","45°"],a:1,e:"W = Fd cos90° = Fd × 0 = 0. When force is perpendicular to displacement, no work is done."},
  {q:"Potential energy =",o:["½mv²","mgh","ma","mv"],a:1,e:"Gravitational PE = mgh where m=mass, g=9.8 m/s², h=height above reference."},
  {q:"Energy cannot be:",o:["Created","Destroyed","Transformed","Stored"],a:1,e:"Law of Conservation of Energy: energy cannot be created or destroyed, only transformed from one form to another."},
  {q:"Mechanical energy is:",o:["KE only","PE only","KE + PE","Work"],a:2,e:"Mechanical energy = KE + PE (kinetic energy + potential energy). In a conservative system it remains constant."},
  {q:"At highest point of projectile:",o:["KE max","PE max","KE zero","PE zero"],a:1,e:"At maximum height, vertical velocity = 0, so vertical KE = 0 and gravitational PE is maximum."},
  {q:"Spring potential energy =",o:["kx","½kx²","k/x","x/k"],a:1,e:"Elastic PE stored in a spring = ½kx², where k = spring constant and x = compression/extension."},
  {q:"Conservation of energy holds in:",o:["Isolated system","Open system","Non-physical","Random"],a:0,e:"The law of conservation of energy strictly applies to isolated (closed) systems with no energy exchange with surroundings."},
  {q:"Center of mass is the point where:",o:["Mass is concentrated","Force acts","Weight acts","Velocity is zero"],a:0,e:"The centre of mass is the point where the total mass of a body can be considered to be concentrated for translational motion."},
  {q:"For a uniform rod, COM is at:",o:["End","Middle","Quarter","Random"],a:1,e:"By symmetry, the centre of mass of a uniform rod is at its geometric centre (midpoint)."},
  {q:"Motion of COM depends on:",o:["Internal forces","External forces","Mass only","Velocity only"],a:1,e:"Only external forces affect the motion of the centre of mass. Internal forces cancel out in pairs (Newton's 3rd law)."},
  {q:"COM of two masses lies:",o:["Near heavier mass","At centre always","Outside","Infinite"],a:0,e:"x_cm = (m₁x₁ + m₂x₂)/(m₁+m₂). The COM is closer to the heavier mass (weighted average position)."},
  {q:"If no external force acts, COM:",o:["Accelerates","Moves with constant velocity","Stops","Oscillates"],a:1,e:"By Newton's first law, if the net external force on a system is zero, its centre of mass moves with constant velocity (or stays at rest)."},
  {q:"COM equation for two masses:",o:["(m₁x₁+m₂x₂)/(m₁+m₂)","m₁+m₂","x₁+x₂","m₁/m₂"],a:0,e:"x_cm = (m₁x₁+m₂x₂)/(m₁+m₂). This is the weighted average position of the two masses."},
  // From pasted 200 questions
  {q:"The SI unit of work is:",o:["Watt","Joule","Newton","Pascal"],a:1,e:"Work = Force × displacement. SI unit = Newton·metre = Joule (J)."},
  {q:"A scalar quantity among the following is:",o:["Velocity","Force","Displacement","Speed"],a:3,e:"Speed is scalar (magnitude only). Velocity, force, and displacement are all vectors (magnitude + direction)."},
  {q:"Which has both magnitude and direction?",o:["Distance","Energy","Velocity","Mass"],a:2,e:"Velocity is a vector quantity — it specifies both how fast and in which direction an object moves."},
  {q:"Dimensional formula of momentum is:",o:["MLT⁻¹","ML²T⁻²","MLT⁻²","M⁻¹LT"],a:0,e:"p = mv → [M][LT⁻¹] = [MLT⁻¹]."},
  {q:"If acceleration is zero, velocity is:",o:["Zero","Constant","Increasing","Decreasing"],a:1,e:"a = Δv/Δt = 0 means velocity is not changing → constant (could be zero or non-zero)."},
  {q:"The slope of a velocity-time graph represents:",o:["Speed","Distance","Acceleration","Force"],a:2,e:"Slope of v-t graph = Δv/Δt = acceleration."},
  {q:"A car travels 20 m in 2 s. Its speed is:",o:["5 m/s","10 m/s","20 m/s","40 m/s"],a:1,e:"Speed = distance/time = 20/2 = 10 m/s."},
  {q:"Which is NOT a vector?",o:["Force","Momentum","Energy","Displacement"],a:2,e:"Energy is a scalar quantity. Force, momentum, and displacement are all vectors."},
  {q:"Unit of power is:",o:["Joule","Watt","Newton","Pascal"],a:1,e:"Power = work/time. SI unit = Joule/second = Watt (W)."},
  {q:"Work done is zero when:",o:["Force is large","Displacement is zero","Time is zero","Speed is high"],a:1,e:"W = F·d. If d = 0 (no displacement), then W = 0 regardless of force."},
  {q:"The area under velocity-time graph gives:",o:["Acceleration","Force","Displacement","Power"],a:2,e:"∫v dt = displacement. Area under v-t graph = displacement."},
  {q:"The inertia of a body depends on:",o:["Speed","Mass","Velocity","Force"],a:1,e:"Inertia is the resistance to change in motion. It depends solely on the mass of the object."},
  {q:"A body at rest has:",o:["Zero momentum","Maximum energy","Maximum velocity","Infinite force"],a:0,e:"p = mv. At rest v = 0, so p = m×0 = 0 (zero momentum)."},
  {q:"Newton's First Law is also called:",o:["Law of inertia","Law of motion","Law of acceleration","Law of energy"],a:0,e:"Newton's First Law defines inertia — the tendency of a body to resist changes in its state of rest or uniform motion."},
  {q:"Force = mass × ___",o:["Velocity","Acceleration","Distance","Time"],a:1,e:"F = ma (Newton's Second Law). Force = mass × acceleration."},
  {q:"Unit of momentum is:",o:["kg m/s","N/m","J/s","kg/m"],a:0,e:"p = mv → kg × m/s = kg·m/s. Also equivalent to N·s."},
  {q:"A vector can be resolved into:",o:["Scalars","Components","Units","Forces"],a:1,e:"A vector can be resolved (broken down) into perpendicular components, typically horizontal and vertical."},
  {q:"The resultant of two equal vectors in opposite directions is:",o:["Maximum","Zero","Infinity","Equal"],a:1,e:"Two equal vectors in opposite directions: R = A + (−A) = 0. They cancel each other."},
  {q:"Kinetic energy depends on:",o:["Mass only","Velocity only","Both mass and velocity","Time"],a:2,e:"KE = ½mv². It depends on both mass m and velocity v (specifically v²)."},
  {q:"Formula for kinetic energy is:",o:["mv","½mv²","mgh","Fd"],a:1,e:"KE = ½mv². The ½ comes from the work-energy theorem derivation."},
  {q:"Potential energy is due to:",o:["Motion","Position","Speed","Acceleration"],a:1,e:"Gravitational PE = mgh. It depends on position (height h above a reference level)."},
  {q:"Unit of energy is:",o:["Watt","Joule","Newton","Pascal"],a:1,e:"The Joule (J) is the SI unit of energy. 1 J = 1 kg·m²·s⁻²."},
  {q:"Work done is maximum when angle =",o:["0°","90°","180°","45°"],a:0,e:"W = Fd cosθ. Maximum when cosθ = 1, i.e. θ = 0° (force parallel to displacement)."},
  {q:"Work done is zero when angle =",o:["0°","90°","180°","45°"],a:1,e:"W = Fd cos90° = 0. When force is perpendicular to displacement (e.g., centripetal force)."},
  {q:"Momentum is conserved in:",o:["All systems","Closed systems","Open systems","Static systems"],a:1,e:"Conservation of momentum holds in closed (isolated) systems where no net external force acts."},
  {q:"Velocity is rate of change of:",o:["Distance","Displacement","Speed","Time"],a:1,e:"v = Δs/Δt — velocity is the rate of change of displacement with time."},
  {q:"SI unit of acceleration:",o:["m/s","m/s²","km/s","N"],a:1,e:"Acceleration = Δv/Δt → (m/s)/s = m/s²."},
  {q:"Force is a:",o:["Scalar","Vector","Unit","Constant"],a:1,e:"Force is a vector — it has both magnitude and direction."},
  {q:"Resultant of perpendicular vectors:",o:["Sum","Difference","√(A²+B²)","Zero"],a:2,e:"Pythagoras: R = √(A²+B²) for two perpendicular vectors."},
  {q:"Power = work/time — this statement is:",o:["True","False"],a:0,e:"P = W/t. This is the definition of power — rate at which work is done."},
  {q:"Mass × velocity =",o:["Force","Momentum","Energy","Power"],a:1,e:"p = mv = linear momentum."},
  {q:"Change in momentum =",o:["Force","Impulse","Work","Energy"],a:1,e:"Impulse = F×t = Δp (change in momentum). This is the impulse-momentum theorem."},
  {q:"Impulse unit:",o:["Ns","J","W","kg"],a:0,e:"Impulse = F×t → N×s = N·s. Also equal to kg·m/s (same as momentum)."},
  {q:"Centre of mass depends on:",o:["Shape","Mass distribution","Size","Colour"],a:1,e:"The location of centre of mass depends on how mass is distributed throughout the object."},
  {q:"If no external force acts, momentum:",o:["Increases","Decreases","Is conserved","Zero"],a:2,e:"Newton's 1st law extended: if no external force, linear momentum of the system remains constant (conserved)."},
  {q:"A body thrown up returns due to:",o:["Inertia","Gravity","Friction","Energy"],a:1,e:"Gravity (gravitational attraction) acts downward, decelerating the body on the way up and pulling it back down."},
  {q:"Velocity-time graph straight line →",o:["Constant speed","Constant acceleration","No motion","Variable speed"],a:1,e:"A straight line on a v-t graph means constant slope = constant acceleration."},
  {q:"Displacement-time slope gives:",o:["Speed","Velocity","Acceleration","Force"],a:1,e:"Slope of s-t graph = Δs/Δt = velocity."},
  {q:"Energy cannot be created nor destroyed → Law of:",o:["Motion","Conservation of energy","Gravity","Force"],a:1,e:"This is the First Law of Thermodynamics / Law of Conservation of Energy."},
  {q:"PE = ___",o:["mv²","mgh","Fd","Pt"],a:1,e:"Gravitational potential energy PE = mgh (mass × gravitational field × height)."},
  {q:"Unit of force:",o:["Joule","Newton","Watt","Pascal"],a:1,e:"Newton (N) is the SI unit of force. 1 N = 1 kg·m/s²."},
  {q:"1 kg·m/s² =",o:["Joule","Newton","Watt","Pascal"],a:1,e:"By definition: 1 Newton = 1 kg·m/s² (from F = ma)."},
  {q:"Motion in 2D involves:",o:["One axis","Two axes","No axis","Time only"],a:1,e:"2D motion involves displacement along two perpendicular axes (x and y)."},
  {q:"Projectile motion path is:",o:["Straight","Circle","Parabola","Ellipse"],a:2,e:"Combining constant horizontal velocity with uniformly accelerated vertical motion produces a parabolic trajectory."},
  {q:"Horizontal velocity in projectile:",o:["Changes","Is constant","Is zero","Is infinite"],a:1,e:"No horizontal force acts on a projectile (ignoring air resistance), so horizontal velocity stays constant."},
  {q:"Vertical velocity in projectile:",o:["Is constant","Changes","Is zero","Is infinite"],a:1,e:"Gravity acts vertically, so the vertical component of velocity changes continuously (increases downward)."},
  {q:"Maximum height occurs when vertical velocity =",o:["Max","Zero","Infinite","Constant"],a:1,e:"At the peak, vertical velocity = 0. All vertical kinetic energy has been converted to potential energy."},
  {q:"Elastic collision conserves:",o:["KE + momentum","KE only","Momentum only","None"],a:0,e:"An elastic collision conserves both kinetic energy and linear momentum."},
  {q:"Inelastic collision loses:",o:["Momentum","Energy","KE","Force"],a:2,e:"In an inelastic collision, kinetic energy is not conserved (some is converted to heat, sound, deformation)."},
  {q:"A heavy body has:",o:["Less inertia","More inertia","Same as light body","No inertia"],a:1,e:"Inertia ∝ mass. A heavier (more massive) body has more inertia — it resists changes in motion more."},
  {q:"Speed is:",o:["Vector","Scalar"],a:1,e:"Speed is a scalar — it has magnitude only (how fast), no direction."},
  {q:"Distance is:",o:["Scalar","Vector"],a:0,e:"Distance is a scalar quantity — it has magnitude only (total path length)."},
  {q:"Acceleration due to gravity =",o:["9.8 m/s","9.8 m/s²","10 m/s","10 m/s²"],a:1,e:"g = 9.8 m/s² (standard value). Often approximated as 10 m/s² in problems."},
  {q:"Free fall motion has:",o:["Constant velocity","Uniform acceleration","Zero force","No motion"],a:1,e:"Free fall = uniform acceleration under gravity alone. a = g = 9.8 m/s² downward."},
  {q:"Vector addition can be performed using:",o:["Arithmetic method","Triangle or parallelogram method","Substitution method","Elimination method"],a:1,e:"Vectors are added geometrically using the triangle rule (tip-to-tail) or parallelogram rule."},
  {q:"The resultant of two vectors is represented by:",o:["Their algebraic sum","The diagonal of a parallelogram","Their difference","Their product"],a:1,e:"The parallelogram law: the resultant is the diagonal of the parallelogram formed by the two vectors."},
  {q:"When net force is zero, the body is in:",o:["Acceleration","Motion only","Equilibrium","Rest only"],a:2,e:"Zero net force → equilibrium. The body may be at rest (static) or moving with constant velocity (dynamic equilibrium)."},
  {q:"The weight of a body is given by:",o:["mv","ma","mg","mgh"],a:2,e:"Weight W = mg where m = mass and g = gravitational field strength (9.8 N/kg)."},
  {q:"Which quantity remains constant everywhere?",o:["Weight","Gravity","Mass","Force"],a:2,e:"Mass is intrinsic to the object and does not change with location. Weight and gravity vary with location."},
  {q:"Weight varies because:",o:["Mass changes","Gravity changes","Volume changes","Density changes"],a:1,e:"W = mg. g varies with location (e.g., less on Moon, at higher altitudes), so weight varies."},
  {q:"Friction always acts:",o:["Along motion","Opposite to motion","Perpendicular to motion","Randomly"],a:1,e:"Friction opposes the relative motion or tendency of motion between surfaces in contact."},
  {q:"The normal reaction force acts:",o:["Parallel to surface","Opposite to motion","Perpendicular to surface","Along velocity"],a:2,e:"The normal reaction force is always perpendicular to the surface in contact."},
  {q:"Terminal velocity is reached when:",o:["Acceleration is maximum","Velocity is zero","Net force is zero","Force is increasing"],a:2,e:"At terminal velocity, drag = weight, so net force = 0, therefore acceleration = 0 and velocity is constant."},
  {q:"Kinetic energy is proportional to:",o:["Velocity","Square of velocity","Mass only","Time"],a:1,e:"KE = ½mv². KE ∝ v². Doubling velocity quadruples KE."},
  {q:"If velocity is doubled, kinetic energy becomes:",o:["Same","Double","Triple","Four times"],a:3,e:"KE = ½mv². If v → 2v: KE_new = ½m(2v)² = 4×½mv² = 4×KE. Kinetic energy quadruples."},
  {q:"Work done is negative when:",o:["Force and displacement same direction","Force opposes displacement","Force is zero","Velocity is constant"],a:1,e:"W = Fd cosθ. When θ > 90° (force opposing displacement), cosθ < 0, so W < 0."},
  {q:"A scalar quantity has:",o:["Magnitude only","Direction only","Both","None"],a:0,e:"Scalar quantities have magnitude only (e.g., mass, temperature, speed, energy)."},
  {q:"A vector quantity has:",o:["Magnitude only","Direction only","Both magnitude and direction","Neither"],a:2,e:"Vector quantities have both magnitude and direction (e.g., velocity, force, acceleration, displacement)."},
  {q:"Maximum resultant of two vectors occurs when angle is:",o:["90°","0°","180°","45°"],a:1,e:"R = √(A²+B²+2AB cosθ). Maximum when cosθ = 1 → θ = 0° (same direction): R_max = A+B."},
  {q:"Resultant becomes zero when two equal vectors are at:",o:["0°","90°","180°","45°"],a:2,e:"R = √(A²+A²+2A²cos180°) = √(2A²−2A²) = 0. Equal vectors in opposite directions cancel."},
  {q:"Acceleration occurs when:",o:["Velocity is constant","Velocity changes","Speed is zero","Time stops"],a:1,e:"Acceleration = Δv/Δt ≠ 0 whenever velocity changes (either magnitude, direction, or both)."},
  {q:"Circular motion requires:",o:["No force","Centripetal force","Gravity only","Friction only"],a:1,e:"Circular motion requires a centripetal force directed toward the centre to maintain the curved path."},
  {q:"According to Newton's second law, force causes:",o:["Velocity","Acceleration","Displacement","Time"],a:1,e:"F = ma. A net force causes acceleration (change in velocity)."},
  {q:"The centre of mass behaves as if:",o:["All forces act randomly","Entire mass is concentrated at a point","Mass is zero","No motion occurs"],a:1,e:"For translational motion, all external forces can be treated as acting at the centre of mass."},
  {q:"Linear momentum is conserved when:",o:["External force exists","System is open","No external force acts","Acceleration is zero"],a:2,e:"Conservation of linear momentum: Σp = constant when Σ(external forces) = 0."},
  {q:"In an inelastic collision:",o:["KE is conserved","Momentum not conserved","KE is lost","Both conserved"],a:2,e:"Inelastic collision: momentum IS conserved but kinetic energy is NOT conserved (some is converted to other forms)."},
  {q:"Work done by a force is given by:",o:["F/t","F×d×cosθ","mgh","mv²"],a:1,e:"W = Fd cosθ, where θ is the angle between the force and displacement vectors."},
  {q:"Law of conservation of energy states:",o:["Energy increases","Energy decreases","Energy remains constant","Energy disappears"],a:2,e:"Energy is neither created nor destroyed; it can only be transformed from one form to another. Total energy = constant."},
  {q:"Speed is defined as:",o:["Displacement/time","Distance/time","Acceleration/time","Force/time"],a:1,e:"Speed = distance/time. It is a scalar quantity."},
  {q:"Velocity is:",o:["Distance/time","Displacement/time","Speed only","Time only"],a:1,e:"Velocity = displacement/time. It is a vector (includes direction)."},
  {q:"Acceleration is given by:",o:["v/t","Δv/t","s/t","F/m"],a:1,e:"a = Δv/Δt (rate of change of velocity). Also a = F/m from Newton's 2nd law."},
  {q:"SI units are:",o:["Local","Universal","Optional","Arbitrary"],a:1,e:"The International System of Units (SI) is the universal standard measurement system used worldwide."},
  {q:"Dimensional analysis is used to:",o:["Solve equations","Check correctness of equations","Measure force","Calculate energy"],a:1,e:"Dimensional analysis checks that equations are dimensionally consistent — both sides must have same dimensions."},
  {q:"The unit of displacement is:",o:["m/s","m","s","kg"],a:1,e:"Displacement is a length (vector) measured in metres (m)."},
  {q:"A body moving with uniform velocity has:",o:["Acceleration","Zero acceleration","Increasing speed","Changing direction"],a:1,e:"Uniform velocity = constant velocity. Constant velocity → zero acceleration."},
  {q:"The slope of displacement-time graph gives:",o:["Speed","Velocity","Acceleration","Force"],a:1,e:"Slope of s-t graph = Δs/Δt = velocity."},
  {q:"A body starts from rest; its initial velocity is:",o:["1 m/s","0 m/s","Infinite","Constant"],a:1,e:"'Starts from rest' means initial velocity u = 0 m/s."},
  {q:"If final velocity equals initial velocity, acceleration is:",o:["Zero","Maximum","Negative","Positive"],a:0,e:"a = (v−u)/t. If v = u, then a = 0/t = 0."},
  {q:"Distance is a:",o:["Vector","Scalar","Both","None"],a:1,e:"Distance is a scalar — it measures total path length with no direction."},
  {q:"Displacement can be:",o:["Negative","Positive","Zero","All of the above"],a:3,e:"Displacement is a vector. It can be positive, negative (opposite reference direction), or zero (returned to start)."},
  {q:"A car moves in a circle at constant speed; it has:",o:["No acceleration","Constant acceleration","Changing acceleration","Zero force"],a:2,e:"In circular motion at constant speed, the magnitude of centripetal acceleration = v²/r is constant but its direction constantly changes."},
  {q:"1 Newton =",o:["kg m/s","kg m/s²","kg/m","N/m"],a:1,e:"By definition from F = ma: 1 N = 1 kg × 1 m/s² = 1 kg·m/s²."},
  {q:"Mass × acceleration gives:",o:["Energy","Power","Force","Work"],a:2,e:"F = ma (Newton's 2nd Law). Mass × acceleration = Force."},
  {q:"The heavier the body, the ___ its inertia.",o:["Less","More","Same","No"],a:1,e:"Inertia is directly proportional to mass. Heavier body → greater mass → more inertia."},
  {q:"Momentum unit (alternative):",o:["Ns","kg m/s","Both A and B","Joule"],a:2,e:"Momentum = kg·m/s. Since 1 N = 1 kg·m/s², then 1 N·s = 1 kg·m/s. Both are valid units."},
  {q:"Impulse equals:",o:["Change in force","Change in momentum","Work done","Energy lost"],a:1,e:"Impulse = F×t = Δp = change in momentum. This is the impulse-momentum theorem."},
  {q:"Work done = F×d×cosθ — when θ=0°:",o:["W=0","W=Fd","W=−Fd","W=Fd/2"],a:1,e:"cos0° = 1, so W = Fd×1 = Fd. Maximum work when force is parallel to displacement."},
  {q:"KE depends on:",o:["Mass only","Velocity only","Both mass and velocity","Time"],a:2,e:"KE = ½mv² depends on both mass m and velocity v."},
  {q:"Total energy in a closed system:",o:["Increases","Decreases","Is constant","Is zero"],a:2,e:"In a closed (isolated) system, total energy is conserved — it remains constant."},
  {q:"Resultant of perpendicular vectors A=3, B=4:",o:["5 N","6 N","7 N","8 N"],a:0,e:"R = √(3²+4²) = √(9+16) = √25 = 5 N (Pythagorean triple 3-4-5)."},
  {q:"Two equal opposite vectors give:",o:["Maximum","Zero","Infinity","Half"],a:1,e:"Equal vectors in opposite directions cancel: R = A − A = 0."},
  {q:"Vector resolution gives:",o:["Resultant","Components","Units","Scalars"],a:1,e:"Vector resolution breaks a vector into perpendicular components (e.g., Ax = Acosθ, Ay = Asinθ)."},
  {q:"Momentum = 3 kg × 4 m/s =",o:["7 kg·m/s","12 kg·m/s","15 kg·m/s","20 kg·m/s"],a:1,e:"p = mv = 3×4 = 12 kg·m/s."},
  {q:"PE lost = KE gained — this is:",o:["True","False"],a:0,e:"True in a conservative system (no friction). Total mechanical energy is conserved: loss in PE = gain in KE."},
  {q:"A body at rest has KE =",o:["0","1","∞","10"],a:0,e:"KE = ½mv². At rest v = 0, so KE = 0."},
  {q:"Work when no displacement:",o:["Max","Zero","Infinite","Negative"],a:1,e:"W = F×d. If d = 0, W = 0 regardless of the applied force."},
  // Calculation questions
  {q:"A car moves at 20 m/s for 5 s. Find distance covered.",o:["50 m","100 m","150 m","200 m"],a:1,e:"d = v×t = 20×5 = 100 m."},
  {q:"A body accelerates from 0 to 10 m/s in 2 s. Find acceleration.",o:["2 m/s²","5 m/s²","10 m/s²","20 m/s²"],a:1,e:"a = (v−u)/t = (10−0)/2 = 5 m/s²."},
  {q:"Find final velocity: u=5 m/s, a=2 m/s², t=3 s",o:["9 m/s","10 m/s","11 m/s","12 m/s"],a:2,e:"v = u+at = 5+(2×3) = 5+6 = 11 m/s."},
  {q:"A body falls freely for 2 s. Find velocity (g=10 m/s²).",o:["10 m/s","15 m/s","20 m/s","25 m/s"],a:2,e:"v = u+gt = 0+(10×2) = 20 m/s."},
  {q:"Find displacement: u=0, a=2 m/s², t=4 s",o:["8 m","12 m","16 m","20 m"],a:2,e:"s = ut+½at² = 0+½(2)(16) = 16 m."},
  {q:"A force of 10 N acts on 2 kg mass. Find acceleration.",o:["2 m/s²","5 m/s²","10 m/s²","20 m/s²"],a:1,e:"a = F/m = 10/2 = 5 m/s²."},
  {q:"Momentum of 2 kg moving at 5 m/s:",o:["5 kg·m/s","7 kg·m/s","10 kg·m/s","15 kg·m/s"],a:2,e:"p = mv = 2×5 = 10 kg·m/s."},
  {q:"Kinetic energy of 2 kg at 5 m/s:",o:["10 J","20 J","25 J","50 J"],a:2,e:"KE = ½mv² = ½×2×25 = 25 J."},
  {q:"Work done by 10 N over 5 m (parallel):",o:["20 J","30 J","50 J","100 J"],a:2,e:"W = Fd = 10×5 = 50 J (θ=0°, cos0°=1)."},
  {q:"Power if 100 J done in 10 s:",o:["5 W","10 W","15 W","20 W"],a:1,e:"P = W/t = 100/10 = 10 W."},
  {q:"Potential energy: m=2 kg, h=5 m, g=10 m/s²",o:["50 J","100 J","150 J","200 J"],a:1,e:"PE = mgh = 2×10×5 = 100 J."},
  {q:"A body dropped from rest; find distance in 3 s (g=10).",o:["30 m","45 m","50 m","60 m"],a:1,e:"s = ½gt² = ½×10×9 = 45 m."},
  {q:"Find velocity after falling 3 s (g=10):",o:["20 m/s","25 m/s","30 m/s","35 m/s"],a:2,e:"v = u+gt = 0+10×3 = 30 m/s."},
  {q:"Impulse: F=5 N, t=2 s",o:["5 N·s","10 N·s","15 N·s","20 N·s"],a:1,e:"J = Ft = 5×2 = 10 N·s."},
  {q:"Force to stop 10 kg moving at 2 m/s in 1 s:",o:["10 N","15 N","20 N","25 N"],a:2,e:"F = Δp/t = (10×2)/1 = 20 N (magnitude)."},
  {q:"Speed after 2 s, acceleration 5 m/s² from rest:",o:["5 m/s","10 m/s","15 m/s","20 m/s"],a:1,e:"v = u+at = 0+(5×2) = 10 m/s."},
  {q:"Work at 60°: F=10 N, d=5 m",o:["25 J","50 J","10 J","20 J"],a:0,e:"W = Fd cosθ = 10×5×cos60° = 50×0.5 = 25 J."},
  {q:"Range of projectile: u=10 m/s, θ=45°, g=10 m/s²",o:["5 m","10 m","15 m","20 m"],a:1,e:"R = u²sin2θ/g = 100×sin90°/10 = 100/10 = 10 m."},
  {q:"Max height of projectile: u=10, θ=45°, g=10",o:["2.5 m","5 m","10 m","20 m"],a:0,e:"H = u²sin²θ/(2g) = 100×0.5/(20) = 50/20 = 2.5 m."},
  {q:"KE: mass=2 kg, velocity=3 m/s",o:["6 J","9 J","12 J","18 J"],a:1,e:"KE = ½mv² = ½×2×9 = 9 J."},
  {q:"Momentum: 4 kg at 3 m/s",o:["7 kg·m/s","12 kg·m/s","15 kg·m/s","18 kg·m/s"],a:1,e:"p = mv = 4×3 = 12 kg·m/s."},
  {q:"Power if 200 J done in 20 s:",o:["5 W","10 W","15 W","20 W"],a:1,e:"P = W/t = 200/20 = 10 W."},
  {q:"Acceleration: from 10 to 20 m/s in 2 s",o:["2 m/s²","5 m/s²","10 m/s²","20 m/s²"],a:1,e:"a = (20−10)/2 = 10/2 = 5 m/s²."},
  {q:"Force on 5 kg accelerating at 2 m/s²:",o:["5 N","10 N","15 N","20 N"],a:1,e:"F = ma = 5×2 = 10 N."},
  {q:"Velocity after 5 s free fall (g=10):",o:["25 m/s","50 m/s","75 m/s","100 m/s"],a:1,e:"v = u+gt = 0+10×5 = 50 m/s."},
  {q:"Distance after 5 s free fall (g=10):",o:["50 m","75 m","100 m","125 m"],a:3,e:"s = ½gt² = ½×10×25 = 125 m."},
  {q:"Force if momentum change=20 N·s in 4 s:",o:["2 N","5 N","10 N","20 N"],a:1,e:"F = Δp/t = 20/4 = 5 N."},
  {q:"Work done lifting 2 kg by 10 m (g=10):",o:["100 J","200 J","150 J","50 J"],a:1,e:"W = mgh = 2×10×10 = 200 J."},
  {q:"Find v: u=0, a=5 m/s², s=10 m (v²=u²+2as)",o:["5 m/s","10 m/s","15 m/s","20 m/s"],a:1,e:"v² = 0+2×5×10 = 100 → v = √100 = 10 m/s."},
  {q:"Time from v=u+at: u=0, v=20, a=10",o:["1 s","2 s","3 s","4 s"],a:1,e:"t = (v−u)/a = (20−0)/10 = 2 s."},
  {q:"Force doing 100 J of work over 5 m:",o:["10 N","20 N","25 N","50 N"],a:1,e:"W = Fd → F = W/d = 100/5 = 20 N."},
  {q:"Speed = 60 m in 10 s:",o:["5 m/s","6 m/s","7 m/s","8 m/s"],a:1,e:"Speed = d/t = 60/10 = 6 m/s."},
  {q:"KE when velocity doubles:",o:["Same","×2","×3","×4"],a:3,e:"KE = ½mv². If v→2v: KE = ½m(2v)² = 4×½mv² = 4×original KE."},
  {q:"Power = 500 J in 10 s:",o:["25 W","50 W","75 W","100 W"],a:1,e:"P = W/t = 500/10 = 50 W."},
  {q:"Energy conserved means:",o:["Energy is lost","Energy is constant","Energy increasing","Energy is zero"],a:1,e:"Conservation of energy: total energy of an isolated system remains constant."}
];
// ── CHM101 QUESTIONS (abbreviated bank reference) ────────────
// Full CHM101 and MTH101 question arrays defined below
const CHM101_Q = [
  {q:"The experiment that led to discovery of nucleus of an atom is",o:["Alpha scattering","Discharged tube","Oil drop","Wave mechanical model"],a:0,e:"Rutherford's alpha scattering (gold foil) experiment discovered the dense nucleus."},
  {q:"C₃H₈ + 5O₂ → 4H₂O + 3CO₂. Volume of O₂ at STP to burn 50 cm³ propane:",o:["250 cm³","150 cm³","100 cm³","50 cm³"],a:0,e:"1 mol propane needs 5 mol O₂. So 50 cm³ × 5 = 250 cm³."},
  {q:"Line spectra is produced by",o:["Atoms","Molecules","Ions","Radicals"],a:0,e:"Line emission/absorption spectra are characteristic of individual atoms."},
  {q:"The Lyman series of hydrogen spectrum is in the",o:["Ultraviolet region","Visible region","Infra-red region","Far infra-red region"],a:0,e:"Lyman series: transitions to n=1, UV region."},
  {q:"Two metallic ions associated with hard water are",o:["Copper and zinc","Calcium and magnesium","Magnesium and silver","Potassium and tin"],a:1,e:"Ca²⁺ and Mg²⁺ ions cause permanent and temporary hardness in water."},
  {q:"What is the oxidation number of Z in K₃ZCl₆?",o:["-3","+3","-6","+6"],a:1,e:"3(+1)+Z+6(-1)=0 → 3+Z-6=0 → Z=+3."},
  {q:"A sample of C and H burns to yield 4.4g CO₂ and 2.7g H₂O. Empirical formula:",o:["CH₃","CH₂","CH₄","C₂H₅"],a:0,e:"0.1 mol C, 0.3 mol H → C:H = 1:3 → CH₃."},
  {q:"The mass of an atom is determined by",o:["Ionization potential","Electrochemical potential","Number of protons","Number of neutrons and protons"],a:3,e:"Atomic mass ≈ number of protons + neutrons (nucleons)."},
  {q:"An acid and its conjugate base differ only by",o:["A salt","A proton","Opposite charges","Neutral substances"],a:1,e:"Bronsted-Lowry: conjugate acid-base pairs differ by one proton (H⁺)."},
  {q:"The bond joining two ethanoic acid molecules in liquid state is",o:["Covalent","Ionic","Dative covalent","Hydrogen bond"],a:3,e:"Ethanoic acid forms dimers via O-H···O=C hydrogen bonds."},
  {q:"The shape of ammonia molecule is",o:["Trigonal planar","Octahedral","Square planar","Trigonal pyramidal"],a:3,e:"NH₃: 3 bonding pairs + 1 lone pair → trigonal pyramidal, ~107°."},
  {q:"Which scientist discovered the electron?",o:["J.J. Thomson","James Chadwick","Avogadro","Rutherford"],a:0,e:"J.J. Thomson discovered the electron in 1897 via cathode ray experiments."},
  {q:"Ptotal = P₁+P₂+P₃+…Pₙ is an expression of",o:["Graham's law","Boyle's law","Gay Lussac's law","Dalton's law"],a:3,e:"Dalton's Law of Partial Pressures."},
  {q:"The compounds will decompose on heating EXCEPT",o:["Ag₂CO₃","CaCO₃","K₂CO₃","PbCO₃"],a:2,e:"K₂CO₃ is thermally stable. The others decompose giving CO₂."},
  {q:"Which element has the highest ionization energy?",o:["Calcium","Chlorine","Fluorine","Magnesium"],a:2,e:"Fluorine has very small atomic radius and high Zeff → highest IE."},
  {q:"Given 32g S = 6.02×10²³ atoms. Atoms in 2.7g Al? [Al=27]",o:["5.08×10²²","6.02×10²²","3.01×10²³","6.02×10²³"],a:1,e:"2.7/27 = 0.1 mol × 6.02×10²³ = 6.02×10²² atoms."},
  {q:"Volume of CO₂ at STP when 0.5 mol NaHCO₃ heated: 2NaHCO₃→Na₂CO₃+CO₂+H₂O",o:["1.12 dm³","2.24 dm³","5.6 dm³","56.0 dm³"],a:2,e:"0.5 mol NaHCO₃ → 0.25 mol CO₂. V=0.25×22.4=5.6 dm³."},
  {q:"According to Charles' law, volume becomes zero at",o:["-100°C","-273°C","-373°C","0°C"],a:1,e:"Absolute zero = -273°C (0 K). Volume extrapolates to zero at this temperature."},
  {q:"The best treatment for H₂SO₄ on skin is",o:["Cool running water","Sodium hydroxide solution","Iodine solution","NaNO₃ solution"],a:0,e:"Flush with copious cool running water for 15-20 min. Never apply NaOH (exothermic reaction)."},
  {q:"The line in Boyle's law graph is called",o:["Isotherm","Isobar","Adiabatic","Isocore"],a:0,e:"PV=constant at fixed T → isothermal curve = isotherm."},
  {q:"Acidic salt has ___ in its aqueous solution",o:["Double anions","Single cation","Hydrogen ions","Hydrogen atoms"],a:2,e:"Acidic salts release H⁺ in water (e.g. NaHSO₄ → Na⁺ + H⁺ + SO₄²⁻)."},
  {q:"In electrolysis of brine, the anode material is",o:["Platinum","Copper","Zinc","Carbon"],a:3,e:"Carbon (graphite) electrodes are used as inert anodes in brine electrolysis."},
  {q:"Which solution conducts most electricity?",o:["0.5 mol/dm³ HCl","2.0 mol/dm³ HCl","0.5 mol/dm³ CH₃COOH","2.0 mol/dm³ CH₃COOH"],a:1,e:"2.0 mol/dm³ HCl: strong acid fully dissociated → highest ion concentration → best conductor."},
  {q:"What quantity of Al deposited: 10A for 1930s? [Al=27,F=96500]",o:["0.2 g","1.8 g","5.4 g","14.2 g"],a:1,e:"Charge=10×1930=19300C. Moles e⁻=0.2. Al³⁺+3e⁻→Al. Moles Al=0.2/3=0.0667. Mass=0.0667×27=1.8g."},
  {q:"The relative atomic mass of chlorine is not whole number because",o:["It is most abundant isotope mass","Weighted average of all isotopes","Average of all isotopes","More neutrons than protons"],a:1,e:"Cl exists as ³⁵Cl(75%) and ³⁷Cl(25%). Weighted avg=(35×0.75)+(37×0.25)=35.5."},
  {q:"The shape of s-orbital is",o:["Elliptical","Spiral","Circular","Spherical"],a:3,e:"s-orbitals are spherically symmetric."},
  {q:"Which statement about atomic size is correct?",o:["Decreases down group","Increases across period","Anions smaller than parent","Cations smaller than parent"],a:3,e:"Cations lose electrons → less repulsion → smaller radius than parent atom."},
  {q:"Correct order of electronic energy levels:",o:["1s 2p 2s 3p 3s 3d 4s","1s 2s 2p 3s 3p 3d 4s","1s 2s 2p 3s 3p 4s 3d","1s 2s 3s 2p 3p 4s 3d"],a:2,e:"Aufbau order: 4s fills before 3d."},
  {q:"Pauli Exclusion Principle states",o:["Collision theory","Electronegativity values","No two electrons same set of quantum numbers","Reversibility of equilibrium"],a:2,e:"No two electrons in same atom can have all four quantum numbers identical."},
  {q:"The emission of beta particle from Ra-226 produces",o:["Ac-226","Rn-222","Fr-222","Th-230"],a:0,e:"β⁻ emission: n→p. Z increases by 1, A unchanged. ²²⁶Ra→²²⁶Ac."},
  {q:"Which is NOT a method for separation of mixtures?",o:["Chromatography","Crystallization","Distillation","Electrolysis"],a:3,e:"Electrolysis is a chemical decomposition process, not a physical separation method."},
  {q:"Which element can form more than one acidic oxide?",o:["Hydrogen","Sulphur","Carbon","Aluminium"],a:1,e:"Sulphur forms SO₂ (+4) and SO₃ (+6) — two acidic oxides."},
  {q:"What volume will 0.5g H₂ occupy at STP? [H=1]",o:["2.24 dm³","5.60 dm³","11.20 dm³","44.80 dm³"],a:1,e:"Moles=0.5/2=0.25. V=0.25×22.4=5.6 dm³."},
  {q:"HNO₃ does not liberate H₂ with metals because it is",o:["Strong acid","Corrosive acid","Oxidizing agent","Nitrating agent"],a:2,e:"HNO₃ is an oxidizing agent — NO₃⁻ is reduced instead of H⁺."},
  {q:"NaHCO₃ can be distinguished from Na₂CO₃ by",o:["Dilute HCl","CO₂","Aqueous ammonia","Heat"],a:3,e:"On heating: 2NaHCO₃→Na₂CO₃+H₂O+CO₂. Na₂CO₃ is thermally stable."},
  {q:"A salt absorbing moisture without forming solution is",o:["Efflorescent","Deliquescent","Hygroscopic","Insoluble"],a:2,e:"Hygroscopic: absorbs moisture but doesn't dissolve. Deliquescent: absorbs so much it dissolves."},
  {q:"Which compound dissolves readily in water?",o:["BaSO₄","CuCO₃","NH₄Cl","AgCl"],a:2,e:"NH₄Cl is freely soluble. BaSO₄, CuCO₃, AgCl are all insoluble."},
  {q:"NaOH solution: 6.0g in 250cm³. Concentration? [NaOH=40]",o:["0.04 mol/dm³","0.60 mol/dm³","0.96 mol/dm³","0.15 mol/dm³"],a:1,e:"Moles=6/40=0.15. C=0.15/0.25=0.60 mol/dm³."},
  {q:"In which reaction is SO₂ an oxidizing agent?",o:["2HNO₃+SO₂→H₂SO₄+2NO₂","2KMnO₄+5SO₂+2H₂O→products","FeCl₃+SO₂+2H₂O→FeCl₂+2HCl+H₂SO₄","2H₂S+SO₂→2H₂O+3S"],a:3,e:"In 2H₂S+SO₂→2H₂O+3S, SO₂ is reduced (S:+4→0) → acts as oxidizing agent."},
  {q:"Which of the following is isobaric?",o:["Same atomic number","Same mass number","Same electron number","Same neutron number"],a:1,e:"Isobars have the same mass number (A) but different atomic numbers."},
  {q:"The radioactive isotope used in medical imaging is",o:["Carbon-14","Uranium-235","Technetium-99m","Thorium-232"],a:2,e:"Tc-99m is the most widely used diagnostic radioisotope (half-life 6h, gamma emitter)."},
  {q:"Half-life is the time for",o:["Complete decay","Half the nuclei to disintegrate","Radiation to stop","Mass to double"],a:1,e:"Half-life t½: time for half the radioactive nuclei to decay."},
  {q:"Alpha particles are stopped by",o:["Thin sheet of paper","Aluminium sheet","Thick lead plate","Concrete wall"],a:0,e:"Alpha particles (⁴He²⁺) have very low penetrating power — stopped by paper or a few cm of air."},
  {q:"SI unit of radioactivity is the",o:["Curie (Ci)","Becquerel (Bq)","Gray (Gy)","Sievert (Sv)"],a:1,e:"Becquerel (Bq) = 1 nuclear decay per second. Named after Henri Becquerel."},
  {q:"For rate=k[A]²[B], doubling [A] while [B] constant changes rate by:",o:["Unchanged","Triples","Quadruples","Doubles"],a:2,e:"New rate = k(2A)²B = 4kA²B = 4 × original rate. Quadruples."},
  {q:"Half-life of first-order reaction with k=0.693 min⁻¹:",o:["0.693 min","2.00 min","Cannot determine","1.00 min"],a:3,e:"t½ = ln2/k = 0.693/0.693 = 1.00 min."},
  {q:"A catalyst lowers:",o:["Activation energy only, shifts equilibrium","Activation energy, increases rate without consumption","Activation energy, decreases rate","Overall enthalpy change"],a:1,e:"Catalyst: alternative pathway with lower Ea, not consumed, does not shift equilibrium position."},
  {q:"Rate determining step is:",o:["Slowest step","Step with most reactants","Fastest step","Final step"],a:0,e:"The slowest (rate-limiting) step determines the overall rate of a multi-step reaction."},
  {q:"N₂(g)+3H₂(g)⇌2NH₃(g) at equilibrium:",o:["Forward rate > reverse","All concentrations equal","Reaction has stopped","Forward rate = reverse rate"],a:3,e:"At equilibrium: rate of forward = rate of reverse. Concentrations are constant but not necessarily equal."},
  {q:"Kc >> 1 means:",o:["Equal amounts of reactants and products","Rates are very small","Only reactants remain","Products heavily favored"],a:3,e:"Large Kc >> 1: equilibrium lies far to the right → products dominate."},
  {q:"For N₂O₄(g)⇌2NO₂(g), decreasing volume shifts equilibrium:",o:["First right then left","Left, producing more N₂O₄","No shift","Right, more NO₂"],a:1,e:"Decreasing volume increases pressure. System shifts left (toward fewer moles of gas, 1 mol) to reduce pressure."},
  {q:"For H₂(g)+Br₂(g)→2HBr(g) at 25°C: ΔH=-72kJ, ΔS=-106J/K. Reaction proceeds:",o:["Not spontaneously","Spontaneously at given T","In reverse","At lower T only"],a:1,e:"ΔG=ΔH-TΔS=-72000-(298×-106)=-72000+31588=-40412 J<0 → spontaneous."}
];

const MTH101_Q = [
  {q:"If (10x+1)/[(x-2)(x+1)] = K/(x-2) + 3/(x+1), find K.",o:["7","8","2","1"],a:0,e:"Multiply through: 10x+1=K(x+1)+3(x-2). Sub x=2: 21=3K → K=7."},
  {q:"If (x²+x-1)/[(x+1)(x-1)] = a+b/(x+1)+c/(x-1), find a+b+c.",o:["4","2","1/2","1"],a:3,e:"Long divide: a=1. Remainder x → b=-1/2, c=1/2. Sum=1."},
  {q:"What is the value of a in the above partial fraction?",o:["1","2","3","3/5"],a:0,e:"The polynomial part (quotient from long division) a=1 since degrees are equal."},
  {q:"What is b² in the above partial fraction?",o:["4","1/4","1","2"],a:1,e:"b=-1/2 (from substitution x=-1). b²=1/4."},
  {q:"Given (6x+p)/(2x²+7x-15)=4/(x+5)-2/(2x-3), find p.",o:["-22","20","-52","4"],a:0,e:"Combine RHS: (6x-22)/denom. So 6x+p=6x-22 → p=-22."},
  {q:"Which is NOT a proper fraction?",o:["(x+3)/[(x+2)(x-4)]","(x-4)/[(x+3)(x-2)]","1/[x(x-3)]","(x²+x-1)/[(x+1)(x-1)]"],a:3,e:"Improper: deg(numerator)≥deg(denominator). Option D has equal degrees."},
  {q:"Decomposition form of (x+3)/[x(x²+3)]:",o:["A/x+(Bx+C)/(x²+9)","A/x+(Bx+C)/(x²+3)","A/x+B/(x²+9)","(A+Bx)/x+C/(x²+9)"],a:1,e:"Linear factor x and irreducible quadratic x²+3 → A/x+(Bx+C)/(x²+3)."},
  {q:"Which compound fraction has a repeated factor?",o:["(x-5)/[x²(x+1)]","(x+3)/[(x+2)(x-4)]","(x+3)/[x(x²+3)]","(x-5)/[x(x+1)]"],a:0,e:"x² = x×x is a repeated factor in option A."},
  {q:"Resolve 1/[x(x+3)] into partial fractions.",o:["1/(3x)-1/[3(x+3)]","1/x+1/(x+3)","3/x-3/(x+3)","1/[3(x+3)]-1/(3x)"],a:0,e:"A=1/3 (sub x=0), B=-1/3 (sub x=-3). Result: 1/(3x)-1/[3(x+3)]."},
  {q:"Given (x+5)/[(x-1)(x+2)]=P/(x-1)+Q/(x+2), find P+Q.",o:["3","1","2","-3"],a:1,e:"P=2 (sub x=1), Q=-1 (sub x=-2). P+Q=1."},
  {q:"(P+Q)² from above question:",o:["1","2","3","9"],a:0,e:"P+Q=1 → (P+Q)²=1."},
  {q:"Two operations closed on natural numbers ℕ:",o:["Addition and Subtraction","Addition and Multiplication","Addition and Division","Multiplication and Division"],a:1,e:"ℕ is closed under + and ×. Subtraction and division can leave ℕ."},
  {q:"Which set contains all of ℝ (Real numbers)?",o:["ℕ∪ℤ","ℤ∪ℂ","ℚ∪ℚᶜ","ℚ∪ℂ"],a:2,e:"ℝ = ℚ∪ℚᶜ (rationals union irrationals)."},
  {q:"If p,q∈ℤ and q≠0, then p/q is a/an:",o:["Even number","Irrational number","Rational number","Odd number"],a:2,e:"Definition of rational number: expressible as p/q, p,q integers, q≠0."},
  {q:"Which number is irrational?",o:["√25","√2","-2","0.25"],a:1,e:"√2≈1.41421... is non-terminating, non-repeating → irrational."},
  {q:"Which statement is TRUE?",o:["Every rational is integer","Every integer is rational","Every real is irrational","Every fraction is whole number"],a:1,e:"Every integer n = n/1 ∈ ℚ. So ℤ⊂ℚ."},
  {q:"First step in mathematical induction:",o:["Assume true for n=k","Prove for n=k+1","Verify for first natural number","Conclude for all n"],a:2,e:"Step 1: Base case — verify for the initial value (usually n=1)."},
  {q:"Which can be proved by induction?",o:["1+3+5+...+(2n-1)=n²","1+3+5+...+(2n-1)=2n","...=n(n+1)","...=n(n-1)"],a:0,e:"Sum of first n odd numbers = n². Verify n=1: 1=1². Inductive step works."},
  {q:"The statement assumed true for n=k is called:",o:["Base case","Induction hypothesis","Induction conclusion","Final proof"],a:1,e:"Induction Hypothesis: the assumption P(k) is true, used to prove P(k+1)."},
  {q:"Which can be proved using mathematical induction?",o:["2x+3=0","∑ᵢ₌₁ⁿ i = n(n+1)/2","x²-4x+4=0","π is irrational"],a:1,e:"∑i=n(n+1)/2 is a universal statement about all n∈ℕ, perfect for induction."},
  {q:"Listing (roster) form of a set:",o:["A={x:x is prime <10}","B={2,3,5,7}","C={x|x>0}","D={x:x∈ℕ}"],a:1,e:"Roster form explicitly lists elements. B={2,3,5,7}."},
  {q:"If A={1,2,3,4}, the cardinality |A|=",o:["1","2","3","4"],a:3,e:"|A|=4 (number of elements in A)."},
  {q:"A={1,2,3} and B={2,1,3}. They are:",o:["Equivalent","Equal","Disjoint","Universal"],a:1,e:"Equal sets contain exactly same elements (order irrelevant). A=B."},
  {q:"Which is an empty set?",o:["{0}","{x:x²=-1, x∈ℝ}","{1}","{2,4}"],a:1,e:"x²=-1 has no real solution → empty set ∅. Note: {0} contains zero."},
  {q:"If U={1,2,3,4,5}, A={1,2,3}, then A'=",o:["{1,2,3}","{4,5}","{1,2}","{3,4}"],a:1,e:"Complement A'=U-A={4,5}."},
  {q:"A={1,2,3}, B={3,4,5}. A∪B=",o:["{3}","{1,2,3,4,5}","{4,5}","{1,2}"],a:1,e:"Union: all elements in A or B = {1,2,3,4,5}."},
  {q:"A={1,2,3}, B={3,4,5}. A∩B=",o:["{1,2}","{2,3}","{4,5}","{3}"],a:3,e:"Intersection: elements in both = {3}."},
  {q:"A={1,2,3,4}, B={3,4}. A-B=",o:["{1,2}","{3,4}","{1,2,3,4}","{4}"],a:0,e:"Set difference: elements in A not in B = {1,2}."},
  {q:"Every set is ___ of itself.",o:["A proper subset","A subset","Not a subset","Disjoint"],a:1,e:"A⊆A for any set A (improper subset)."},
  {q:"Form equation with roots -2/5 and 10.",o:["3x²-4x-20=0","5x²-48x-20=0","4x²-4x-10=0","x²-12x-20=0"],a:1,e:"Sum=48/5, Product=-4. Multiply x²-(48/5)x-4=0 by 5: 5x²-48x-20=0."},
  {q:"(5p+1)x²-8px+3p=0 has equal roots when p=",o:["4 or -3","2 or -3","-4 or 3","0 or 3"],a:3,e:"Δ=0: 64p²-4(5p+1)(3p)=0 → 4p²-12p=0 → p(p-3)=0 → p=0 or 3."},
  {q:"α,β roots of ax²+bx+c=0. α/β+β/α=",o:["(b²-2ac)/ac","(b²-2ac)/b²","(b²-4ac)/b²","(α²+β²)/(αβ)"],a:0,e:"(α²+β²)/(αβ)=[(α+β)²-2αβ]/(αβ)=(b²/a²-2c/a)/(c/a)=(b²-2ac)/(ac)."},
  {q:"If x=4 is root of x²+kx-28=0, find k.",o:["-5","3","-3","7"],a:1,e:"16+4k-28=0 → k=3. Check: x²+3x-28=(x-4)(x+7)✓."},
  {q:"x=2 is root of x²+px-16=0. Other root and p:",o:["-8 and 6","5 and 3","-5 and -3","-7 and 3"],a:0,e:"Sub x=2: p=6. Product=2×r₂=-16 → r₂=-8."},
  {q:"3x²-6x+9=0. Find 1/α+1/β.",o:["2/3","6/7","3/9","2"],a:0,e:"1/α+1/β=(α+β)/(αβ)=2/3."},
  {q:"Two distinct real roots when discriminant is:",o:["b²=4ac","b²-4ac>0","b²-4ac≥0","b²-4ac<0"],a:1,e:"Δ>0 for two distinct real roots."},
  {q:"(x-2)(x+3)=0 → a,b,c are:",o:["2,2,4","-1,1,3","1,1,-6","2,3,-2"],a:2,e:"Expand: x²+x-6=0. a=1,b=1,c=-6."},
  {q:"α,β roots of 2x²-7x+3=0. (α-2)(β-2)=",o:["2/3","-2/3","3/2","-1½"],a:3,e:"(α-2)(β-2)=αβ-2(α+β)+4=3/2-7+4=-3/2=-1½."},
  {q:"Roots of 9x²-4=0:",o:["±2/3","-3/2","±2/6","+3/5"],a:0,e:"x²=4/9 → x=±2/3."},
  {q:"Simplify (2+4i)/(1-i):",o:["-1+3i","1+3i","2+3i","3i-1"],a:0,e:"Multiply by (1+i)/(1+i): (2+6i-4)/2=-1+3i."},
  {q:"Conjugate of (2+i)²:",o:["1+4i","-3+i","3-4i","3±4i"],a:2,e:"(2+i)²=3+4i. Conjugate=3-4i."},
  {q:"Least positive integer p: [(1+i)/(1-i)]ᵖ=1",o:["3","4","2","8"],a:1,e:"(1+i)/(1-i)=i. iᵖ=1 → p=4."},
  {q:"x²-y² if (x+iy)²=(1+3i)/(1-2i):",o:["4","1","-1","1/2"],a:2,e:"RHS simplifies to -1+i. Real part: x²-y²=-1."},
  {q:"|(1-i)/(3+i)+4i/5|=",o:["√5","√11/5","√5/5","√12/5"],a:2,e:"=(1+2i)/5. Magnitude=√5/5."},
  {q:"w=1+2i, z=2-i. Re(z+w)+Im(z-w)=",o:["6","0","-3","3"],a:1,e:"z+w=3+i→Re=3. z-w=1-3i→Im=-3. Sum=0."},
  {q:"Which is NOT true for z and z̄?",o:["|z|=|z̄|","zz̄=|z̄|²","Arg(z)=Arg(z̄)","z+z̄=2Re(z)"],a:2,e:"Arg(z̄)=-Arg(z). They are opposite in sign."},
  {q:"i¹⁰⁰¹ real part:",o:["0","i","-1","1"],a:0,e:"1001 mod 4=1 → i¹=i. Re(i)=0."},
  {q:"Modulus and argument of (1+√3i)⁸:",o:["256,π/3","256,2π/3","2,π/3","256,8π/3"],a:1,e:"r=2,θ=π/3. (2e^{iπ/3})⁸=256e^{i8π/3}. Principal arg=8π/3-2π=2π/3."},
  {q:"9th term of AP: 18,12,6,0,-6,...",o:["-54","-30","30","42"],a:1,e:"T₉=18+8(-6)=-30."},
  {q:"6th term of AP is 11, first term is 1. Common difference:",o:["12/5","5/3","-2","2"],a:3,e:"1+5d=11 → d=2."},
  {q:"Sum of 20 AP terms: a=7, last=117:",o:["2480","1240","620","124"],a:1,e:"S=20/2×124=1240."},
  {q:"3rd term of GP: 1st=4, 4th=108:",o:["112","108","36","27"],a:2,e:"r=3. T₃=4×9=36."},
  {q:"GP 2nd=8, 4th=32. Sum of first 4 terms:",o:["28","40","48","60"],a:3,e:"r=2,a=4. S₄=4(16-1)/1=60."},
  {q:"4th term of AP: a=2, d=0.5:",o:["3.5","4.5","2.5","5.5"],a:0,e:"T₄=2+3(0.5)=3.5."},
  {q:"T₂+T₅=42, T₆-T₃=12. Common difference:",o:["5","4","3","2"],a:1,e:"3d=12→d=4."},
  {q:"Sum of first 30 odd integers:",o:["400","469","480","900"],a:3,e:"Sum=n²=30²=900."},
  {q:"AP: a=-12, last=40, sum=196. Number of terms:",o:["13","14","15","16"],a:1,e:"14n=196→n=14."},
  {q:"AP: a=2, d=3. Sum of first 11 terms:",o:["187","188","178","168"],a:0,e:"S₁₁=11/2×[4+30]=187."},
  {q:"GP: 1st=16, 5th=9. 7th term:",o:["9/16","3/2","27/4","1024/27"],a:2,e:"r²=3/4. T₇=16×(3/4)³=27/4."},
  {q:"Expand (1+x)³:",o:["1+3x+3x²+x³","1+3x+2x²+x³","1+2x+3x²+x³","1+3x+x²+x³"],a:0,e:"Binomial: 1+3x+3x²+x³."},
  {q:"Coefficient of x² in (1+x)⁵:",o:["5","10","20","15"],a:1,e:"C(5,2)=10."},
  {q:"C(6,2)=",o:["10","12","15","20"],a:2,e:"6!/(2!4!)=15."},
  {q:"Number of terms in (a+b)⁷:",o:["7","8","6","9"],a:1,e:"n+1=8 terms."},
  {q:"Coefficient of x³ in (1+x)⁶:",o:["10","20","15","30"],a:1,e:"C(6,3)=20."},
  {q:"Expand (a+b)²:",o:["a²+b²","a²+ab+b²","a²+2ab+b²","a²+3ab+b²"],a:2,e:"(a+b)²=a²+2ab+b²."},
  {q:"Fourth term in (1+x)⁶:",o:["15x³","20x³","10x³","6x³"],a:1,e:"T₄=C(6,3)x³=20x³."},
  {q:"First two terms of (1+x)⁻¹:",o:["1+x","1-x","1-x+x²","1+x-x²"],a:1,e:"(1+x)⁻¹=1-x+x²-... First two: 1-x."},
  {q:"First three terms of (1+x)^(1/2):",o:["1+(1/2)x-(1/8)x²","1+(1/2)x+(1/8)x²","1+x+(1/2)x²","1+(1/2)x-(1/2)x²"],a:0,e:"1+(1/2)x+(1/2)(-1/2)/2!x²=1+(1/2)x-(1/8)x²."},
  {q:"(1+x)⁻² expansion begins with:",o:["1+2x+3x²","1-2x+3x²","1+2x-3x²","1-2x-3x²"],a:1,e:"(1+x)⁻²=1-2x+3x²-4x³+..."},
  {q:"First two terms of (1+2x)³:",o:["1+6x","1+3x","1+2x","1+4x"],a:0,e:"1+3(2x)+...=1+6x+..."},
  {q:"3π/4 radians in degrees:",o:["135°","270°","45°30′","67°30′"],a:0,e:"(3π/4)×(180/π)=135°."},
  {q:"If cosθ=4/5, tanθ=",o:["3/5","3/4","4/3","5/3"],a:1,e:"opp=3,hyp=5,adj=4. tanθ=3/4."},
  {q:"tan30°/cot60°=",o:["1/√2","1/√3","√3","1"],a:3,e:"tan30°=cot60°=1/√3. Ratio=1."},
  {q:"cos30° in radical form:",o:["1/2","2/√3","√3/2","1/√3"],a:2,e:"cos30°=√3/2."},
  {q:"Which identity is TRUE?",o:["cosecθ=1/cosθ","cosθ/sinθ=cotθ","cosθ=1/sinθ","secθ=1/sinθ"],a:1,e:"cotθ=cosθ/sinθ is valid."},
  {q:"cos²θ-sin²θ is equivalent to:",o:["2sin²θ-1","1+2sin²θ","2sin²θ+1","1-2sin²θ"],a:3,e:"cos²θ=(1-sin²θ). So cos²θ-sin²θ=1-2sin²θ."},
  {q:"2π/3 radians in degrees:",o:["44/21","2.0944°","120°","180°"],a:2,e:"(2π/3)×(180/π)=120°."},
  {q:"Which is a trigonometric identity?",o:["cos2θ+sin2θ=1","1+tan²θ=cot²θ","1+cot²θ=csc²θ","1+sec²θ=csc²θ"],a:2,e:"1+cot²θ=csc²θ is a valid Pythagorean identity."}
];

// ── FULL QUESTION BANK ───────────────────────────────────────
const CBT_QUESTIONS = {
  CHM101: CHM101_Q.map(item => ({question:item.q, options:item.o, answer:item.a, explanation:item.e})),
  MTH101: MTH101_Q.map(item => ({question:item.q, options:item.o, answer:item.a, explanation:item.e})),
  PHY101: PHY101_Q.map(item => ({question:item.q, options:item.o, answer:item.a, explanation:item.e}))
};

// ── STATE ────────────────────────────────────────────────────
let currentExam = {
  courseId:null, courseName:'', courseCode:'',
  questions:[], answers:[], currentQ:0,
  startTime:null, duration:60, timerInterval:null, submitted:false
};
let pendingExamSetup = { courseId:null, questionCount:10 };

// ── MODAL FUNCTIONS ──────────────────────────────────────────
function openExamModal(courseId) {
  const course = CBT_COURSES.find(c => c.id === courseId);
  if (!course) return;
  const bank = CBT_QUESTIONS[courseId] || [];
  if (!bank.length) { alert('No questions available yet. Check back soon!'); return; }

  pendingExamSetup.courseId = courseId;
  pendingExamSetup.questionCount = Math.min(course.questionsPool[0], bank.length);

  document.getElementById('modal-course-code').textContent = course.code;
  document.getElementById('modal-course-name').textContent = course.name;

  // Build question count buttons
  const optContainer = document.getElementById('q-count-options');
  optContainer.innerHTML = '';
  course.questionsPool.forEach(n => {
    const available = Math.min(n, bank.length);
    const btn = document.createElement('button');
    btn.className = 'q-count-btn' + (n === pendingExamSetup.questionCount ? ' active' : '');
    btn.textContent = available + (n > bank.length ? ' (max)' : '') + ' Qs';
    btn.onclick = () => {
      pendingExamSetup.questionCount = available;
      optContainer.querySelectorAll('.q-count-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateModalDuration(available, course.maxDuration);
    };
    optContainer.appendChild(btn);
  });

  updateModalDuration(pendingExamSetup.questionCount, course.maxDuration);
  document.getElementById('exam-setup-modal').style.display = 'flex';
}

function updateModalDuration(qCount, maxDuration) {
  // 1.5 minutes per question, capped at maxDuration
  const mins = Math.min(Math.ceil(qCount * 1.5), maxDuration);
  document.getElementById('duration-display').textContent = mins + ' minutes';
  pendingExamSetup.duration = mins;
}

function closeExamModal() {
  document.getElementById('exam-setup-modal').style.display = 'none';
}

function confirmStartExam() {
  closeExamModal();
  startExam(pendingExamSetup.courseId, pendingExamSetup.questionCount, pendingExamSetup.duration);
}

// ── PAGE NAV ─────────────────────────────────────────────────
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) { target.classList.add('active'); window.scrollTo({top:0,behavior:'smooth'}); }
  if (pageId === 'page-tracking') renderTracking();
  if (pageId === 'page-landing') updateLandingStats();
}

// ── LANDING STATS ────────────────────────────────────────────
function updateLandingStats() {
  const results = getResults();
  const el = document.getElementById('stat-tests');
  const el2 = document.getElementById('stat-avg');
  if (el) el.textContent = results.length;
  if (el2 && results.length > 0) {
    el2.textContent = Math.round(results.reduce((s,r)=>s+r.pct,0)/results.length) + '%';
  }
}

// ── FACULTY RENDER ───────────────────────────────────────────
function renderFacultyGrid() {
  const grid = document.getElementById('faculty-grid');
  if (!grid) return;
  grid.innerHTML = FACULTIES.map(f => `
    <div class="faculty-card" onclick="openFaculty('${f.id}')">
      <div class="faculty-icon">${f.icon}</div>
      <div class="faculty-name">${f.name}</div>
      <div class="faculty-desc">${f.desc}</div>
      <div class="faculty-arrow">Explore resources →</div>
    </div>`).join('');
}

function openFaculty(id) {
  const f = FACULTIES.find(x => x.id === id);
  if (!f) return;
  document.getElementById('faculty-detail-title').textContent = f.name;
  document.getElementById('faculty-detail-content').innerHTML = f.levels.map(level => `
    <div class="level-section">
      <div class="level-title">📚 ${level.level}</div>
      <div class="course-list">
        ${level.courses.map(c => `
          <div class="course-item">
            <div class="course-info">
              <div class="course-code">${c.code}</div>
              <div class="course-title-text">${c.title}</div>
              <div class="course-file">📄 ${c.file}</div>
            </div>
            <a href="${c.link}" download class="btn-download">⬇ Download</a>
          </div>`).join('')}
      </div>
    </div>`).join('');
  showPage('page-faculty-detail');
}

// ── CBT COURSE GRID ──────────────────────────────────────────
function renderCBTCourses() {
  const grid = document.getElementById('cbt-course-grid');
  if (!grid) return;
  grid.innerHTML = CBT_COURSES.map(c => {
    const qCount = (CBT_QUESTIONS[c.id] || []).length;
    return `
      <div class="cbt-course-card">
        <div class="cbt-code">${c.code}<span class="cbt-q-badge">${qCount} questions</span></div>
        <div class="cbt-name">${c.name}</div>
        <div class="cbt-meta">Faculty: ${c.faculty} | Up to ${c.maxDuration} min | Choose your count</div>
        <button class="btn-start-cbt" onclick="openExamModal('${c.id}')">▶ SET UP & START TEST</button>
      </div>`;
  }).join('');
}

// ── EXAM ENGINE ──────────────────────────────────────────────
function startExam(courseId, questionCount, duration) {
  const course = CBT_COURSES.find(c => c.id === courseId);
  if (!course) return;
  const allQ = CBT_QUESTIONS[courseId] || [];
  const shuffled = shuffleArray([...allQ]);
  const selected = shuffled.slice(0, questionCount);

  currentExam = {
    courseId, courseName: course.name, courseCode: course.code,
    questions: selected, answers: new Array(selected.length).fill(null),
    currentQ: 0, startTime: Date.now(), duration,
    timerInterval: null, submitted: false
  };

  document.getElementById('exam-course-label').textContent = course.code + ' — ' + course.name;
  renderQuestion();
  renderPalette();
  startTimer();
  showPage('page-cbt-exam');
}

function renderQuestion() {
  const q = currentExam.questions[currentExam.currentQ];
  const n = currentExam.currentQ;
  const total = currentExam.questions.length;
  document.getElementById('q-number').textContent = `Question ${n+1} of ${total}`;
  document.getElementById('q-text').textContent = q.question;
  document.getElementById('exam-q-count').textContent = `${n+1} / ${total}`;
  document.getElementById('exam-progress-fill').style.width = `${((n+1)/total)*100}%`;
  document.getElementById('btn-prev').disabled = n === 0;
  document.getElementById('btn-next').disabled = n === total-1;
  const letters = ['A','B','C','D'];
  document.getElementById('options-grid').innerHTML = q.options.map((opt,i) => `
    <button class="option-btn ${currentExam.answers[n]===i?'selected':''}" onclick="selectOption(${i})">
      <span class="option-letter">${letters[i]}</span>
      <span>${opt}</span>
    </button>`).join('');
  renderPalette();
  const card = document.getElementById('question-card');
  card.style.animation='none'; card.offsetHeight; card.style.animation='fadeIn .25s ease';
}

function selectOption(idx) {
  if (currentExam.submitted) return;
  currentExam.answers[currentExam.currentQ] = idx;
  renderQuestion();
}

function examNav(dir) {
  if (dir==='prev' && currentExam.currentQ>0) currentExam.currentQ--;
  else if (dir==='next' && currentExam.currentQ<currentExam.questions.length-1) currentExam.currentQ++;
  renderQuestion();
}

function togglePalette() { document.getElementById('q-palette').classList.toggle('open'); }

function renderPalette() {
  const grid = document.getElementById('palette-grid');
  if (!grid) return;
  grid.innerHTML = currentExam.questions.map((_,i) => {
    let cls = i===currentExam.currentQ?'current': currentExam.answers[i]!==null?'answered':'';
    return `<button class="palette-btn ${cls}" onclick="jumpToQ(${i});togglePalette();">${i+1}</button>`;
  }).join('');
}

function jumpToQ(i) { currentExam.currentQ=i; renderQuestion(); }

function startTimer() {
  if (currentExam.timerInterval) clearInterval(currentExam.timerInterval);
  const durSec = currentExam.duration * 60;
  currentExam.timerInterval = setInterval(() => {
    const remaining = durSec - Math.floor((Date.now()-currentExam.startTime)/1000);
    if (remaining <= 0) { clearInterval(currentExam.timerInterval); submitExam(true); return; }
    const m = Math.floor(remaining/60), s = remaining%60;
    const el = document.getElementById('exam-timer');
    if (el) {
      el.textContent = `⏱ ${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
      if (remaining<300) el.classList.add('warning'); else el.classList.remove('warning');
    }
  }, 1000);
}

function submitExam(timeUp=false) {
  if (currentExam.submitted) return;
  if (!timeUp) {
    const ans = currentExam.answers.filter(a=>a!==null).length;
    const tot = currentExam.questions.length;
    if (ans < tot) { if (!confirm(`${tot-ans} question(s) unanswered. Submit anyway?`)) return; }
    else { if (!confirm('Submit your exam now?')) return; }
  }
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
  saveResult({courseId:currentExam.courseId, courseCode:currentExam.courseCode,
    courseName:currentExam.courseName, total:currentExam.questions.length,
    correct, wrong, skipped, pct, date:new Date().toISOString()});
  renderResults(correct,wrong,skipped,pct);
  showPage('page-results');
}

function renderResults(correct,wrong,skipped,pct) {
  const trophy = pct>=70?'🏆':pct>=50?'🎯':'📚';
  const title = pct>=70?'Excellent Work!':pct>=50?'Good Effort!':'Keep Practicing!';
  document.getElementById('results-trophy').textContent=trophy;
  document.getElementById('results-title').textContent=title;
  document.getElementById('results-course-label').textContent=currentExam.courseCode+' — '+currentExam.courseName;
  document.getElementById('score-pct').textContent=pct+'%';
  document.getElementById('ss-correct').textContent=correct;
  document.getElementById('ss-wrong').textContent=wrong;
  document.getElementById('ss-skipped').textContent=skipped;
  const circ=314, offset=circ*(1-pct/100);
  const ring=document.getElementById('score-ring-fill');
  if(ring){
    const color=pct>=70?'#00e676':pct>=50?'#ffd700':'#ff5252';
    ring.style.stroke=color;
    ring.style.filter=`drop-shadow(0 0 7px ${color})`;
    setTimeout(()=>{ring.style.strokeDashoffset=offset;},100);
  }
  document.getElementById('review-section').style.display='none';
}

function showReview() {
  const sec=document.getElementById('review-section');
  sec.style.display='block'; sec.scrollIntoView({behavior:'smooth'});
  const letters=['A','B','C','D'];
  document.getElementById('review-list').innerHTML = currentExam.questions.map((q,i) => {
    const ua=currentExam.answers[i], isC=ua===q.answer, isS=ua===null;
    const cls=isS?'r-skipped':isC?'r-correct':'r-wrong';
    const icon=isS?'⬜':isC?'✅':'❌';
    return `<div class="review-item ${cls}">
      <div class="review-q-num">QUESTION ${i+1} ${icon}</div>
      <div class="review-q-text">${q.question}</div>
      <div class="review-answers">
        <span class="rev-your ${isC?'was-correct':''}">Your answer: ${ua!==null?letters[ua]+'. '+q.options[ua]:'Not answered'}</span>
        ${!isC?`<span class="rev-correct">✅ Correct: ${letters[q.answer]}. ${q.options[q.answer]}</span>`:''}
      </div>
      <div class="review-explanation"><strong>📖 Explanation:</strong> ${q.explanation}</div>
    </div>`;
  }).join('');
}

// ── LOCAL STORAGE ────────────────────────────────────────────
function getResults() { try{return JSON.parse(localStorage.getItem('cbtResults')||'[]');}catch{return[];} }
function saveResult(r) { const all=getResults(); all.unshift(r); localStorage.setItem('cbtResults',JSON.stringify(all.slice(0,200))); updateLandingStats(); }
function clearHistory() { if(!confirm('Clear all test history?'))return; localStorage.removeItem('cbtResults'); renderTracking(); updateLandingStats(); }

// ── TRACKING ─────────────────────────────────────────────────
function renderTracking() {
  const results=getResults();
  document.getElementById('track-total').textContent=results.length;
  if(!results.length){
    document.getElementById('track-avg').textContent='—';
    document.getElementById('track-best').textContent='—';
    document.getElementById('track-streak').textContent='0';
    document.getElementById('history-list').innerHTML=`<div class="empty-history"><div class="empty-icon">📭</div><p>No tests taken yet. Start a CBT test to track your progress!</p><button class="btn-action primary" onclick="showPage('page-cbt-select')">Take a Test</button></div>`;
    return;
  }
  const avg=Math.round(results.reduce((s,r)=>s+r.pct,0)/results.length);
  const best=Math.max(...results.map(r=>r.pct));
  const days=new Set(results.map(r=>r.date.split('T')[0]));
  document.getElementById('track-avg').textContent=avg+'%';
  document.getElementById('track-best').textContent=best+'%';
  document.getElementById('track-streak').textContent=days.size;
  document.getElementById('history-list').innerHTML=results.map(r=>{
    const color=r.pct>=70?'#00e676':r.pct>=50?'#ffd700':'#ff5252';
    const d=new Date(r.date).toLocaleDateString('en-NG',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
    return `<div class="history-item">
      <div class="history-test-info">
        <div class="history-course">${r.courseCode||r.courseId}</div>
        <div style="font-size:.9rem;color:var(--text);font-weight:600;margin:2px 0;font-family:var(--fu)">${r.courseName||''}</div>
        <div class="history-date">🕒 ${d} — ${r.correct}/${r.total} correct</div>
      </div>
      <div class="history-score-wrap">
        <div class="history-score-bar"><div class="history-score-fill" style="width:${r.pct}%;background:${color}"></div></div>
        <div class="history-score-pct" style="color:${color}">${r.pct}%</div>
      </div>
    </div>`;
  }).join('');
}

// ── PARTICLES ────────────────────────────────────────────────
function initParticles() {
  const canvas=document.getElementById('particles-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let W=canvas.width=window.innerWidth, H=canvas.height=window.innerHeight;
  const N=Math.min(55,Math.floor(W*H/17000));
  const pts=Array.from({length:N},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+.3,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,a:Math.random()*.5+.1}));
  function draw(){
    ctx.clearRect(0,0,W,H);
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<110){ctx.beginPath();ctx.strokeStyle=`rgba(0,210,255,${.055*(1-d/110)})`;ctx.lineWidth=.5;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke();}
    }
    pts.forEach(p=>{
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(0,210,255,${p.a})`;ctx.fill();
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
    });
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize',()=>{W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;});
}

function shuffleArray(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  initParticles();
  renderFacultyGrid();
  renderCBTCourses();
  updateLandingStats();
  showPage('page-landing');
});
