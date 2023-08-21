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

let atual = [];

//let attemps = 4;

function failedAttemp(attemps) {
  if (attemps === 0) {
    console.log(hangmanEmpty);
    atual = hangmanEmpty;
  } else if (attemps === 1) {
    console.log(hangmanHead);
    atual = hangmanHead;
  } else if (attemps === 2) {
    console.log(hangmanLeftArm);
    atual = hangmanLeftArm;
  } else if (attemps === 3) {
    console.log(hangmanTorso);
    atual = hangmanTorso;
  } else if (attemps === 4) {
    console.log(hangmanRightArm);
    atual = hangmanRightArm;
  } else if (attemps === 5) {
    console.log(hangmanLeftLeg);
    atual = hangmanLeftLeg;
  } else if (attemps === 6) {
    console.log(hangmanRightLeg);
    atual = hangmanRightLeg;
  }

}




//console.log(atual)

module.exports = { atual, failedAttemp };
