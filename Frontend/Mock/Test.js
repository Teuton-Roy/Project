// Selecting the necessary HTML elements
const mcqList = document.getElementById("mcq-list");
const saqList = document.getElementById("saq-list");
const saqAnswer = document.getElementById("saq-answer");
const submitBtn = document.getElementById("submit-btn");

// Keeping track of the student's answers
let mcqAnswers = [];
let saqAnswers = [];

// Fetching MCQ questions from the API
fetch("https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple")
  .then(response => response.json())
  .then(data => {
    // Rendering the MCQ questions
    data.results.forEach((question, index) => {
      const mcqItem = document.createElement("li");
      mcqItem.innerHTML = `
        <div class="question">${index + 1}. ${question.question}</div>
        <ul class="choices">
          ${question.incorrect_answers.map(answer => `
            <li>
              <input type="radio" id="mcq-${index}-${answer}" name="mcq-${index}" value="${answer}">
              <label for="mcq-${index}-${answer}">${answer}</label>
            </li>
          `).join("")}
          <li>
            <input type="radio" id="mcq-${index}-${question.correct_answer}" name="mcq-${index}" value="${question.correct_answer}">
            <label for="mcq-${index}-${question.correct_answer}">${question.correct_answer}</label>
          </li>
        </ul>
      `;
      mcqList.appendChild(mcqItem);
      mcqAnswers.push(null);
    });
  })
  .catch(error => console.log(error));

// Fetching SAQ questions from the API
fetch("https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=boolean")
  .then(response => response.json())
  .then(data => {
    // Rendering the SAQ questions
    data.results.forEach((question, index) => {
      const saqItem = document.createElement("li");
      saqItem.innerHTML = `
        <div class="question">${index + 1}. ${question.question}</div>
        <div class="answer">
          <input type="text" id="saq-${index}" placeholder="Enter your answer...">
        </div>
      `;
      saqList.appendChild(saqItem);
      saqAnswers.push(null);
    });
  })
  .catch(error => console.log(error));

// Handling the submission of the student's answers
submitBtn.addEventListener("click", () => {
  // Checking if all questions have been answered
  if (mcqAnswers.includes(null) || saqAnswers.includes(null)) {
    alert("Please answer all questions.");
    return;
  }

  // Calculating the MCQ score
  let mcqScore = 0;
  mcqAnswers.forEach((answer, index) => {
    if (answer === document.querySelector(`input[name="mcq-${index}"]:checked`).value) {
      mcqScore++;
    }
  });

  // Calculating the SAQ score
  let saqScore = 0;
  saqAnswers.forEach((answer, index) => {
    if (answer === document.querySelector(`#saq-${index}`).value) {
      saqScore++;
    }
  });

  // Displaying the results
  const totalScore = mcqScore + saqScore;
  alert(`Your total score is ${totalScore} out of 100.\n\nMCQ score: ${mcqScore * 2}\nSAQ score: ${saqScore}`);
});

