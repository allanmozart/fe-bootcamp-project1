const fs = require('fs');
const {guessedLetters, attemptsLeft, testeDraw}= require('./hang.js');


function saveGame(guessed, att, draw){
  const caminhoDoArquivo = 'guessed.txt';
  const caminhoDoArquivo2 = 'att.txt';
  const caminhoDoArquivo3 = 'draw.txt';
  

  const arrayComoString = guessed.toString();
  const arrayComoString2 = att.toString();
  const arrayComoString3 = draw.join('\n ,')

  fs.writeFile(caminhoDoArquivo, arrayComoString, (err) => {
    if (err) {
      console.error('Erro ao salvar o array:', err);
      return;
    } 
    console.log('Array salvo com sucesso!');
  });

  fs.writeFile(caminhoDoArquivo2, arrayComoString2, (err) => {
    if (err) {
      console.error('Erro ao salvar o array:', err);
      return;
    } 
    console.log('Array salvo com sucesso!');
  });

  fs.writeFile(caminhoDoArquivo3, arrayComoString3, (err) => {
    if (err) {
      console.error('Erro ao salvar o array:', err);
      return;
    } 
    console.log('Array salvo com sucesso!');
  });

 // aqui funciona o gravar module.exports={saveGame};
}

module.exports={saveGame};


