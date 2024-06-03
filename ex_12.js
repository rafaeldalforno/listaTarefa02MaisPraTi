/* 
    12 - Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
        Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

console.log("Imprimindo os 10 Primeiros Termos da Sequência de Fibonacci: \n");
let penultimoTermo = 0;
let termoAtual = 1;
let proxTermo = 0

for(i = 1; i <= 10; i++){
    if (i === 1){
        console.log(`O ${i}º Termo da Sequência Fibonacci é: ${termoAtual}`);
    } else {
        console.log(`O ${i}º Termo da Sequência Fibonacci é: ${proxTermo}`);
        penultimoTermo = termoAtual;
        termoAtual = proxTermo;
    }

    proxTermo = penultimoTermo + termoAtual;
}