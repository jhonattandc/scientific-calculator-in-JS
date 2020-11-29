var operandoA;
var operandoB;
var operandoC;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById("resultado");
    var limpiar = document.getElementById("limpiar");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicar");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var punto = document.getElementById("punto");
    var pi = document.getElementById("pi");

    //eventos
    uno.onclick = function(e){
        resultado.textContent += "1" ;
    }

    dos.onclick = function(e){
        resultado.textContent += "2" ;
    }

    tres.onclick = function(e){
        resultado.textContent += "3" ;
    }

    cuatro.onclick = function(e){
        resultado.textContent += "4" ;
    }

    cinco.onclick = function(e){
        resultado.textContent += "5" ;
    }

    seis.onclick = function(e){
        resultado.textContent += "6" ;
    }

    siete.onclick = function(e){
        resultado.textContent += "7" ;
    }

    ocho.onclick = function(e){
        resultado.textContent += "8" ;
    }

    nueve.onclick = function(e){
        resultado.textContent += "9" ;
    }

    cero.onclick = function(e){
        resultado.textContent += "0" ;
    }

    limpiar.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "+";
        clear();
    }

    resta.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "-";
        clear();
    }

    multiplicacion.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "*";
        clear();
    }

    division.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "/";
        clear();
    }

    igual.onclick = function(e) {
        operandoB = resultado.textContent;
        resolver();
    }

    punto.onclick = function(e) {
        resultado.textContent += "." ;
    }

    pi.onclick = function(e){
        resultado.textContent += "3.1416"
    }
}

function clear() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent ="";
    operandoB = 0
    operandoA = 0
    operacion = "";
}

function resolver() {
    var res = 0
    switch(operacion){
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;

        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;

         case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;

        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;        
    }
    resetear();
    resultado.textContent = res;
}