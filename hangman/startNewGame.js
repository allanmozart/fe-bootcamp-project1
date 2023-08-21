const { rawlist, select, input } = require("@inquirer/prompts");
const { mainMenu } = require("../hangman/index");
const { failedAttemp, atual } = require("../hangman/hangmanDraw");
//const { setWordByDifficult, guessLetter } = require('../hangman/templates/setWord.js');

//let currentAttempt = 0;
//const maxAttempts = 6;
let difficult=0;

function startNewGame() {
  rawlist({
    message: "Select a game type",
    choices: [
      { name: "Player vs Player", value: "Player vs Player" },
      { name: "Player vs Computer", value: "Player vs Computer" },
      { name: "Go back", value: "Back" },
    ],
  }).then(function (option) {
    switch (option) {
      case "Player vs Player":
        playerVsPlayer();
        break;
      case "Player vs Computer":
        playerVsComputer();
        break;
      case "Back":
        mainMenu();
        break;
      default:
        console.log("Err. That is not a valid option");
    }
  });
}

function playerVsPlayer() {
  select({
    message: "Select a difficulty level",
    choices: [
      {
        name: "Easy",
        value: "Easy",
      },
      {
        name: "Medium",
        value: "Medium",
      },
      {
        name: "Hard",
        value: "Hard",
      },
    ],
  }).then(function (difficulty) {
    //é chamada a função que mostra o numero de caracteres segundo a dificuldade

    console.log("Para breve...");
  });
}

function playerVsComputer() {
  select({
    message: "Select a difficulty level",
    choices: [
      {
        name: "Easy",
        value: "Easy",
      },
      {
        name: "Medium",
        value: "Medium",
      },
      {
        name: "Hard",
        value: "Hard",
      },
    ],
  }).then(function(option) {
    runDifficult(option);
  });
}

function runDifficult(option) {
  const { startGamePlayerPc} = require('../hangman/templates/setWord.js');
    let guessLetterInput
    switch(option) {
        case "Easy":
          difficult=0;
          startGamePlayerPc();
           /*  failedAttemp(currentAttempt);
            setWordByDifficult(0);
            guessLetterInput = input({
                message: 'Guess a letter:'
            }).then(
                guessLetter(guessLetterInput),
                ) */
            break;
        case "Medium":
          setWordByDifficult(1);
          break;
        case "Hard":
          setWordByDifficult(2);
          break;
    }
}


module.exports = { startNewGame, difficult };
