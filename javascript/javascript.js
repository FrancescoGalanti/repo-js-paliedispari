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

var utenteparidispari = prompt("Scegli pari o dispari").toLowerCase();
var numeroutente = parseInt(prompt("Scegli un numero da 1 a 5"));
// validazione numero //
while(isNaN(numeroutente) === true  ){
     var numeroutente = parseInt(prompt("puoi per favore scegliere un numero da 1 a 5 ?"));
}

// validazione range //
// if((numeroutente > 5) && (numeroutente = 0) ){
//    var numeroutente = parseInt(prompt("puoi per favore scegliere un numero da 1 a 5 ?"));
// }

var numerocomputer = random();
var sommautentecomputer = somma(numeroutente,numerocomputer);
var sommautentecomputerparidispari = paridispari(sommautentecomputer)

console.log(numerocomputer);
console.log(sommautentecomputer);
console.log(sommautentecomputerparidispari);

if(utenteparidispari === sommautentecomputerparidispari){
  console.log("La somma del numero scelto dal giocatore e il numero scelto dal computer e uguale alla scelta del giocatore pari o dispari quindi vince: " + numeroutente + " + " + numerocomputer + " = " + sommautentecomputer + " = " + utenteparidispari + " = " + sommautentecomputerparidispari );
} else{
  console.log("La somma del numero scelto dal giocatore e il numero scelto dal computer non e uguale alla scelta del giocatore pari o dispari quindi perde: " + numeroutente + " + " + numerocomputer + " = " + sommautentecomputer + " = " + utenteparidispari + " non e uguale alla scelta pari o dispari " + sommautentecomputerparidispari);
}






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

/*
** creazione funzione pari o dispari con un parametro
**/

function paridispari(numero){
  if(numero  % 2 == 0){
    return "pari";
  }

  return "dispari"
}
