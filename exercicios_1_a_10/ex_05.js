/* 
    5 - Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/ 

const prompt = require('prompt-sync')();

console.log('\nPara jogar JoKenPo, Digite "pedra", "papel", ou "tesoura"');
console.log('------------------------------------------------------------\n');

let j1 = prompt('Jogador 1, digite sua escolha: ');
let j2 = prompt('Jogador 2, digite sua escolha: ');
console.log('------------------------------------------------------------\n');

if ((j1 === "pedra" && j2 === "tesoura") || (j1 === "papel" && j2 === "pedra") || (j1 === "tesoura" && j2 === "papel")){
    console.log(`\nJogador 1 é o vencedor! Pois ${j1} ganha de ${j2}\n`);
} else if((j2 === "pedra" && j1 === "tesoura") || (j2 === "papel" && j1 === "pedra") || (j2 === "tesoura" && j1 === "papel")){
    console.log(`\nJogador 2 é o vencedor! Pois ${j2} ganha de ${j1}\n`);
} else if(j1 === j2){
    console.log(`\nJogo empatado, pois os 2 jogadores escolheram a opção: ${j1}\n`);
} else{
    console.log(`\nOpção Inválida! Tente novamente com opções válidas!\n`);
}