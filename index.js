const numeros = document.getElementsByName ("numero")
const operador = document.getElementsByName("operador")
const igual = document.getElementsByName("igual")[0]
const borrar = document.getElementsByName("borrar")[0]
const resultado = document.getElementById("resultado")
const punto = document.getElementById("punto")[0]

 console.log(numeros)


 let opeActual = ""
 let opeAnterior = ""
 let operacion = undefined

numeros.forEach(function(boton) {
  boton.addEventListener("click", function(e)  {
      e.preventDefault()
      agregarNumero(boton.innerText)
      //alert(boton.innerHTML)
  })
})

operador.forEach(function(boton) {
  boton.addEventListener("click", function(e)  {
      e.preventDefault()
      selecionOperador(boton.innerText)
      //alert(boton.innerHTML)
  })
})

igual.addEventListener("click", function(e) {
  e.preventDefault()
    calcular()
    actualizarDisplay()
})


borrar.addEventListener("click", function(e) {
  e.preventDefault()
  clear()
  actualizarDisplay()
})

punto.addEventListener("click", function(e) {
 e.preventDefault()
 agregarNumero(punto.innerText)
})


function selecionOperador (op) {
  if(opeActual === "")return
  if(opeAnterior !== "") {
    calcular()
  }
  operacion = op.toString()
  opeAnterior = opeActual
  opeActual = ""
}


function calcular () {
  var calculo;
  const anterior = parseFloat(opeAnterior)
  const actual = parseFloat(opeActual)
  if (isNaN(anterior) || isNaN(actual)) return
    switch (operacion) {
      case "+":
        calculo = anterior + actual
        console.log(calculo);
        break;
      case "-":
          calculo = anterior - actual
          break;
      case "*":
        calculo = anterior * actual
        break;
      case "/":
        calculo = anterior / actual
        break;
      default:
        return
    }
    opeActual = calculo
    opeAnterior =""
    operacion = undefined
}
    
function agregarNumero(num) {
  opeActual = opeActual.toString() + num.toString()
  actualizarDisplay()
}

function clear () {
  opeActual = ""
  opeAnterior = ""
  operacion = ""
}

function actualizarDisplay () {
  resultado.value = opeActual
}

clear()
