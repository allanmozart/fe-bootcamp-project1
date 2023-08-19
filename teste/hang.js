const { input} = require("@inquirer/prompts");
const save = require('./saveArray')

const words = ["hangman", "javascript", "programming", "computer", "teste"];
const maxAttempts = 6;

let currentWord = "";
let guessedLetters = [];
let attemptsLeft = maxAttempts;
let testeDraw=[
    ["____"],
    ["|   |"],
    ["|   O"],
    ["| / | \\"],
    ["|  / \\"],
    ["|_______"],
  ];

function startGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attemptsLeft = maxAttempts;

    console.clear();
    console.log("Hangman Game");
    console.log("Guess the word by guessing one letter at a time!\n");

    updateWordDisplay();
    updateGuessesDisplay();
    askForLetter();
    save.saveGame(attemptsLeft, guessedLetters,testeDraw);
}

function updateWordDisplay() {
    const displayedWord = currentWord
        .split("")
        .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");
    console.log(displayedWord);
}

function updateGuessesDisplay() {
    console.log(`Attempts left: ${attemptsLeft}`);
    console.log(`Guessed letters: ${guessedLetters.join(", ")}`);
    save.saveGame(attemptsLeft, guessedLetters,testeDraw);
}

function checkWinOrLose() {
    if (currentWord.split("").every(letter => guessedLetters.includes(letter))) {
        console.log("\nCongratulations! You won!");
        process.exit(); // Terminate the process
    } else if (attemptsLeft === 0) {
        console.log(`\nGame over! The word was "${currentWord}". Try again!`);
        process.exit(); // Terminate the process
    } else {
        askForLetter();
    }
}

function askForLetter() {
    const answer= input({
        message: 'Guess a letter:'
    }).then(answer => {
        const letter = answer;
        const cleanedLetter = letter.toLowerCase().trim();
        if (/^[a-z]$/.test(cleanedLetter)) {
            guessLetter(cleanedLetter);
        } else {
            console.log("Please enter a valid single letter.");
            askForLetter();
        }
    });
}

function guessLetter(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);

        if (!currentWord.includes(letter)) {
            attemptsLeft--;
        }

        console.clear();
        updateWordDisplay();
        updateGuessesDisplay();
        checkWinOrLose();
    } else {
        console.log("You already guessed that letter.");
        askForLetter();
    }
}


// Start the game initially
//startGame();

module.exports={startGame, guessedLetters, attemptsLeft, testeDraw};

