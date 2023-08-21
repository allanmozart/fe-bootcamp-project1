const { input } = require("@inquirer/prompts");
const { failedAttemp, atual } = require("../hangmanDraw");
const { difficult } = require("../startNewGame");
let wordsByDifficult = {
  easy: ["apple", "grape", "papaya"],
  medium: ["monitor", "mouse", "keyboard"],
  hard: ["bootcamp"],
};

let level = difficult;
let randomWord = "";
let guessedLetters = [];
let currentAttempt
const maxAttempts = 6;

/* function setWordByDifficult(difficulty = 0) {
    level = difficulty
    if(level == 0) {
        randomWord = wordsByDifficult.easy[Math.floor(Math.random() * wordsByDifficult.easy.length)]
    } else if( level == 1) {
        randomWord = wordsByDifficult.medium[Math.floor(Math.random() * wordsByDifficult.medium.length)]
    } else if( level == 2) {
        randomWord = wordsByDifficult.hard[Math.floor(Math.random() * wordsByDifficult.hard.length)]
    }
}
 */
function startGamePlayerPc(){
    console.log(level);
    if(level == 0) {
        randomWord = wordsByDifficult.easy[Math.floor(Math.random() * wordsByDifficult.easy.length)]
    } else if( level == 1) {
        randomWord = wordsByDifficult.medium[Math.floor(Math.random() * wordsByDifficult.medium.length)]
    } else if( level == 2) {
        randomWord = wordsByDifficult.hard[Math.floor(Math.random() * wordsByDifficult.hard.length)]
    }

    guessedLetters = [];
    console.log('Aqui');

    hideWord();
    askForLetter()
}


function hideWord() {
   const hidenWord = randomWord.split("").map(letter => (guessedLetters.includes(letter) ? letter : "_")).join(" ");
    console.log(hidenWord);
}


function askForLetter() {
    const { mainMenu } = require("../index");
    
  const answer = input({
    message: "Guess a letter:",
  }).then((answer) => {
    const letter = answer;
    const cleanedLetter = letter.toLowerCase().trim();
    if (/^[a-z]$/.test(cleanedLetter)) {
      guessLetter(cleanedLetter);
    }else if(cleanedLetter ==="back"){
        mainMenu();
    }
     else {
      console.log("Please enter a valid single letter.");
      askForLetter();
    }
  })

}

function guessLetter(letter, currentAttempt){
    if(!guessedLetters.includes(letter)){
        guessedLetters.push(letter);
     if(!randomWord.includes(letter)){
        console.log("You missed ");
        currentAttempt++
        failedAttemp(currentAttempt);
    }
    hideWord();
    askForLetter()

    }   else {
        console.log("You already guessed that letter.");
        askForLetter();
    }


}

function checkWin(){
    if(guessedLetters.includes(hidenWord)){

    }
}

module.exports = {startGamePlayerPc, hideWord, guessLetter }

