let num = [5, 6, 2, 3]
num[4] = 1
num.push(7)
num.sort()

console.log(num)
console.log(`o nosso vetor tem ${num.length} posicoes`)
console.log(`o primeiro valor do vetor é ${num[0]}`)

let numero = 5

let pos = num.indexOf(numero)
if (pos == -1){
  console.log("O valor nao foi encontrado")
} else {
  console.log(`O valor ${numero} esta no index ${pos}`)
}



// =================================================

// for(let pos = 0; pos < num.length; pos++){
//   console.log(num[pos])
// }

// for(let pos in num){
//   console.log(num[pos])
// }

// =================================================
