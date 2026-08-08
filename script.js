const questions=[
 {q:"Which number is irrational?",a:["4","√2","9","16"],c:1},
 {q:"What is 15% of 200?",a:["20","25","30","35"],c:2},
 {q:"The SI unit of force is:",a:["Joule","Watt","Newton","Pascal"],c:2},
 {q:"Which planet is known as the Red Planet?",a:["Venus","Mars","Jupiter","Mercury"],c:1},
 {q:"If x + 7 = 12, what is x?",a:["3","4","5","6"],c:2}
];
let current=0,score=0,answered=false;
const q=document.getElementById("question"), answers=document.getElementById("answers"), qNumber=document.getElementById("qNumber"), result=document.getElementById("quizResult"), next=document.getElementById("nextBtn");
function loadQuestion(){
 answered=false; next.classList.add("hidden"); result.textContent="";
 const item=questions[current]; qNumber.textContent=`Question ${current+1} of ${questions.length}`; q.textContent=item.q;
 answers.innerHTML="";
 item.a.forEach((text,i)=>{const b=document.createElement("button");b.className="answer";b.textContent=text;b.onclick=()=>selectAnswer(i,b);answers.appendChild(b)});
}
function selectAnswer(i,button){
 if(answered)return; answered=true;
 const item=questions[current];
 [...answers.children].forEach((b,idx)=>{if(idx===item.c)b.classList.add("correct")});
 if(i===item.c){score++;result.textContent="✅ Correct!";}else{button.classList.add("wrong");result.textContent="❌ Not quite. The correct answer is highlighted."}
 next.textContent=current===questions.length-1?"See Result":"Next Question";next.classList.remove("hidden");
}
next.onclick=()=>{if(current<questions.length-1){current++;loadQuestion()}else{q.textContent=`Quiz complete! Your score: ${score}/${questions.length}`;qNumber.textContent="🎉 Great job";answers.innerHTML="";result.textContent=score>=4?"Excellent work!":"Keep practicing and try again.";next.classList.add("hidden");current=0;score=0}};
loadQuestion();

function percentage(){const m=Number(document.getElementById("marks").value),t=Number(document.getElementById("total").value),out=document.getElementById("percentageResult");if(!t||m<0){out.textContent="Enter valid marks.";return}out.textContent=`Percentage: ${(m/t*100).toFixed(2)}%`;}
function average(){const raw=document.getElementById("numbers").value.split(",").map(x=>Number(x.trim())).filter(x=>Number.isFinite(x));const out=document.getElementById("averageResult");if(!raw.length){out.textContent="Enter numbers separated by commas.";return}out.textContent=`Average: ${(raw.reduce((a,b)=>a+b,0)/raw.length).toFixed(2)}`;}
function showMessage(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2500)}
document.getElementById("themeBtn").onclick=()=>{document.body.classList.toggle("dark");document.getElementById("themeBtn").textContent=document.body.classList.contains("dark")?"☀️":"🌙"};
