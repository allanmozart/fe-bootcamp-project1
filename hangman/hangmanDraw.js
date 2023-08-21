/*
____        
|   |     
|   O    
| / | \   
|  / \     
|_______  


["____"],
["|   |"],
["|   O"],
["| / | \\"],
["|  / \\"],
["|_______"]


*/

let hangmanEmpty = [
  [" ____   "],
  ["|    |  "],
  ["|       "],
  ["|       "],
  ["|       "],
  ["|_______"],
];

let hangmanHead = [
  [" ____   "],
  ["|    |  "],
  ["|    O  "],
  ["|       "],
  ["|       "],
  ["|_______"],
];

let hangmanLeftArm = [
  [" ____    "],
  ["|    |   "],
  ["|    O   "],
  ["|  /     "],
  ["|        "],
  ["|________"],
];

let hangmanTorso = [
  [" ____   "],
  ["|    |  "],
  ["|    O  "],
  ["|  / |  "],
  ["|       "],
  ["|_______"],
];

let hangmanRightArm = [
  [" ____    "],
  ["|    |   "],
  ["|    O   "],
  ["|  / | \\"],
  ["|        "],
  ["|________"],
];

let hangmanLeftLeg = [
  [" ____    "],
  ["|    |   "],
  ["|    O   "],
  ["|  / | \\"],
  ["|   /    "],
  ["|________"],
];

let hangmanRightLeg = [
  [" ____    "],
  ["|    |   "],
  ["|    O   "],
  ["|  / | \\"],
  ["|   / \\ "],
  ["|________"],
];


let hangDraw = [];
//let attemps = 4;

function failedAttemp() {
  const {currentAttempt} = require("./templates/setWord");
  let attemps=currentAttempt;
  if (attemps === 0) {
    console.log(hangmanEmpty);
    hangDraw = [
      [" ____   "],
      ["|    |  "],
      ["|       "],
      ["|       "],
      ["|       "],
      ["|_______"],
    ];
  } else if (attemps === 1) {
    console.log(hangmanHead);
    hangDraw = hangmanHead;
  } else if (attemps === 2) {
    console.log(hangmanLeftArm);
    hangDraw = hangmanLeftArm;
  } else if (attemps === 3) {
    console.log(hangmanTorso);
    hangDraw = hangmanTorso;
  } else if (attemps === 4) {
    console.log(hangmanRightArm);
    hangDraw = hangmanRightArm;
  } else if (attemps === 5) {
    console.log(hangmanLeftLeg);
    hangDraw = hangmanLeftLeg;
  } else if (attemps === 6) {
    console.log(hangmanRightLeg);
    hangDraw = hangmanRightLeg;
  }

}




//console.log(atual)

module.exports = {failedAttemp,hangDraw};
