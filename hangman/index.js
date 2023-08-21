const { input, rawlist, select } = require("@inquirer/prompts");
const {startNewGame} = require('../hangman/startNewGame')

//console.log(start);

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
          startNewGame();
            break;
        case "save":
            saveGame();
            break;
        case "load":
            loadGame();
            break;
        default:
            console.log("Select a valid option");
    }
  })
}

mainMenu();


module.exports = { mainMenu };

/*
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
      }).then(function(option) {
        if(option == "playerpc") {
          rawlist({
            message: "Choose your difficult level",
            choices: [
              { name: "easy", value: "easy" },
              { name: "medium", value: "medium" },
              { name: "hard", value: "hard" },
            ],
          }).then(function (option) {
            switch (option) {
              case "easy":
                setWordByDifficult(0);
                break;
              case "medium":
                setWordByDifficult(1);
                break;
              case "hard":
                setWordByDifficult(2);
                break;
            }
          });
        } else {
          console.log("I'm on error");
        }
      });
}
*/