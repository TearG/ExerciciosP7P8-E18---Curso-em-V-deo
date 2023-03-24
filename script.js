let num = document.getSelector('input#fnum')
let lista = document.querySelector('select#flista')
let rest = document.querySelector('div#res')
let valores = []

function isNumero(n) {
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l){
  if (l.indexOff(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if(isNumero(num.value) && !inLista(num.value, valores)) {
    window.alert('ok')
  } else {
    window.alert('Valor inválido ou já encontrado na lista.')
  }
}