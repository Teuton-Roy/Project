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
  
  const questionElement = document.getElementById("question");
  const answerElements = document.getElementById("answers");
  const submitButton = document.getElementById("submit-btn");
  
  let currentQuestionIndex = 0;
  
  function displayQuestion() {
    // Get the current question object from the MCQ or SAQ question array
    let currentQuestion;
    if (currentQuestionIndex < mcqQuestions.length) {
      currentQuestion = mcqQuestions[currentQuestionIndex];
    } else if (currentQuestionIndex < mcqQuestions.length + saqQuestions.length) {
      currentQuestion = saqQuestions[currentQuestionIndex - mcqQuestions.length];
    } else {
      // No more questions
      questionElement.innerText = "All questions completed!";
      answerElements.innerHTML = "";
      submitButton.style.display = "none";
      return;
    }
  
    // Display the question
    questionElement.innerText = currentQuestion.question;
  
    // Display the answer options for MCQ questions, or remove the answer options for SAQ questions
    answerElements.innerHTML = "";
    if (currentQuestion.answers) {
      currentQuestion.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = index;
        li.appendChild(input);
        li.appendChild(document.createTextNode(answer));
        answerElements.appendChild(li);
      });
    }
  
    // Increment the current question index
    currentQuestionIndex++;
  }
  
  function checkAnswer() {
    // Get the selected answer
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }
  
    // Check if the selected answer is correct
    const currentQuestion = currentQuestionIndex <= mcqQuestions.length ?
      mcqQuestions[currentQuestionIndex - 1] : saqQuestions[currentQuestionIndex - mcqQuestions.length - 1];
    const selectedAnswerIndex = parseInt(selectedAnswer.value);
    if (selectedAnswerIndex === currentQuestion.correctAnswer) {
      alert("Correct answer!");
    } else {
      alert("Incorrect answer.");
    }
  
    // Display the next question
    displayQuestion();
  }
  
  // Display the first question
  displayQuestion();
  