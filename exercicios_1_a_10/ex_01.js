/*
    1 - Escreva um programa para calcular a redução do tempo de vida de um fumante.
        Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
        Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
        vida um fumante perderá e exiba o total em dias.
*/

const prompt = require('prompt-sync')();

function calculaTempoPerdido(cigarrosFumados, anosFumando){
    let cigarrosTotais = cigarrosFumados * (anosFumando * 365);
    let tempoPerdido = (cigarrosTotais * 10) / 1440;
    
    console.log(`\nVocê já fumou ${cigarrosTotais} cigarros na sua vida! \n`);
    console.log(`\n\nSe a cada cigarro que você fuma, você perder 10min de vida!  \n`);

    return tempoPerdido;
}

let cigarrosFumados = prompt('Quantos cigarros você costuma fumar por dia? ');
let anosFumando = prompt('Há quantos anos você fuma diariamente? ');

console.log(`Você já perdeu ${calculaTempoPerdido(cigarrosFumados, anosFumando).toFixed(2)} dias! \n\n`);