let agora = new Date()
let hora = agora.getHours()
let minuts = agora.getMinutes()
console.log(`Agora sao exatamente ${hora} horas e ${minuts} minutos`)
if (hora < 12){
  console.log(`Bom dia!`)
} else if (hora <= 18){
  console.log(`Boa tarde!`)
} else {
  console.log(`Boa noite!`)
}