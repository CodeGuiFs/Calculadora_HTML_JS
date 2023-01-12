$("input[type=button]").click(function(){
    this.blur();
    return diginum(this.value);
});

$(document).keydown(function(event){
    return diginum(event.key);
});


function diginum(num) {
    var n = Number(num);
    if(n == num){
        $("textarea").append(num);
    }else{
        switch (num) {
            case "/":                                       //Switch used for Symbols.
            case "*":
            case "-":
            case "+":
            case ".":
                $("textarea").append(num);
                break;

            case ",":                                       //Switch used for comma treatment.
                $("textarea").append(".");
                break;

            case "Enter":                                   //Switch used for equal.
            case "=":
                $("textarea").append("=");
                calcular();
                break;

            case "C":                                       //Switch used for clear the input.
            case "Delete":
                $("textarea").html("");
                break;
            case "Backspace":
                $("textarea").html($("textarea").val().substr(0, $("textarea").val().length-1))
                break;
        }    
    }
}



function calcular() {
    var textCalc = $("textarea").val();                     //Receive a String from imput.
    var value1 = ""                                         //Store the firs value. 
    var value2 = ""                                         //Store the second value.
    var charSet = ""                                        //Temporary store the individual values from the string.
    var operator = ""                                       //Store the operator sign. 


    for (var i = 0; i < textCalc.length; i++) {             // Do a slice on the string, verifying all the characters one by one. 
        var c = textCalc[i]
        if (c == "+" || c == "-" || c == "*" || c == "/") {
            value1 = charSet;
            operator = c;
            charSet = "";
        } else if (c == "=") {
            value2 = charSet;
            break;
        } else {
            charSet += c;
        }
    }

    var nvalue1 = Number(value1);                           //Transform the string into a Number.
    var nvalue2 = Number(value2);                           //Transform the string into a Number.
    var result = 0;
    
        if (operator == "+") {
            result = nvalue1 + nvalue2;
        } else if (operator == "-") {
            result = nvalue1 - nvalue2;
        } else if (operator == "*") {
            result = nvalue1 * nvalue2;
        } else if (operator == "/") {
            result = nvalue1 / nvalue2;
        }
    
    
        $("textarea").html(`${result}`);                    //Output the result.
}