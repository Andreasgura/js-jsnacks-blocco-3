/**
 * Snack3
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    Ogni volta che ne crei uno, stampalo.
 */

let text = document.getElementById('text');
let button = document.querySelector('.btn');

// let N = parseInt(prompt('inserisci un numero'))




function array10Random() {
    let myArray = [];
    let newNum = 0 ;
    for( i = 0; i < 10; i++){
    newNum = getRndInteger(1, 100)
    myArray.push(newNum)
    }
    return myArray;
}


/*button.addEventListener('click', function(){

});
*/

