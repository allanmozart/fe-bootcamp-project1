let level = 0;

let wordsByDifficult = {
  easy: ["apple", "test", "house"],
  medium: ["mindera", "minderaCraft"],
  hard: ["bootcamp"],
};

let randomWord = [];


function setWordByDifficult(difficulty = 0) {
    level = difficulty
    if(level == 0) {
        let answer = wordsByDifficult.easy[Math.floor(Math.random() * wordsByDifficult.easy.length)]
        console.log(answer);
    } else if( level == 1) {
        let answer = wordsByDifficult.medium[Math.floor(Math.random() * wordsByDifficult.medium.length)]
        console.log(answer)
    } else if( level == 2) {
        let answer = wordsByDifficult.hard[Math.floor(Math.random() * wordsByDifficult.hard.length)]
        console.log(answer)
    }
}
setWordByDifficult(1);


module.exports = { setWordByDifficult }

