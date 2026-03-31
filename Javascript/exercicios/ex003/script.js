function contar() {
  let inicio = document.getElementById('numinicio').value
  let fim = document.getElementById('numfim').value
  let passo = document.getElementById('numpasso').value
  let res = document.getElementById('res')

  if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
    window.alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = `Contando: <br>`
    let i = Number(inicio)
    let f = Number(fim)
    let p = Number(passo)
    if(p <= 0){
      alert('Passo invalido!')
      p = 1;
    }
    if(i < f){ 
      for(let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    } else {
      for (let c = i; c >= f; c -= p){
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`

  }
}