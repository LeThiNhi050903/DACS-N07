const questions = [
    {
        question: "Spoon dịch ra tiếng Việt có nghĩa là gì?",
        answers: [
            {text: "Cái thìa", correct: true},
            {text: "Cái dĩa", correct: false},
            {text: "Cái bát", correct: false},
            {text: "Cái chén", correct: false},
        ]
    },
    {
        question: "Cái khay dịch ra tiếng Anh là gì",
        answers: [
            {text: "Tray", correct: true},
            {text: "Bowl", correct: false},
            {text: "Chopsticks", correct: false},
            {text: "Plate", correct: false},
        ]
    },
    {
        question: "Lò nướng dịch ra tiếng Anh là gì",
        answers: [
            {text: "Rice cooker", correct: false},
            {text: "Stove", correct: false},
            {text: "Oven", correct: true},
            {text: "Fork", correct: false},
        ]
    },
    {
        question: "Chopping board dịch ra tiếng việt có nghĩa là gì?",
        answers: [
            {text: "Cái nồi", correct: false},
            {text: "Cái đĩa", correct: false},
            {text: "Cái bát", correct: false},
            {text: "Cái thớt", correct: true},
        ]
    },
    {
        question: "Kettle dịch ra tiếng việt có nghĩa là gì?",
        answers: [
            {text: "Bình đun nước", correct: true},
            {text: "Vỉ nướng", correct: false},
            {text: "Lò vi sóng", correct: false},
            {text: "Tạp dề", correct: false},
        ]
    },
    {
        question: "Cái nồi dịch ra tiếng Anh là gì?",
        answers: [
            {text: "Pot", correct: true},
            {text: "Pan", correct: false},
            {text: "Tray", correct: false},
            {text: "Bowl", correct: false},
        ]
    },
    {
        question: "Plate dịch ra tiếng việt có nghĩa là gì?",
        answers: [
            {text: "Cái thìa", correct: false},
            {text: "Cái đĩa", correct: true},
            {text: "Cái bát", correct: false},
            {text: "Cái chảo", correct: false},
        ]
    },
    {
        question: "Bowl dịch ra tiếng việt có nghĩa là gì?",
        answers: [
            {text: "Cái thớt", correct: false},
            {text: "Cái đĩa", correct: false},
            {text: "Cái bát", correct: true},
            {text: "Cái nồi", correct: false},
        ]
    },
    {
        question: "Đôi đũa dịch ra tiếng Anh là gì?",
        answers: [
            {text: "Fork", correct: false},
            {text: "Chopsticks", correct: true},
            {text: "Tongs", correct: false},
            {text: "Cái chén", correct: false},
        ]
    },
    {
        question: "Cái chảo dịch ra tiếng Anh là gì?",
        answers: [
            {text: "Plate", correct: false},
            {text: "Microwave", correct: false},
            {text: "Pot", correct: false},
            {text: "Pan", correct: true},
        ]
    },
    {
        question: "Lò vi sóng dịch ra tiếng Anh là gì?",
        answers: [
            {text: "Stove", correct: false},
            {text: "Microwave", correct: true},
            {text: "Blender", correct: false},
            {text: "Apron", correct: false},
        ]
    },
    {
        question: "Nồi cơm điện dịch ra tiếng Anh là gì?",
        answers: [
            {text: "Sieve", correct: false},
            {text: "Stove", correct: false},
            {text: "Rice cooker", correct: true},
            {text: "Pot", correct: false},
        ]
    },
    {
        question: "Knife dịch ra tiếng Việt có nghĩa là gì?",
        answers: [
            {text: "Con dao", correct: true},
            {text: "Cái rây/sàng", correct: false},
            {text: "Đôi đũa", correct: false},
            {text: "Cái thìa", correct: false},
        ]
    },
    {
        question: "Tongs dịch ra tiếng Việt có nghĩa là gì?",
        answers: [
            {text: "Cái kẹp gắp", correct: true},
            {text: "Cái dĩa", correct: false},
            {text: "Con dao", correct: false},
            {text: "Cái bát", correct: false},
        ]
    },
    {
        question: "Sieve dịch ra tiếng việt có nghĩa là gì?",
        answers: [
            {text: "Đôi đũa", correct: false},
            {text: "Cái rây/sàng", correct: true},
            {text: "Bình đun nước", correct: false},
            {text: "Cái thìa", correct: false},
        ]
    },
    {
        question: "Cái bếp dịch ra tiếng Anh là gì?",
        answers: [
            {text: "Stove", correct: true},
            {text: "Pan", correct: false},
            {text: "Plate", correct: false},
            {text: "Oven", correct: false},
        ]
    },
    {
        question: "Vỉ nướng dịch ra tiếng Anh là gì?",
        answers: [
            {text: "Grill", correct: true},
            {text: "Stove", correct: false},
            {text: "Oven", correct: false},
            {text: "Tray", correct: false},
        ]
    },
    {
        question: "Fork dịch ra tiếng việt có nghĩa là gì?",
        answers: [
            {text: "Cái thìa", correct: false},
            {text: "Cái dĩa", correct: true},
            {text: "Đôi đũa", correct: false},
            {text: "Con dao", correct: false},
        ]
    },
    {
        question: "Apron dịch ra tiếng việt có nghĩa là gì?",
        answers: [
            {text: "Cái chảo", correct: false},
            {text: "Cái bếp", correct: false},
            {text: "Tạp dề", correct: true},
            {text: "Cái nồi", correct: false},
        ]
    },
    {
        question: "Máy xay sinh tố dịch ra tiếng Anh là gì?",
        answers: [
            {text: "Stove", correct: false},
            {text: "Oven", correct: false},
            {text: "Rice cooke", correct: false},
            {text: "Blender", correct: true},
        ]
    },
]

const questionElement = document.getElementById("questions");
const answersBtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");
const backBack = document.getElementById("back");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    backBack.style.display = "none"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextBtn.style.display = "none";
    while(answersBtn.firstChild){
        answersBtn.removeChild(answersBtn.firstChild);
    } 
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answersBtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextBtn.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Bạn trả lời đúng ${score} trên ${questions.length} câu`;
    nextBtn.innerHTML = "Kiểm tra lại";
    nextBtn.style.display = "block";
    backBack.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();
