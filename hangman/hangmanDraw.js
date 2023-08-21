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


function failedAttemp(hangDraw) {

  if (hangDraw === 6) {
    console.log(hangmanEmpty);
    hangDraw = hangmanEmpty
    return hangDraw;
  } else if (hangDraw === 5) {
    console.log(hangmanHead);
    hangDraw = hangmanHead;
    return hangDraw;
  } else if (hangDraw === 4) {
    console.log(hangmanLeftArm);
    hangDraw = hangmanLeftArm;
    return hangDraw;
  } else if (hangDraw === 3) {
    console.log(hangmanTorso);
    hangDraw = hangmanTorso;
    return hangDraw;
  } else if (hangDraw === 2) {
    console.log(hangmanRightArm);
    hangDraw = hangmanRightArm;
    return hangDraw;
  } else if (hangDraw === 1) {
    console.log(hangmanLeftLeg);
    hangDraw = hangmanLeftLeg;
    return hangDraw;
  } else if (hangDraw === 0) {
    console.log(hangmanRightLeg);
    hangDraw = hangmanRightLeg;
    return hangDraw;
  }

}




//console.log(atual)

module.exports = {failedAttemp,hangDraw};
