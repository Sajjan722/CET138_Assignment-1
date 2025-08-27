const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlink Text Management Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which language is used to add interactivity to a webpage?",
    options: ["Java", "C++", "JavaScript", "Python"],
    answer: "JavaScript"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Oracle"],
    answer: "Netscape"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Syntax",
      "Creative Styling System",
      "Colorful Style Scripts"
    ],
    answer: "Cascading Style Sheets"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionObj = questions[currentQuestion];
  document.getElementById("question").innerText = questionObj.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  questionObj.options.forEach(option => {
    const div = document.createElement("div");
    div.className = "option form-check";
    div.innerHTML = `
      <input type="radio" name="option" value="${option}" class="form-check-input">
      <label class="form-check-label">${option}</label>
    `;
    optionsDiv.appendChild(div);
  });
}

function nextQuestion() {
  const selected = document.querySelector("input[name='option']:checked");
  if (!selected) {
    alert("Please select an option!");
    return;
  }

  if (selected.value === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quizContainer").classList.add("d-none");
    document.getElementById("result").classList.remove("d-none");
    document.getElementById("score").innerText = `${score} / ${questions.length}`;
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result").classList.add("d-none");
  document.getElementById("quizContainer").classList.remove("d-none");
  loadQuestion();
}

// Load first question on start
window.onload = loadQuestion;
