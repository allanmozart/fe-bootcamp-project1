const { input, rawlist, select } = require("@inquirer/prompts");
const { setWordByDifficult }  = require("../hangman/templates/setWord.js");

console.log("main index");

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
            loadGame();
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