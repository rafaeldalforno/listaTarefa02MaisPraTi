/* 
    11 - Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
        Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
        valores da sequência.
*/

const prompt = require('prompt-sync')();

let primeiroTermoPA = parseInt(prompt('Digite o primeiro termo de uma P.A.(Progressão Aritmética): '));
let razaoPA = parseInt(prompt('Digite a Razão desta P.A.: '));

let proxTermo = primeiroTermoPA;
let somaTermos = 0;

for(i = 1; i <= 10; i++){
    console.log(`O ${i}º Termo da PA é: ${proxTermo}`);
    somaTermos += proxTermo;
    proxTermo += razaoPA;
}

console.log(`\nA soma dos 10 Primeiros Termos da PA é: ${somaTermos}`);