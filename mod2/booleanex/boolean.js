"use strict";
let tarefaconcluida = true;
let tarefapendente = false;
console.log(tarefaconcluida);
console.log(tarefapendente);
//exemplo 2 
let concluido = false;
if (!concluido) {
    console.log('tarefa concluida');
}
else {
    console.log('tarefa pendente');
}
//exemplo meu 
let maiorDeIdade = true;
let menorDeIdade = false;
let idade;
function calcularMaioridade(idade, maiorDeIdade, menorDeIdade) {
    if (idade < 0) {
        console.log('Idade inválida');
        return calcularMaioridade;
    }
    ;
    if (idade > 18) {
        return maiorDeIdade;
    }
    else {
        return menorDeIdade;
    }
    ;
}
