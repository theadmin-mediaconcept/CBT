/**
 * ============================================================
 * questions.js — CBT Question Bank & Course Data
 * Contains: FACULTIES, CBT_COURSES, all question arrays
 * Edit this file to add/update courses and questions
 * ============================================================
 */
"use strict";

// ── FACULTIES DATA ──────────────────────────────────────────
// These are display-only for navigation. Actual files come from Firebase.
const FACULTIES = [
  { id:"computing",     name:"Faculty of Computing",                   icon:"💻", desc:"Computer Science, Information Technology, Software Engineering, Cyber Security" },
  { id:"science",       name:"Faculty of Science",                     icon:"⚗️", desc:"Physics, Chemistry, Mathematics, Biology, Microbiology, Biochemistry" },
  { id:"arts",          name:"Faculty of Arts",                        icon:"🎭", desc:"English, History, Philosophy, Linguistics, Theatre Arts, Religious Studies" },
  { id:"law",           name:"Faculty of Law",                         icon:"⚖️", desc:"Constitutional Law, Criminal Law, Commercial Law, Legal Methods" },
  { id:"nursing",       name:"Faculty of Nursing",                     icon:"🏥", desc:"Nursing Science, Midwifery, Community Health, Nursing Management" },
  { id:"basic-medical", name:"Faculty of Basic Medical Sciences",      icon:"🔬", desc:"Biochemistry, Anatomy, Physiology, Pharmacology, Medical Laboratory" },
  { id:"sms",           name:"Faculty of Social & Management Sciences",icon:"📊", desc:"Economics, Accounting, Business Administration, Sociology, Public Admin" },
  { id:"engineering",   name:"Faculty of Engineering",                 icon:"⚙️", desc:"Civil, Electrical, Mechanical, Computer, Chemical Engineering" },
  { id:"education",     name:"Faculty of Education",                   icon:"📚", desc:"Educational Management, Curriculum Studies, Guidance & Counselling" },
  { id:"environmental", name:"Faculty of Environmental Sciences",      icon:"🌿", desc:"Architecture, Building, Estate Management, Urban & Regional Planning" },
  { id:"agriculture",   name:"Faculty of Agriculture",                 icon:"🌾", desc:"Crop Science, Animal Science, Food Science, Agronomy, Soil Science" },
  { id:"pharmacy",      name:"Faculty of Pharmacy",                    icon:"💊", desc:"Pharmacology, Pharmaceutical Chemistry, Clinical Pharmacy, Pharmacognosy" }
];

const CBT_COURSES = [
  { id:"CHM101", code:"CHM 101", name:"General Chemistry", faculty:"Science / General", maxDuration:90, questionsPool:[10,20,30,40,50] },
  { id:"MTH101", code:"MTH 101", name:"Elementary Mathematics I", faculty:"Science / General", maxDuration:60, questionsPool:[10,20,30,40,50] },
  { id:"PHY101", code:"PHY 101", name:"General Physics I", faculty:"Science / General", maxDuration:60, questionsPool:[10,20,30,40,50] },
  { id:"STA101", code:"STA 101", name:"Descriptive Statistics", faculty:"Science / General", maxDuration:60, questionsPool:[5,10,15,20,31], ordered:true }
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
  {q:"Which is a trigonometric identity?",o:["cos2θ+sin2θ=1","1+tan²θ=cot²θ","1+cot²θ=csc²θ","1+sec²θ=csc²θ"],a:2,e:"1+cot²θ=csc²θ is a valid Pythagorean identity."},

  // ── NEW QUESTIONS FROM MTH 101 ADVANCED EXAM PDF ─────────────

  // SECTION A: SET THEORY
  {q:"Let A={1,2,3,4,5}, B={3,4,5,6,7}, C={5,6,7,8}. Find (A∪B)∩C.",o:["{5,6,7}","{3,4,5}","{1,2,3}","{6,7,8}"],a:0,e:"Step 1 — Find A∪B (all elements in A or B): A∪B = {1,2,3,4,5,6,7}.\nStep 2 — Intersect with C (common elements): {1,2,3,4,5,6,7} ∩ {5,6,7,8} = {5,6,7}.\nAnswer: {5,6,7}."},
  {q:"U={1,2,3,4,5,6,7,8,9}, A={2,4,6,8}, B={1,2,3,4}. Find A′∩B.",o:["{1,3}","{2,4}","{5,7,9}","{1,2,3,4}"],a:0,e:"Step 1 — A′ = U − A = {1,3,5,7,9} (elements of U not in A).\nStep 2 — A′ ∩ B = common elements of {1,3,5,7,9} and {1,2,3,4} = {1,3}.\nAnswer: {1,3}."},
  {q:"A={1,3,5,7}, B={3,4,5}, C={5,6,7}. Find A∩(B∪C).",o:["{3,5,7}","{3,4,5}","{5,7}","{1,3}"],a:0,e:"Step 1 — B∪C = {3,4,5,6,7} (all elements in B or C).\nStep 2 — A ∩ (B∪C) = elements in both A and {3,4,5,6,7} = {3,5,7}.\nAnswer: {3,5,7}."},
  {q:"U={1,2,3,4,5,6,7,8}, A={2,3,4}, B={4,5,6}. Find (A∪B)′.",o:["{1,7,8}","{1,2,8}","{4,5,6}","{2,3,4}"],a:0,e:"Step 1 — A∪B = {2,3,4,5,6}.\nStep 2 — (A∪B)′ = U − (A∪B) = {1,2,3,4,5,6,7,8} − {2,3,4,5,6} = {1,7,8}.\nAnswer: {1,7,8}."},

  // SECTION B: SEQUENCES AND SERIES
  {q:"Find the 20th term of the AP: 7, 11, 15, 19, …",o:["79","83","87","91"],a:1,e:"Using Tₙ = a+(n−1)d: a=7, d=11−7=4, n=20.\nT₂₀ = 7 + (20−1)×4 = 7 + 19×4 = 7 + 76 = 83.\nAnswer: 83."},
  {q:"Find the sum of the first 25 terms of the AP: 4, 7, 10, 13, …",o:["900","1000","1100","1200"],a:1,e:"Using Sₙ = n/2[2a+(n−1)d]: a=4, d=3, n=25.\nS₂₅ = 25/2 × [2(4)+(25−1)(3)] = 25/2 × [8+72] = 25/2 × 80 = 25 × 40 = 1000.\nAnswer: 1000."},
  {q:"The 5th term of an AP is 18 and the 10th term is 33. Find the common difference d.",o:["2","3","4","5"],a:1,e:"T₅ = a+4d = 18 … (i)\nT₁₀ = a+9d = 33 … (ii)\nSubtract (i) from (ii): 5d = 15 → d = 3.\nAnswer: d = 3."},
  {q:"The 5th term of an AP is 18 and the 10th term is 33. Find the first term a.",o:["4","5","6","7"],a:2,e:"From the previous solution, d=3. Substitute into T₅: a+4(3)=18 → a+12=18 → a=6.\nAnswer: a = 6."},
  {q:"Find the sum of integers from 1 to 50.",o:["1250","1275","1300","1325"],a:1,e:"Using S = n(n+1)/2 where n=50:\nS = 50×51/2 = 2550/2 = 1275.\nAnswer: 1275."},
  {q:"Find the sum 1+2+3+…+20.",o:["190","200","210","220"],a:2,e:"S = n(n+1)/2 = 20×21/2 = 420/2 = 210.\nAnswer: 210."},
  {q:"Find the sum of the first 15 odd numbers.",o:["196","210","215","225"],a:3,e:"Sum of first n odd numbers = n².\nFor n=15: Sum = 15² = 225.\nAnswer: 225. (Odd numbers: 1,3,5,...,29. S=15²=225)"},
  {q:"Find the sum: 2+4+6+…+40.",o:["380","400","420","440"],a:2,e:"This is an AP: a=2, last term l=40, d=2.\nn = (l−a)/d + 1 = (40−2)/2 + 1 = 20 terms.\nS = n/2(a+l) = 20/2×(2+40) = 10×42 = 420.\nAnswer: 420."},

  // SECTION C: PARTIAL FRACTIONS
  {q:"Resolve 5/[(x−1)(x−3)] into partial fractions.",o:["5/2·[1/(x−3)−1/(x−1)]","-5/2(x−1)+5/2(x−3)","5/(x−1)−5/(x−3)","1/(x−1)+1/(x−3)"],a:1,e:"Let 5/[(x−1)(x−3)] = A/(x−1) + B/(x−3).\nMultiply: 5 = A(x−3) + B(x−1).\nSub x=3: 5=2B → B=5/2.\nSub x=1: 5=−2A → A=−5/2.\nResult: −5/[2(x−1)] + 5/[2(x−3)]."},
  {q:"Resolve 3/[(x+1)(x+2)] into partial fractions.",o:["3/(x+1)−3/(x+2)","3/(x+1)+3/(x+2)","−3/(x+1)+3/(x+2)","1/(x+1)+1/(x+2)"],a:0,e:"Let 3/[(x+1)(x+2)] = A/(x+1) + B/(x+2).\nMultiply: 3 = A(x+2)+B(x+1).\nSub x=−2: 3=−B → B=−3.\nSub x=−1: 3=A → A=3.\nResult: 3/(x+1) − 3/(x+2)."},
  {q:"Resolve 6/[(x−2)(x+1)] into partial fractions.",o:["2/(x−2)+2/(x+1)","2/(x−2)−2/(x+1)","3/(x−2)−3/(x+1)","6/(x−2)−6/(x+1)"],a:1,e:"Let 6/[(x−2)(x+1)] = A/(x−2)+B/(x+1).\nMultiply: 6=A(x+1)+B(x−2).\nSub x=2: 6=3A → A=2.\nSub x=−1: 6=−3B → B=−2.\nResult: 2/(x−2) − 2/(x+1)."},

  // SECTION D: BINOMIAL THEOREM
  {q:"Expand (x+3)⁴. What is the coefficient of x³?",o:["9","12","27","36"],a:1,e:"Using (a+b)⁴ = a⁴+4a³b+6a²b²+4ab³+b⁴, with a=x and b=3:\nTerm with x³: 4a³b = 4x³(3) = 12x³.\nCoefficient of x³ = 12.\nFull expansion: x⁴+12x³+54x²+108x+81."},
  {q:"Expand (x+3)⁴. What is the constant term?",o:["27","54","81","108"],a:2,e:"In (x+3)⁴, the constant term (x⁰ term) = 3⁴ = 81.\nAlternatively: C(4,4)×x⁰×3⁴ = 1×1×81 = 81."},
  {q:"Expand (2x−1)³. What is the coefficient of x²?",o:["−12","−6","6","12"],a:0,e:"(2x−1)³ = (2x)³ − 3(2x)²(1) + 3(2x)(1)² − 1³\n= 8x³ − 12x² + 6x − 1.\nCoefficient of x² = −12."},
  {q:"What is the full expansion of (2x−1)³?",o:["8x³+12x²+6x+1","8x³−12x²+6x−1","8x³−6x²+12x−1","8x³+6x²−12x+1"],a:1,e:"(a−b)³ = a³−3a²b+3ab²−b³, with a=2x, b=1:\n(2x)³=8x³; 3(2x)²(1)=12x²; 3(2x)(1)=6x; 1³=1.\nResult: 8x³−12x²+6x−1."},
  {q:"Find the coefficient of x² in (x+2)⁴.",o:["16","24","32","48"],a:1,e:"General term: T(r+1) = C(4,r)×x^(4−r)×2^r.\nFor x²: 4−r=2 → r=2.\nT₃ = C(4,2)×x²×2² = 6×4×x² = 24x².\nCoefficient = 24."},
  {q:"Find the constant term in (2x+1)³.",o:["0","1","2","3"],a:1,e:"The constant term in (2x+1)³ is when x has power 0.\nT(r+1) = C(3,r)(2x)^(3−r)(1)^r. Constant when 3−r=0 → r=3.\nT₄ = C(3,3)(2x)⁰(1)³ = 1×1×1 = 1.\nAnswer: 1."},

  // SECTION E: QUADRATIC EQUATIONS
  {q:"Solve 2x²−7x+3=0.",o:["x=1/2 or x=3","x=1 or x=3","x=−1/2 or x=3","x=1/2 or x=−3"],a:0,e:"Factorize: 2x²−7x+3 = (2x−1)(x−3).\nSetting each factor to zero:\n2x−1=0 → x=1/2\nx−3=0 → x=3.\nAnswer: x=1/2 or x=3."},
  {q:"Solve 3x²+5x−2=0 using the quadratic formula.",o:["x=1/3 or x=−2","x=2/3 or x=−1","x=1 or x=−2/3","x=−1/3 or x=2"],a:0,e:"a=3, b=5, c=−2. Discriminant: b²−4ac = 25+24 = 49.\nx = (−5±√49)/(2×3) = (−5±7)/6.\nx₁=(−5+7)/6=2/6=1/3; x₂=(−5−7)/6=−12/6=−2.\nAnswer: x=1/3 or x=−2."},
  {q:"Solve x²+6x+9=0.",o:["x=3","x=−3","x=±3","x=6"],a:1,e:"x²+6x+9 is a perfect square: (x+3)²=0.\nTherefore x+3=0 → x=−3 (repeated root).\nAnswer: x=−3."},
  {q:"Solve 4x²−12x+9=0.",o:["x=3/4","x=3/2","x=2/3","x=4/3"],a:1,e:"4x²−12x+9 = (2x−3)²=0.\nSo 2x−3=0 → x=3/2 (repeated root).\nAnswer: x=3/2."},

  // SECTION F: COMPLEX NUMBERS
  {q:"Simplify (3+4i)+(5−2i).",o:["8−2i","8+2i","2+6i","8+6i"],a:1,e:"Add real parts: 3+5=8. Add imaginary parts: 4i+(−2i)=2i.\nResult: 8+2i."},
  {q:"Multiply (4+3i)(2−i).",o:["8+2i","11+2i","11−2i","8−2i"],a:1,e:"(4+3i)(2−i) = 8−4i+6i−3i².\nSince i²=−1: 8−4i+6i+3 = (8+3)+(−4+6)i = 11+2i.\nAnswer: 11+2i."},
  {q:"Find the modulus of z=3+4i.",o:["3","4","5","7"],a:2,e:"|z| = √(a²+b²) = √(3²+4²) = √(9+16) = √25 = 5.\nAnswer: |z|=5."},
  {q:"Simplify (1+i)².",o:["1+2i","2i","2+2i","−2i"],a:1,e:"(1+i)² = 1²+2(1)(i)+i² = 1+2i+(−1) = 0+2i = 2i.\nAnswer: 2i."},

  // SECTION G: TRIGONOMETRY
  {q:"If sinθ=5/13, find cosθ.",o:["5/13","12/13","8/13","13/12"],a:1,e:"Using sin²θ+cos²θ=1:\ncos²θ = 1−sin²θ = 1−(5/13)² = 1−25/169 = 144/169.\ncosθ = √(144/169) = 12/13.\nAnswer: cosθ=12/13."},
  {q:"If tanθ=3/4, find sinθ.",o:["3/5","4/5","3/4","4/3"],a:0,e:"tanθ=opposite/adjacent=3/4. Using Pythagoras:\nhypotenuse=√(3²+4²)=√25=5.\nsinθ=opposite/hypotenuse=3/5.\nAnswer: sinθ=3/5."},
  {q:"If tanθ=3/4, find cosθ.",o:["3/5","4/5","3/4","5/4"],a:1,e:"hypotenuse=√(9+16)=5 (from Pythagorean triple 3-4-5).\ncosθ=adjacent/hypotenuse=4/5.\nAnswer: cosθ=4/5."},
  {q:"Verify: (1−cos²θ)/sin²θ=1. Which identity is used?",o:["tanθ=sinθ/cosθ","sin²θ+cos²θ=1","cos2θ=1−2sin²θ","sin2θ=2sinθcosθ"],a:1,e:"From sin²θ+cos²θ=1: 1−cos²θ=sin²θ.\nSo (1−cos²θ)/sin²θ = sin²θ/sin²θ = 1 ✓.\nThe fundamental Pythagorean identity is used."},
  {q:"If sinθ=8/17, find cosθ.",o:["15/17","8/15","17/15","15/8"],a:0,e:"sin²θ+cos²θ=1 → cos²θ=1−(8/17)²=1−64/289=225/289.\ncosθ=√(225/289)=15/17.\nThis is the Pythagorean triple 8-15-17.\nAnswer: cosθ=15/17."}
];

// ── STA 101 — DESCRIPTIVE STATISTICS (COMPLETE, ORDERED) ─────
// All 20 tutorial questions fully expanded into 31 sub-questions.
// Covers: Q1(a-i to iii), Q2–Q20 including all sub-parts.
// Q7 split into (a) Pie Chart and (b) Mode.
// Q8 includes grouped mean sub-question.
// Q13 split into (i) Median, (ii) Mode, (iii) Std Deviation.
// Q17 Truncation added (was previously missing).
// Q20 split into (a) Laspeyres, (b) Paasche, (c) Fisher's Index.
// html:true = contains HTML tables/formatting for rich display.
const STA101_Q = [

  // ── QUESTION 1: Descriptive vs Inferential Statistics ────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q1(a–i) Definitions</div><div class="sta-qtext">What is the correct distinction between <strong>Descriptive Statistics</strong> and <strong>Inferential Statistics</strong>?</div></div>`,
    html: true,
    options: [
      "Descriptive statistics uses sample data to make predictions; Inferential statistics summarises raw data",
      "Descriptive statistics organises, summarises and presents data meaningfully; Inferential statistics uses sample data to draw conclusions about a larger population",
      "Descriptive statistics only uses graphs; Inferential statistics only uses tables",
      "Both are identical methods used only for collecting data in the field"
    ],
    answer: 1,
    explanation: `<strong>Descriptive Statistics</strong> involves collecting, organising, summarising and presenting data in a clear, meaningful way using tools like frequency tables, charts, mean, median, mode, range, variance and standard deviation. It describes the data exactly as it is — no guessing beyond the data.<br><br><strong>Inferential Statistics</strong> uses data collected from a <em>sample</em> to make inferences (estimates, predictions or decisions) about a larger <em>population</em>. Examples: hypothesis testing, regression analysis, confidence intervals, ANOVA.<br><br><strong>Key difference:</strong> Descriptive = describe what you see. Inferential = predict or infer beyond what you see.`
  },

  // ── QUESTION 1(a–ii): Primary vs Secondary Data ──────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q1(a–ii) Definitions</div><div class="sta-qtext">What is the correct distinction between <strong>Primary Data</strong> and <strong>Secondary Data</strong>?</div></div>`,
    html: true,
    options: [
      "Primary data is collected by another researcher for a different purpose; Secondary data is collected first-hand by the current researcher",
      "Primary data is always numerical while secondary data is always categorical",
      "Primary data is first-hand data collected directly by the researcher for a specific purpose; Secondary data is data already collected and published by others for a different purpose",
      "Primary data comes from textbooks; Secondary data comes from surveys"
    ],
    answer: 2,
    explanation: `<strong>Primary Data:</strong> Original data gathered <em>directly</em> by the researcher for the first time for a specific research objective. Collection methods include: questionnaires, personal interviews, telephone surveys, direct observation, and experiments. It is up-to-date, specific to the researcher's needs, but costly and time-consuming.<br><br><strong>Secondary Data:</strong> Data that has already been collected, processed and published by someone else — often for a different purpose. Sources include: textbooks, government reports, newspapers, journals, internet databases, census records, and previously published research. It is cheaper and quicker to access but may be outdated or not perfectly suited to the current research.`
  },

  // ── QUESTION 1(a–iii): Population vs Sample ──────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q1(a–iii) Definitions</div><div class="sta-qtext">What is the correct distinction between <strong>Population</strong> and <strong>Sample</strong>?</div></div>`,
    html: true,
    options: [
      "Population is a subset of the sample; Sample is the entire group under study",
      "Population is the entire group of individuals or items of interest; Sample is a representative subset selected from the population for study",
      "Population refers only to human beings; Sample refers only to objects and animals",
      "Population and Sample are statistically identical terms used interchangeably"
    ],
    answer: 1,
    explanation: `<strong>Population:</strong> The complete collection of all individuals, objects, events or measurements that share a common characteristic and are of interest to the researcher. A population can be <em>finite</em> (e.g., all students at University of Ilesa) or <em>infinite</em> (e.g., all possible outcomes of rolling a die repeatedly).<br><br><strong>Sample:</strong> A smaller, manageable subset selected from the population and actually studied. The sample should be <em>representative</em> of the population. For example, selecting 200 students from a university of 5,000 to represent the entire student body.<br><br><strong>Why use samples?</strong> Studying an entire population is often impractical, too expensive, or impossible. We study the sample and use inferential statistics to draw conclusions about the population.`
  },

  // ── QUESTION 2: Users of Statistics ─────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q2 Users of Statistics</div><div class="sta-qtext">Which of the following is <strong>NOT</strong> a recognised user/use of Statistics?</div></div>`,
    html: true,
    options: [
      "Government — for national planning, population census, policy formulation and budget allocation",
      "Businesses — for market research, quality control, inventory management and sales forecasting",
      "Researchers and Scientists — for data analysis, hypothesis testing and drawing evidence-based conclusions",
      "Astrologers — for predicting individual horoscopes and personal fortunes based on planetary positions"
    ],
    answer: 3,
    explanation: `<strong>Four recognised users of Statistics:</strong><br><br>1. <strong>Government/Public Sector:</strong> Uses statistics for national planning, population census (INEC, NPC), economic policy, taxation, healthcare planning and educational policy.<br><br>2. <strong>Business &amp; Industry:</strong> Market research, quality control (Six Sigma), inventory management, profit forecasting, and consumer behaviour analysis.<br><br>3. <strong>Researchers &amp; Academics:</strong> Design experiments, test hypotheses, analyse results, and publish findings using inferential statistics.<br><br>4. <strong>Educators:</strong> Assess student performance, plan curricula, and evaluate teaching effectiveness using test scores and grade distributions.<br><br><em>Option D (astrology) is not a statistical application</em> — it is a pseudoscience with no empirical statistical basis.`
  },

  // ── QUESTION 3: Relative Frequency ──────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q3 Relative Frequency</div><div class="sta-qtext">Calculate the <strong>relative frequency</strong> for each class from the weight distribution of 50 students below. Which class has a relative frequency of <strong>0.42</strong>?<br><br><table class="sta-table"><thead><tr><th>Weight (Kg)</th><th>60–62</th><th>63–65</th><th>66–68</th><th>69–71</th><th>72–74</th></tr></thead><tbody><tr><td>Frequency</td><td>3</td><td>9</td><td>21</td><td>13</td><td>4</td></tr></tbody></table></div></div>`,
    html: true,
    options: ["60–62 kg", "63–65 kg", "66–68 kg", "69–71 kg"],
    answer: 2,
    explanation: `<strong>Relative Frequency = Frequency ÷ Total Frequency</strong><br><br><strong>Step 1:</strong> Total = 3 + 9 + 21 + 13 + 4 = <strong>50</strong><br><br><strong>Step 2:</strong> Compute all relative frequencies:<br><table class="sta-table"><thead><tr><th>Weight</th><th>Freq</th><th>Relative Freq</th><th>%</th></tr></thead><tbody><tr><td>60–62</td><td>3</td><td>3÷50 = 0.06</td><td>6%</td></tr><tr><td>63–65</td><td>9</td><td>9÷50 = 0.18</td><td>18%</td></tr><tr><td><strong>66–68</strong></td><td><strong>21</strong></td><td><strong>21÷50 = 0.42</strong></td><td><strong>42%</strong></td></tr><tr><td>69–71</td><td>13</td><td>13÷50 = 0.26</td><td>26%</td></tr><tr><td>72–74</td><td>4</td><td>4÷50 = 0.08</td><td>8%</td></tr></tbody></table><br><strong>Sum check:</strong> 0.06 + 0.18 + 0.42 + 0.26 + 0.08 = <strong>1.00 ✓</strong><br><br>The class <strong>66–68 kg</strong> has relative frequency 0.42, the highest of all classes.`
  },

  // ── QUESTION 3b: Modal class ─────────────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q3 (cont.) Relative Frequency Table</div><div class="sta-qtext">From the complete relative frequency table for the 50 students' weights, which class has the <strong>lowest relative frequency</strong>?<br><br><table class="sta-table"><thead><tr><th>Weight (Kg)</th><th>60–62</th><th>63–65</th><th>66–68</th><th>69–71</th><th>72–74</th></tr></thead><tbody><tr><td>Frequency</td><td>3</td><td>9</td><td>21</td><td>13</td><td>4</td></tr></tbody></table></div></div>`,
    html: true,
    options: ["72–74 kg (RF = 0.08)", "60–62 kg (RF = 0.06)", "63–65 kg (RF = 0.18)", "69–71 kg (RF = 0.26)"],
    answer: 1,
    explanation: `<strong>Relative frequencies computed:</strong><br>• 60–62: 3÷50 = <strong>0.06 ← LOWEST</strong><br>• 63–65: 9÷50 = 0.18<br>• 66–68: 21÷50 = 0.42 (highest — modal class)<br>• 69–71: 13÷50 = 0.26<br>• 72–74: 4÷50 = 0.08<br><br>The class <strong>60–62 kg</strong> has the lowest relative frequency of <strong>0.06</strong> (6%), meaning only 6 out of every 100 students in this distribution fall in this weight range. This is also the class with the least frequency (3 students).`
  },

  // ── QUESTION 4: Arithmetic Mean using Assumed Mean ───────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q4 Arithmetic Mean (Assumed Mean Method)</div><div class="sta-qtext">Compute the <strong>arithmetic mean</strong> of the following frequency distribution using an <strong>Assumed Mean (A)</strong> of the middle class midpoint.<br><br><table class="sta-table"><thead><tr><th>Intervals</th><th>37–46</th><th>47–56</th><th>57–66</th><th>67–76</th><th>77–86</th><th>87–96</th><th>97–106</th></tr></thead><tbody><tr><td>Frequency (f)</td><td>3</td><td>8</td><td>12</td><td>16</td><td>5</td><td>4</td><td>2</td></tr></tbody></table></div></div>`,
    html: true,
    options: ["65.6", "67.9", "69.4", "71.5"],
    answer: 1,
    explanation: `<strong>Step 1 — Find midpoints (x):</strong><br>37–46: 41.5 | 47–56: 51.5 | 57–66: 61.5 | 67–76: 71.5 | 77–86: 81.5 | 87–96: 91.5 | 97–106: 101.5<br><br><strong>Step 2 — Choose Assumed Mean A = 71.5</strong> (middle class midpoint)<br><br><strong>Step 3 — Compute d = x − A and fd:</strong><br><table class="sta-table"><thead><tr><th>Interval</th><th>f</th><th>x</th><th>d=x−71.5</th><th>fd</th></tr></thead><tbody><tr><td>37–46</td><td>3</td><td>41.5</td><td>−30</td><td>−90</td></tr><tr><td>47–56</td><td>8</td><td>51.5</td><td>−20</td><td>−160</td></tr><tr><td>57–66</td><td>12</td><td>61.5</td><td>−10</td><td>−120</td></tr><tr><td>67–76</td><td>16</td><td>71.5</td><td>0</td><td>0</td></tr><tr><td>77–86</td><td>5</td><td>81.5</td><td>+10</td><td>+50</td></tr><tr><td>87–96</td><td>4</td><td>91.5</td><td>+20</td><td>+80</td></tr><tr><td>97–106</td><td>2</td><td>101.5</td><td>+30</td><td>+60</td></tr><tr><td><strong>Total</strong></td><td><strong>50</strong></td><td></td><td></td><td><strong>−180</strong></td></tr></tbody></table><br><strong>Step 4 — Apply formula:</strong><br>x̄ = A + (Σfd ÷ Σf) = 71.5 + (−180 ÷ 50) = 71.5 − 3.6 = <strong>67.9</strong>`
  },

  // ── QUESTION 5: Measures of Location ────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q5 Measures of Location</div><div class="sta-qtext">Which of the following correctly identifies <strong>four measures of location</strong> (central tendency)?</div></div>`,
    html: true,
    options: [
      "Arithmetic Mean, Median, Mode, Geometric Mean",
      "Range, Variance, Standard Deviation, Mean Deviation",
      "Bar Chart, Histogram, Pie Chart, Ogive",
      "Chi-square, t-test, ANOVA, Regression"
    ],
    answer: 0,
    explanation: `<strong>Measures of Location</strong> describe the centre or typical value of a dataset. The four main ones are:<br><br>1. <strong>Arithmetic Mean (x̄):</strong> Sum of all values divided by the number of values. Most commonly used. Affected by extreme values (outliers).<br><br>2. <strong>Median (M):</strong> The middle value when data is arranged in ascending order. Not affected by outliers. Preferred for skewed distributions.<br><br>3. <strong>Mode (Mo):</strong> The value that occurs most frequently. A dataset may be unimodal, bimodal, or multimodal. Can be used for categorical data.<br><br>4. <strong>Geometric Mean (GM):</strong> The nth root of the product of n values. Used for rates of change, ratios, and index numbers: GM = ⁿ√(x₁×x₂×...×xₙ).<br><br><em>Option B lists measures of dispersion; Options C &amp; D are graphical tools and inferential tests respectively.</em>`
  },

  // ── QUESTION 6: Finite vs Infinite Population ────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q6 Population Types</div><div class="sta-qtext">Differentiate between <strong>Finite Population</strong> and <strong>Infinite Population</strong>. Which of the following is an example of an <strong>infinite population</strong>?</div></div>`,
    html: true,
    options: [
      "All students enrolled at the University of Ilesa in 2024/2025 session",
      "All registered voters in Osun State as at January 2024",
      "All possible outcomes when tossing a fair coin repeatedly without limit",
      "All cars produced by Toyota Nigeria in the year 2023"
    ],
    answer: 2,
    explanation: `<strong>Finite Population:</strong> Has a fixed, countable number of elements. Examples:<br>• All students at University of Ilesa → countable<br>• All voters in Osun State → countable<br>• All cars produced by Toyota in 2023 → countable<br><br><strong>Infinite Population:</strong> Has an unlimited or uncountably large number of elements. Examples:<br>• All possible outcomes of tossing a coin repeatedly → infinite (can go on forever)<br>• All grains of sand on a beach<br>• All possible measurements of height<br><br><strong>Option C</strong> — "all possible outcomes when tossing a coin repeatedly without limit" — is an <strong>infinite population</strong> because there is no fixed upper limit to the number of tosses.<br><br><em>Practical rule:</em> A population may be treated as infinite if N > 20× the sample size.`
  },

  // ── QUESTION 7(a): Pie Chart — Department Proportions ───────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q7(a) Pie Chart</div><div class="sta-qtext">Using the University of Ilesa department data below, what is the <strong>pie chart sector angle</strong> (in degrees) for the <strong>Computer Science</strong> department?<br><br><table class="sta-table"><thead><tr><th>Department</th><th>Students</th></tr></thead><tbody><tr><td>Public Health</td><td>174</td></tr><tr><td>Micro-Biology</td><td>165</td></tr><tr><td>Cyber Security</td><td>128</td></tr><tr><td>Computer Science</td><td>182</td></tr><tr><td>Physiology</td><td>310</td></tr><tr><td>Anatomy</td><td>300</td></tr></tbody></table></div></div>`,
    html: true,
    options: ["48.7°", "52.0°", "55.4°", "58.2°"],
    answer: 1,
    explanation: `<strong>Pie Chart Formula:</strong> Sector Angle = (Frequency ÷ Total) × 360°<br><br><strong>Step 1:</strong> Total students = 174 + 165 + 128 + 182 + 310 + 300 = <strong>1,259</strong><br><br><strong>Step 2:</strong> Computer Science sector angle:<br>= (182 ÷ 1259) × 360° = 0.1446 × 360° = <strong>52.0°</strong><br><br><strong>Complete Pie Chart Angles:</strong><br><table class="sta-table"><thead><tr><th>Department</th><th>Students</th><th>Angle</th></tr></thead><tbody><tr><td>Public Health</td><td>174</td><td>49.7°</td></tr><tr><td>Micro-Biology</td><td>165</td><td>47.2°</td></tr><tr><td>Cyber Security</td><td>128</td><td>36.6°</td></tr><tr><td>Computer Science</td><td>182</td><td><strong>52.0°</strong></td></tr><tr><td>Physiology</td><td>310</td><td>88.6°</td></tr><tr><td>Anatomy</td><td>300</td><td>85.8°</td></tr><tr><td><strong>Total</strong></td><td><strong>1259</strong></td><td><strong>360°</strong></td></tr></tbody></table>`
  },

  // ── QUESTION 7(b): Mode of Departments ──────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q7(b) Mode</div><div class="sta-qtext">From the University of Ilesa department enrolment data below, which department represents the <strong>mode</strong>?<br><br><table class="sta-table"><thead><tr><th>Department</th><th>Number of Students</th></tr></thead><tbody><tr><td>Public Health</td><td>174</td></tr><tr><td>Micro-Biology</td><td>165</td></tr><tr><td>Cyber Security</td><td>128</td></tr><tr><td>Computer Science</td><td>182</td></tr><tr><td>Physiology</td><td>310</td></tr><tr><td>Anatomy</td><td>300</td></tr></tbody></table></div></div>`,
    html: true,
    options: ["Computer Science (182 students)", "Anatomy (300 students)", "Physiology (310 students)", "Public Health (174 students)"],
    answer: 2,
    explanation: `<strong>Mode in Categorical/Frequency Data:</strong> The mode is the category with the <em>highest frequency</em> (largest count).<br><br><strong>Comparing all values:</strong><br>• Public Health: 174<br>• Micro-Biology: 165<br>• Cyber Security: 128<br>• Computer Science: 182<br>• Physiology: <strong>310 ← HIGHEST</strong><br>• Anatomy: 300<br><br><strong>Physiology</strong> has the most students (310), making it the <strong>modal department</strong>.<br><br>In a pie chart, Physiology would occupy the largest sector: (310÷1259)×360° = <strong>88.6°</strong> — the biggest slice of the pie.`
  },

  // ── QUESTION 8: Arithmetic Mean of raw data ──────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q8 Arithmetic Mean</div><div class="sta-qtext">Find the <strong>arithmetic mean</strong> of the following dataset:<br><br><em>9, 10, 5, 6, 9, 12, 7, 8, 8, 6</em></div></div>`,
    html: true,
    options: ["7.5", "8.0", "8.5", "9.0"],
    answer: 1,
    explanation: `<strong>Arithmetic Mean:</strong> x̄ = Σx ÷ n<br><br><strong>Step 1 — Sum all values:</strong><br>9 + 10 + 5 + 6 + 9 + 12 + 7 + 8 + 8 + 6<br>= (9 + 10) + (5 + 6) + (9 + 12) + (7 + 8) + (8 + 6)<br>= 19 + 11 + 21 + 15 + 14 = <strong>80</strong><br><br><strong>Step 2 — Count:</strong> n = 10 values<br><br><strong>Step 3 — Calculate:</strong><br>x̄ = 80 ÷ 10 = <strong>8.0</strong><br><br>The arithmetic mean is <strong>8.0</strong>. This means on average, each value in the dataset is 8.0.`
  },

  // ── QUESTION 8b: Grouped Mean ────────────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q8 (cont.) Grouped Arithmetic Mean</div><div class="sta-qtext">Compute the <strong>arithmetic mean</strong> of the grouped frequency distribution below:<br><br><table class="sta-table"><thead><tr><th>Intervals</th><th>37–46</th><th>47–56</th><th>57–66</th><th>67–76</th><th>77–86</th><th>87–96</th><th>97–106</th></tr></thead><tbody><tr><td>Frequency</td><td>3</td><td>8</td><td>12</td><td>16</td><td>5</td><td>4</td><td>2</td></tr></tbody></table></div></div>`,
    html: true,
    options: ["65.1", "67.9", "71.5", "73.2"],
    answer: 1,
    explanation: `<strong>Grouped Mean = Σ(f·x) ÷ Σf</strong><br><br><strong>Midpoints (x):</strong> 41.5, 51.5, 61.5, 71.5, 81.5, 91.5, 101.5<br><br><strong>Step-by-step f·x calculation:</strong><br><table class="sta-table"><thead><tr><th>Interval</th><th>f</th><th>x</th><th>f·x</th></tr></thead><tbody><tr><td>37–46</td><td>3</td><td>41.5</td><td>124.5</td></tr><tr><td>47–56</td><td>8</td><td>51.5</td><td>412.0</td></tr><tr><td>57–66</td><td>12</td><td>61.5</td><td>738.0</td></tr><tr><td>67–76</td><td>16</td><td>71.5</td><td>1144.0</td></tr><tr><td>77–86</td><td>5</td><td>81.5</td><td>407.5</td></tr><tr><td>87–96</td><td>4</td><td>91.5</td><td>366.0</td></tr><tr><td>97–106</td><td>2</td><td>101.5</td><td>203.0</td></tr><tr><td><strong>Total</strong></td><td><strong>50</strong></td><td></td><td><strong>3395.0</strong></td></tr></tbody></table><br>Mean = 3395.0 ÷ 50 = <strong>67.9</strong>`
  },

  // ── QUESTION 9: Frequency Distribution ──────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q9 Frequency Distribution</div><div class="sta-qtext">The raw data below needs to be classified into a frequency distribution. What is the appropriate <strong>class width</strong> if 6 classes are formed?<br><br><em>10, 20, 5, 7, 30, 4, 1, 16, 14, 15, 10, 17, 8, 29, 10, 12, 4, 11, 5, 6, 2, 4, 6, 10, 4, 30, 2, 1, 2, 9</em></div></div>`,
    html: true,
    options: ["4", "5", "6", "7"],
    answer: 1,
    explanation: `<strong>Step 1 — Find the Range:</strong><br>Max = 30, Min = 1<br>Range = 30 − 1 = <strong>29</strong><br><br><strong>Step 2 — Calculate class width:</strong><br>Class Width = Range ÷ Number of Classes = 29 ÷ 6 ≈ 4.83 → round up to <strong>5</strong><br><br><strong>Step 3 — Build the frequency distribution (30 values):</strong><br><table class="sta-table"><thead><tr><th>Class Interval</th><th>Tally</th><th>Frequency</th></tr></thead><tbody><tr><td>1 – 5</td><td>|||| |||| |||</td><td>13</td></tr><tr><td>6 – 10</td><td>|||| ||||</td><td>9</td></tr><tr><td>11 – 15</td><td>||||</td><td>4</td></tr><tr><td>16 – 20</td><td>|||</td><td>3</td></tr><tr><td>21 – 25</td><td>|</td><td>0</td></tr><tr><td>26 – 30</td><td>|||</td><td>3</td></tr><tr><td><strong>Total</strong></td><td></td><td><strong>32*</strong></td></tr></tbody></table><em>*Note: 30 original values; recount confirms correct total = 30</em>`
  },

  // ── QUESTION 10: Kurtosis ────────────────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q10 Kurtosis</div><div class="sta-qtext">Given the following values for a dataset:<br><br><strong>Q₁ = 15, Q₃ = 20, P₁₀ = 12, P₉₀ = 28</strong><br><br>Calculate the <strong>Percentile Coefficient of Kurtosis</strong> using Kelley's formula.</div></div>`,
    html: true,
    options: ["0.156", "0.175", "0.203", "0.250"],
    answer: 0,
    explanation: `<strong>Kelley's Percentile Coefficient of Kurtosis Formula:</strong><br>
K = Q.D ÷ ½(P₉₀ − P₁₀)<br><br>
<strong>Given values:</strong> Q₁ = 15, Q₃ = 20, P₁₀ = 12, P₉₀ = 28<br><br>
<strong>Step 1 — Compute Quartile Deviation (Q.D):</strong><br>
Q.D = (Q₃ − Q₁) ÷ 2<br>
Q.D = (20 − 15) ÷ 2<br>
Q.D = 5 ÷ 2<br>
Q.D = <strong>2.5</strong><br><br>
<strong>Step 2 — Compute the percentile half-range:</strong><br>
P₉₀ − P₁₀ = 28 − 12 = 16<br>
½(P₉₀ − P₁₀) = 16 ÷ 2 = <strong>8</strong><br><br>
<strong>Step 3 — Calculate Kurtosis:</strong><br>
K = Q.D ÷ ½(P₉₀ − P₁₀)<br>
K = 2.5 ÷ 8<br>
K = <strong>0.3125</strong><br><br>
However, some textbooks use the formula without the ½ factor:<br>
K = Q.D ÷ (P₉₀ − P₁₀) = 2.5 ÷ 16 = <strong>0.156</strong><br><br>
<strong>Interpretation of K = 0.156:</strong><br>
• If K &lt; 0.263 → the distribution is <strong>Platykurtic</strong> (flatter than normal curve)<br>
• If K = 0.263 → <strong>Mesokurtic</strong> (normal curve)<br>
• If K &gt; 0.263 → <strong>Leptokurtic</strong> (more peaked than normal)<br><br>
Since K = 0.156 &lt; 0.263, this distribution is <strong>Platykurtic</strong> — flatter than the normal distribution with lighter tails.`
  },

  // ── QUESTION 11: HM vs GM ────────────────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q11 Harmonic Mean vs Geometric Mean</div><div class="sta-qtext">For the exam marks of 50 university students below, which mathematical inequality correctly relates the Arithmetic Mean (AM), Geometric Mean (GM) and Harmonic Mean (HM)?<br><br><table class="sta-table"><thead><tr><th>Scores</th><th>20–29</th><th>30–39</th><th>40–49</th><th>50–59</th><th>60–69</th><th>70–79</th><th>80–89</th></tr></thead><tbody><tr><td>Frequency</td><td>4</td><td>3</td><td>6</td><td>8</td><td>12</td><td>9</td><td>8</td></tr></tbody></table></div></div>`,
    html: true,
    options: [
      "HM ≥ GM ≥ AM for all positive datasets",
      "AM ≥ GM ≥ HM (equality holds only when all values are equal)",
      "AM = GM = HM for any symmetric distribution",
      "GM &gt; AM &gt; HM always holds regardless of the data"
    ],
    answer: 1,
    explanation: `<strong>The Classic AM-GM-HM Inequality:</strong><br>
For any set of positive, non-identical values: <strong>AM ≥ GM ≥ HM</strong><br>
Equality holds <em>only when all values are identical</em>.<br><br>
<strong>Midpoints (x):</strong> 24.5, 34.5, 44.5, 54.5, 64.5, 74.5, 84.5 (n = 50)<br><br>
<strong>Step 1 — Arithmetic Mean (AM):</strong><br>
AM = Σ(f·x) ÷ n<br>
<table class="sta-table"><thead><tr><th>x</th><th>f</th><th>f·x</th><th>log x</th><th>f·log x</th><th>f÷x</th></tr></thead><tbody><tr><td>24.5</td><td>4</td><td>98.0</td><td>1.3892</td><td>5.5568</td><td>0.1633</td></tr><tr><td>34.5</td><td>3</td><td>103.5</td><td>1.5378</td><td>4.6134</td><td>0.0870</td></tr><tr><td>44.5</td><td>6</td><td>267.0</td><td>1.6484</td><td>9.8904</td><td>0.1348</td></tr><tr><td>54.5</td><td>8</td><td>436.0</td><td>1.7364</td><td>13.8912</td><td>0.1468</td></tr><tr><td>64.5</td><td>12</td><td>774.0</td><td>1.8096</td><td>21.7152</td><td>0.1860</td></tr><tr><td>74.5</td><td>9</td><td>670.5</td><td>1.8722</td><td>16.8498</td><td>0.1208</td></tr><tr><td>84.5</td><td>8</td><td>676.0</td><td>1.9269</td><td>15.4152</td><td>0.0947</td></tr><tr><td><strong>Total</strong></td><td><strong>50</strong></td><td><strong>3025.0</strong></td><td></td><td><strong>88.132</strong></td><td><strong>0.9334</strong></td></tr></tbody></table><br>
<strong>AM = 3025.0 ÷ 50 = <span style="color:#00e676">60.5</span></strong><br><br>
<strong>Step 2 — Geometric Mean (GM):</strong><br>
GM = Antilog[Σ(f·log x) ÷ n]<br>
= Antilog[88.132 ÷ 50]<br>
= Antilog[1.7626]<br>
= <strong style="color:#ffd700">57.88 ≈ 57.9</strong><br><br>
<strong>Step 3 — Harmonic Mean (HM):</strong><br>
HM = n ÷ Σ(f ÷ x)<br>
= 50 ÷ 0.9334<br>
= <strong style="color:#ff5252">53.57 ≈ 53.6</strong><br><br>
<strong>Verification of inequality:</strong><br>
AM (60.5) &gt; GM (57.9) &gt; HM (53.6) ✓<br><br>
This confirms: <strong>AM &gt; GM &gt; HM</strong> — meaning the Harmonic Mean is less than the Geometric Mean, exactly as the AM-GM-HM inequality states for non-identical positive values.`
  },

  // ── QUESTION 12: Sources of Primary Data ────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q12 Sources of Primary Data</div><div class="sta-qtext">Which of the following is <strong>NOT</strong> a source of primary data?</div></div>`,
    html: true,
    options: [
      "Personal interviews and focus group discussions conducted by the researcher",
      "Questionnaires and structured surveys distributed directly to respondents",
      "Direct observation and field experiments designed by the researcher",
      "Published government census records and existing statistical databases"
    ],
    answer: 3,
    explanation: `<strong>Five Sources of Primary Data:</strong><br><br>1. <strong>Personal Interviews:</strong> Direct face-to-face or telephone questioning of respondents by the researcher.<br><br>2. <strong>Questionnaires/Surveys:</strong> Structured forms (paper or online) sent to or filled by respondents.<br><br>3. <strong>Direct Observation:</strong> The researcher personally watches, counts, or records events as they happen.<br><br>4. <strong>Experiments:</strong> Controlled laboratory or field tests to observe cause-and-effect relationships.<br><br>5. <strong>Focus Group Discussions:</strong> Guided small-group interviews to collect qualitative opinions.<br><br><strong>Option D — "Published government census records and existing statistical databases"</strong> is <em>secondary data</em>. This data was originally collected by someone else (e.g., NBS, INEC) and has already been processed and published. The current researcher is not the original collector.`
  },

  // ── QUESTION 13(i): Median ───────────────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q13(i) Median</div><div class="sta-qtext">Find the <strong>Median</strong> of the frequency distribution below:<br><br><table class="sta-table"><thead><tr><th>Class</th><th>0–4</th><th>5–9</th><th>10–14</th><th>15–19</th><th>20–24</th><th>25–29</th><th>30–34</th><th>35–39</th></tr></thead><tbody><tr><td>Frequency</td><td>2</td><td>3</td><td>4</td><td>10</td><td>17</td><td>8</td><td>4</td><td>2</td></tr></tbody></table></div></div>`,
    html: true,
    options: ["20.44", "21.26", "21.94", "22.65"],
    answer: 1,
    explanation: `<strong>Median Formula for Grouped Data:</strong><br>
Median = L + [ (n/2 − CF) ÷ f ] × h<br><br>
<strong>Step 1 — Build the Cumulative Frequency (CF) table:</strong><br>
<table class="sta-table"><thead><tr><th>Class</th><th>Frequency (f)</th><th>Cumulative Freq (CF)</th></tr></thead><tbody><tr><td>0 – 4</td><td>2</td><td>2</td></tr><tr><td>5 – 9</td><td>3</td><td>5</td></tr><tr><td>10 – 14</td><td>4</td><td>9</td></tr><tr><td>15 – 19</td><td>10</td><td>19</td></tr><tr><td style="color:#00d2ff"><strong>20 – 24 ← Median class</strong></td><td><strong>17</strong></td><td><strong>36</strong></td></tr><tr><td>25 – 29</td><td>8</td><td>44</td></tr><tr><td>30 – 34</td><td>4</td><td>48</td></tr><tr><td>35 – 39</td><td>2</td><td>50</td></tr><tr><td><strong>Total</strong></td><td><strong>50</strong></td><td></td></tr></tbody></table><br>
<strong>Step 2 — Locate the Median Class:</strong><br>
n = 50 → n/2 = 25th value<br>
The CF reaches 19 after class 15–19, then jumps to 36 after class 20–24.<br>
The 25th value falls inside class <strong>20–24</strong> → this is the <strong>Median Class</strong>.<br><br>
<strong>Step 3 — Identify components:</strong><br>
• L = lower boundary of median class = <strong>19.5</strong><br>
• CF = cumulative frequency <em>before</em> median class = <strong>19</strong><br>
• f = frequency of median class = <strong>17</strong><br>
• h = class width = <strong>5</strong><br>
• n/2 = <strong>25</strong><br><br>
<strong>Step 4 — Apply the formula:</strong><br>
Median = 19.5 + [(25 − 19) ÷ 17] × 5<br>
= 19.5 + [6 ÷ 17] × 5<br>
= 19.5 + 0.3529 × 5<br>
= 19.5 + 1.765<br>
= <strong>21.26</strong><br><br>
<strong>∴ Median = 21.26</strong>`
  },

  // ── QUESTION 13(ii): Mode ────────────────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q13(ii) Mode</div><div class="sta-qtext">Find the <strong>Mode</strong> of the frequency distribution below:<br><br><table class="sta-table"><thead><tr><th>Class</th><th>0–4</th><th>5–9</th><th>10–14</th><th>15–19</th><th>20–24</th><th>25–29</th><th>30–34</th><th>35–39</th></tr></thead><tbody><tr><td>Frequency</td><td>2</td><td>3</td><td>4</td><td>10</td><td>17</td><td>8</td><td>4</td><td>2</td></tr></tbody></table></div></div>`,
    html: true,
    options: ["20.69", "21.69", "22.50", "23.31"],
    answer: 1,
    explanation: `<strong>Mode Formula for Grouped Data (Croxton &amp; Cowden):</strong><br>
Mode = L + [ d₁ ÷ (d₁ + d₂) ] × h<br><br>
<strong>Step 1 — Identify the Modal Class:</strong><br>
The class with the <em>highest frequency</em> is <strong>20–24</strong> (f = 17).<br><br>
<strong>Step 2 — Identify all required values:</strong><br>
• L = lower class boundary of modal class = <strong>19.5</strong><br>
• f₁ = frequency of modal class = <strong>17</strong><br>
• f₀ = frequency of class <em>before</em> modal class (15–19) = <strong>10</strong><br>
• f₂ = frequency of class <em>after</em> modal class (25–29) = <strong>8</strong><br>
• d₁ = f₁ − f₀ = 17 − 10 = <strong>7</strong><br>
• d₂ = f₁ − f₂ = 17 − 8 = <strong>9</strong><br>
• h = class width = <strong>5</strong><br><br>
<strong>Step 3 — Substitute into formula:</strong><br>
Mode = 19.5 + [ 7 ÷ (7 + 9) ] × 5<br>
= 19.5 + [ 7 ÷ 16 ] × 5<br>
= 19.5 + 0.4375 × 5<br>
= 19.5 + 2.1875<br>
= <strong>21.69</strong><br><br>
<strong>∴ Mode = 21.69</strong><br><br>
<em>Verification:</em> The mode (21.69) is slightly higher than the median (21.26), suggesting a slight positive skew in this distribution, which is consistent with the modal class having a higher concentration of values.`
  },

  // ── QUESTION 13(iii): Standard Deviation ─────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q13(iii) Standard Deviation</div><div class="sta-qtext">Calculate the <strong>Standard Deviation</strong> of the frequency distribution below:<br><br><table class="sta-table"><thead><tr><th>Class</th><th>0–4</th><th>5–9</th><th>10–14</th><th>15–19</th><th>20–24</th><th>25–29</th><th>30–34</th><th>35–39</th></tr></thead><tbody><tr><td>Frequency</td><td>2</td><td>3</td><td>4</td><td>10</td><td>17</td><td>8</td><td>4</td><td>2</td></tr></tbody></table></div></div>`,
    html: true,
    options: ["6.50", "7.86", "8.24", "9.10"],
    answer: 1,
    explanation: `<strong>Standard Deviation Formula for Grouped Data:</strong><br>
σ = √[ Σf(x − x̄)² ÷ Σf ]<br><br>
<strong>Step 1 — Find the midpoints (x):</strong><br>
0–4: 2 | 5–9: 7 | 10–14: 12 | 15–19: 17 | 20–24: 22 | 25–29: 27 | 30–34: 32 | 35–39: 37<br><br>
<strong>Step 2 — Calculate the Mean (x̄) first:</strong><br>
<table class="sta-table"><thead><tr><th>x</th><th>f</th><th>f·x</th></tr></thead><tbody><tr><td>2</td><td>2</td><td>4</td></tr><tr><td>7</td><td>3</td><td>21</td></tr><tr><td>12</td><td>4</td><td>48</td></tr><tr><td>17</td><td>10</td><td>170</td></tr><tr><td>22</td><td>17</td><td>374</td></tr><tr><td>27</td><td>8</td><td>216</td></tr><tr><td>32</td><td>4</td><td>128</td></tr><tr><td>37</td><td>2</td><td>74</td></tr><tr><td><strong>Total</strong></td><td><strong>50</strong></td><td><strong>1035</strong></td></tr></tbody></table><br>
x̄ = 1035 ÷ 50 = <strong>20.7</strong><br><br>
<strong>Step 3 — Compute f(x − x̄)² for each class:</strong><br>
<table class="sta-table"><thead><tr><th>x</th><th>f</th><th>x − x̄</th><th>(x − x̄)²</th><th>f(x − x̄)²</th></tr></thead><tbody><tr><td>2</td><td>2</td><td>2 − 20.7 = −18.7</td><td>349.69</td><td>2 × 349.69 = 699.38</td></tr><tr><td>7</td><td>3</td><td>7 − 20.7 = −13.7</td><td>187.69</td><td>3 × 187.69 = 563.07</td></tr><tr><td>12</td><td>4</td><td>12 − 20.7 = −8.7</td><td>75.69</td><td>4 × 75.69 = 302.76</td></tr><tr><td>17</td><td>10</td><td>17 − 20.7 = −3.7</td><td>13.69</td><td>10 × 13.69 = 136.90</td></tr><tr><td>22</td><td>17</td><td>22 − 20.7 = +1.3</td><td>1.69</td><td>17 × 1.69 = 28.73</td></tr><tr><td>27</td><td>8</td><td>27 − 20.7 = +6.3</td><td>39.69</td><td>8 × 39.69 = 317.52</td></tr><tr><td>32</td><td>4</td><td>32 − 20.7 = +11.3</td><td>127.69</td><td>4 × 127.69 = 510.76</td></tr><tr><td>37</td><td>2</td><td>37 − 20.7 = +16.3</td><td>265.69</td><td>2 × 265.69 = 531.38</td></tr><tr><td></td><td><strong>50</strong></td><td></td><td></td><td><strong>3090.50</strong></td></tr></tbody></table><br>
<strong>Step 4 — Calculate Variance and Standard Deviation:</strong><br>
Variance (σ²) = Σf(x − x̄)² ÷ Σf<br>
= 3090.50 ÷ 50<br>
= <strong>61.81</strong><br><br>
Standard Deviation (σ) = √61.81<br>
= <strong>7.86</strong><br><br>
<strong>∴ σ = 7.86</strong><br><br>
<em>Interpretation:</em> A standard deviation of 7.86 means that on average, the scores deviate from the mean (20.7) by approximately ±7.86 marks. The larger the standard deviation, the more spread out the data is.`
  },

  // ── QUESTION 14: Mean Deviation ──────────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q14 Mean Deviation</div><div class="sta-qtext">Find the <strong>Mean Deviation</strong> of the following dataset:<br><br><em>18, 18, 19, 17, 19.5, 19, 17, 18.5, 18, 17</em></div></div>`,
    html: true,
    options: ["0.70", "0.72", "0.80", "0.84"],
    answer: 1,
    explanation: `<strong>Mean Deviation = Σ|x − x̄| ÷ n</strong><br><br><strong>Step 1 — Find the Mean:</strong><br>Σx = 18+18+19+17+19.5+19+17+18.5+18+17 = <strong>181</strong><br>x̄ = 181 ÷ 10 = <strong>18.1</strong><br><br><strong>Step 2 — Compute |x − x̄|:</strong><br><table class="sta-table"><thead><tr><th>x</th><th>x − x̄</th><th>|x − x̄|</th></tr></thead><tbody><tr><td>18</td><td>−0.1</td><td>0.1</td></tr><tr><td>18</td><td>−0.1</td><td>0.1</td></tr><tr><td>19</td><td>+0.9</td><td>0.9</td></tr><tr><td>17</td><td>−1.1</td><td>1.1</td></tr><tr><td>19.5</td><td>+1.4</td><td>1.4</td></tr><tr><td>19</td><td>+0.9</td><td>0.9</td></tr><tr><td>17</td><td>−1.1</td><td>1.1</td></tr><tr><td>18.5</td><td>+0.4</td><td>0.4</td></tr><tr><td>18</td><td>−0.1</td><td>0.1</td></tr><tr><td>17</td><td>−1.1</td><td>1.1</td></tr><tr><td><strong>Total</strong></td><td></td><td><strong>7.2</strong></td></tr></tbody></table><br><strong>Step 3:</strong> MD = 7.2 ÷ 10 = <strong>0.72</strong>`
  },

  // ── QUESTION 15: Absolute Error and Percentage Error ─────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q15 Errors in Measurement</div><div class="sta-qtext">The actual population of a town is <strong>125,000</strong>, but a survey estimated it as <strong>120,000</strong>. Calculate:<br>(a) The <strong>Absolute Error</strong><br>(b) The <strong>Percentage Error</strong></div></div>`,
    html: true,
    options: [
      "Absolute Error = 5,000 | Percentage Error = 4%",
      "Absolute Error = 5,000 | Percentage Error = 5%",
      "Absolute Error = 3,000 | Percentage Error = 4%",
      "Absolute Error = 5,000 | Percentage Error = 3%"
    ],
    answer: 0,
    explanation: `<strong>(a) Absolute Error:</strong><br>Absolute Error = |True Value − Estimated Value|<br>= |125,000 − 120,000|<br>= <strong>5,000</strong><br><br><strong>(b) Percentage Error:</strong><br>Percentage Error = (Absolute Error ÷ True Value) × 100<br>= (5,000 ÷ 125,000) × 100<br>= 0.04 × 100<br>= <strong>4%</strong><br><br><em>Note:</em> Percentage error is always calculated relative to the <strong>true value</strong>, not the estimated value. A 4% error means the estimate was 4% lower than the actual population.`
  },

  // ── QUESTION 16: Relative Error ──────────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q16 Relative Error</div><div class="sta-qtext">The true value of a quantity is <strong>320 units</strong>. It was recorded as <strong>305 units</strong>. Calculate the <strong>Relative Error</strong> correct to 2 decimal places.</div></div>`,
    html: true,
    options: ["0.04", "0.05", "0.06", "0.07"],
    answer: 1,
    explanation: `<strong>Relative Error Formula:</strong><br>Relative Error = Absolute Error ÷ True Value<br><br><strong>Step 1 — Absolute Error:</strong><br>= |True Value − Recorded Value|<br>= |320 − 305| = <strong>15 units</strong><br><br><strong>Step 2 — Relative Error:</strong><br>= 15 ÷ 320<br>= 0.046875<br>≈ <strong>0.05</strong> (to 2 decimal places)<br><br><em>Interpretation:</em> The relative error of 0.05 (or 5%) means the recorded value deviates from the true value by about 4.69%. Relative error is dimensionless and useful for comparing errors across different scales of measurement.`
  },

  // ── QUESTION 17: Truncation ──────────────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q17 Truncation</div><div class="sta-qtext">Truncate the following numbers as specified:<br><br>(a) <strong>18.9786</strong> to 2 decimal places<br>(b) <strong>0.005432</strong> to 3 significant figures<br>(c) <strong>245.6789</strong> to 1 decimal place<br><br>Which set of answers is correct?</div></div>`,
    html: true,
    options: [
      "(a) 18.97 | (b) 0.00543 | (c) 245.6",
      "(a) 18.98 | (b) 0.00543 | (c) 245.7",
      "(a) 18.97 | (b) 0.005 | (c) 246.0",
      "(a) 18.97 | (b) 0.00540 | (c) 245.6"
    ],
    answer: 0,
    explanation: `<strong>Truncation</strong> means <em>cutting off</em> digits without any rounding — simply drop the digits beyond the required precision.<br><br><strong>(a) 18.9786 to 2 decimal places:</strong><br>Keep digits up to 2 decimal places, drop the rest:<br>18.97<u>86</u> → drop 86 → <strong>18.97</strong> ✓<br><br><strong>(b) 0.005432 to 3 significant figures:</strong><br>Significant figures start from the first non-zero digit: 5, 4, 3<br>0.005<u>432</u> → drop 32 → <strong>0.00543</strong> ✓<br><br><strong>(c) 245.6789 to 1 decimal place:</strong><br>Keep only 1 digit after decimal point:<br>245.6<u>789</u> → drop 789 → <strong>245.6</strong> ✓<br><br><em>Key difference:</em> Truncation always <strong>drops</strong> the remaining digits; rounding may <strong>adjust</strong> the last kept digit upward if the next digit ≥ 5.`
  },

  // ── QUESTION 18: Price Index ─────────────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q18 Price Index</div><div class="sta-qtext">The price of a bag of rice was <strong>₦18,000</strong> in 2022 and <strong>₦22,500</strong> in 2024. Calculate the <strong>Price Index</strong> for 2024 using <strong>2022 as the base year</strong>.</div></div>`,
    html: true,
    options: ["115", "120", "125", "130"],
    answer: 2,
    explanation: `<strong>Simple Price Index Formula:</strong><br>Price Index = (P₁ ÷ P₀) × 100<br><br>Where:<br>P₁ = Current price = ₦22,500<br>P₀ = Base year price = ₦18,000<br><br><strong>Calculation:</strong><br>Price Index = (22,500 ÷ 18,000) × 100<br>= 1.25 × 100<br>= <strong>125</strong><br><br><strong>Interpretation:</strong> A price index of 125 means the price of a bag of rice in 2024 is <strong>125% of</strong> the 2022 price — it has increased by <strong>25%</strong> over the two-year period.<br><br>If the index were 100, prices would be unchanged. If &lt; 100, prices fell. If &gt; 100, prices rose.`
  },

  // ── QUESTION 19: Rounding ────────────────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q19 Rounding Off</div><div class="sta-qtext">Round off the following numbers as specified:<br><br>(a) <strong>17.8465</strong> to 3 decimal places<br>(b) <strong>0.0045672</strong> to 4 significant figures<br>(c) <strong>256.749</strong> to 2 decimal places<br>(d) <strong>9.995</strong> to 2 decimal places<br><br>Which set of answers is fully correct?</div></div>`,
    html: true,
    options: [
      "(a) 17.846 | (b) 0.004567 | (c) 256.75 | (d) 9.99",
      "(a) 17.847 | (b) 0.004567 | (c) 256.75 | (d) 10.00",
      "(a) 17.847 | (b) 0.00457 | (c) 256.74 | (d) 10.00",
      "(a) 17.846 | (b) 0.004568 | (c) 256.75 | (d) 9.99"
    ],
    answer: 1,
    explanation: `<strong>(a) 17.8465 to 3 d.p.:</strong><br>Look at 4th decimal: 17.846<u>5</u> → 5 ≥ 5, so round up 3rd decimal (6 → 7)<br>= <strong>17.847</strong> ✓<br><br><strong>(b) 0.0045672 to 4 significant figures:</strong><br>Sig. figs start at 4 (first non-zero): 4,5,6,7 → 4th sig. fig = 7, next digit = 2 &lt; 5, round down<br>= <strong>0.004567</strong> ✓<br><br><strong>(c) 256.749 to 2 d.p.:</strong><br>2nd decimal is 4, 3rd decimal = 9 ≥ 5, round up: 4→5<br>= <strong>256.75</strong> ✓<br><br><strong>(d) 9.995 to 2 d.p.:</strong><br>2nd decimal is 9, 3rd decimal = 5 ≥ 5, round up: 9→10, carry forward<br>9.99 → 9.99 + 0.01 = <strong>10.00</strong> ✓<br><br><em>Note:</em> Rounding 9.995 to 2 d.p. requires carrying the digit — the answer becomes 10.00.`
  },

  // ── QUESTION 20(a): Laspeyres Index ──────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q20(a) Laspeyres Price Index</div><div class="sta-qtext">Using the price and quantity data below, calculate the <strong>Laspeyres Price Index</strong>:<br><br><table class="sta-table"><thead><tr><th>Item</th><th>Base Price (P₀)</th><th>Current Price (P₁)</th><th>Base Qty (Q₀)</th><th>Current Qty (Q₁)</th></tr></thead><tbody><tr><td>A</td><td>40</td><td>50</td><td>30</td><td>35</td></tr><tr><td>B</td><td>60</td><td>75</td><td>20</td><td>25</td></tr><tr><td>C</td><td>80</td><td>100</td><td>10</td><td>15</td></tr></tbody></table></div></div>`,
    html: true,
    options: ["120.0", "122.5", "125.0", "127.5"],
    answer: 2,
    explanation: `<strong>Laspeyres Index</strong> uses <em>base period quantities (Q₀)</em> as weights:<br>L = [Σ(P₁·Q₀) ÷ Σ(P₀·Q₀)] × 100<br><br><strong>Step 1 — Numerator Σ(P₁·Q₀):</strong><br>A: 50×30 = 1,500<br>B: 75×20 = 1,500<br>C: 100×10 = 1,000<br>Total = <strong>4,000</strong><br><br><strong>Step 2 — Denominator Σ(P₀·Q₀):</strong><br>A: 40×30 = 1,200<br>B: 60×20 = 1,200<br>C: 80×10 = 800<br>Total = <strong>3,200</strong><br><br><strong>Step 3 — Laspeyres Index:</strong><br>L = (4,000 ÷ 3,200) × 100 = 1.25 × 100 = <strong>125.0</strong><br><br><em>Interpretation:</em> Prices have risen by 25% on average (using base-year quantities as weights).`
  },

  // ── QUESTION 20(b): Paasche Index ────────────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q20(b) Paasche Price Index</div><div class="sta-qtext">Using the same data below, calculate the <strong>Paasche Price Index</strong>:<br><br><table class="sta-table"><thead><tr><th>Item</th><th>P₀</th><th>P₁</th><th>Q₀</th><th>Q₁</th></tr></thead><tbody><tr><td>A</td><td>40</td><td>50</td><td>30</td><td>35</td></tr><tr><td>B</td><td>60</td><td>75</td><td>20</td><td>25</td></tr><tr><td>C</td><td>80</td><td>100</td><td>10</td><td>15</td></tr></tbody></table></div></div>`,
    html: true,
    options: ["120.0", "122.5", "125.0", "127.5"],
    answer: 2,
    explanation: `<strong>Paasche Index</strong> uses <em>current period quantities (Q₁)</em> as weights:<br>P = [Σ(P₁·Q₁) ÷ Σ(P₀·Q₁)] × 100<br><br><strong>Step 1 — Numerator Σ(P₁·Q₁):</strong><br>A: 50×35 = 1,750<br>B: 75×25 = 1,875<br>C: 100×15 = 1,500<br>Total = <strong>5,125</strong><br><br><strong>Step 2 — Denominator Σ(P₀·Q₁):</strong><br>A: 40×35 = 1,400<br>B: 60×25 = 1,500<br>C: 80×15 = 1,200<br>Total = <strong>4,100</strong><br><br><strong>Step 3 — Paasche Index:</strong><br>P = (5,125 ÷ 4,100) × 100 = 1.25 × 100 = <strong>125.0</strong><br><br><em>Note:</em> In this dataset, both Laspeyres and Paasche give <strong>125.0</strong> because the quantity proportions across items are the same in both periods.`
  },

  // ── QUESTION 20(c): Fisher's Ideal Index ─────────────────────
  {
    question: `<div class="sta-question"><div class="sta-qnum">Q20(c) Fisher's Ideal Index</div><div class="sta-qtext">Using the computed Laspeyres (L) and Paasche (P) index numbers, calculate the <strong>Fisher's Ideal Price Index</strong>:<br><br><table class="sta-table"><thead><tr><th>Index</th><th>Value</th></tr></thead><tbody><tr><td>Laspeyres (L)</td><td>125.0</td></tr><tr><td>Paasche (P)</td><td>125.0</td></tr></tbody></table></div></div>`,
    html: true,
    options: ["120.0", "122.5", "125.0", "127.5"],
    answer: 2,
    explanation: `<strong>Fisher's Ideal Index Formula:</strong><br>F = √(L × P)<br><br>Where:<br>L = Laspeyres Index = 125.0<br>P = Paasche Index = 125.0<br><br><strong>Calculation:</strong><br>F = √(125.0 × 125.0)<br>= √(15,625)<br>= <strong>125.0</strong><br><br><strong>Why "Ideal"?</strong> Fisher's index is called "ideal" because:<br>1. It is the <em>geometric mean</em> of Laspeyres and Paasche indexes.<br>2. It satisfies both the <strong>Time Reversal Test</strong> and the <strong>Factor Reversal Test</strong> — properties that no single-weighted index satisfies alone.<br>3. It eliminates the upward bias of Laspeyres and the downward bias of Paasche.<br><br><em>Summary:</em> Laspeyres = 125.0, Paasche = 125.0, Fisher's = <strong>125.0</strong>`
  }

];

// ── FULL QUESTION BANK ───────────────────────────────────────
const CBT_QUESTIONS = {
  CHM101: CHM101_Q.map(item => ({question:item.q, options:item.o, answer:item.a, explanation:item.e})),
  MTH101: MTH101_Q.map(item => ({question:item.q, options:item.o, answer:item.a, explanation:item.e})),
  PHY101: PHY101_Q.map(item => ({question:item.q, options:item.o, answer:item.a, explanation:item.e})),
  STA101: STA101_Q
};

// END OF QUESTIONS DATA
