const mcqQuestions = [
    {
      question: "What does HTML stand for?",
      answers: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "None of the above"],
      correctAnswer: 0
    },
    {
      question: "What does CSS stand for?",
      answers: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "None of the above"],
      correctAnswer: 1
    },
    // Add 48 more questions
  ];
  
  const saqQuestions = [
    "What is the difference between HTTP and HTTPS?",
    "What is recursion in programming?",
    // Add 48 more questions
  ];
  
  const mcqContainer = document.getElementById("mcq-container");
  const saqContainer = document.getElementById("saq-container");
  const mcqList = document.getElementById("mcq-list");
  const saqList = document.getElementById("saq-list");
  const saqAnswer = document.getElementById("saq-answer");
  const submitButton = document.getElementById("submit-btn");
  
  let currentQuestionIndex = 0;
  let numCorrect = 0;
  
  function displayMcqQuestion() {
    const question = mcqQuestions[currentQuestionIndex];
    const choices = question.answers.map((answer, index) => {
      return `<li><label><input type="radio" name="mcq-answer" value="${index}" required> ${answer}</label></li>`;
    }).join("");
  
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <h3>${question.question}</h3>
      <ul>${choices}</ul>
    `;
    mcqList.appendChild(listItem);
  }

//   const radioButtons = listItem.querySelectorAll('input[type="radio"]');
//   radioButtons.forEach(radioButton => {
//     radioButton.addEventListener("change", () => {
//       // Remove selected class from all labels
//       listItem.querySelectorAll('label').forEach(label => {
//         label.classList.remove('selected');
//       });

//       // Add selected class to the label of the selected answer
//       const selectedLabel = radioButton.parentNode;
//       selectedLabel.classList.add('selected');
//     });
//   });
  
  function displaySaqQuestion() {
    const questions = saqQuestions[currentQuestionIndex];
    // const choices = question.answers.map((answer, index) => {
    //     return `<li><label><input type="radio" name="mcq-answer" value="${index}" required> ${answer}</label></li>`;
    //   }).join("");

    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <h3>${questions}</h3>
      <textarea name="saq-answer" rows="4" cols="50" required></textarea>
    `;
    saqList.appendChild(listItem);
  }
  
  function displayNextQuestion() {
    if (currentQuestionIndex < mcqQuestions.length) {
      // Display the next MCQ question
      displayMcqQuestion();
      mcqContainer.style.display = "block";
      saqContainer.style.display = "none";
    } else if (currentQuestionIndex < mcqQuestions.length + saqQuestions.length) {
      // Display the next SAQ question
      displaySaqQuestion();
      mcqContainer.style.display = "none";
      saqContainer.style.display = "block";
    } else {
      // All questions have been answered, show the results
      showResults();
    }
  }
  
  function showResults() {
    mcqContainer.style.display = "none";
    saqContainer.style.display = "none";
  
    const score = numCorrect / mcqQuestions.length;
    const message = `You scored ${numCorrect} out of ${mcqQuestions.length}.`;
    if (score >= 0.8) {
      alert(`Congratulations! ${message}`);
    } else if (score >= 0.6) {
      alert(`Good job. ${message}`);
    } else {
      alert(`You need to study more. ${message}`);
    }
  }
  
  function checkMcqAnswer() {
    const selectedAnswer = document.querySelector("input[name='mcq-answer']:checked");
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }
  
    const selectedAnswerIndex = parseInt(selectedAnswer.value);
    const question = mcqQuestions[currentQuestionIndex];
    
    if (selectedAnswerIndex === question.correctAnswer) {
        numCorrect++;
        }
        
        currentQuestionIndex++;
        mcqList.innerHTML = "";
        displayNextQuestion();
        }
        
        function checkSaqAnswer() {
        if (!saqAnswer.value) {
        alert("Please provide an answer.");
        return;
        }
        
        currentQuestionIndex++;
        saqList.innerHTML = "";
        displayNextQuestion();
        }
        
        function onSubmitButtonClick() {
        if (currentQuestionIndex < mcqQuestions.length + saqQuestions.length) {
        // Not all questions have been answered yet
        alert("Please answer all questions.");
        return;
        }
        
        showResults();
        }
        
        displayNextQuestion();
        
        mcqList.addEventListener("change", checkMcqAnswer);
        saqAnswer.addEventListener("input", checkSaqAnswer);
        submitButton.addEventListener("click", onSubmitButtonClick);