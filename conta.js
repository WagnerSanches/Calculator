var btn = document.querySelector("#fazer");
var apagar = document.querySelector("#apagar");
var num = document.querySelectorAll("#num");
var conta = document.querySelector("#conta");
var operador = document.querySelectorAll("#operd");
var resultado = document.querySelector("#resultado");
var negativo = false;
var oper;
var numero = [2];
var virg = document.querySelector("#virgula");

for(var a = 0; a < operador.length;a++) {
    operador[a].onclick = add_operador;
}

for(var i = 0; i < num.length; i++) {
    num[i].onclick = add_numero;
}


function add_numero() {
    conta.textContent += this.textContent;  
}

function add_operador() {

    if(negativo == false && conta.textContent == "") {
        if(this.textContent == "-") {
            conta.textContent += this.textContent;
            negativo = true;
        }             
    } else {
        if(oper == null &&  !isNaN(parseInt(conta.textContent))) {
            console.log(parseInt(conta.textContent));
            criarNumero(1);
            criarOperador(this.textContent);
        }
    }
}

function criarOperador(operador) {
    oper = operador; 
    conta.textContent +=  " " +operador+ " ";
    console.log(oper);
}


function criarNumero(i) {
    if(i = 1) {
        if(eDecimal(conta.textContent)){
            numero[1] = parseFloat(conta.textContent);
        }  else {
            numero[1] = parseInt(conta.textContent);
        }
    } 
    if(i = 2) {
        var achar = conta.textContent.substring(conta.textContent.indexOf(oper) + 2);

        if(eDecimal(achar)) {
            numero[2] = parseFloat(achar);
        } else {
            numero[2] = parseInt(achar);
        }

        numero[2] = parseFloat(achar);
    }
}

virg.addEventListener("click", function(){

    conta.textContent += "0.";

});




btn.addEventListener("click", function() {
    criarNumero(2);
    if(numero[1] != null && numero[2] != null && oper != null) {
        var res;
        switch(oper) {
            case "/":
                res = numero[1] / numero[2];
            break;
            case "*":
                res = numero[1] * numero[2];
            break;
            case "-":
                res = numero[1] - numero[2];
            break;
            case "+":
                res = numero[1] + numero[2];
            break;

        }

        if(eDecimal(res.toString())) {
            resultado.textContent = res.toFixed(2);
        } else {
            resultado.textContent = res;
        }


        console.log(typeof(res));

        conta.textContent = "";
        numero[1] = null;
        numero[2] = null;
        negativo = false;5
        oper = null;
    }


    
});

function eDecimal(num) {

    var ponto = num.indexOf(".") == -1 ? false : true;

    return ponto;

}

apagar.addEventListener("click", function(){
    resultado.textContent = "";
    conta.textContent = "";
    numero[1] = null;
    numero[2] = null;
    negativo = false;
    oper = null;
});

// var texto = "365 - 6336";

// var achado = texto.indexOf("-");
// console.log(achado);
// var novoAchado = texto.substring(achado + 2);
// console.log(novoAchado);