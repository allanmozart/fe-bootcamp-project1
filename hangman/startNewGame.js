const { rawlist, select } = require("@inquirer/prompts");
const { mainMenu } = require("../hangman/index");

/*
function startNewGame() {
  select({
    message: "Select a game type",
    choices: [
      {
        name: "Player vs Player",
        value: select({
          message: "difficulty level",
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
        }).then(function (x) {
          //resultado da escolha Player vs Player - Guardar para load Game
        }),
      },
      {
        name: "Player vs Computer",
        value: select({
          message: "difficulty level",
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
        }).then(function (x) {
          //resultado da escolha Player vs Computer - Guardar para load Game
        }),
      },
    ],
  }).then(function (x) {
    //resultado da escola de select() - Guardar para load Game
  });
}

startNewGame();
*/

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
  }).then(function (difficulty) {
    //é chamada a função que mostra o numero de caracteres segundo a dificuldade

    console.log("Para breve...");
  });
}

module.exports = { startNewGame };
