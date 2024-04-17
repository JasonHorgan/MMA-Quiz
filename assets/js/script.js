

/** QUESTIONS AND ANSWERS DATA*/
// basic structure taken from GreatStack tutorial as mentioned in readme and expanded upon by adding additional code by myself
const questions = [
  {
    question: "What year was the UFC founded?",
    answers: [
      { text: "1993", correct: true },
      { text: "1990", correct: false },
      { text: "1997", correct: false },
      { text: "2001", correct: false },
    ],
  },
  {
    question: "Where was the first UFC event held?",
    answers: [
      { text: "Denver, Colorado", correct: true },
      { text: "Las Vegas, Nevada", correct: false },
      { text: "Miami, Florida", correct: false },
      { text: "Toronto, Ontario", correct: false },
    ],
  },
  {
    question: "Who was the first ever UFC champion?",
    answers: [
      { text: "Royce Gracie", correct: true },
      { text: "Mark Coleman", correct: false },
      { text: "Anderson Silva", correct: false },
      { text: "Frank Shamerock", correct: false },
    ],
  },
  {
    question: "Which fighter has the most successful UFC title defences?",
    answers: [
      { text: "Anderson Silva", correct: true },
      { text: "Conor McGregor", correct: false },
      { text: "GSP", correct: false },
      { text: "Izzy", correct: false },
    ],
  },
  {
    question:
      "Who was the first female fighter to be induced into the UFC hall of fame",
    answers: [
      { text: "Ronda Rousey", correct: true },
      { text: "Holly Holm", correct: false },
      { text: "Amanda Nunes", correct: false },
      { text: "Joanna J", correct: false },
    ],
  },
  {
    question: "Who holds the record for fastest knockout in UFC history?",
    answers: [
      { text: "Jorge Masvidal", correct: true },
      { text: "Duane Ludwig", correct: false },
      { text: "Chan Sung Jung", correct: false },
      { text: "Brian Ortega", correct: false },
    ],
  },
  {
    question: "What year was the first womens fight in the UFC?",
    answers: [
      { text: "1993", correct: false },
      { text: "2003", correct: false },
      { text: "2013", correct: true },
      { text: "2009", correct: false },
    ],
  },
  {
    question:
      "Who was the first fighter to win UFC titles in 2 different weight classes?",
    answers: [
      { text: "Conor McGregor", correct: false },
      { text: "Randy Couture", correct: true },
      { text: "Daniel Cormier", correct: false },
      { text: "Amanda Nunes", correct: false },
    ],
  },
  {
    question: "Who was the first UFC women's strawweight champion?",
    answers: [
      { text: "Ronda Rousey", correct: false },
      { text: "Carla Esparza", correct: true },
      { text: "Rose Namajunas", correct: false },
      { text: "Joanna Jedrzejczyk", correct: false },
    ],
  },
  {
    question: "Who has the most finishes in UFC history?",
    answers: [
      { text: "Anderson Silva", correct: false },
      { text: "Jose Aldo", correct: false },
      { text: "Donald Cerrone", correct: true },
      { text: "Francis Ngannou", correct: false },
    ],
  },

  {
    question: "Who was the first fighter to appear on a box of Wheaties Cereal?",
    answers: [
      { text: "Brock Lesnar", correct: false },
      { text: "Max Holloway", correct: false },
      { text: "Anthony Pettis", correct: true },
      { text: "Francis Ngannou", correct: false },
    ],
  },

  {
    question: "Who has the most fight of the night awards in UFC history?",
    answers: [
      { text: "Donald Cerrone", correct: false },
      { text: "Justin Gaethje", correct: false },
      { text: "Nate Diaz", correct: true },
      { text: "Nick Diaz", correct: false },
    ],
  },

  {
    question: "Who is the only fighter to have won Fight of the year more than once?",
    answers: [
      { text: "Robbie Lawlor", correct: true },
      { text: "Dustin Poirier", correct: false },
      { text: "Weili Zhang", correct: false },
      { text: "Alex Pereira", correct: false },
    ],
  },

  {
    question: "What age was Jon Jones when he first became UFC champion?",
    answers: [
      { text: "22", correct: false },
      { text: "21", correct: false },
      { text: "23", correct: true },
      { text: "20", correct: false },
    ],
  },
  {
    question: "Which was the last state to legalize MMA in the USA?",
    answers: [
      { text: "Alaska", correct: false },
      { text: "California", correct: false },
      { text: "New York", correct: true },
      { text: "Washington", correct: false },
    ],
  },

  {
    question: "What year did Conor McGregor first fight in the UFC?",
    answers: [
      { text: "2012", correct: false },
      { text: "2013", correct: true },
      { text: "2011", correct: false },
      { text: "2014", correct: false },
    ],
  },

  {
    question: "Who was the first women to win a UFC title by way of KO?",
    answers: [
      { text: "Ronda Rousey", correct: false },
      { text: "Weili Zhang", correct: false },
      { text: "Jessica Andrade", correct: false },
      { text: "Holly Holm", correct: true },
    ],
  },

  {
    question: "Who is the president of the UFC?",
    answers: [
      { text: "Joe Rogan", correct: false },
      { text: "Jon Anik", correct: false },
      { text: "Dana White", correct: true },
      { text: "Ariel Helwani", correct: false },
    ],
  },

  {
    question: "How many weight classes are in the UFC in total?",
    answers: [
      { text: "10", correct: false },
      { text: "11", correct: false },
      { text: "12", correct: true },
      { text: "13", correct: false },
    ],
  },

  {
    question: "Which fighter holds the nickname 'Rush'?",
    answers: [
      { text: "Ronda Rousey", correct: false },
      { text: "Jose Aldo", correct: false },
      { text: "Georges St Pierre", correct: true },
      { text: "Randy Costa", correct: false },
    ],
  },
];

// Variable data

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let scoreDisplay = document.getElementById("score_display");
let currentQuestionIndex = 0;
let score = 0;

// Function to start quiz. Some code adapted from greatStack tutorial mentioned in readme

function startQuiz() {
  randomize(questions);
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next Question";
  scoreDisplay.innerHTML = `${score}`;
  showQuestion();
}
// Function to map question data to question div. Some code adapted from greatStack tutorial mentioned in readme

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
// Function to select answer and mark data as correct or incorrect. Some code adapted from tutorial mentioned in readme

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    scoreDisplay.innerHTML = `${score}`;
  } else {
    selectedBtn.classList.add("incorrect");
   
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

//functions to show score once 10 questions have been answered and show a different message depending on the score. 

function showScore() {
    resetState();
    if (score <= 3){
    questionElement.innerHTML = `You scored ${score} out of 10! You're a casual!`;
    }
    else if (score >3 && score <7){
        questionElement.innerHTML = `You scored ${score} out of 10! You're a contender`; 
    }
    else if(score > 7){
        questionElement.innerHTML = `You scored ${score} out of 10! That's a championship level score!`;
    }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 10) {
    showQuestion();
  } else {
    showScore();
  }
}

scoreDisplay.innerHTML = score;

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < 10) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

// JavaScript Program to shuffle the questions in question array , referenced in fisher yates algorithym in readme
 
function randomize (questions) 
{
 
    // Start from the last element and swap 
    // one by one. We don't need to run for 
    // the first element that's why i > 0 

    for (let i = questions.length - 1; i > 0; i--)
    {
     
        // Pick a random index from 0 to i inclusive

        let j = Math.floor(Math.random() * (i + 1)); 
 
        // Swap arr[i] with the element 
        // at random index 

        [questions[i], questions[j]] = [questions[j], questions[i]];
    } 
} 
 
