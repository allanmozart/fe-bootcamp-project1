const { input, rawlist, select } = require("@inquirer/prompts");
const start = require('../hangman/startNewGame')

console.log("main index");

//step 1

//Main menu
//start new game
//Select game type
    //Player vs Player
        //Select difficulty level
            //Levels (ex: easy, medium and high)
    //Player vs Computer
        //Select difficulty level
        //Levels (ex: easy, medium and high)
//Save game
//Load game
//exit

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
      }) 
}