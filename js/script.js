var bt = document.getElementById('bt')

bt.addEventListener("click", function(){
    var input = document.getElementById('input')
    var valor = eval(input.value)
    var binario = valor.toString(2);
    document.getElementById('binario').innerHTML = `Esse é o valor em binario   | ${binario} |`;
})
bt.addEventListener("click", function(){
    var input = document.getElementById('input')
    var valor = eval(input.value)
    var octal = valor.toString(8);
    document.getElementById('octal').innerHTML = `Esse é o valor em octal   | ${octal} |`;
})
bt.addEventListener("click", function(){
    var input = document.getElementById('input')
    var valor = eval(input.value)
    var hex = valor.toString(16);
    document.getElementById('hex').innerHTML = `Esse é o valor em hexadecimal   | ${hex} |`;
})






// var valor = eval(prompt("Digite um valor:"));
// document.getElementById('valor').innerHTML = `${resultadoHex}`;








