const quizDB = [
  {
    question: "Q1 : what is the full form of HTML?",
    a: "HELLO To My Land",
    b: "HyperText Markup Language",
    c: "HyperText Markup Language",
    d: "HyperText Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2 : what is the full form of CSS?",
    a: "HELLO To My Land",
    b: "Cascading Style Sheets",
    c: "HypeText Markup Language",
    d: "HyperText Markup Language",
    ans: "ans2",
  },
  {
    question: "Q3 : what is the full form of HTTP?",
    a: "Hypertext Transfer Product",
    b: "Hypertext Test Product",
    c: "Her Transfer Product",
    d: "Hypertext Transfer Protocol",
    ans: "ans4",
  },
  {
    question: "Q4 : what is the full form of HTML?",
    a: "HELLO To My Land",
    b: "HyperText Markup Language",
    c: "HyperText Markup Language",
    d: "HyperText Markup Language",
    ans: "ans4",
  },
  {
    question: "Q5 : what is the full form of JS?",
    a: "Javascript",
    b: "HyperText Markup Language",
    c: "HyperText Markup Language",
    d: "HyperText Markup Language",
    ans: "ans1",
  },
  {
    question: "Q6 : what is the full form of HTML?",
    a: "HELLO To My Land",
    b: "HyperText Markup Language",
    c: "HypeText Markup Language",
    d: "HyperText Markup Language",
    ans: "ans4",
  },
  {
    question: "Q7 : what is the full form of HTTP?",
    a: "HELLO To My Land",
    b: "HyperText Markup Language",
    c: "HyperText Markup Language",
    d: "Hypertext Transfer Protocol",
    ans: "ans4",
  },
  {
    question: "Q8 : what is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "HyperText Markup Language",
    c: "HyperText Markup Language",
    d: "HyperText Markup Language",
    ans: "ans1",
  },
  {
    question: "Q9 : what is the full form of PHP?",
    a: "HELLO To My Land",
    b: "HyperText Markup Language",
    c: "HyperText Markup Language",
    d: "Hypertext Preprocessor",
    ans: "ans4",
  },
  {
    question: "Q10 : what is the full form of MERN?",
    a: "HELLO To My Land",
    b: "HyperText Markup Language",
    c: "HyperText Markup Language",
    d: " MongoDB, Express, React, Node",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};
loadQuestion();
const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsEle) => {
    if (curAnsEle.checked) {
      answer = curAnsEle.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsEle) => (curAnsEle.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }
  deselectAll();

  questionCount++;

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
      <h3>you scored ${score}/${quizDB.length}</h3>
  
      `;
    showScore.classList.remove("scoreArea");
  }
});
