const { input } = require("@inquirer/prompts");
const { failedAttemp, atual } = require("../hangmanDraw");

let wordsByDifficult = {
  easy: ["apple", "grape", "papaya"],
  medium: ["monitor", "mouse", "keyboard"],
  hard: ["bootcamp"],
};

let level = 0;
let randomWord = "";
let hidenWord = "";
let guessedLetters = [];
let currentAttempt;
const maxAttempts = 6;

function setWordByDifficult(difficulty = 0) {
  level = difficulty;
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
      ];
  }
}

function hideWord() {
  hidenWord = randomWord
    .split("")
    .map((hidenWord) => (guessedLetters.includes(hidenWord) ? hidenWord : "_"))
    .join(" ");
  console.log(hidenWord);
}

const letterInput = async () => {
  const answer = await input({
    message: "Introduce the word to guess:",
  }).then((answer) => {
    const letter = answer;
    const cleanedLetter = letter.toLowerCase().trim();
    if (/^[a-z]$/.test(cleanedLetter)) {
      guessLetter(cleanedLetter);
    } else {
      console.log("Please enter a valid single letter.");
      letterInput();
    }
  });
};

function guessLetter(letter, currentAttempt) {
  if (!hidenWord.includes(letter)) {
    guessedLetters.push(letter);
    console.log(hidenWord);
    if (!randomWord.includes(letter)) {
      console.log("You missed ");
      currentAttempt++;
      failedAttemp(currentAttempt);
    }
    hideWord(); 
    letterInput();
  } else {
    console.log("You already guessed that letter.");
    letterInput();
  }
}
function checkWin() {
  if (guessedLetters.includes(hidenWord)) {
  }
}

module.exports = { setWordByDifficult, hideWord, guessLetter, letterInput };
