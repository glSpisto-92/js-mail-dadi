/*Gioco dei dadi
Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

var numRandom = Math.floor(Math.random() * 6 + 1);
var numRandomPc = Math.floor(Math.random() * 6 + 1);

console.log('Il numero estratto per te è il ' + numRandom);
console.log('Il numero estratto per il pc è il ' + numRandomPc);

if( numRandom > numRandomPc ){
    alert('Bravo, hai vinto contro il pc!');
} else if ( numRandomPc > numRandom){
    alert('mi spiace, stavolta ha vinto il pc!');
}