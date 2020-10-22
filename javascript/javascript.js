/*
**javascript
**/



 //prima variabile //

//  var parola = prompt("inserisci una parola")
//
// var parolareverse =  reverse(parola)
//
// console.log(parolareverse)
//
// if(parola == parolareverse){
//   console.log("Il giocatore ha vinto");
// } else{
//   console.log("il giocatore non ha vinto");
// }
//
//
//
//
//
//
// /*
// ** Creazione funzione reverse Un solo parametro
// **/
//
// function reverse(word){
//    var revers = word.split("").reverse().join();
//
//    return revers;
// }


// secondo esercizio //

// prima variabile //

var utenteparidispari = prompt("Scegli pari o dispari");
var numeroutente = parseInt(prompt("Scegli un numero da 1 a 5"));
var numerocomputer = random();
var sommautentecomputer = somma(numeroutente,numerocomputer);

console.log(numerocomputer);
console.log(sommautentecomputer);






/*
** Creazione funzione numero random da 1 a 5
*/
function random(){
  var rand = Math.floor(Math.random()* 5) + 1;

  return rand;
}

/*
** creazione funzione somma con due parametri
*/

function somma(num1,num2){
  var sum = num1 + num2;

  return sum;
}
