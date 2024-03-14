/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno:
*/

const teclado = require(`prompt-sync`)();

let letra: string= (teclado(`Digite uma letra: `))

if ( letra == `A` || letra == `a` || letra == `e` || letra == `E` || letra == `I` || letra == `i` || letra == `O` || letra == `o` || letra == `U` || letra == `u`){
    console.log(` ${letra} É uma vogal`)
}
else {
    console.log(`${letra} É uma consoante`)
}
