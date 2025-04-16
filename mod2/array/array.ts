//demo 1

let frutas: string[]= ['abacaxi', 'laranja', 'manga', 'pera'];
console.log(frutas[0]);

//demo 2

let frutas1: Array<string> = ['abacaxi', 'laranja', 'manga', 'pera'];
console.log(frutas1[2]);

//demo 3 

let idiomas: Array<string> = ['Português', 'ingles', 'espanhool', 'japones', 'mandarim'];
console.log(idiomas);
idiomas.push('frances');
console.log(idiomas);

//demo 4

console.log(idiomas.length);

//demo 5 

let listaNumeros: Array<number> = [0, 1, 2, 3, 4 ,5 ];
let listaNumeros1:Array<number>= [6,7,8,9,10];
let todasAsListas;
todasAsListas = [...listaNumeros, ...listaNumeros1];

console.log(todasAsListas);
console.log(todasAsListas.length);

//demo 6

let linguagensArray: string[] = new Array('Java', 'Python', 'PHP', 'C#');

function funcaoLinguagens(linguagens: string[]){
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);