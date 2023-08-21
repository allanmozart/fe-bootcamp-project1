const { input } = require("@inquirer/prompts");
const fs = require("fs");
const { failedAttemp, atual } = require("../hangmanDraw");
const { difficult } = require("../startNewGame");

let guessWordLoaded;
let attemptsLoaded;
let currentWordLoaded;

const guessedWordsLink = 'hangman/saves/guessedWords.txt';
const attemptsLink = 'hangman/saves/attemps.txt';
const currentWordLink = 'hangman/saves/currentWord.txt';
fs.readFile(guessedWordsLink, "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo:", err);
      return;
    }
    guessWordLoaded = data.split(",");
  });

  fs.readFile(attemptsLink, "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo:", err);
      return;
    }
    attemptsLoaded = data;
  });

  fs.readFile(currentWordLink, "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo:", err);
      return;
    }
    currentWordLoaded = data;
  });


let randomWord = currentWordLoaded;
let guessedLetters = guessWordLoaded;
let currentAttempt=attemptsLoaded;

function loadAGame() {
const save = require("./save")


randomWord = currentWordLoaded;
guessedLetters = guessWordLoaded;
currentAttempt=attemptsLoaded;

  console.clear();
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

  function checkWin() {
    if (
        randomWord.split("").every((letter) => guessedLetters.includes(letter))
      ) {
        console.log("\nCongratulations! You won!");
        process.exit(); // Terminate the process
      } else if (currentAttempt === 0) {
        console.log(`\nGame over! The word was "${randomWord}". Try again!`);
        process.exit(); // Terminate the process
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
      currentAttempt++;
      //console.log(failedAttemp(currentAttempt)); //not working yet
    }

    console.clear();
    hideWord();
    updateGuessesDisplay();
    checkWin()

    
  } else {
    console.log("You already guessed that letter.");
    askForLetter();
    
  }
}


module.exports = { loadAGame, hideWord, guessLetter,currentAttempt};