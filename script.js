// Official NCERT & Computer Hub Data (Maths, English, Computer, Science, SST)
const chapterData = {
  'Mathematics': [
    { title: "Chapter 1: Coordinates", summary: "Cartesian plane, locating points & midpoint formula.", content: `<p>• Origin: (0,0)<br>• Midpoint Formula: ((x₁+x₂)/2, (y₁+y₂)/2)</p>` },
    { title: "Chapter 2: Linear Polynomials", summary: "Linear expressions & evaluating polynomials.", content: `<p>Standard form: ax + b (a ≠ 0)</p>` },
    { title: "Chapter 3: World of Numbers", summary: "Rational & Irrational numbers, Square root spiral.", content: `<p>Irrational numbers are non-terminating and non-recurring.</p>` },
    { title: "Chapter 4: Algebraic Identities", summary: "Standard identities and factorisation.", content: `<p>(a+b)² = a² + 2ab + b²</p>` },
    { title: "Chapter 5: Circles", summary: "Chords, angles and cyclic quadrilaterals.", content: `<p>Equal chords subtend equal angles at centre.</p>` },
    { title: "Chapter 6: Perimeter and Area", summary: "Heron's Formula for triangles.", content: `<p>Area = √[s(s-a)(s-b)(s-c)]</p>` },
    { title: "Chapter 7: Probability", summary: "Empirical probability and chance.", content: `<p>P(E) = Favourable / Total outcomes</p>` },
    { title: "Chapter 8: Sequences & Progressions", summary: "Arithmetic Progression & Fibonacci sequence.", content: `<p>AP n-th term: a + (n-1)d</p>` }
  ],
  'English': [
    { title: "Unit 1: How I Taught My Grandmother to Read", summary: "Sudha Murty | Determination & respect for teacher.", content: `<p>Avva learned the Kannada alphabet at age 62 and touched her 12-year-old granddaughter's feet in respect.</p>` },
    { title: "Unit 2: The Pot Maker", summary: "Temsula Ao | Passion for traditional art.", content: `<p>Sentila's dedication to pottery despite challenges.</p>` },
    { title: "Unit 3: Vitamin-M", summary: "Asha Nehemiah | Elderly dignity and family bonds.", content: `<p>Grandfather's active and independent life in the city.</p>` }
  ],
  'Computer': [
    { title: "Chapter 1: Basics & Generations", summary: "Hardware, CPU and computer generations.", content: `<p>CPU has ALU, CU and MU. Generations range from Vacuum Tubes to AI.</p>` },
    { title: "Chapter 2: 50+ Keyboard Shortcuts", summary: "Essential shortcuts from A to Z.", content: `<p>Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+Z (Undo), F5 (Refresh).</p>` },
    { title: "Chapter 3: 50+ Tech Full Forms", summary: "Common computer abbreviations.", content: `<p>CPU, RAM, ROM, HTML, URL, USB, PDF, LAN, WAN.</p>` }
  ],
  'Science': [
    { title: "Chapter 1: Matter in Our Surroundings", summary: "States of matter, evaporation and characteristics.", content: `<p>Matter is made of tiny particles. Three states: Solid, Liquid, Gas.</p>` },
    { title: "Chapter 2: Is Matter Around Us Pure", summary: "Elements, compounds, mixtures and solutions.", content: `<p>Mixtures can be homogeneous or heterogeneous.</p>` },
    { title: "Chapter 3: Atoms and Molecules", summary: "Laws of chemical combination and mole concept.", content: `<p>Law of conservation of mass and constant proportions.</p>` }
  ],
  'Social Science': [
    { title: "History Ch 1: The French Revolution", summary: "1789 French society and overthrow of monarchy.", content: `<p>Fall of Bastille, Louis XVI, and Declaration of Rights of Man.</p>` },
    { title: "Geography Ch 1: India - Size and Location", summary: "Latitudes, longitudes and neighboring countries.", content: `<p>India's total land area is 3.28 million square km.</p>` },
    { title: "Civics Ch 1: What is Democracy? Why Democracy?", summary: "Features and merits of democracy.", content: `<p>Democracy is a form of government where rulers are elected by the people.</p>` }
  ]
};

// Function triggered when Subject Button is clicked
function subject(subjectName) {
  const chapters = chapterData[subjectName] || [];
  
  if (chapters.length === 0) {
    alert(`${subjectName} content is updating!`);
    return;
  }

  let contentHtml = `<h2 style="color:#4f46e5; margin-bottom:15px; border-bottom:2px solid #e2e8f0; padding-bottom:8px;">📚 Class 9 ${subjectName} Hub</h2>`;
  
  chapters.forEach((chap, idx) => {
    contentHtml += `
      <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:10px; padding:15px; margin-bottom:12px; text-align:left;">
        <h3 style="color:#0f172a; margin-top:0; font-size:16px;">${chap.title}</h3>
        <p style="color:#475569; font-size:13px; margin-bottom:10px;">${chap.summary}</p>
        <button onclick="toggleDetails('chap-${idx}')" style="background:#4f46e5; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer; font-weight:600; font-size:13px;">View Details 👇</button>
        <div id="chap-${idx}" style="display:none; margin-top:12px; padding-top:12px; border-top:1px dashed #cbd5e1; color:#1e293b; background:white; padding:12px; border-radius:6px; font-size:14px; line-height:1.6;">
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

// Complete Multi-Subject Question Bank with Levels
const questionBank = {
  maths: [
    { level: 1, q: "Which number is rational?", answers: ["√2", "√3", "4", "π"], correct: 2 },
    { level: 1, q: "What is the origin coordinates?", answers: ["(1,1)", "(0,0)", "(0,1)", "(1,0)"], correct: 1 },
    { level: 1, q: "Degree of a zero polynomial is:", answers: ["0", "1", "Not defined", "2"], correct: 2 },
    { level: 2, q: "What is the midpoint of (-3,0) and (3,0)?", answers: ["(3,3)", "(0,0)", "(-3,3)", "(1,1)"], correct: 1 },
    { level: 2, q: "Value of (a + b)² is:", answers: ["a² - 2ab + b²", "a² + b²", "a² + 2ab + b²", "a² - b²"], correct: 2 },
    { level: 3, q: "If p(x) = x² - 3x + 2, find p(2).", answers: ["0", "2", "-2", "4"], correct: 0 },
    { level: 3, q: "Heron's formula semi-perimeter 's' is given by:", answers: ["a+b+c", "(a+b+c)/2", "abc", "(a+b)/2"], correct: 1 }
  ],
  english: [
    { level: 1, q: "What was the age of Krishtakka (Avva)?", answers: ["50 years", "62 years", "70 years", "80 years"], correct: 1 },
    { level: 1, q: "Who authored 'How I Taught My Grandmother to Read'?", answers: ["Ruskin Bond", "Sudha Murty", "R.K. Narayan", "Mulk Raj Anand"], correct: 1 },
    { level: 2, q: "What deadline did Avva set to learn reading?", answers: ["Diwali", "Dassara", "New Year", "Holi"], correct: 1 },
    { level: 2, q: "Why did Avva touch her granddaughter's feet?", answers: ["As respect to teacher", "For blessings", "By mistake", "Age difference"], correct: 0 },
    { level: 3, q: "In which magazine was the serial story 'Kashi Yatre' published?", answers: ["Karmaveera", "The Hindu", "Times of India", "India Today"], correct: 0 }
  ],
  computer: [
    { level: 1, q: "Which part is the brain of the computer?", answers: ["Monitor", "CPU", "RAM", "Keyboard"], correct: 1 },
    { level: 1, q: "Which shortcut is used to Copy text?", answers: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"], correct: 1 },
    { level: 2, q: "What does HTML stand for?", answers: ["Hyper Text Markup Language", "High Text Machine", "Hyper Tool Multi", "None"], correct: 0 },
    { level: 2, q: "Which shortcut key is used to Paste?", answers: ["Ctrl + C", "Ctrl + V", "Ctrl + P", "Ctrl + S"], correct: 1 },
    { level: 3, q: "What does BIOS stand for?", answers: ["Binary Input Output System", "Basic Input Output System", "Built-in Operating System", "None"], correct: 1 }
  ],
  science: [
    { level: 1, q: "Which is a state of matter?", answers: ["Solid", "Liquid", "Gas", "All of the above"], correct: 3 },
    { level: 1, q: "SI unit of mass is:", answers: ["Gram", "Kilogram", "Milligram", "Tonne"], correct: 1 },
    { level: 2, q: "Evaporation causes:", answers: ["Heating", "Cooling", "No change", "Pressure change"], correct: 1 },
    { level: 3, q: "Boiling point of water in Kelvin is:", answers: ["0 K", "100 K", "273 K", "373.15 K"], correct: 3 }
  ],
  sst: [
    { level: 1, q: "In which year did the French Revolution begin?", answers: ["1789", "1857", "1947", "1914"], correct: 0 },
    { level: 1, q: "What is India's total land area?", answers: ["2.4 million sq km", "3.28 million sq km", "4.1 million sq km", "1.5 million sq km"], correct: 1 },
    { level: 2, q: "The Bastille was a:", answers: ["Fortress-prison", "Palace", "Church", "Museum"], correct: 0 },
    { level: 3, q: "Which latitude divides India into almost two equal halves?", answers: ["Equator", "Tropic of Cancer", "Tropic of Capricorn", "Prime Meridian"], correct: 1 }
  ]
};

let currentQuestions = [];
let currentQIndex = 0;
let score = 0;

function startCustomQuiz() {
  const subjectSelect = document.getElementById("subjectSelect").value;
  const levelSelect = parseInt(document.getElementById("levelSelect").value);
  const count = parseInt(document.getElementById("countSelect").value);
  
  let pool = questionBank[subjectSelect] || [];
  
  // Pehle selected level ke questions filter karo
  let filteredPool = pool.filter(q => q.level === levelSelect);
  
  // Agar us level mein kam questions hain, toh baaki pool se le lo taaki user ki select ki hui limit (5, 10, 20) poori ho sake
  if (filteredPool.length < count) {
    let remainingPool = pool.filter(q => q.level !== levelSelect);
    filteredPool = filteredPool.concat(remainingPool);
  }

  if (filteredPool.length === 0) {
    alert("Is subject ke liye questions jald aayenge!");
    return;
  }

  currentQuestions = filteredPool.slice(0, count);
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
// Computer Section Update with Printing Options
chapterData['Computer'] = [
  {
    title: "Chapter 1: Basics & Generations",
    summary: "Hardware, CPU and computer generations.",
    content: `<p>CPU has ALU, CU and MU. Generations range from Vacuum Tubes to AI.</p>`
  },
  {
    title: "Chapter 2: Printing Documents in Word Processor (MS Word)",
    summary: "Complete guide on Print Options, Print Preview, and Printing a Document.",
    content: `
      <h4>🖨️ Printing in Word Processor (MS Word / LibreOffice Writer):</h4>
      <p>Jab aap apna koi document taiyar kar lete hain, toh usko paper par print karne ke liye Print feature ka use kiya jata hai.</p>
      <hr style="border:0; border-top:1px dashed #cbd5e1; margin:15px 0;">
      <h4>1. Print Shortcut Key:</h4>
      <p>Keyboard se direct Print window open karne ke liye yeh shortcut dabayein:<br>
      ⌨️ <b>Ctrl + P</b> (Windows) ya <b>Cmd + P</b> (Mac)</p>
      <hr style="border:0; border-top:1px dashed #cbd5e1; margin:15px 0;">
      <h4>2. What is Print Preview?</h4>
      <p>• Print nikalne se pehle yeh dekhna ki page par text kaisa dikhega, <b>Print Preview</b> kehlata hai.<br>
      • Isse margin, text alignment aur page breaks check ho jate hain jisse ink aur paper waste nahi hote.</p>
      <hr style="border:0; border-top:1px dashed #cbd5e1; margin:15px 0;">
      <h4>3. Important Printing Options:</h4>
      <p>• <b>Copies:</b> Kitni prints chahiye (1, 2, etc.).<br>
      • <b>Printer Selection:</b> Sahi printer choose karna.<br>
      • <b>Pages/Range:</b> Poora document (All Pages), current page, ya custom pages (jaise 1-5).<br>
      • <b>Orientation:</b> Portrait (vertical) ya Landscape (horizontal).</p>
      <hr style="border:0; border-top:1px dashed #cbd5e1; margin:15px 0;">
      <h4>4. Steps to Print:</h4>
      <ol style="padding-left: 20px; line-height: 1.6;">
        <li>File menu par click karein aur Print select karein (ya <b>Ctrl + P</b> dabayein).</li>
        <li>Printer aur settings (Copies, Pages) set karein.</li>
        <li>Print button par click karein.</li>
      </ol>
    `
  },
  {
    title: "Chapter 3: 50+ Keyboard Shortcuts",
    summary: "Essential shortcuts from A to Z.",
    content: `<p>Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+Z (Undo), Ctrl+P (Print), F5 (Refresh).</p>`
  },
  {
    title: "Chapter 4: 50+ Tech Full Forms",
    summary: "Common computer abbreviations.",
    content: `<p>CPU, RAM, ROM, HTML, URL, USB, PDF, LAN, WAN.</p>`
  }
];
