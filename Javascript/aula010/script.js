content = document.getElementById('area')
content.addEventListener('click', clicar)
content.addEventListener('mouseenter', entrar)
content.addEventListener('mouseout', sair)
function clicar(){
  content.innerHTML = 'Clicou!'
  content.style.background = "red"
}

function entrar(){
  content.innerHTML = "entrou legal (la ele)"
}

function sair() { 
  content.innerHTML = "saiu legal (la ele)"
  content.style.background = "green"
}