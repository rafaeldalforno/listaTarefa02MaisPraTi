/* 
    14 - Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
        mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
        que eles foram informados.
*/
const prompt = require('prompt-sync')();

let vetorNomes = [];
let j = 1;

while(j <= 7){
    let nomeDigitado = prompt(`Digite o ${j}º Nome: `);

    vetorNomes.push(nomeDigitado);
    j++;
}

console.log("\n");

for(i = (vetorNomes.length - 1); i >= 0; i--){
    console.log(`O ${i}º Nome do Vetor é: ${vetorNomes[i]}`);
}

console.log("\nVetor com Nomes: ");
console.log(vetorNomes);