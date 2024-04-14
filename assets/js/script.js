console.log("Hello, world!");

/** QUESTIONS */

const questions = [
    {
        question: "What year was the UFC founded?",
        answers: [
            { text: "1993", correct: true},
            { text: "1990", correct: false},
            { text: "1997", correct: false},
            { text: "2001", correct: false},
        ]
    }, 
    {
        question: "Where was the first UFC event held?",
        answers: [
            { text: "Denver, Colorado", correct: true},
            { text: "Las Vegas, Nevada", correct: false},
            { text: "Miami, Florida", correct: false},
            { text: "Toronto, Ontario", correct: false},
        ]
    },
    {
        question: "Who was the first ever UFC champion?",
        answers: [
            { text: "Royce Gracie", correct: true},
            { text: "Mark Coleman", correct: false},
            { text: "Anderson Silva", correct: false},
            { text: "Frank Shamerock", correct: false},
        ]
    },
    {
        question: "Which fighter has the most successful UFC title defences?",
        answers: [
            { text: "Anderson Silva", correct: true},
            { text: "Conor McGregor", correct: false},
            { text: "GSP", correct: false},
            { text: "Izzy", correct: false},
        ]
    },
    {
        question: "Who was the first female fighter to be induced into the UFC hall of fame",
        answers: [
            { text: "Ronda Rousey", correct: true},
            { text: "Holly Holm", correct: false},
            { text: "Amanda Nunes", correct: false},
            { text: "Joanna J", correct: false},
        ]
    },
     { 
        question: "Who holds the record for fastest knockout in UFC history?",
        answers: [
        {text: "Jorge Masvidal", correct: true},
        {text: "Duane Ludwig", correct: false},
        {text: "Chan Sung Jung", correct: false},
        {text: "Brian Ortega", correct: false},
        ]
    },     { 
        question: "What year was the first womens fight in the UFC?",
        answers: [
        {text: "1993", correct: false},
        {text: "2003", correct: false},
        {text: "2013", correct: true},
        {text: "2009", correct: false},
        ]
    },     { 
        question: "Who was the first fighter to win UFC titles in 2 different weight classes?",
        answers:[
        {text: "Conor McGregor", correct: false},
        {text: "Randy Couture", correct: true},
        {text: "Daniel Cormier", correct: false},
        {text: "Amanda Nunes", correct: false},
        ]
    },     { 
        question: "Who was the first UFC women's strawweight chamption?",
        answers:[
        {text: "Ronda Rousey", correct: false},
        {text: "Carla Esparza", correct: true},
        {text: "Rose Namajunas", correct: false},
        {text: "Joanna Jedrzejczyk", correct: false},
        ]
    },     { 
        question: "Who has the most finishes in UFC history?",
        answers:[
        {text: "Anderson Silva", correct: false},
        {text: "Jose Aldo", correct: false},
        {text: "Donald Cerrone", correct: true},
        {text: "Francis Ngannou", correct: false},
        ]
        
    }, 
];

const questionElement = document.getElementById("question");
//const answerButtons = document.querySelectorAll(".answer-btn");//
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let randomQuestion = questions[Math.floor(Math.random())];

let currentQuestionIndex = 0;
let score = 0;

/*questionElement.innerText = questions[3].question;
let count=0;
answerButtons.forEach((answerbtn)=>{
    answerbtn.innerText = questions[3].answers[count].text;
    count++
    console.log("Who has the most finishes in UFC history?") 
})

answerButtons.forEach((answer)=>{
    answer.addEventListener("click", ()=>{
        console.log(answer.innerText);
    });
});*/


function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next Question"
    showQuestion();
}

function showQuestion (){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
};

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});


startQuiz();

