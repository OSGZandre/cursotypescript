let tarefaconcluida: boolean = true
let tarefapendente: boolean = false

console.log(tarefaconcluida);
console.log(tarefapendente);

//exemplo 2 

let concluido: boolean = false

if (!concluido){
    console.log('tarefa concluida')
} else{
    console.log('tarefa pendente')
}

//exemplo meu 

let maiorDeIdade: boolean = true
let menorDeIdade: boolean = false
let idade: number

function calcularMaioridade(idade: number, maiorDeIdade: boolean, menorDeIdade: boolean){
    if(idade < 0){
        console.log('Idade inválida')
        return calcularMaioridade;
    };
    
    if(idade > 18){
        return maiorDeIdade;
    }else{
        return menorDeIdade;
    };
}
