/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x.
 Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
Nome Aluno: Yuri Dinato da Silva
*/

const teclado = require(`prompt-sync`)();

let x = parseFloat(teclado(`Digite um Número: `));
let y = parseFloat(teclado(`Digite outro Número: `));
let z: number = 0

console.log(`Agora que invertemos o Numero um é ${y} e o número Dois é ${x}`);
z = x;
x = y;
y = z;


console.log(`Agora que invertemos o Numero um é ${y} e o número Dois é ${x}`);