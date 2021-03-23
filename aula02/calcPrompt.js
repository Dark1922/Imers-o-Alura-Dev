
var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))
var operacao = prompt("Digite 1 para fazer uma divisao, 2 para multiplicaçao, 3 para soma e 4 para subtraçao:")



if (operacao == 1) {
    var resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
}
//tudo dentro do colchete sera realizado se a opçao 1 for escolhida//
else if (operacao == 2) {
    var resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
}
else if (operacao == 3) {
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}
else if (operacao == 4) {
    var resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}
else {
    document.write("<h2>Opçao invalida</h2>")
}

// resultado apareceu escondido, jogado na tela. Para isso jogar a variavel resultado no espaço da calculadora que foi escrita com um h2: document.write ("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")//
