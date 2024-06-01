/*
    7 - Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
        carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
        cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
        (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
        mostre o preço a ser pago de acordo com os dados a seguir:
            Carros populares
            - Até 100 Km percorridos: R$ 0,20 por Km
            - Acima de 100 Km percorridos: R$ 0,10 por Km
            Carros de luxo
            - Até 200 Km percorridos: R$ 0,30 por Km
            - Acima de 200 Km percorridos: R$ 0,25 por Km
*/

const prompt = require('prompt-sync')();

function calcularAluguelCarro(carro, dias, km){
    let aluguelPorKm = 0;
    let aluguelPorDia = 0;
    let aluguelTotal = 0;

    if (carro === "popular"){
        aluguelPorDia = dias * 90;

        if (km <= 100){
            aluguelPorKm = km * 0.20;
        } else {
            aluguelPorKm = km * 0.10;
        }
    } else if (carro === "luxo"){
        aluguelPorDia = dias * 150;

        if (km <= 200){
            aluguelPorKm = km * 0.30;
        } else {
            aluguelPorKm = km * 0.25;
        }
    } else{
        console.log("Tipo de carro Inválido!");
        return null;
    }

    aluguelTotal = aluguelPorDia + aluguelPorKm;
    console.log(`Você irá pagar R$ ${aluguelTotal.toFixed(2)} para alugar um carro "${tipoCarro}" por ${qtdDias} dias.`);
}


let tipoCarro = prompt('Qual tipo de carro que você alugou? (popular ou luxo): ');
let qtdDias = parseInt(prompt('Quantos dias você alugou o carro? '));
let qtdKm = parseInt(prompt("Quantos Km foram percorridos? "));

calcularAluguelCarro(tipoCarro, qtdDias, qtdKm);