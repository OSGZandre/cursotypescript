"use strict";
//demo 1
let frutas = ['abacaxi', 'laranja', 'manga', 'pera'];
console.log(frutas[0]);
//demo 2
let frutas1 = ['abacaxi', 'laranja', 'manga', 'pera'];
console.log(frutas1[2]);
//demo 3 
let idiomas = ['Português', 'ingles', 'espanhool', 'japones', 'mandarim'];
console.log(idiomas);
idiomas.push('frances');
console.log(idiomas);
//demo 4
console.log(idiomas.length);
//demo 5 
let listaNumeros = [0, 1, 2, 3, 4, 5];
let listaNumeros1 = [6, 7, 8, 9, 10];
let todasAsListas;
todasAsListas = [...listaNumeros, ...listaNumeros1];
console.log(todasAsListas);
console.log(todasAsListas.length);
//demo 6
let linguagensArray = new Array('Java', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
