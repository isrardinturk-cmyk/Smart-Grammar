```javascript
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("welcomeButton");
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("grammar-search");

    const messageBox = document.getElementById("appMessageBox");
    const message = document.getElementById("appMessage");
    const okButton = document.getElementById("messageOkButton");

    // Welcome button
    if (button) {
        button.addEventListener("click", function () {
            showMessage("Welcome to Smart Grammar! 👩‍🎓");
        });
    }

    // Search button
    if (searchButton && searchInput) {
        searchButton.addEventListener("click", function () {
            const searchText = searchInput.value.trim().toLowerCase();

            if (searchText === "") {
                showMessage("Please enter a grammar topic.");
                return;
            }

            const pageText = document.body.innerText.toLowerCase();

            if (pageText.includes(searchText)) {
                showMessage("Topic found! 🔎");
            } else {
                showMessage("Topic not found. 😕");
            }
        });
    }

    // Show message inside the centered box
    function showMessage(text) {
        if (messageBox && message) {
            message.textContent = text;
            messageBox.style.display = "block";

            messageBox.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        } else {
            alert(text);
        }
    }

    // OK button closes the message box
    if (okButton) {
        okButton.addEventListener("click", function () {
            if (messageBox) {
                messageBox.style.display = "none";
            }

            if (searchInput) {
                searchInput.value = "";
                searchInput.focus();
            }
        });
    }
});
```

// Smart Grammar Quiz

const questions = [
    {
        question: "What is the past tense of 'go'?",
        answers: ["Went", "Goed", "Go", "Going"],
        correct: "Went"
    },
    {
        question: "Which word is a noun in 'Ali reads a book'?",
        answers: ["Reads", "Book", "A", "Quickly"],
        correct: "Book"
    },
    {
        question: "Choose the correct sentence.",
        answers: [
            "She go to school.",
            "She going to school.",
            "She goes to school.",
            "She gone to school."
        ],
        correct: "She goes to school."
    },
    {
        question: "Which punctuation mark ends a direct question?",
        answers: [".", "?", ",", ":"],
        correct: "?"
    },
    {
        question: "Choose the correct article: 'He ate ___ apple.'",
        answers: ["a", "an", "the", "no article"],
        correct: "an"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

const startQuiz =
document.getElementById("startQuiz");

const quizQuestion =
document.getElementById("quizQuestion");

const quizAnswers =
document.getElementById("quizAnswers");

const nextQuestion =
document.getElementById("nextQuestion");

const quizScore =
document.getElementById("quizScore");

startQuiz.addEventListener("click",function() {

    currentQuestion = 0;
    score = 0;

    quizScore.textContent = "Score: 0";

    showQuestion();

});


function showQuestion() {

    selectedAnswer = "";

    const question =
    questions[currentQuestion];

    quizQuestion.textContent =
    question.question;

    quizAnswers.innerHTML = "";


question.answers.forEach(function(answer) {

        const button =

document.createElement("button");

        button.textContent = answer;

button.classList.add("quiz.answer");


button.addEventListener("click",function() {

            selectedAnswer = answer;

        });


quizAnswers.appendChild(button);
    });

}


nextQuestion.addEventListener("click",function() {

    if (selectedAnswer === "") {

        alert("Please select an answer.");

        return;

    }

    if (
        selectedAnswer ===

questions[currentQuestion].correct
    ) {

        score++;

    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

        quizScore.textContent =
        "Score: " + score;

    } else {

        quizQuestion.textContent =
        "Quiz Completed! 💯😍";

        quizAnswers.innerHTML = "";

        quizScore.textContent =
        "Final Score: " + score + " / " + questions.length;

        nextQuestion.style.display = "none";

        restartQuiz.style.display = "inline-block"

    }

});


const restartQuiz =
document.getElementById("restartQuiz");

restartQuiz.addEventListener("click",function() {
    
    currentQuestion = 0;
    score = 0;
    selectedAnswer = "";

    nextQuestion.style.display = "inline-block";

    quizScore.textContent = "Score: 0";

    showQuestion();

});




