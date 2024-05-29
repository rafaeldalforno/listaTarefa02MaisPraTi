/* 
    2 - Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
        h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
        multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

const prompt = require('prompt-sync')();

function penaltyCalculation(speed){
    let trafficTicket =  speed * 5;
    return trafficTicket;
}


let speedReported = parseInt(prompt('Digite a velocidade do seu carro em Km/h: '));

if (speedReported >= 80){
    console.log(`\n\nVelocidade max é: 80Km/h.\nVocê foi multado! \n`);

    let speedOver = speedReported - 80; 
    console.log(`Sua multa será de: R$ ${penaltyCalculation(speedOver)} por ter ultrapassado ${speedOver} Km/h acima do permitido. \n`)
} else{
    console.log("\nVocê está dentro da velocidade permitida da via. Está dirigindo bem :) \n");
}