let wordsByDifficult = {
    easy: ["apple", "grape", "papaya"],
    medium: ["monitor", "mouse", "keyboard"],
    hard: ["bootcamp"],
  };
  

function secretWord(option){
    let randomWord = "";

    if (option == "Easy") {
        randomWord =
          wordsByDifficult.easy[
            Math.floor(Math.random() * wordsByDifficult.easy.length)
          ];
      } else if (option == "Medium") {
        randomWord =
          wordsByDifficult.medium[
            Math.floor(Math.random() * wordsByDifficult.medium.length)
          ];
      } else if (option == "Hard") {
        randomWord =
          wordsByDifficult.hard[
            Math.floor(Math.random() * wordsByDifficult.hard.length)
          ]
      }
      return randomWord;
}
module.exports={secretWord};