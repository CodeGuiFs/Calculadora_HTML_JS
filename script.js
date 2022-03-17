var txt = document.getElementById('rescalc')

function diginum(a){
    switch(a){
        case 0:
            txt.innerHTML += `${a}`  
            break
        case 1:
            txt.innerHTML += `${a}`
            break
        case 2:
            txt.innerHTML += `${a}`
            break
        case 3:
            txt.innerHTML += `${a}`
            break
        case 4:
            txt.innerHTML += `${a}`
            break
        case 5:
            txt.innerHTML += `${a}`
            break
        case 6:
            txt.innerHTML += `${a}`
            break
        case 7:
            txt.innerHTML += `${a}`
            break
        case 8:
            txt.innerHTML += `${a}`
            break
        case 9:
            txt.innerHTML += `${a}`
            break
        case 10:
            txt.innerHTML += `/`
            break
        case 11:
            txt.innerHTML += `*`
            break
        case 12:
            txt.innerHTML += `-`
            break
        case 13:
            txt.innerHTML += `+`
            break
        case 14:
            txt.innerHTML += `.`
            break
        case 15:
            txt.innerHTML = ``
            break
        case 16:
            txt.innerHTML += `,`
            break
        case 17:
            txt.innerHTML += `=`
            calcular()
            break
    }
}

function calcular(){
    var num = txt.value
    var txtcalc = txt.value.length
    var valor1 = ""
    var valor2 = ""
    var v =""
    var op = ""
for(var i = 0; i < txtcalc; i++){
    var c = num[i]
    if(c == "+" || c == "-" || c == "*" || c == "/" || c == "**"){
        valor1 = v
        op = c
        v = ""
    }else if(c == "="){
        valor2 = v
        break
    }
    else{
        v += c
    }
}
var nvalor1 = Number(valor1)
var nvalor2 = Number(valor2)
var res = 0
if(op == "+"){
    res = nvalor1 + nvalor2
}else if(op == "-"){
    res = nvalor1 - nvalor2
}else if(op == "*"){
    res = nvalor1 * nvalor2
}else if(op == "/"){
    res = nvalor1 / nvalor2
}
   txt.innerHTML = `${res}`

}
