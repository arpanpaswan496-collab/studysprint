// Official NCERT Class 9 Data (Maths + Updated English Kaveri)
const chapterData = {
  'Mathematics': [
    {
      title: "Chapter 1: Orienting Yourself: The Use of Coordinates",
      summary: "Cartesian plane, locating points, distance between parallel points & midpoint formula.",
      content: `
        <h4>📌 Key Concepts:</h4>
        <p>• <b>Axes & Origin:</b> Horizontal X-axis and Vertical Y-axis intersect at Origin <b>(0, 0)</b>.</p>
        <p>• <b>Quadrants:</b> Q1 (+, +), Q2 (-, +), Q3 (-, -), Q4 (+, -).</p>
        <p>• <b>Midpoint Formula:</b> M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</p>
      `
    },
    {
      title: "Chapter 2: Introduction to Linear Polynomials",
      summary: "Linear expressions, evaluating polynomials & word problems.",
      content: `<p>Linear polynomial standard form: P(x) = ax + b (where a ≠ 0).</p>`
    },
    {
      title: "Chapter 3: The World of Numbers",
      summary: "Rational & Irrational numbers, Square Root Spiral, History of Zero & Pi (π).",
      content: `<p>Irrational numbers are non-terminating and non-recurring (e.g. √2, √3, π).</p>`
    },
    {
      title: "Chapter 4: Exploring Algebraic Identities",
      summary: "Standard identities: (a+b)², (a-b)², a²-b².",
      content: `<p>Identities help in fast factorisation and geometric proofs.</p>`
    },
    {
      title: "Chapter 5: I'm Up and Down, and Round and Round",
      summary: "Properties of circles, chords and subtended angles.",
      content: `<p>Equal chords of a circle subtend equal angles at the centre.</p>`
    },
    {
      title: "Chapter 6: Measuring Space: Perimeter and Area",
      summary: "Heron's Formula & area of geometric shapes.",
      content: `<p>Heron's Formula: Area = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2.</p>`
    },
    {
      title: "Chapter 7: The Mathematics of Maybe: Probability",
      summary: "Understanding chance and calculating probability.",
      content: `<p>P(E) = (Favourable Outcomes) / (Total Outcomes). Value lies between 0 and 1.</p>`
    },
    {
      title: "Chapter 8: Predicting What Comes Next: Sequences & Progressions",
      summary: "Arithmetic Progression (AP), GP & Virahānka-Fibonacci sequence.",
      content: `<p>AP n-th term: tₙ = a + (n - 1)d. Fibonacci: 1, 2, 3, 5, 8, 13...</p>`
    }
  ],

  'English': [
    {
      title: "Unit 1: How I Taught My Grandmother to Read",
      summary: "Author: Sudha Murty | A story of determination, literacy, and respect for a teacher.",
      content: `
        <h4>📌 Theme & Summary:</h4>
        <p>The 12-year-old narrator lives in north Karnataka with her 62-year-old grandmother, <b>Krishtakka (Avva)</b>. Every week, the narrator reads the serial story <i>Kashi Yatre</i> from the weekly magazine <i>Karmaveera</i> to her illiterate grandmother.</p>
        <p>When the narrator goes away for a week to a wedding, Avva feels completely helpless and illiterate because she cannot read the latest episode on her own.</p>

        <h4>📌 Important Quote & Determination:</h4>
        <p><i>"For a good cause if you are determined, you can overcome any obstacle. For learning there is no age bar."</i> - Avva sets Dassara (Saraswati Puja) as her deadline to learn the Kannada alphabet.</p>

        <h4>💡 Key Climax:</h4>
        <p>By Dassara, Avva successfully learns to read the novel <i>Kashi Yatre</i>. In a deeply moving gesture, she touches her 12-year-old granddaughter's feet—not as a granddaughter, but as a respectful tribute to her <b>teacher</b>.</p>
      `
    },
    {
      title: "Unit 2: The Pot Maker",
      summary: "Author: Temsula Ao | Story of a young girl's passion for traditional pottery.",
      content: `
        <h4>📌 Summary & Theme:</h4>
        <p>Sentila, a young girl, secretly observes her mother Arenla making clay pots and desires to learn the craft. Despite social hurdles, illness, and reluctance from adults, Sentila shows immense passion and perseverance to master the traditional art of pottery.</p>
        <p><b>Theme:</b> Transmission of ancestral art, perseverance, and passion across generations.</p>
      `
    },
    {
      title: "Unit 3: Vitamin-M",
      summary: "Author: Asha Nehemiah | Humorous & emotional story on elderly dignity.",
      content: `
        <h4>📌 Summary & Theme:</h4>
        <p>Ravi's grandfather is brought to live in a crowded city flat because of his old age and supposed memory loss. Ravi follows his grandfather around the city as a secret detective, only to realise that his grandfather is sharp, independent, and full of life.</p>
        <p><b>Theme:</b> Dignity, respect, empathy, and self-reliance for senior citizens in society.</p>
      `
    }
  ],

  'Science': [
    { title: "Chapter 1: Matter in Our Surroundings", summary: "Physical nature of matter & states.", content: "<p>Science content will be updated next!</p>" }
  ],
  'Social Science': [
    { title: "History Ch 1: The French Revolution", summary: "18th century French society & revolution.", content: "<p>SST content will be updated next!</p>" }
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
  english: [
    { level: 1, q: "What was the age of Krishtakka (Avva) in the story?", answers: ["50 years", "62 years", "70 years", "80 years"], correct: 1 },
    { level: 1, q: "What deadline did Avva set to learn reading?", answers: ["Diwali", "Dassara (Saraswati Puja)", "New Year", "Holi"], correct: 1 },
    { level: 2, q: "Why did Avva touch her granddaughter's feet?", answers: ["Because she was older", "As a mark of respect to her teacher", "For blessings", "By mistake"], correct: 1 }
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
