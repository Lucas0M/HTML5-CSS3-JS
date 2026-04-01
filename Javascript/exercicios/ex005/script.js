let txtn = document.getElementById('txtn')
let tab = document.getElementById('seltab')
let res = document.getElementById('res')

let numbers = []

function AddNumber(){
  let num = Number(txtn.value)
  if(txtn.value.length == 0) {
    alert('Numero invalido para insercao!')
  }else if (txtn.value <= 0 || txtn.value > 100) {
    alert(`O numero ${num} nao pode ser inserido!`)
  }else {
    if(numbers.includes(num)) {
      res.innerHTML = ''
    } else {
      numbers.push(num)
      let newItem = document.createElement('option')
      newItem.text = `Valor ${num} adicionado`
      tab.appendChild(newItem)
      numbers.sort()
    }
  }
}

function ShowRes() {
  if(numbers.length <= 0) {
    alert('Não foi possivel mostrar os resultados')
  } else {
    let soma = 0
    let media = 0
    for (let i in numbers) {
      soma += numbers[i]
    }
    let mediaFinal = (soma / numbers.length)
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${numbers.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${Math.max(...numbers)}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${Math.min(...numbers)}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A media entre todos os valores é de, ${mediaFinal}</p>`
  }
}