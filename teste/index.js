const { input, rawlist, select } = require("@inquirer/prompts");
const game = require("./hang.js")
const loadG = require("./loadedGame.js")

function mainMenu() {
  rawlist({
    message: "The Hangman game!!!!",
    choices: [
      { name: "Start new game", value: "new" },
      { name: "Save game", value: "save" },
      { name: "Load game", value: "load" },
      { name: "Exit", value: "exit" },
    ],
  }).then(function(option){
    switch(option){
        case "new":
          startGame();
            break;
        case "save":
            saveGame();
            break;
        case "load":
            loadG.startGame();
            break;
        default:
            console.log("Select a valid option");
    }
  })
}

mainMenu();

function startGame(){
    select({
        message: "Select the game type",
        choices: [
          {
            name: "Player Vs Player",
            value: "player",
          },
          {
            name: "Player Vs PC",
            value: "playerpc",
          },
        ],
      }).then(function(option){
        switch(option){
          case "playerpc":
            game.startGame();
            break;
        }

      })
}


