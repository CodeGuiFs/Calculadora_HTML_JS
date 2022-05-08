var visorCalc = document.querySelector("textarea");
var btn = document.querySelectorAll("input[type=button]");

visorCalc.addEventListener("click", function(){
    this.blur();
});

for (var c = 0; c < btn.length; c++) {
    btn[c].addEventListener("click", function () {
        this.blur();
        return diginum(this.value);
    });
}

document.addEventListener("keydown", function(event){
    return diginum(event.key)
});


function diginum(num) {
    switch (num) {
        case "0":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "1":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "2":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "3":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "4":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "5":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "6":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "7":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "8":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "9":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "/":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "*":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "-":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case "+":
            visorCalc.insertAdjacentHTML("beforeend", num);
            break;
        case ".":
            visorCalc.insertAdjacentHTML("beforeend", ".");
            break;
        case ",":
            visorCalc.insertAdjacentHTML("beforeend", ".");
            break;
        case "Enter":
            visorCalc.insertAdjacentHTML("beforeend", "=");
            calcular()
            break;
        case "=":
            visorCalc.insertAdjacentHTML("beforeend", "=");
            calcular()
            break;
        case "C":
            visorCalc.innerHTML = ``;
            break
        case "Delete":
            visorCalc.innerHTML = ``;
            break;
    }
}



function calcular() {
    var textCalc = document.querySelector("textarea").value; //Recebe a String digitada na calculadora.
    var valor1 = ""                                          //Armazena o primeiro valor. 
    var valor2 = ""                                          //Armazena o segundo valor.
    var conjuntoCaracter = ""                                //Armazena os caracteres individuais da String.
    var sinalOperacao = ""                                   //Armazena o caracter de operação. 

    for (var i = 0; i < textCalc.length; i++) {
        var c = textCalc[i]
        if (c == "+" || c == "-" || c == "*" || c == "/") {
            valor1 = conjuntoCaracter;
            sinalOperacao = c;
            conjuntoCaracter = "";
        } else if (c == "=") {
            valor2 = conjuntoCaracter;
            break;
        } else {
            conjuntoCaracter += c;
        }
    }

    var nvalor1 = Number(valor1);
    var nvalor2 = Number(valor2);
    var resultado = 0;
    
        if (sinalOperacao == "+") {
            resultado = nvalor1 + nvalor2;
        } else if (sinalOperacao == "-") {
            resultado = nvalor1 - nvalor2;
        } else if (sinalOperacao == "*") {
            resultado = nvalor1 * nvalor2;
        } else if (sinalOperacao == "/") {
            resultado = nvalor1 / nvalor2;
        }
    
    
    visorCalc.innerHTML = `${resultado}`;
}