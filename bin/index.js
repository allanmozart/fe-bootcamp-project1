const { input, rawlist, select } = require("@inquirer/prompts");

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
      { name: "Start new game", value: "newGame" },
      { name: "Save game", value: "save" },
      { name: "Load game", value: "load" },
      { name: "Exit", value: "exit" },
    ],
  });
}

mainMenu();
