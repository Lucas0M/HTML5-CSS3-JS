let date = new Date()
const horario = date.getHours()
const minutos = date.getMinutes()

let body = document.body

let horas = document.getElementById('horas')
let foto = document.getElementById('foto')

const night = './imgs/night.webp'
const afternoon = './imgs/afternoon.webp'

horas.innerHTML = `Agora sao ${horario} horas ${minutos} minutos`

function changePhoto (src){
  let newPhoto = foto.src = src
  return newPhoto
}

if (horario >= 12 && horario < 18) {
  changePhoto(afternoon)
  body.style.backgroundColor = '#ffa724d0';
} else if (horario >= 18 && horario < 23){
  changePhoto(night)
  body.style.backgroundColor = '#060027d0';
}