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
let currentAttempt=0;
const maxAttempts = 0;

function startGamePlayerPc() {
const save = require("./save")

  if (level == 0) {
    randomWord =
      wordsByDifficult.easy[
        Math.floor(Math.random() * wordsByDifficult.easy.length)
      ];
  } else if (level == 1) {
    randomWord =
      wordsByDifficult.medium[
        Math.floor(Math.random() * wordsByDifficult.medium.length)
      ];
  } else if (level == 2) {
    randomWord =
      wordsByDifficult.hard[
        Math.floor(Math.random() * wordsByDifficult.hard.length)
      ]
  }
  guessedLetters = [];
  currentAttempt=maxAttempts;
  console.log("Guess the word by guessing one letter at a time!\n");
  console.log("Wtite back to go to main menu.\n");

  hideWord();
  updateGuessesDisplay()
  askForLetter();
  save.saveGame(guessedLetters, currentAttempt, randomWord);
}

function hideWord() {
  const hidenWord = randomWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
  console.log(hidenWord);
}

function updateGuessesDisplay() {
    const {hangDraw}= require("../hangmanDraw")
    const save = require("./save");
    console.log(hangDraw);
    console.log(`Current Attempt: ${currentAttempt}`);
    console.log(`Guessed letters: ${guessedLetters.join(", ")}`);
    save.saveGame(guessedLetters, currentAttempt, randomWord);
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
    } else if (cleanedLetter === "back") {
      mainMenu();
    } else {
      console.log("Please enter a valid single letter.");
      askForLetter();
    }
  });
}

function guessLetter(letter) {
  if (!guessedLetters.includes(letter)) {
    guessedLetters.push(letter);

    if (!randomWord.includes(letter)) {
      console.log("You missed ");
      currentAttempt++;
      //console.log(failedAttemp(currentAttempt)); //not working yet
    }
    hideWord();
    updateGuessesDisplay();
    askForLetter();
  } else {
    console.log("You already guessed that letter.");
    askForLetter();
    
  }
}

function checkWin() {
    if (
        randomWord.split("").every((letter) => guessedLetters.includes(letter))
      ) {
        console.log("\nCongratulations! You won!");
        process.exit(); // Terminate the process
      } else if (currentAttempt === 6) {
        console.log(`\nGame over! The word was "${currentWord}". Try again!`);
        process.exit(); // Terminate the process
      } else {
    
        askForLetter();
      }
    }

module.exports = { startGamePlayerPc, hideWord, guessLetter,currentAttempt};
