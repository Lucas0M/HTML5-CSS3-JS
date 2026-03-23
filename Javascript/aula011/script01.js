let res = document.getElementById('res')
let txtpais = document.querySelector('input#txtpais')

function verificarNacionalidade(){
  if(txtpais.value == 'Brasil'){
    res.innerHTML = '<p>voce e <strong>brasileiro</strong></p>'
  } else {
    res.innerHTML = '<p>voce e <strong>estrangeiro</strong></p>'
  }
}