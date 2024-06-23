// Quiz data - questions and answers
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Saturn", "Venus"],
      answer: "Mars"
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale"
    }
  ];
  
  const quizContainer = document.getElementById('quiz');
  const questionContainer = document.getElementById('question');
  const optionsContainer = document.getElementById('options');
  const submitButton = document.getElementById('submit');
  const resultsContainer = document.getElementById('results');
  
  let currentQuestion = 0;
  let score = 0;
  
  // Function to load question and options
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.textContent = currentQuizData.question;
    optionsContainer.innerHTML = '';
  
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement('label');
      optionElement.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}<br>`;
      optionsContainer.appendChild(optionElement);
    });
  }
  
  // Function to get selected answer
  function getSelectedAnswer() {
    const options = document.querySelectorAll('input[name="option"]');
    let selectedOption = undefined;
  
    options.forEach(option => {
      if (option.checked) {
        selectedOption = option.value;
      }
    });
  
    return selectedOption;
  }
  
  // Function to check answer and move to next question
  function checkAnswer() {
    const selectedAnswer = getSelectedAnswer();
  
    if (selectedAnswer) {
      if (selectedAnswer === quizData[currentQuestion].answer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showResults();
      }
    } else {
      alert('Please select an answer!');
    }
  }
  
  // Function to show quiz results
  function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
    resultsContainer.style.display = 'block';
  }
  
  // Event listener for submit button
  submitButton.addEventListener('click', checkAnswer);
  
  // Initial load of first question
  loadQuestion();
  