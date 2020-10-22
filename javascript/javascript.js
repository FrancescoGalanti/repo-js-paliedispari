/*
**javascript
**/



 //prima variabile //

 var parola = prompt("inserisci una parola")

var parolareverse =  reverse(parola)

console.log(parolareverse)

if(parola == parolareverse){
  console.log("Il giocatore ha vinto");
} else{
  console.log("il giocatore non ha vinto");
}






/*
** Creazione funzione reverse Un solo parametro
**/

function reverse(word){
   var revers = word.split("").reverse().join();

   return revers;
}
