function calcular() {
  let txtv = document.querySelector('input#txtvel')
  let res = document.getElementById('res')
  let vel = Number(txtv.value)
  res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}KM/h</strong></p>`
  if(vel > 60){
    res.innerHTML += `<p>Voce foi multado excesso de velocidade</p>`
  }
  res.innerHTML += `<p>Dirija sempre com cuidado</p>`
}