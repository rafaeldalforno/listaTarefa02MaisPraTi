/*
    10 - Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
        cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
            a) O somatório entre todos os valores;
            b) Qual foi o menor valor digitado;
            c) A média entre todos os valores;
            d) Quantos valores são pares.
*/

const prompt = require('prompt-sync')();

let continuar = 's';
let somaNumerosDigitados = 0;
let qtdNumerosDigitados = 0;
let mediaNumerosDigitados = 0;
let menorNumeroDigitado = 1000;
let qtdNumeroPar = 0;

do{
    let numeroAleatorio = parseInt(prompt("Digite um número: "));
    
    qtdNumerosDigitados++;
    somaNumerosDigitados += numeroAleatorio;
    mediaNumerosDigitados = somaNumerosDigitados / qtdNumerosDigitados;

    if(numeroAleatorio < menorNumeroDigitado){
        menorNumeroDigitado = numeroAleatorio;
    }

    if((numeroAleatorio % 2) === 0){
        qtdNumeroPar++;
    }

    console.log(numeroAleatorio);
    console.log("qtd numeros digitados " + qtdNumerosDigitados);
    
    continuar = prompt("Deseja continuar adicionando números? 's' ou 'n': ");
}while(continuar === 's')

console.log(`\n\nA Soma de todos os números digitados é: ${somaNumerosDigitados}`);
console.log(`O Menor número digitado foi: ${menorNumeroDigitado}`);
console.log(`A Média de todos os números digitados é: ${mediaNumerosDigitados}`);
console.log(`A quantidade de números Pares digitados foi de: ${qtdNumeroPar}\n`);