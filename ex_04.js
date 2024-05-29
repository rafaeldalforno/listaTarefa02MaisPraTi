/*
    4 - Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
        comprimentos e diga se é possível formar um triângulo com essas retas.
        Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
        lado deve ser menor que a soma dos outros dois.
*/

const prompt = require('prompt-sync')();

function valueSide(){
    let value = parseFloat(prompt("Digite o valor de um segmento de Reta: "));
    return value;
}

function typeOfTriangulo(){
    let side1 = valueSide();
    let side2 = valueSide();
    let side3 = valueSide();

    if ((side1 < side2 + side3) && (side2 < side1 + side3) && (side3 < side1 + side2)){
        if((side1 === side2) && (side2 === side3)){
            console.log(`\nOs valores informados formam um triângulo do tipo: EQUILÁTERO`);
        } else if((side1 === side2) || (side1 === side3) || (side2 === side3)){
            console.log(`\nOs valores informados formam um triângulo do tipo: ISÓSCELES`);
        } else{
            console.log(`\nOs valores informados formam um triângulo do tipo: ESCALENO`);
        }
    } else{
        console.log("\n\nOs valores informados não formam nenhum tipo de triângulo");
    }
}

console.log("Informe 3 valores de retas, e descubra se estas retas formam um triângulo e de qual o tipo. \n");
typeOfTriangulo();