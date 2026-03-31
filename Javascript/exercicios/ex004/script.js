let date = new Date()
let atualAno = date.getFullYear()

let img = document.getElementById('foto')

let ano = document.getElementById('txtano')
let radsex = document.getElementsByName('radsex') 

let res = document.querySelector('#res p')
console.log(res)

let genero = ''

function sexo(idade){
  if(radsex[0].checked){
    genero = 'man'
    if (idade >= 0 && idade < 10){
      img.src = "./imgs/foto-homem-bebe.webp"
    }else if (idade < 40){
      img.src = './imgs/foto-homem-adulto.webp'
    } else {
      img.src = "./imgs/foto-homem-velho.webp"
    }
  } else {
    genero = 'women'
    if (idade >= 0 && idade < 10){
      img.src = "./imgs/foto-mulher-bebe.webp"
    }else if (idade < 40){
      img.src = './imgs/foto-mulher-adulta.webp'
    } else {
      img.src = "./imgs/foto-mulher-velha.webp"
    }
  }
}

function verificar(){
  if (ano.value > atualAno){
    res.innerHTML = "ERROR! You dont born yet."
  } else if(ano.value < 1900 || ano.value === null){
    res.innerHTML = "ERROR! We cant calculated this year."
  } else {
    let idade = atualAno - ano.value
    sexo(idade)
    res.innerHTML = `You are a ${genero} and have ${idade} years old`
  }
}