const { input } = require("@inquirer/prompts");
const save = require("./save");
const { mainMenu } = require("../index");
const { failedAttemp } = require("../hangmanDraw");

let randomWord = "";
let guessedLetters = [];
let currentAttempt = 0;
const maxAttempts = 6;

function startGame(secretWord) {
  randomWord = secretWord;
  guessedLetters = [];
  currentAttempt = maxAttempts;
  console.clear();
  console.log("Guess the word by guessing one letter at a time!\n");
  

  hideWord();
  updateGuessesDisplay();
  askForLetter();
  save.saveGame(guessedLetters, currentAttempt, randomWord);
  console.log("Wtite back to go to main menu.\n");
}

function hideWord() {
  const hidenWord = randomWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
  console.log(hidenWord);
}

function updateGuessesDisplay() {
failedAttemp(currentAttempt);
  console.log(`Current Attempt: ${currentAttempt}`);
  console.log(`Guessed letters: ${guessedLetters.join(", ")}`);
  save.saveGame(guessedLetters, currentAttempt, randomWord);
}

function checkWin() {
    const { mainMenu } = require("../index");
  if (randomWord.split("").every((letter) => guessedLetters.includes(letter))) {
    console.log("\nCongratulations! You won!");
   mainMenu();
  } else if (currentAttempt === 0) {
    console.log(`\nGame over! The word was "${randomWord}". Try again!`);
    mainMenu(); // Terminate the process
  } else {
    askForLetter();
  }
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
      currentAttempt--;
    }
    
    console.clear();
    hideWord();
    updateGuessesDisplay();
    checkWin();
    console.log("Wtite back to go to main menu.\n");
  } else {
    console.log("You already guessed that letter.");
    askForLetter();
  }
}

module.exports = { startGame, hideWord, guessLetter, currentAttempt };
