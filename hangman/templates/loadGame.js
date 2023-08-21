const { input } = require("@inquirer/prompts");
const fs = require("fs");
const save = require("./save");
const { failedAttemp } = require("../hangmanDraw");


const guessedWordsLink = "hangman/saves/guessedWords.txt";
const attemptsLink = "hangman/saves/attemps.txt";
const currentWordLink = "hangman/saves/currentWord.txt";

let guessWordLoaded;
let attemptsLoaded;
let currentWordLoaded;


function loadAGame() {
    
  try {
    guessWordLoaded = fs.readFileSync(guessedWordsLink, "utf8").split(",");
  } catch (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  try {
    attemptsLoaded = fs.readFileSync(attemptsLink, "utf8");
  } catch (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  try {
    currentWordLoaded = fs.readFileSync(currentWordLink, "utf8");
  } catch (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  console.clear();
  console.log("Guess the word by guessing one letter at a time!\n");
  
  hideWord();
  updateGuessesDisplay();
  askForLetter();
  save.saveGame(guessWordLoaded, attemptsLoaded, currentWordLoaded);
  
  console.log("Write back to go to main menu.\n");
}

function hideWord() {
  const hidenWord = currentWordLoaded
    .split("")
    .map((letter) => (guessWordLoaded.includes(letter) ? letter : "_"))
    .join(" ");
  console.log(hidenWord);
}

function updateGuessesDisplay() {
    failedAttemp(attemptsLoaded);
  console.log(`Current Attempt: ${attemptsLoaded}`);
  console.log(`Guessed letters: ${guessWordLoaded.join(", ")}`);
  save.saveGame(guessWordLoaded, attemptsLoaded, currentWordLoaded);
}

function checkWin() {
  if (
    currentWordLoaded
      .split("")
      .every((letter) => guessWordLoaded.includes(letter))
  ) {
    console.log("\nCongratulations! You won!");
    process.exit(); // Terminate the process
  } else if (attemptsLoaded === 0) {
    console.log(`\nGame over! The word was "${currentWordLoaded}". Try again!`);
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
  if (!guessWordLoaded.includes(letter)) {
    guessWordLoaded.push(letter);

    if (!currentWordLoaded.includes(letter)) {
      console.log("You missed ");
      attemptsLoaded--;
    }

    console.clear();
    hideWord();
    updateGuessesDisplay();
    checkWin();
    console.log("Write back to go to main menu.\n");
  } else {
    console.log("You already guessed that letter.");
    askForLetter();
  }
}

module.exports = { loadAGame, hideWord, guessLetter };
