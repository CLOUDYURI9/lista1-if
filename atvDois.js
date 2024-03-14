/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x.
 Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
Nome Aluno: Yuri Dinato da Silva
*/
var teclado = require("prompt-sync")();
var x = parseFloat(teclado("Digite um N\u00FAmero: "));
var y = parseFloat(teclado("Digite outro N\u00FAmero: "));
var z = 0;
console.log("Agora que invertemos o Numero um \u00E9 ".concat(y, " e o n\u00FAmero 2 \u00E9 ").concat(x));
z = x;
x = y;
y = z;
console.log("Agora que invertemos o Numero um \u00E9 ".concat(y, " e o n\u00FAmero 2 \u00E9 ").concat(x));
