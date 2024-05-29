/* 
    3 -  Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
        Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
        R$ 0.45 para viagens mais longas.
*/

const prompt = require('prompt-sync')();

let tripDistance = parseInt(prompt('Para Calcular o Valor da sua passagem, Digite a distância até o destino final de sua Viagem (em Km): '));
let tripTicket = 0;

if (tripDistance <= 200){
    tripTicket = tripDistance * 0.5;
    console.log(`Para a distância de ${tripDistance} Km, sua passagem custará: R$ ${tripTicket}.`)
} else{
    tripTicket = tripDistance * 0.45;
    console.log(`Para a distância de ${tripDistance} Km, sua passagem custará: R$ ${tripTicket}.`)
}