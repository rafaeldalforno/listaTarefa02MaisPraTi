/* 
    16 - Crie uma lógica que preencha um vetor de 20 posições com 
        números aleatórios (entre 0 e 99) gerados pelo computador. 
        Logo em seguida, mostre os números gerados e depois coloque 
        o vetor em ordem crescente, mostrando no final os valores ordenados.
 */

let vetorNumeros = [];
let vetorNumerosOrdenados = [];

let i = 1;
while(i <= 20){
    let numeroSorteado = Math.floor(Math.random() * (99) + 1);
    vetorNumeros.push(numeroSorteado);
    i++;
}

console.log('\nVetor com números Aleatórios pelo PC: ' + vetorNumeros);

// ORDENAR O VETOR
vetorNumerosOrdenados = vetorNumeros.sort();
console.log('\n\nVetor com números Ordenados: ' + vetorNumerosOrdenados + '\n');