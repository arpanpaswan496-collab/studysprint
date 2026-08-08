const data={Mathematics:["Number Systems","Polynomials","Coordinate Geometry","Linear Equations in Two Variables","Lines and Angles","Triangles","Quadrilaterals","Circles","Surface Areas and Volumes","Statistics"],Science:["Matter in Our Surroundings","Atoms and Molecules","Structure of the Atom","The Fundamental Unit of Life","Tissues","Motion","Force and Laws of Motion","Gravitation","Work and Energy","Sound"],"Social Science":["The French Revolution","India - Size and Location","Physical Features of India","Drainage","Climate","Population","What is Democracy? Why Democracy?","Constitutional Design","Electoral Politics","Working of Institutions"],English:["Reading Skills","Writing Skills","Grammar","Beehive","Moments"]};let chosen="Mathematics";function subject(s){chosen=s;document.getElementById("ct").textContent=s+" Chapters";document.getElementById("search").value="";render();document.getElementById("chapters").scrollIntoView({behavior:"smooth"})}function render(){let term=document.getElementById("search").value.toLowerCase(),g=document.getElementById("chaptersGrid");g.innerHTML="";data[chosen].filter(x=>x.toLowerCase().includes(term)).forEach((x,i)=>{let a=document.createElement("article");a.innerHTML=`<h3>${i+1}. ${x}</h3><p>Quick revision, key concepts and practice questions.</p><span>View study material →</span>`;g.appendChild(a)})}const qs=[["Which number is irrational?",["4","√2","9","16"],1],["What is 15% of 200?",["20","25","30","35"],2],["SI unit of force?",["Joule","Watt","Newton","Pascal"],2],["Basic unit of life?",["Tissue","Cell","Organ","Atom"],1],["If x+7=12, x is?",["3","4","5","6"],2],["Red Planet?",["Venus","Mars","Jupiter","Mercury"],1],["A triangle has how many sides?",["2","3","4","5"],1],["Degree of 3x²+2x−5?",["1","2","3","5"],1],["Speed is distance divided by?",["Mass","Time","Force","Area"],1],["Democracy means government by?",["One person","Army","The people","A king"],2]];let qi=0,score=0,locked=false;function load(){locked=false;document.getElementById("qno").textContent=`Question ${qi+1} of ${qs.length} • Score: ${score}`;document.getElementById("q").textContent=qs[qi][0];document.getElementById("fb").textContent="";document.getElementById("next").classList.add("hidden");let box=document.getElementById("answers");box.innerHTML="";qs[qi][1].forEach((x,i)=>{let b=document.createElement("button");b.className="answer";b.textContent=x;b.onclick=()=>answer(i,b);box.appendChild(b)})}function answer(i,b){if(locked)return;locked=true;let c=qs[qi][2];[...document.querySelectorAll(".answer")].forEach((x,j)=>{if(j===c)x.classList.add("correct")});if(i===c){score++;document.getElementById("fb").textContent="✅ Correct!"}else{b.classList.add("wrong");document.getElementById("fb").textContent="❌ Correct answer is highlighted."}document.getElementById("qno").textContent=`Question ${qi+1} of ${qs.length} • Score: ${score}`;document.getElementById("next").classList.remove("hidden");document.getElementById("next").textContent=qi===qs.length-1?"Finish":"Next Question"}document.getElementById("next").onclick=()=>{if(qi<qs.length-1){qi++;load()}else{document.getElementById("q").textContent=`Quiz complete — ${score}/${qs.length}`;document.getElementById("answers").innerHTML="";document.getElementById("fb").textContent=score>=8?"Excellent work! 🎉":"Keep practising and try again!";document.getElementById("next").classList.add("hidden");qi=0;score=0}};function pct(){let m=+document.getElementById("m").value,t=+document.getElementById("t").value;document.getElementById("po").textContent=t>0&&m>=0?`Percentage: ${(m/t*100).toFixed(2)}%`:"Enter valid marks."}function avg(){let a=document.getElementById("n").value.split(",").map(Number).filter(Number.isFinite);document.getElementById("ao").textContent=a.length?`Average: ${(a.reduce((x,y)=>x+y,0)/a.length).toFixed(2)}`:"Enter numbers separated by commas."}document.getElementById("theme").onclick=()=>{document.body.classList.toggle("dark");document.getElementById("theme").textContent=document.body.classList.contains("dark")?"☀️":"🌙"};render();load();
// Question Bank with Levels (1 = Easy, 2 = Medium, 3 = Hard)
const questionBank = {
  maths: [
    // Level 1: Easy
    { level: 1, q: "Which number is irrational?", answers: ["4", "√2", "9", "16"], correct: 1 },
    { level: 1, q: "What is the degree of a zero polynomial?", answers: ["0", "1", "Any real number", "Not defined"], correct: 3 },
    { level: 1, q: "Point (-3, 5) lies in which quadrant?", answers: ["First", "Second", "Third", "Fourth"], correct: 1 },
    
    // Level 2: Medium
    { level: 2, q: "If x + 1 = 0 is a factor of x³ + kx² - 2x + 4, then value of k is:", answers: ["-5", "5", "3", "-3"], correct: 0 },
    { level: 2, q: "The sum of all interior angles of a quadrilateral is:", answers: ["180°", "270°", "360°", "540°"], correct: 2 },
    
    // Level 3: Hard
    { level: 3, q: "If x + 1/x = 4, then the value of x⁴ + 1/x⁴ is:", answers: ["194", "196", "192", "200"], correct: 0 },
    { level: 3, q: "Area of an equilateral triangle with side 2√3 cm is:", answers: ["3√3 cm²", "6 cm²", "4√3 cm²", "12 cm²"], correct: 0 }
  ],

  science: [
    // Level 1: Easy
    { level: 1, q: "What is the SI unit of acceleration?", answers: ["m/s", "m/s²", "m", "kg m/s"], correct: 1 },
    { level: 1, q: "Which cell organelle is known as the powerhouse of the cell?", answers: ["Golgi apparatus", "Mitochondria", "Lysosome", "Plastid"], correct: 1 },
    
    // Level 2: Medium
    { level: 2, q: "Inertia of an object depends directly on its:", answers: ["Velocity", "Mass", "Area", "Shape"], correct: 1 },
    { level: 2, q: "Which tissue is responsible for the movement of food in plants?", answers: ["Xylem", "Phloem", "Parenchyma", "Sclerenchyma"], correct: 1 },
    
    // Level 3: Hard
    { level: 3, q: "A ball is thrown vertically upwards with a velocity of 20 m/s. Max height reached is (g = 10 m/s²):", answers: ["10 m", "20 m", "30 m", "40 m"], correct: 1 }
  ]
};

let currentQuestions = [];
let currentQIndex = 0;
let score = 0;

function startCustomQuiz() {
  const subject = document.getElementById("subjectSelect").value;
  const count = parseInt(document.getElementById("countSelect").value);

  let pool = questionBank[subject] || [];
  
  if (pool.length === 0) {
    alert("Is subject ke questions jald hi add honge!");
    return;
  }

  // Sort questions by level (Easy -> Medium -> Hard)
  pool.sort((a, b) => a.level - b.level);

  // Pick up to selected count
  currentQuestions = pool.slice(0, count);
  currentQIndex = 0;
  score = 0;

  document.getElementById("quiz-setup").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  showQuestion();
}

function showQuestion() {
  const qData = currentQuestions[currentQIndex];
  document.getElementById("qno").innerText = `Question ${currentQIndex + 1} of ${currentQuestions.length} (Level ${qData.level})`;
  document.getElementById("q").innerText = qData.q;
  
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  qData.answers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.className = "btn";
    btn.style.margin = "5px";
    btn.onclick = () => checkAnswer(idx, qData.correct);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  const fb = document.getElementById("fb");
  if (selected === correct) {
    fb.innerText = "Sahi Jawab! 🎉";
    fb.style.color = "green";
    score++;
  } else {
    fb.innerText = "Galat Jawab! ❌";
    fb.style.color = "red";
  }

  setTimeout(() => {
    fb.innerText = "";
    currentQIndex++;
    if (currentQIndex < currentQuestions.length) {
      showQuestion();
    } else {
      document.getElementById("quiz-container").innerHTML = `<h3>Quiz Finished! 🏆</h3><p>Aapka Score: ${score} / ${currentQuestions.length}</p><button class="btn" onclick="location.reload()">Try Again</button>`;
    }
  }, 1000);
}
