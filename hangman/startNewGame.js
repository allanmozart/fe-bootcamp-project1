const { input, rawlist, select } = require("@inquirer/prompts");

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
module.export = { startNewGame };