/* 
    6 - Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
        tentar descobrir qual foi o valor sorteado.     
*/

const prompt = require('prompt-sync')();

console.log('\nTente advinhar o número da sorte entre 1 à 5');

let numeroSorteado = Math.floor(Math.random() * (5) + 1);
let numeroUsuario = parseInt(prompt('Digite um número e veja se acertou: '));

while (numeroUsuario !== numeroSorteado){
    if (numeroUsuario < numeroSorteado){
        console.log('Tente um número maior.\n')
    } else{
        console.log('Tente um número menor.\n')
    }

    numeroUsuario = parseInt(prompt('Digite um número e veja se acertou: '));
}

console.log('\n-----------------------------------------');
console.log('Parabéns, você acertou o número sorteado.\n');