const fs = require('fs');
const {guessedLetters, attemptsLeft, currentWord}= require('./setWord');


function saveGame(guessed, att, curr){
  const guessedWordsLink = 'hangman/saves/guessedWords.txt';
  const attemptsLink = 'hangman/saves/attemps.txt';
  const currentWordLink = 'hangman/saves/currentWord.txt';
  //const drawLink = 'hangman/saves/draw.txt';

  const guessedWordConvert = guessed.toString();
  const attempsConvert = att.toString();
 // const drawConvert = draw.join('\n ,')
  const currentWordConvert = curr.toString();

  fs.writeFile(guessedWordsLink, guessedWordConvert, (err) => {
    if (err) {
      console.error('Erro ao salvar o array:', err);
      return;
    } 
  });

  fs.writeFile(attemptsLink, attempsConvert, (err) => {
    if (err) {
      console.error('Erro ao salvar o array:', err);
      return;
    } 
  });

  fs.writeFile(currentWordLink, currentWordConvert, (err) => {
    if (err) {
      console.error('Erro ao salvar o array:', err);
      return;
    } 
  });
/*   fs.writeFile(drawLink, drawConvert, (err) => {
    if (err) {
      console.error('Erro ao salvar o array:', err);
      return;
    } 
  });

 // aqui funciona o gravar module.exports={saveGame}; */
}

module.exports={saveGame};


