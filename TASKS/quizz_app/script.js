const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Pb", "Fe"],
        answer: "Au"
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    }
];

let currentQuestionIndex = 0;
let score = 0;
function loadQuiz() {
    var quizArea = document.getElementById('quiz');
    quizArea.innerHTML = '';
    const currentQuestion = questions[currentQuestionIndex];
    // create element
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<h2>${currentQuestion.question}</h2>`;
    for (var i = 0; i < currentQuestion.options.length; i++) {
        questionElement.innerHTML += `
            <label>
                <input type="radio" name="answer" value="${currentQuestion.options[i]}"> ${currentQuestion.options[i]}
            </label>
        `;
    }  
    quizArea.appendChild(questionElement);
}

function submitQuiz() {
    const selectAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectAnswer){
        if (selectAnswer.value === questions[currentQuestionIndex].answer){
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length){
            loadQuiz();
        }
        else{
            displayResult();
        }
    } 
    else{
        alert('Please Select An Answer !!');
    }
}

function displayResult() {
    var quizArea = document.getElementById('quiz');
    var btnResult = document.getElementById('submitBtn');
    var quizResult = document.getElementById('result');
    quizArea.innerHTML = '';
    btnResult.style.display = 'none';
    quizResult.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
}

loadQuiz();


/*

    1. onclick ----> addEventListener('click',function(){})
    2. document.createElement('element--->[div, main, header,....]') ->> To add new element
    3. .classList.add('className')  ->> to add new class for element
    4. innerHTML = 'Your Content' ->> to add sub elements inside another element
    5. alert ->> display something in box 

*/ 