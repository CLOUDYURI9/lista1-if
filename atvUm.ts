/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata,
 sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA,
  utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Yuri Dinato da Silva
*/

const teclado = require(`prompt-sync`)();

let volumeLata: number= 0;
let raio: number = parseFloat(teclado(`Digite Raio: `));
let altura: number = parseFloat(teclado(`Digite Altura: `));
const pi: number = 3.14159;

volumeLata = pi * (raio*raio) * altura;
console.log(`O volume da lata é ${volumeLata}`)
