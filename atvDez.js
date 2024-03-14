var teclado = require("prompt-sync")();
var telefonou = parseFloat(teclado("Telefonou para a v\u00EDtima? (1 para sim/ 0 para n\u00E3o) "));
var esteve = parseFloat(teclado("Esteve no local do crime? (1 para sim/ 0 para n\u00E3o) "));
var mora = parseFloat(teclado("Mora perto da v\u00EDtima? (1 para sim/ 0 para n\u00E3o) "));
var devia = parseFloat(teclado("Devia para a v\u00EDtima? (1 para sim/ 0 para n\u00E3o) "));
var trabalhou = parseFloat(teclado("J\u00E1 trabalhou com a v\u00EDtima? (1 para sim/ 0 para n\u00E3o) "));
var perguntasVerdadeiras = 0;
if (telefonou == 1) {
    perguntasVerdadeiras++;
}
if (esteve == 1) {
    perguntasVerdadeiras++;
}
if (mora == 1) {
    perguntasVerdadeiras++;
}
if (devia == 1) {
    perguntasVerdadeiras++;
}
if (trabalhou == 1) {
    perguntasVerdadeiras++;
}
console.clear();
if (perguntasVerdadeiras == 2) {
    console.log("Suspeita");
}
else if (perguntasVerdadeiras >= 3 && perguntasVerdadeiras <= 4) {
    console.log("Cumplice");
}
else if (perguntasVerdadeiras == 5) {
    console.log("Assassino");
}
else {
    console.log("Inocente");
}
