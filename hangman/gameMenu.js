/*


["____"],
["|   |"],
["|   O"],
["| / | \\"],
["|  / \\"],
["|_______"]

You currently have X attemps.


Word:  _ _ _ _


*/
const { input } = require("@inquirer/prompts");
const { atual } = require("../hangman/hangmanDraw");



console.log(atual);
console.log("\n");
console.log(`You currently lost .`);
console.log("\n");
console.log(`Word: `);

