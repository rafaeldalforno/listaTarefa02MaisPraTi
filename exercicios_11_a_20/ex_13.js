/* 
    13 - Crie um programa que preencha automaticamente (usando lógica, não apenas
        atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
        da sequência de Fibonacci.
*/

console.log("\nImprimindo os 15 Primeiros Termos da Sequência de Fibonacci: \n");

let penultimoTermo = 0;
let termoAtual = 1;
let proxTermo = 0

let vetorFibonacci = [termoAtual];

for(i = 1; i <= 15; i++){
    if (i === 1){
        console.log(`O ${i}º Termo da Sequência Fibonacci é: ${termoAtual}`);
    } else {
        console.log(`O ${i}º Termo da Sequência Fibonacci é: ${proxTermo}`);
        vetorFibonacci.push(proxTermo);
        penultimoTermo = termoAtual;
        termoAtual = proxTermo;
    }

    proxTermo = penultimoTermo + termoAtual;
}

console.log("\n\nA vetor com a sequência Fibonacci é: \n");
console.log(vetorFibonacci);
console.log(vetorFibonacci[14]);