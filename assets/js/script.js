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
    question:
      "Who was the first fighter to appear on a box of Wheaties Cereal?",
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
    question:
      "Who is the only fighter to have won Fight of the year more than once?",
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
  {
    question: "Who was the first UFC fighter to fight in 3 different weight classes?",
    answers: [
      { text: "BJ Penn", correct: true },
      { text: "Conor McGregor", correct: false },
      { text: "Frankie Edgar", correct: false },
      { text: "Daniel Cormier", correct: false },
    ],
  },
  {
    question: "Which UFC fighter has the longest unbeaten streak in UFC history?",
    answers: [
      { text: "Khabib Nurmagomedov", correct: true },
      { text: "Anderson Silva", correct: false },
      { text: "Jon Jones", correct: false },
      { text: "Georges St-Pierre", correct: false },
    ],
  },
  {
    question: "Who won the first UFC Women's Bantamweight title?",
    answers: [
      { text: "Ronda Rousey", correct: true },
      { text: "Holly Holm", correct: false },
      { text: "Miesha Tate", correct: false },
      { text: "Amanda Nunes", correct: false },
    ],
  },
  {
    question: "Who holds the record for most UFC title defenses in the men's division?",
    answers: [
      { text: "Demetrious Johnson", correct: true },
      { text: "Jon Jones", correct: false },
      { text: "Georges St-Pierre", correct: false },
      { text: "Anderson Silva", correct: false },
    ],
  },
  {
    question: "Who was the first fighter to win the UFC Flyweight title?",
    answers: [
      { text: "Demetrious Johnson", correct: true },
      { text: "Henry Cejudo", correct: false },
      { text: "Joseph Benavidez", correct: false },
      { text: "Rodtang", correct: false },
    ],
  },
  {
    question: "Which fighter holds the most finishes in UFC history?",
    answers: [
      { text: "Charles Oliveira", correct: true },
      { text: "Donald Cerrone", correct: false },
      { text: "Frankie Edgar", correct: false },
      { text: "Nate Diaz", correct: false },
    ],
  },
  {
    question: "Which UFC fighter is known as 'The Immortal'?",
    answers: [
      { text: "Matt Brown", correct: true },
      { text: "Nick Diaz", correct: false },
      { text: "Conor McGregor", correct: false },
      { text: "Robbie Lawler", correct: false },
    ],
  },
  {
    question: "Who holds the most consecutive UFC title defenses in the welterweight division?",
    answers: [
      { text: "Georges St-Pierre", correct: true },
      { text: "Matt Hughes", correct: false },
      { text: "Tyron Woodley", correct: false },
      { text: "Kamaru Usman", correct: false },
    ],
  },
  {
    question: "Who was the first UFC fighter to win the 'Fighter of the Year' award twice?",
    answers: [
      { text: "Conor McGregor", correct: true },
      { text: "Jon Jones", correct: false },
      { text: "Daniel Cormier", correct: false },
      { text: "Khabib Nurmagomedov", correct: false },
    ],
  },
  {
    question: "Which UFC event was the first to feature a live audience after the COVID-19 pandemic?",
    answers: [
      { text: "UFC 249", correct: true },
      { text: "UFC 261", correct: false },
      { text: "UFC 265", correct: false },
      { text: "UFC 253", correct: false },
    ],
  },
  {
    question: "What is the UFC's most popular PPV event of all time?",
    answers: [
      { text: "UFC 229", correct: true },
      { text: "UFC 100", correct: false },
      { text: "UFC 205", correct: false },
      { text: "UFC 202", correct: false },
    ],
  },
  {
    question: "Who has the most submission wins in UFC history?",
    answers: [
      { text: "Charles Oliveira", correct: true },
      { text: "Frankie Edgar", correct: false },
      { text: "BJ Penn", correct: false },
      { text: "Nate Diaz", correct: false },
    ],
  },
  {
    question: "Who is the youngest fighter in UFC history to win a title?",
    answers: [
      { text: "Jon Jones", correct: true },
      { text: "Ronda Rousey", correct: false },
      { text: "Conor McGregor", correct: false },
      { text: "Stipe Miocic", correct: false },
    ],
  },
  {
    question: "Which UFC fighter is known for his 'chael sunnen' trash-talking style?",
    answers: [
      { text: "Chael Sonnen", correct: true },
      { text: "Conor McGregor", correct: false },
      { text: "Michael Bisping", correct: false },
      { text: "Nate Diaz", correct: false },
    ],
  },
  {
    question: "Who was the first UFC fighter to win the 'Fight of the Night' bonus twice?",
    answers: [
      { text: "Joe Lauzon", correct: true },
      { text: "Nate Diaz", correct: false },
      { text: "Donald Cerrone", correct: false },
      { text: "Robbie Lawler", correct: false },
    ],
  },
  {
    question: "Which UFC fighter was nicknamed 'The Brazilian Pitbull'?",
    answers: [
      { text: "Antonio Rodrigo Nogueira", correct: true },
      { text: "Anderson Silva", correct: false },
      { text: "Vitor Belfort", correct: false },
      { text: "Thiago Alves", correct: false },
    ],
  },
  {
    question: "Which UFC event featured the first ever women's fight?",
    answers: [
      { text: "UFC 157", correct: true },
      { text: "UFC 134", correct: false },
      { text: "UFC 113", correct: false },
      { text: "UFC 178", correct: false },
    ],
  },
  {
    question: "Who was the first fighter to knock out Anderson Silva?",
    answers: [
      { text: "Chris Weidman", correct: true },
      { text: "Chael Sonnen", correct: false },
      { text: "Daniel Cormier", correct: false },
      { text: "Vitor Belfort", correct: false },
    ],
  },
  {
    question: "Who has the most UFC wins in history?",
    answers: [
      { text: "Donald Cerrone", correct: true },
      { text: "Georges St-Pierre", correct: false },
      { text: "Frankie Edgar", correct: false },
      { text: "Anderson Silva", correct: false },
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

  // Set up next button event listener only once
  nextButton.removeEventListener("click", playAgainHandler);
  nextButton.addEventListener("click", handleNextButton);
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

// Reset the state of the quiz (clear answers and hide next button)
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

//functions to show score once 10 questions have been answered and show a different message depending on the score.
function showScore() {
  resetState();
  if (score <= 3) {
    questionElement.innerHTML = `You scored ${score} out of 10! You're a casual!`;
  } else if (score > 3 && score < 7) {
    questionElement.innerHTML = `You scored ${score} out of 10! You're a contender`;
  } else if (score > 7) {
    questionElement.innerHTML = `You scored ${score} out of 10! That's a championship level score!`;
  }

  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";

  // Attach the playAgainHandler to reset quiz when "Play Again" is clicked
  nextButton.addEventListener("click", playAgainHandler);
}

// Function to handle the "Play Again" button
function playAgainHandler() {
  startQuiz(); // Restart the quiz by calling startQuiz
}

// Function to handle next question button click
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 10) {
    showQuestion();
  } else {
    showScore();
  }
}

if (
  window.location.pathname.includes("MMA-Quiz") ||
  window.location.pathname.endsWith("index.html")
) {
  startQuiz();
}

// JavaScript Program to shuffle the questions in question array , referenced in fisher yates algorithym in readme
function randomize(questions) {
  // Start from the last element and swap
  // one by one. We don't need to run for
  // the first element that's why i > 0

  for (let i = questions.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i inclusive
    let j = Math.floor(Math.random() * (i + 1));

    // Swap arr[i] with the element at random index
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}
