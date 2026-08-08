// Official NCERT Class 9 Ganita Manjari (New Syllabus) Content
const chapterData = {
  'Mathematics': [
    {
      title: "Chapter 1: Orienting Yourself: The Use of Coordinates",
      summary: "Cartesian plane, locating points, distance between parallel points & midpoint formula.",
      content: `
        <h4>📌 Key Concepts:</h4>
        <p>• <b>Axes & Origin:</b> Horizontal X-axis and Vertical Y-axis intersect at Origin <b>(0, 0)</b>.</p>
        <p>• <b>Quadrants:</b> 
          Q1 (+, +), Q2 (-, +), Q3 (-, -), Q4 (+, -).
        </p>
        <p>• <b>Points on Axes:</b> Point on X-axis is $(x, 0)$ and on Y-axis is $(0, y)$.</p>

        <h4>📐 Distance & Midpoint Rules:</h4>
        <p>• <b>Distance on Horizontal line:</b> $|x_2 - x_1|$</p>
        <p>• <b>Distance on Vertical line:</b> $|y_2 - y_1|$</p>
        <p>• <b>Midpoint Formula:</b> $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$</p>

        <h4>💡 Solved Example:</h4>
        <p><b>Q. Find the midpoint of S(-3, 0) and T(3, 0).</b><br>
        <i>Solution:</i> $x = \\frac{-3 + 3}{2} = 0$, $y = \\frac{0 + 0}{2} = 0$. <br>
        So, Midpoint <b>M = (0, 0)</b> (Origin).</p>
      `
    },
    {
      title: "Chapter 2: Introduction to Linear Polynomials",
      summary: "Linear expressions, evaluating polynomials, word problems & growing patterns.",
      content: `
        <h4>📌 Key Concepts:</h4>
        <p>• <b>Linear Polynomial:</b> Degree 1 expression, e.g., $P(x) = ax + b$ (where $a \\neq 0$).</p>
        <p>• <b>Quadratic Polynomial:</b> Degree 2 expression, e.g., $ax^2 + bx + c$.</p>

        <h4>💡 Solved Examples:</h4>
        <p><b>Example 1: Find value of $5x - 3$ when $x = -1$.</b><br>
        <i>Solution:</i> $5(-1) - 3 = -5 - 3 = <b>-8</b>$.</p>

        <p><b>Example 2:</b> Salil's mother is 3 times his age. After 5 years, sum of ages is 70.<br>
        <i>Solution:</i> Let Salil = $x$, Mother = $3x$.<br>
        $(x + 5) + (3x + 5) = 70 \\implies 4x + 10 = 70 \\implies 4x = 60 \\implies x = 15$.<br>
        Salil = <b>15 years</b>, Mother = <b>45 years</b>.</p>
      `
    },
    {
      title: "Chapter 3: The World of Numbers",
      summary: "Rational & Irrational numbers, Square Root Spiral, History of Zero & Pi (π).",
      content: `
        <h4>📌 Number Classifications:</h4>
        <p>• <b>Rational (Q):</b> Can be written as $p/q$ ($q \\neq 0$). Decimals are terminating or recurring.</p>
        <p>• <b>Irrational:</b> Cannot be written as $p/q$. Non-terminating & non-recurring decimals (e.g., $\\sqrt{2}$, $\\sqrt{3}$, $\\pi$).</p>

        <h4>🏛️ Historical Note:</h4>
        <p>• <b>Zero (Śhūnya):</b> Formalised in India by <b>Brahmagupta (629 CE)</b>.</p>
        <p>• <b>Value of $\\pi$:</b> Āryabhaṭa (499 CE) gave $\\pi \\approx \\frac{62832}{20000} = 3.1416$.</p>

        <h4>💡 Constructing $\\sqrt{2}$ on Number Line:</h4>
        <p>Draw right triangle with base $OA = 1$ unit and height $AB = 1$ unit.<br>
        By Pythagoras theorem: $OB = \\sqrt{1^2 + 1^2} = \\sqrt{2}$. Arc from $O$ with radius $OB$ gives $\\sqrt{2}$ on number line.</p>
      `
    },
    {
      title: "Chapter 4: Exploring Algebraic Identities",
      summary: "Visual proofs and factorisation using standard algebraic identities.",
      content: `
        <h4>📌 Core Identities:</h4>
        <p>1. $(a + b)^2 = a^2 + 2ab + b^2$</p>
        <p>2. $(a - b)^2 = a^2 - 2ab + b^2$</p>
        <p>3. $a^2 - b^2 = (a + b)(a - b)$</p>
        <p>4. $(x + a)(x + b) = x^2 + (a + b)x + ab$</p>
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
        <p>• <b>Heron's Formula:</b> $Area = \\sqrt{s(s-a)(s-b)(s-c)}$ where $s = \\frac{a+b+c}{2}$.</p>
        <p>• <b>Circle Area:</b> $\\pi r^2$, <b>Circumference:</b> $2\\pi r$.</p>
      `
    },
    {
      title: "Chapter 7: The Mathematics of Maybe: Introduction to Probability",
      summary: "Understanding chance, outcomes, empirical probability & tree diagrams.",
      content: `
        <h4>📌 Probability Formula:</h4>
        <p>$$P(E) = \\frac{\\text{Number of Favourable Outcomes}}{\\text{Total Number of Possible Outcomes}}$$</p>
        <p>• Probability always lies between <b>0 and 1</b> ($0 \\le P(E) \\le 1$).</p>
      `
    },
    {
      title: "Chapter 8: Predicting What Comes Next: Sequences & Progressions",
      summary: "Arithmetic Progressions (AP), Geometric Progressions (GP) & Virahānka-Fibonacci sequence.",
      content: `
        <h4>📌 Sequences Overview:</h4>
        <p>• <b>Arithmetic Progression (AP):</b> $a, a+d, a+2d, \\dots$<br>
        $n^{\\text{th}}$ term: $t_n = a + (n - 1)d$<br>
        Sum of first $n$ natural numbers: $S_n = \\frac{n(n + 1)}{2}$</p>

        <p>• <b>Geometric Progression (GP):</b> $a, ar, ar^2, \\dots$<br>
        $n^{\\text{th}}$ term: $t_n = a r^{n-1}$</p>

        <p>• <b>Virahānka-Fibonacci Sequence:</b> $1, 2, 3, 5, 8, 13, 21, \\dots$<br>
        Recursive Rule: $V_n = V_{n-1} + V_{n-2}$</p>
      `
    }
  ]
};

// Subject Modal Trigger
function subject(subjectName) {
  const chapters = chapterData[subjectName] || [];
  
  if (chapters.length === 0) {
    alert(`${subjectName} content is being updated!`);
    return;
  }

  let contentHtml = `<h2 style="color:#4f46e5; margin-bottom:15px; border-bottom:2px solid #e2e8f0; padding-bottom:8px;">📚 NCERT Class 9 ${subjectName} (Ganita Manjari)</h2>`;
  
  chapters.forEach((chap, idx) => {
    contentHtml += `
      <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:10px; padding:15px; margin-bottom:12px; text-align:left;">
        <h3 style="color:#0f172a; margin-top:0;">${chap.title}</h3>
        <p style="color:#475569; font-size:14px; margin-bottom:10px;">${chap.summary}</p>
        <button onclick="toggleDetails('chap-${idx}')" style="background:#4f46e5; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer; font-weight:600;">Padho Full Notes 👇</button>
        <div id="chap-${idx}" style="display:none; margin-top:12px; padding-top:12px; border-top:1px dashed #cbd5e1; color:#1e293b; background:white; padding:12px; border-radius:6px;">
          ${chap.content}
        </div>
      </div>
    `;
  });

  contentHtml += `<button onclick="closeModal()" style="background:#ef4444; color:white; border:none; width:100%; margin-top:10px; padding:10px; border-radius:8px; font-weight:bold; cursor:pointer;">Close Window</button>`;

  let modal = document.getElementById("custom-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "custom-modal";
    modal.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 1000; padding:15px;";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `<div style="background: white; padding: 20px; border-radius: 14px; max-width: 650px; width: 100%; max-height:85vh; overflow-y:auto; box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: sans-serif;">${contentHtml}</div>`;
  modal.style.display = "flex";
}

function toggleDetails(id) {
  const elem = document.getElementById(id);
  elem.style.display = (elem.style.display === "none") ? "block" : "none";
}

function closeModal() {
  const modal = document.getElementById("custom-modal");
  if (modal) modal.style.display = "none";
}// Official NCERT Class 9 Ganita Manjari (New Syllabus) Content
const chapterData = {
  'Mathematics': [
    {
      title: "Chapter 1: Orienting Yourself: The Use of Coordinates",
      summary: "Cartesian plane, locating points, distance between parallel points & midpoint formula.",
      content: `
        <h4>📌 Key Concepts:</h4>
        <p>• <b>Axes & Origin:</b> Horizontal X-axis and Vertical Y-axis intersect at Origin <b>(0, 0)</b>.</p>
        <p>• <b>Quadrants:</b> 
          Q1 (+, +), Q2 (-, +), Q3 (-, -), Q4 (+, -).
        </p>
        <p>• <b>Points on Axes:</b> Point on X-axis is $(x, 0)$ and on Y-axis is $(0, y)$.</p>

        <h4>📐 Distance & Midpoint Rules:</h4>
        <p>• <b>Distance on Horizontal line:</b> $|x_2 - x_1|$</p>
        <p>• <b>Distance on Vertical line:</b> $|y_2 - y_1|$</p>
        <p>• <b>Midpoint Formula:</b> $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$</p>

        <h4>💡 Solved Example:</h4>
        <p><b>Q. Find the midpoint of S(-3, 0) and T(3, 0).</b><br>
        <i>Solution:</i> $x = \\frac{-3 + 3}{2} = 0$, $y = \\frac{0 + 0}{2} = 0$. <br>
        So, Midpoint <b>M = (0, 0)</b> (Origin).</p>
      `
    },
    {
      title: "Chapter 2: Introduction to Linear Polynomials",
      summary: "Linear expressions, evaluating polynomials, word problems & growing patterns.",
      content: `
        <h4>📌 Key Concepts:</h4>
        <p>• <b>Linear Polynomial:</b> Degree 1 expression, e.g., $P(x) = ax + b$ (where $a \\neq 0$).</p>
        <p>• <b>Quadratic Polynomial:</b> Degree 2 expression, e.g., $ax^2 + bx + c$.</p>

        <h4>💡 Solved Examples:</h4>
        <p><b>Example 1: Find value of $5x - 3$ when $x = -1$.</b><br>
        <i>Solution:</i> $5(-1) - 3 = -5 - 3 = <b>-8</b>$.</p>

        <p><b>Example 2:</b> Salil's mother is 3 times his age. After 5 years, sum of ages is 70.<br>
        <i>Solution:</i> Let Salil = $x$, Mother = $3x$.<br>
        $(x + 5) + (3x + 5) = 70 \\implies 4x + 10 = 70 \\implies 4x = 60 \\implies x = 15$.<br>
        Salil = <b>15 years</b>, Mother = <b>45 years</b>.</p>
      `
    },
    {
      title: "Chapter 3: The World of Numbers",
      summary: "Rational & Irrational numbers, Square Root Spiral, History of Zero & Pi (π).",
      content: `
        <h4>📌 Number Classifications:</h4>
        <p>• <b>Rational (Q):</b> Can be written as $p/q$ ($q \\neq 0$). Decimals are terminating or recurring.</p>
        <p>• <b>Irrational:</b> Cannot be written as $p/q$. Non-terminating & non-recurring decimals (e.g., $\\sqrt{2}$, $\\sqrt{3}$, $\\pi$).</p>

        <h4>🏛️ Historical Note:</h4>
        <p>• <b>Zero (Śhūnya):</b> Formalised in India by <b>Brahmagupta (629 CE)</b>.</p>
        <p>• <b>Value of $\\pi$:</b> Āryabhaṭa (499 CE) gave $\\pi \\approx \\frac{62832}{20000} = 3.1416$.</p>

        <h4>💡 Constructing $\\sqrt{2}$ on Number Line:</h4>
        <p>Draw right triangle with base $OA = 1$ unit and height $AB = 1$ unit.<br>
        By Pythagoras theorem: $OB = \\sqrt{1^2 + 1^2} = \\sqrt{2}$. Arc from $O$ with radius $OB$ gives $\\sqrt{2}$ on number line.</p>
      `
    },
    {
      title: "Chapter 4: Exploring Algebraic Identities",
      summary: "Visual proofs and factorisation using standard algebraic identities.",
      content: `
        <h4>📌 Core Identities:</h4>
        <p>1. $(a + b)^2 = a^2 + 2ab + b^2$</p>
        <p>2. $(a - b)^2 = a^2 - 2ab + b^2$</p>
        <p>3. $a^2 - b^2 = (a + b)(a - b)$</p>
        <p>4. $(x + a)(x + b) = x^2 + (a + b)x + ab$</p>
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
        <p>• <b>Heron's Formula:</b> $Area = \\sqrt{s(s-a)(s-b)(s-c)}$ where $s = \\frac{a+b+c}{2}$.</p>
        <p>• <b>Circle Area:</b> $\\pi r^2$, <b>Circumference:</b> $2\\pi r$.</p>
      `
    },
    {
      title: "Chapter 7: The Mathematics of Maybe: Introduction to Probability",
      summary: "Understanding chance, outcomes, empirical probability & tree diagrams.",
      content: `
        <h4>📌 Probability Formula:</h4>
        <p>$$P(E) = \\frac{\\text{Number of Favourable Outcomes}}{\\text{Total Number of Possible Outcomes}}$$</p>
        <p>• Probability always lies between <b>0 and 1</b> ($0 \\le P(E) \\le 1$).</p>
      `
    },
    {
      title: "Chapter 8: Predicting What Comes Next: Sequences & Progressions",
      summary: "Arithmetic Progressions (AP), Geometric Progressions (GP) & Virahānka-Fibonacci sequence.",
      content: `
        <h4>📌 Sequences Overview:</h4>
        <p>• <b>Arithmetic Progression (AP):</b> $a, a+d, a+2d, \\dots$<br>
        $n^{\\text{th}}$ term: $t_n = a + (n - 1)d$<br>
        Sum of first $n$ natural numbers: $S_n = \\frac{n(n + 1)}{2}$</p>

        <p>• <b>Geometric Progression (GP):</b> $a, ar, ar^2, \\dots$<br>
        $n^{\\text{th}}$ term: $t_n = a r^{n-1}$</p>

        <p>• <b>Virahānka-Fibonacci Sequence:</b> $1, 2, 3, 5, 8, 13, 21, \\dots$<br>
        Recursive Rule: $V_n = V_{n-1} + V_{n-2}$</p>
      `
    }
  ]
};

// Subject Modal Trigger
function subject(subjectName) {
  const chapters = chapterData[subjectName] || [];
  
  if (chapters.length === 0) {
    alert(`${subjectName} content is being updated!`);
    return;
  }

  let contentHtml = `<h2 style="color:#4f46e5; margin-bottom:15px; border-bottom:2px solid #e2e8f0; padding-bottom:8px;">📚 NCERT Class 9 ${subjectName} (Ganita Manjari)</h2>`;
  
  chapters.forEach((chap, idx) => {
    contentHtml += `
      <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:10px; padding:15px; margin-bottom:12px; text-align:left;">
        <h3 style="color:#0f172a; margin-top:0;">${chap.title}</h3>
        <p style="color:#475569; font-size:14px; margin-bottom:10px;">${chap.summary}</p>
        <button onclick="toggleDetails('chap-${idx}')" style="background:#4f46e5; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer; font-weight:600;">Padho Full Notes 👇</button>
        <div id="chap-${idx}" style="display:none; margin-top:12px; padding-top:12px; border-top:1px dashed #cbd5e1; color:#1e293b; background:white; padding:12px; border-radius:6px;">
          ${chap.content}
        </div>
      </div>
    `;
  });

  contentHtml += `<button onclick="closeModal()" style="background:#ef4444; color:white; border:none; width:100%; margin-top:10px; padding:10px; border-radius:8px; font-weight:bold; cursor:pointer;">Close Window</button>`;

  let modal = document.getElementById("custom-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "custom-modal";
    modal.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 1000; padding:15px;";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `<div style="background: white; padding: 20px; border-radius: 14px; max-width: 650px; width: 100%; max-height:85vh; overflow-y:auto; box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: sans-serif;">${contentHtml}</div>`;
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
