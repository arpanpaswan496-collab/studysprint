// Official NCERT & Study Hub Data (Maths, English, Computer, Science, SST)
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
    {
      title: "Chapter 1: Basics & Generations of Computer",
      summary: "Hardware, CPU, memory, and evolution of computers.",
      content: `
        <h4>📌 Core Components & Generations:</h4>
        <p>• <b>CPU:</b> Central Processing Unit (Brain of Computer - ALU, CU, MU).</p>
        <p>• <b>Generations:</b> 1st Gen (Vacuum Tubes) ➔ 2nd Gen (Transistors) ➔ 3rd Gen (ICs) ➔ 4th Gen (Microprocessors) ➔ 5th Gen (AI).</p>
      `
    },
    {
      title: "Chapter 2: Printing Documents in Word Processor",
      summary: "Complete guide on Print Options, Print Preview, and Printing steps.",
      content: `
        <h4>🖨️ Printing Guide:</h4>
        <p>• <b>Shortcut:</b> Ctrl + P</p>
        <p>• <b>Print Preview:</b> Print se pehle page ka layout check karna taaki ink/paper waste na ho.</p>
        <p>• <b>Options:</b> Copies, Printer selection, Pages range (All/Current/Custom), aur Orientation (Portrait/Landscape).</p>
      `
    },
    {
      title: "Chapter 3: 50+ Ultimate Keyboard Shortcuts (A to Z)",
      summary: "All essential and frequently used computer keyboard shortcuts.",
      content: `
        <h4>⌨️ Essential Shortcuts:</h4>
        <p><b>Ctrl + A:</b> Select All</p>
        <p><b>Ctrl + B:</b> Bold Text</p>
        <p><b>Ctrl + C:</b> Copy Selected Item</p>
        <p><b>Ctrl + D:</b> Bookmark / Fill down in Excel</p>
        <p><b>Ctrl + E:</b> Center text alignment</p>
        <p><b>Ctrl + F:</b> Find window</p>
        <p><b>Ctrl + G:</b> Go to option</p>
        <p><b>Ctrl + H:</b> Find & Replace</p>
        <p><b>Ctrl + I:</b> Italicize text</p>
        <p><b>Ctrl + J:</b> Justify paragraph alignment</p>
        <p><b>Ctrl + K:</b> Insert Hyperlink</p>
        <p><b>Ctrl + L:</b> Left align text</p>
        <p><b>Ctrl + M:</b> Indent paragraph</p>
        <p><b>Ctrl + N:</b> New document / window</p>
        <p><b>Ctrl + O:</b> Open file</p>
        <p><b>Ctrl + P:</b> Print document</p>
        <p><b>Ctrl + Q:</b> Clear paragraph formatting</p>
        <p><b>Ctrl + R:</b> Right align text</p>
        <p><b>Ctrl + S:</b> Save file</p>
        <p><b>Ctrl + T:</b> Hanging indent</p>
        <p><b>Ctrl + U:</b> Underline text</p>
        <p><b>Ctrl + V:</b> Paste copied item</p>
        <p><b>Ctrl + W:</b> Close current window/tab</p>
        <p><b>Ctrl + X:</b> Cut selected item</p>
        <p><b>Ctrl + Y:</b> Redo action</p>
        <p><b>Ctrl + Z:</b> Undo action</p>
        <p><b>F1:</b> Help / Support</p>
        <p><b>F2:</b> Rename selected file/folder</p>
        <p><b>F3:</b> Search / Find file</p>
        <p><b>F4:</b> Close window (Alt + F4)</p>
        <p><b>F5:</b> Refresh webpage / screen</p>
        <p><b>F11:</b> Full screen mode</p>
        <p><b>Alt + Tab:</b> Switch between open apps</p>
        <p><b>Win + D:</b> Show/Hide Desktop</p>
        <p><b>Win + L:</b> Lock computer screen</p>
      `
    },
    {
      title: "Chapter 4: 50+ Essential Tech Full Forms",
      summary: "Most common and useful computer abbreviations.",
      content: `
        <h4>📖 Computer Full Forms:</h4>
        <p>• <b>CPU:</b> Central Processing Unit</p>
        <p>• <b>RAM:</b> Random Access Memory</p>
        <p>• <b>ROM:</b> Read Only Memory</p>
        <p>• <b>BIOS:</b> Basic Input Output System</p>
        <p>• <b>OS:</b> Operating System</p>
        <p>• <b>HTML:</b> HyperText Markup Language</p>
        <p>• <b>CSS:</b> Cascading Style Sheets</p>
        <p>• <b>HTTP:</b> HyperText Transfer Protocol</p>
        <p>• <b>HTTPS:</b> HyperText Transfer Protocol Secure</p>
        <p>• <b>URL:</b> Uniform Resource Locator</p>
        <p>• <b>IP:</b> Internet Protocol</p>
        <p>• <b>ISP:</b> Internet Service Provider</p>
        <p>• <b>USB:</b> Universal Serial Bus</p>
        <p>• <b>PDF:</b> Portable Document Format</p>
        <p>• <b>JPEG:</b> Joint Photographic Experts Group</p>
        <p>• <b>PNG:</b> Portable Network Graphics</p>
        <p>• <b>SMS:</b> Short Message Service</p>
        <p>• <b>SIM:</b> Subscriber Identity Module</p>
        <p>• <b>GPS:</b> Global Positioning System</p>
        <p>• <b>LED:</b> Light Emitting Diode</p>
        <p>• <b>LCD:</b> Liquid Crystal Display</p>
        <p>• <b>OLED:</b> Organic Light Emitting Diode</p>
        <p>• <b>AI:</b> Artificial Intelligence</p>
        <p>• <b>IT:</b> Information Technology</p>
        <p>• <b>PC:</b> Personal Computer</p>
        <p>• <b>LAN:</b> Local Area Network</p>
        <p>• <b>WAN:</b> Wide Area Network</p>
        <p>• <b>MAN:</b> Metropolitan Area Network</p>
        <p>• <b>WIFI:</b> Wireless Fidelity</p>
        <p>• <b>VIRUS:</b> Vital Information Resources Under Siege</p>
        <p>• <b>SSD:</b> Solid State Drive</p>
        <p>• <b>HDD:</b> Hard Disk Drive</p>
        <p>• <b>GB:</b> Gigabyte</p>
        <p>• <b>MB:</b> Megabyte</p>
        <p>• <b>KB:</b> Kilobyte</p>
        <p>• <b>TB:</b> Terabyte</p>
        <p>• <b>CD:</b> Compact Disc</p>
        <p>• <b>DVD:</b> Digital Versatile Disc</p>
        <p>• <b>FTP:</b> File Transfer Protocol</p>
        <p>• <b>VPN:</b> Virtual Private Network</p>
      `
    }
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
  
  let filteredPool = pool.filter(q => q.level === levelSelect);
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
