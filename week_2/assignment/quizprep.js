// Trivia Questions & Answers
let questionAnswer = [
    { question: "In which U.S. state do chickens outnumber people 200-to-1?", answer: "Delaware" },
    { question: "The bolo tie is the official state neckwear of which U.S. state?", answer: "Arizona" },
    { question: "Which state is the home of 98% of the worlds crawfish?", answer: "Lousiana" },
    { question: "The first Ouija board was invented in which U.S. state?", answer: "Maryland" },
    { question: "Kool-Aid is the official soft drink of which U.S. state?", answer: "Nebraska" },
    { question: "Which U.S. state has the only non-rectangular flag?", answer: "Ohio" },
    { question: "Which is the only U.S. state in the US where every county includes a part of a national forest?", answer: "Utah" },
];
console.log("The trivia questions for this quiz are:", questionAnswer)

// User Prompt & Answer
const questionIndex = Math.floor(Math.random() * questionAnswer.length);
const userAnswer = window.prompt(questionAnswer[questionIndex].question);
console.log("The user answered ", userAnswer)

// Response to User
window.alert( "You answered " + userAnswer + ". The correct answer is " + questionAnswer[questionIndex].answer + "." );
console.log("The correct answer is ", questionAnswer[questionIndex].answer);