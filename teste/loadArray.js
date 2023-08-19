const fs = require('fs');


function loadGame(){
    const caminhoDoArquivo = 'guessed.txt';
    const caminhoDoArquivo2 = 'att.txt';
    const caminhoDoArquivo3 = 'draw.txt';
    
    fs.readFile(caminhoDoArquivo, 'utf8', (err, data) => {
      if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
      }
      const guessedW = data.split(',');
      return guessedW;
      //console.log('Array de strings lido do arquivo:', arrayDeStringsLido);
    }); 

    fs.readFile(caminhoDoArquivo2, 'utf8', (err, data) => {
        if (err) {
          console.error('Erro ao ler o arquivo:', err);
          return;
        }
        const attL = data;
        return attL
        //console.log('Array de strings lido do arquivo:', arrayDeStringsLido2);
      }); 

      fs.readFile(caminhoDoArquivo3, 'utf8', (err, data) => {
        if (err) {
          console.error('Erro ao ler o arquivo:', err);
          return;
        }
        const dr = data.split(',').join(', ');
        console.log(dr);
      });   

      
}
module.exports={loadGame}

loadGame()

