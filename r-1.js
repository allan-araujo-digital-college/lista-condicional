let accum = 0;
let contador = 0;
for (let i = 1; i <= 500; i++) {
  console.log(i);
  if (i % 2 === 1 && i % 3 === 0) {
    accum = accum + i; // accum += i;
    contador = contador + 1; // contador++;
  }
}

console.log(accum);
console.log(contador);


// if ( a > b && a > c){
//     // a === maior número
//     if(b > c){
//         console.log(a b c)
//     }else{
//         console.log(a c b)
//     }
// } else {
//     if ((a > b && a < c) || (a > c && a < b)){
//         // a === numero do meio
//         if (b > c){
//             console.log(b a c)
//         } else {
//             console.log(c a b)
//         }
//     } else {
//         // a === menor numero
//         if ( b > c){
//             console.log(b c a)
//         }else{
//             console.log(c b a)
//         }
//     }
// }

// if (a > b && a > c && b > c){
//     a b c
// }
// if (a < b && a > c && b > c){
//     b c a 
// }