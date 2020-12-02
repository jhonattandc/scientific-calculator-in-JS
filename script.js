var operandoA;
var operandoB;
var operandoC;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById("resultado");
    var resultado2 = document.getElementById("resultado2");
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
    var exp = document.getElementById("exp");
    var reg = document.getElementById("reg");
    var factorial = document.getElementById("factorial");
    var parentesisIzq = document.getElementById("(");
    var parentesisDer = document.getElementById(")");
    var porcentaje = document.getElementById("porcentaje");
    var borrar = document.getElementById("borrar");
    var negative = document.getElementById("negative");
    var sin = document.getElementById("sin");
    var inn = document.getElementById("in");
    var cos = document.getElementById("cos");
    var log = document.getElementById("log");
    var e = document.getElementById("e");
    var tan = document.getElementById("tan");
    var raiz = document.getElementById("raiz");
    var ans = document.getElementById("ans");
    var exponencial = document.getElementById("exponencial");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");


    console.log(exp);

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
        resultado2.textContent += resultado.textContent + " + " ;
        operacion = "+";
        clear();
    }

    resta.onclick = function(e){
        operandoA = resultado.textContent;
        resultado2.textContent += resultado.textContent + " - " ;
        operacion = "-";
        clear();
    }

    multiplicacion.onclick = function(e){
        operandoA = resultado.textContent;
        resultado2.textContent += resultado.textContent + " * " ;
        operacion = "*";
        clear();
    }

    division.onclick = function(e){
        operandoA = resultado.textContent;
        resultado2.textContent += resultado.textContent + " / " ;
        operacion = "/";
        clear();
    }

    exponencial.onclick = function(e){
        operandoA = resultado.textContent;
        resultado2.textContent += resultado.textContent + " xⁿ " ;
        operacion = "xⁿ";
        clear();
    }

    exp.onclick = function(e){
        operandoA = resultado.textContent;
        resultado2.textContent += resultado.textContent + " E " ;
        operacion = "E";
        clear();
    }

    porcentaje.onclick = function(e){
        operandoA = resultado.textContent;
        resultado2.textContent += resultado.textContent + " % " ;
        operacion = "%";
        clear();
    }

    negative.onclick = function(e){
        operandoA = resultado.textContent;
        resultado2.textContent += resultado.textContent;
        operacion = "-";
        clear();
    }

    igual.onclick = function(e) {
        operandoB = resultado.textContent;
        resolver();
    }

    punto.onclick = function(e) {
        resultado.textContent += "." ;
    }

    parentesisIzq.onclick = function(e) {
        resultado.textContent += "(" ;
    }

    parentesisDer.onclick = function(e) {
        resultado.textContent += ")" ;
    }

    pi.onclick = function(e){
        resultado.textContent += "3.1416"
    }

    e.onclick = function(e){
        resultado.textContent += "2.7182"
    }


    btn1.onclick = function(e){
        alert("Esto es un boton para cuadrar de manera simetrica la calculadora si tienes ideas de que colocar en este boton por favor hacer un pull reques del proyecto")
    }

    btn2.onclick = function(e){
        alert("Esto es un boton para cuadrar de manera simetrica la calculadora si tienes ideas de que colocar en este boton por favor hacer un pull reques del proyecto")
    }

    btn3.onclick = function(e){
        alert("Esto es un boton para cuadrar de manera simetrica la calculadora si tienes ideas de que colocar en este boton por favor hacer un pull reques del proyecto")
    }

    btn4.onclick = function(e){
        alert("Esto es un boton para cuadrar de manera simetrica la calculadora si tienes ideas de que colocar en este boton por favor hacer un pull reques del proyecto")
    }

    btn5.onclick = function(e){
        alert("Esto es un boton para cuadrar de manera simetrica la calculadora si tienes ideas de que colocar en este boton por favor hacer un pull reques del proyecto")
    }

}

function clear() {
    resultado.textContent = "";
   // resultado2.textContent = "";
}

function resetear() {
    resultado.textContent ="";
    resultado2.textContent = "";
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

        case "xⁿ":
            res = parseFloat(operandoA) ** parseFloat(operandoB);
            break;

        case "E":
            res = parseFloat(operandoA) ** parseFloat(operandoB);
            break;

        case "%":
            res = parseFloat(operandoA) * parseFloat(operandoB) / 100;
             break;

        case "+/-":
            if(operandoA = mat)
            break;

    }
    resetear();
    resultado.textContent = res;
}