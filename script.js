// Official NCERT Class 9 Mathematics - Ganita Manjari Data
const chapterData = {
  'Mathematics': [
    {
      title: "Chapter 1: Orienting Yourself: The Use of Coordinates",
      summary: "Cartesian plane, locating points, distance between parallel points & midpoint formula.",
      content: `
        <h4>📌 Key Concepts:</h4>
        <p>• <b>Axes & Origin:</b> Horizontal X-axis and Vertical Y-axis intersect at Origin <b>(0, 0)</b>.</p>
        <p>• <b>Quadrants:</b> Q1 (+, +), Q2 (-, +), Q3 (-, -), Q4 (+, -).</p>
        <p>• <b>Points on Axes:</b> Point on X-axis is (x, 0) and on Y-axis is (0, y).</p>

        <h4>📐 Distance & Midpoint Rules:</h4>
        <p>• <b>Distance on Horizontal line:</b> |x₂ - x₁|</p>
        <p>• <b>Distance on Vertical line:</b> |y₂ - y₁|</p>
        <p>• <b>Midpoint Formula:</b> M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</p>

        <h4>💡 Solved Example:</h4>
        <p><b>Q. Find the midpoint of S(-3, 0) and T(3, 0).</b><br>
        <i>Solution:</i> x = (-3 + 3)/2 = 0, y = (0 + 0)/2 = 0.<br>
        So, Midpoint <b>M = (0, 0)</b> (Origin).</p>
      `
    },
    {
      title: "Chapter 2: Introduction to Linear Polynomials",
      summary: "Linear expressions, evaluating polynomials, word problems & growing patterns.",
      content: `
        <h4>📌 Key Concepts:</h4>
        <p>• <b>Linear Polynomial:</b> Degree 1 expression, e.g., P(x) = ax + b (where a ≠ 0).</p>
        <p>• <b>Quadratic Polynomial:</b> Degree 2 expression, e.g., ax² + bx + c.</p>

        <h4>💡 Solved Examples:</h4>
        <p><b>Example 1: Find value of 5x - 3 when x = -1.</b><br>
        <i>Solution:</i> 5(-1) - 3 = -5 - 3 = <b>-8</b>.</p>

        <p><b>Example 2:</b> Salil's mother is 3 times his age. After 5 years, sum of ages is 70.<br>
        <i>Solution:</i> Let Salil = x, Mother = 3x.<br>
        (x + 5) + (3x + 5) = 70 ➔ 4x + 10 = 70 ➔ 4x = 60 ➔ x = 15.<br>
        Salil = <b>15 years</b>, Mother = <b>45 years</b>.</p>
      `
    },
    {
      title: "Chapter 3: The World of Numbers",
      summary: "Rational & Irrational numbers, Square Root Spiral, History of Zero & Pi (π).",
      content: `
        <h4>📌 Number Classifications:</h4>
        <p>• <b>Rational (Q):</b> Can be written as p/q (q ≠ 0). Decimals are terminating or recurring.</p>
        <p>• <b>Irrational:</b> Cannot be written as p/q. Non-terminating & non-recurring decimals (e.g., √2, √3, π).</p>

        <h4>🏛️ Historical Note:</h4>
        <p>• <b>Zero (Śhūnya):</b> Formalised in India by <b>Brahmagupta (629 CE)</b>.</p>
        <p>• <b>Value of π:</b> Āryabhaṭa (499 CE) gave π ≈ 62832/20000 = 3.1416.</p>

        <h4>💡 Constructing √2 on Number Line:</h4>
        <p>Draw right triangle with base OA = 1 unit and height AB = 1 unit.<br>
        By Pythagoras theorem: OB = √(1² + 1²) = √2. Arc from O with radius OB gives √2 on number line.</p>
      `
    },
    {
      title: "Chapter 4: Exploring Algebraic Identities",
      summary: "Visual proofs and factorisation using standard algebraic identities.",
      content: `
        <h4>📌 Core Identities:</h4>
        <p>1. (a + b)² = a² + 2ab + b²</p>
        <p>2. (a - b)² = a² - 2ab + b²</p>
        <p>3. a² - b² = (a + b)(a - b)</p>
        <p>4. (x + a)(x + b) = x² + (a + b)x + ab</p>
      `
    },
    {
      title: "Chapter 5: I'm Up and Down, and Round and Round",
      summary: "Properties of circles, equal chords, subtended angles and cyclic quadrilaterals.",
      content: `
        <h4>📌 Theorems & Properties:</h4>
        <p>• Equal chords of a circle subtend equal angles at the centre.</p>
        <p>• Perpendicular from the centre to a chord bisects the chord.</p>
        <p>• Angle subtended by an arc at centre is double the angle subtended at remaining circumference.</p>
      `
    },
    {
      title: "Chapter 6: Measuring Space: Perimeter and Area",
      summary: "Perimeter and area of triangles, quadrilaterals, circles & composite shapes.",
      content: `
        <h4>📐 Formulas:</h4>
        <p>• <b>Heron's Formula:</b> Area = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2.</p>
        <p>• <b>Circle Area:</b> πr², <b>Circumference:</b> 2πr.</p>
      `
    },
    {
      title: "Chapter 7: The Mathematics of Maybe: Introduction to Probability",
      summary: "Understanding chance, outcomes, empirical probability & tree diagrams.",
      content: `
        <h4>📌 Probability Formula:</h4>
        <p><b>P(E) = (Favourable Outcomes) / (Total Outcomes)</b></p>
        <p>• Probability always lies between <b>0 and 1</b> (0 ≤ P(E) ≤ 1).</p>
      `
    },
    {
      title: "Chapter 8: Predicting What Comes Next: Sequences & Progressions",
      summary: "Arithmetic Progressions (AP), Geometric Progressions (GP) & Virahānka-Fibonacci sequence.",
      content: `
        <h4>📌 Sequences Overview:</h4>
        <p>• <b>Arithmetic Progression (AP):</b> a, a+d, a+2d, ...<br>
        n-th term: tₙ = a + (n - 1)d<br>
        Sum of first n natural numbers: Sₙ = n(n + 1)/2</p>

        <p>• <b>Geometric Progression (GP):</b> a, ar, ar², ...<br>
        n-th term: tₙ = a · rⁿ⁻¹</p>

        <p>• <b>Virahānka-Fibonacci Sequence:</b> 1, 2, 3, 5, 8, 13, 21, ...<br>
        Recursive Rule: Vₙ = Vₙ₋₁ + Vₙ₋₂</p>
      `
    }
  ],
  'Science': [
    { title: "Chapter 1: Matter in Our Surroundings", summary: "Physical nature of matter, states of matter & evaporation.", content: "<p>Detail notes for Science Chapter 1.</p>" }
  ],
  'Social Science': [
    { title: "History Ch 1: The French Revolution", summary: "18th century French society & revolution.", content: "<p>Detail notes for SST Chapter 1.</p>" }
  ],
  'English': [
    { title: "Beehive Ch 1: The Fun They Had", summary: "Future school system in year 2157.", content: "<p>Detail notes for English Chapter 1.</p>" }
  ]
};

// Function triggered when Subject Button is clicked
function subject(subjectName) {
  const chapters = chapterData[subjectName] || [];
  
  if (chapters.length === 0) {
    alert(`${subjectName} content is updating!`);
    return;
  }

  let contentHtml = `<h2 style="color:#4f46e5; margin-bottom:15px; border-bottom:2px solid #e2e8f0; padding-bottom:8px;">📚 Class 9 ${subjectName} (NCERT)</h2>`;
  
  chapters.forEach((chap, idx) => {
    contentHtml += `
      <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:10px; padding:15px; margin-bottom:12px; text-align:left;">
        <h3 style="color:#0f172a; margin-top:0; font-size:16px;">${chap.title}</h3>
        <p style="color:#475569; font-size:13px; margin-bottom:10px;">${chap.summary}</p>
        <button onclick="toggleDetails('chap-${idx}')" style="background:#4f46e5; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer; font-weight:600; font-size:13px;">View Chapter Notes 👇</button>
        <div id="chap-${idx}" style="display:none; margin-top:12px; padding-top:12px; border-top:1px dashed #cbd5e1; color:#1e293b; background:white; padding:12px; border-radius:6px; font-size:14px; line-height:1.5;">
          ${chap.content}
        </div>
      </div>
    `;
  });

  contentHtml += `<button onclick="closeModal()" style="background:#ef4444; color:white; border:none; width:100%; margin-top:10px; padding:10px; border-radius:8px; font-weight:bold; cursor:pointer;">Close Window ✖</button>`;

  let modal = document.getElementById("custom-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "custom-modal";
    modal.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 1000; padding:15px;";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `<div style="background: white; padding: 20px; border-radius: 14px; max-width: 600px; width: 100%; max-height:85vh; overflow-y:auto; box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: sans-serif;">${contentHtml}</div>`;
  modal.style.display = "flex";
}

function toggleDetails(id) {
  const elem = document.getElementById(id);
  elem.style.display = (elem.style.display === "none") ? "block" : "none";
}

function closeModal() {
  const modal = document.getElementById("custom-modal");
  if (modal) modal.style.display = "none";
}

// Adaptive Quiz Code
const questionBank = {
  maths: [
    { level: 1, q: "Which number is irrational?", answers: ["4", "√2", "9", "16"], correct: 1 },
    { level: 1, q: "What is the degree of a zero polynomial?", answers: ["0", "1", "Any real number", "Not defined"], correct: 3 },
    { level: 2, q: "What is the midpoint of (-3,0) and (3,0)?", answers: ["(0,0)", "(3,3)", "(-3,3)", "(1,1)"], correct: 0 }
  ],
  science: [
    { level: 1, q: "What is the SI unit of acceleration?", answers: ["m/s", "m/s²", "m", "kg m/s"], correct: 1 },
    { level: 1, q: "Powerhouse of the cell is:", answers: ["Golgi body", "Mitochondria", "Lysosome", "Plastid"], correct: 1 }
  ]
};

let currentQuestions = [];
let currentQIndex = 0;
let score = 0;

function startCustomQuiz() {
  const subjectSelect = document.getElementById("subjectSelect").value;
  const count = parseInt(document.getElementById("countSelect").value);
  let pool = questionBank[subjectSelect] || [];
  
  if (pool.length === 0) {
    alert("Is subject ke questions jald hi aayenge!");
    return;
  }

  pool.sort((a, b) => a.level - b.level);
  currentQuestions = pool.slice(0, count);
  currentQIndex = 0;
  score = 0;

  document.getElementById("quiz-setup").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const qData = currentQuestions[currentQIndex];
  document.getElementById("qno").innerText = `Question ${currentQIndex + 1} of ${currentQuestions.length}`;
  document.getElementById("q").innerText = qData.q;
  
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  qData.answers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.className = "btn";
    btn.style.margin = "5px";
    btn.style.padding = "8px 15px";
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
      document.getElementById("quiz-container").innerHTML = `<h3>Quiz Finished! 🏆</h3><p>Score: ${score} / ${currentQuestions.length}</p><button class="btn" onclick="location.reload()">Try Again</button>`;
    }
  }, 1000);
}
