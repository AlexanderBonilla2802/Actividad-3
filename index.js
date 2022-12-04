var productoSuma = [];
var productoResta = [];
var productoMultiplicacion = [];
var productoDivision = [];

var limpiar = function () {
    document.getElementById("valor1").value = ""
    document.getElementById("valor2").value = ""
}
limpiar()


var mostrarSuma = function () {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var calculoSuma = (+valor1 + +valor2)
    productoSuma.push({ resultadoSuma: calculoSuma })
    limpiar()
    insertarSuma()
}
var mostrarResta = function () {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var calculoResta = (+valor1 - +valor2)
    productoResta.push({ resultadoResta: calculoResta })
    limpiar()
    insertarResta()
}
var mostrarMultiplicacion = function () {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var calculoMultiplicacion = (+valor1 * +valor2)
    productoMultiplicacion.push({ resultadoMultiplicacion: calculoMultiplicacion })
    limpiar()
    insertarMultiplicacion()
}
var mostrarDivision = function () {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var calculoDivision = (+valor1 / +valor2)
    productoDivision.push({ resultadoDivision: calculoDivision })
    limpiar()
    insertarDivision()
}


var insertarSuma = function () {
    var operacionesSuma = document.getElementById("operacionesSuma")
    operacionesSuma.innerHTML = ""
    for (let a = 0; a < productoSuma.length; a++) {
        operacionesSuma.innerHTML = operacionesSuma.innerHTML +
            "<div>" + "<h4>" + 'Suma' + "</h4>" + productoSuma[a].resultadoSuma + "</div>"
    }
}
var insertarResta = function () {
    var operacionesSuma = document.getElementById("operacionesSuma")
    operacionesSuma.innerHTML = ""
    for (let b = 0; b < productoResta.length; b++) {
        operacionesSuma.innerHTML = operacionesSuma.innerHTML +

            "<div>" + "<h4>" + 'Resta' + "</h4>" + productoResta[b].resultadoResta + "</div>"
    }
}
var insertarMultiplicacion = function () {
    var operacionesSuma = document.getElementById("operacionesSuma")
    operacionesSuma.innerHTML = ""
    for (let c = 0; c < productoMultiplicacion.length; c++) {
        operacionesSuma.innerHTML = operacionesSuma.innerHTML +

            "<div>" + "<h4>" + 'Multiplicacion' + "</h4>" + productoMultiplicacion[c].resultadoMultiplicacion + "</div>"
    }
}
var insertarDivision = function () {
    var operacionesSuma = document.getElementById("operacionesSuma")
    operacionesSuma.innerHTML = ""
    for (let d = 0; d < productoDivision.length; d++) {
        operacionesSuma.innerHTML = operacionesSuma.innerHTML +

            "<div>" + "<h4>" + 'Division' + "</h4>" + productoDivision[d].resultadoDivision + "</div>"
    }
}



