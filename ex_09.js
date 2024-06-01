/* 
    9 - Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
        mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
        perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
        funcionário.
*/

const prompt = require('prompt-sync')();

let continuar = prompt("Cadastrar salário de um Funcionário? 's' ou 'n':  ");;
let salarioTotalHomens = 0;
let salarioTotalMulheres = 0;
let funcionariosHomens = 0;
let funcionariasMulheres = 0;

while(continuar === 's'){
    let sexoFuncionario = prompt("Sexo do Funcionário(a)? (masculino ou feminino): ");
    
    if(sexoFuncionario === "masculino"){
        let salarioColaborador = parseFloat(prompt("Salário do Colaborador? "));
        salarioTotalHomens += salarioColaborador;
        funcionariosHomens ++;
    } else if (sexoFuncionario === 'feminino'){
        let salarioColaboradora = parseFloat(prompt("Salário da Colaboradora? "));
        salarioTotalMulheres += salarioColaboradora;
        funcionariasMulheres ++;
    } else{
        console.log("sexo do funcionário(a) inválido! Tente novamente.\n");
    }

    continuar = prompt("\nDeseja continuar cadastrando salários? 's' ou 'n'\n");
}

console.log(`\n\nO número de Funcionários Homens é de: ${funcionariosHomens}`);
console.log(`Para esses colaboradores é pago um montante de R$${salarioTotalHomens}\n`);
console.log(`O número de Funcionárias Mulheres é de: ${funcionariasMulheres}`);
console.log(`Para essas colaboradoras é pago um montante de R$${salarioTotalMulheres}\n`);