/* 
        15 - Desenvolva um programa que leia 10 números inteiro e guarde-os em um vetor. 
            No final, mostre quais são os números pares que foram digitados e em que posições eles
            estão armazenados.
*/

const prompt = require('prompt-sync')();

let vetorNumInteiros = [];
let i = 1;

console.log("\nDigite 10 numeros inteiros e o programa lhe mostrará os números pares digitados\n");
while(i <= 10){
    let numeroDigitado = parseInt(prompt(`Digite o ${i}º numero inteiro: `));
    vetorNumInteiros.push(numeroDigitado);
    i++;
}

console.log('\nVetor com números digitados: ' + vetorNumInteiros + '\n');

for(let j in vetorNumInteiros){
    if((vetorNumInteiros[j] % 2) === 0){
        console.log(`O número ${vetorNumInteiros[j]} é PAR e está na posição ${j} do vetor`);
    }

    // console.log(`posição ${j} tem valor: ${vetorNumInteiros[j]}`);
}