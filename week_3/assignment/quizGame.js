let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
    { question: "In which U.S. state do chickens outnumber people 200-to-1?", answer: "Delaware"},
    { question: "The bolo tie is the official state neckwear of which U.S. state?", answer: "Arizona"},
    { question: "Which state is the home of 98% of the worlds crawfish?", answer: "Lousiana" },
    { question: "The first Ouija board was invented in which U.S. state?", answer: "Maryland"},
    { question: "Kool-Aid is the official soft drink of which U.S. state?", answer: "Nebraska" },
    { question: "Which U.S. state has the only non-rectangular flag?", answer: "Ohio"},
    { question: "Which is the only U.S. state in the US where every county includes a part of a national forest?", answer: "Utah"},
];
console.log("The trivia questions for this quiz are:", statements)

function next() {
    if (statements.length < 1) {
        alert ('you won');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
    
}

var wrongAnswerCounter = [];
console.log("The list of trivia questions that were answered incorrectly are:", wrongAnswerCounter);

function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        //remove correct answer from array
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        // this is the correct condition
        response = 'Correct! Please answer the next question (above).';
        responseColor = 'white';
    } else {
        // this is the wrong condition
        response = 'Nope! That wasn\'t quite right! Try another question (above).';
        responseColor = 'black';
        wrongAnswerCounter.push(currentQuestion);
        if (wrongAnswerCounter.length >= 5) {
            alert ('you lost');
        }
    }
    currentQuestion = next();
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question;
    }
    console.log("Current number of wrong answers is: ", wrongAnswerCounter.length);

}


currentQuestion = next();
let message = currentQuestion.question

function setup() {
    createCanvas(1200, 600);
    heading = createElement('h1', ['Silly Little US States Quiz']);
    heading.position(100, 100);
    questionInput = createInput('');
    questionInput.size(250,40);
    questionInput.position(100,230);
    submitAnswerButton = createButton('Submit Answer');
    submitAnswerButton.size(250, 40);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 285);
    restartButton = createButton('Restart Game');
    restartButton.size(250, 40);
    restartButton.mousePressed(restartGame);
    restartButton.position(100, 500);
}

function draw(){
    background('pink');
    fill('magenta');
    textSize(22);
    text(message, 100, 200);
    fill(responseColor);
    textSize(16);
    text(response, 100, 350);
}

function restartGame () {
    window.location.reload();
    }
