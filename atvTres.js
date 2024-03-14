/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno:
*/
var teclado = require("prompt-sync")();
var letra = (teclado("Digite uma letra: "));
if (letra == "A" || letra == "a" || letra == "e" || letra == "E" || letra == "I" || letra == "i" || letra == "O" || letra == "o" || letra == "U" || letra == "u") {
    console.log(" ".concat(letra, " \u00C9 uma vogal"));
}
else {
    console.log("".concat(letra, " \u00C9 uma consoante"));
}
