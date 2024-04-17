module.exports = caesarShift

function caesarShift(texto, deslocamento = null) {
     const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let resultados = [];
   
     if (deslocamento === null) {
       for (let i = 1; i < letras.length; i++) {
         resultados.push({ deslocamento: i, mensagem: decodificar(texto, i) });
       }
     } else {
       resultados.push({ deslocamento, mensagem: decodificar(texto, deslocamento) });
     }
   
     return resultados;
   }
   
   function decodificar(texto, deslocamento) {
     let resultado = "";
     const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
     for (let i = 0; i < texto.length; i++) {
       let char = texto[i].toUpperCase();
       if (letras.indexOf(char) !== -1) {
         let index = (letras.indexOf(char) - deslocamento) % letras.length;
         if (index < 0) {
           index += letras.length;
         }
         resultado += letras[index];
       } else {
         resultado += char;
       }
     }
   
     return resultado;
   }