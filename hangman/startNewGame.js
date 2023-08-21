const { rawlist, select, input } = require("@inquirer/prompts");
const { mainMenu } = require("../hangman/index");
const { startGame } = require("../hangman/templates/setWord.js");
const { secretWord } = require("./secretWord");

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

async function playerVsPlayer() {
  const answer = await input({
    message: "Introduce the word to guess:",
  });
  startGame(answer);
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
  }).then(function (option) {
    const secret = secretWord(option);
    startGame(secret);
  });
}


module.exports = { startNewGame };
