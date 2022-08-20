// let indentificacao = prompt("Qual a identificacao?");
// console.log(indentificacao);
// let nota1 = prompt("Qual a nota 1?");
// let nota2 = prompt("Qual a nota 2?");
// let nota3 = prompt("Qual a nota 3?");

let nota1Numerico = parseInt(100);
let nota2Numerico = parseInt(90);
let nota3Numerico = parseInt(100);

console.log(nota1Numerico);
console.log(nota2Numerico);
console.log(nota3Numerico);

let media = (nota1Numerico + nota2Numerico + nota3Numerico) / 3;

console.log(media);

let aproveitamento =
  (nota1Numerico + nota2Numerico * 2 + nota3Numerico * 3 + media) / 7;

console.log(aproveitamento);

let conceito = "A";
let mensagem = "aprovado";

if (aproveitamento >= 75 && aproveitamento < 90) {
  conceito = "B";
}
if (aproveitamento >= 60 && aproveitamento < 75) {
  conceito = "C";
}
if (aproveitamento >= 40 && aproveitamento < 60) {
  conceito = "D";
  mensagem = "reprovado";
}
if (aproveitamento < 40) {
  conceito = "E";
  mensagem = "reprovado";
}

console.log(conceito);

console.log(mensagem);

// if (conceito === "A" || conceito === "B" || conceito === "C") {
//   console.log("aprovado");
// } else {
//   console.log("reprovado");
// }
