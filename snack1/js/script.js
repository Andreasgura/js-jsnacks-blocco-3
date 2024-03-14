/*
Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
*/

let text = document.getElementById('text');
let button = document.querySelector('.btn');
let myArray = [0];

// button.addEventListener('click', function(){
   
   
// });

let sum = 0

while (sum < 50) {
        let userAnswer = parseInt(prompt(`scrivi un numero da inserire nell'\array`))
        sum += userAnswer;
        myArray.push(userAnswer);
  
}






