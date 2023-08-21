const {rawlist} = require("@inquirer/prompts");
const {startNewGame} = require('../hangman/startNewGame')


function mainMenu() {
  const {loadAGame} = require("./templates/loadGame")
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
          startNewGame();
            break;
        case "save":
            console.log("Game saved!!!");
            mainMenu();
            break;
        case "load":
            loadAGame();
            break;
        default:
            console.log("Select a valid option");
    }
  })
}

mainMenu();


module.exports = { mainMenu };
