var tentativas = 3
var numeroSecreto = parseInt(Math.random() * 10)
var chute = ""
var ponto = 0
console.log("Número secreto " + numeroSecreto)
console.log("Tentativas: " + tentativas)

function testarChute() {

    while (tentativas > 0 && ponto == 0) {
        tentativas--
        if (numeroSecreto == chute) {
            ponto++
            venceu()
        } else if (chute > numeroSecreto) {
            mensagemMenor()
                //console.log("O número é secreto é menor")
                //reiniciarTentativa()
        } else if (chute < numeroSecreto) {
            mensagemMaior()
                //console.log("O número é secreto é maior")
                //reiniciarTentativa()
        }
        if (tentativas < 1 && ponto == 0) {
            console.log("Game Over! O número secreto era " + numeroSecreto)
            perdeu()
        }
        break
    }
    console.log("Tentativas: " + tentativas)
}

function zero() {
    chute = parseInt(document.getElementById('0').value)
    console.log("Chute: " + chute)
    testarChute()
}

function um() {
    chute = parseInt(document.getElementById('1').value)
    console.log("Chute: " + chute)
    testarChute()
}

function dois() {
    chute = parseInt(document.getElementById('2').value)
    console.log("Chute: " + chute)
    testarChute()
}

function tres() {
    chute = parseInt(document.getElementById('3').value)
    console.log("Chute: " + chute)
    testarChute()
}

function quatro() {
    chute = parseInt(document.getElementById('4').value)
    console.log("Chute: " + chute)
    testarChute()
}

function cinco() {
    chute = parseInt(document.getElementById('5').value)
    console.log("Chute: " + chute)
    testarChute()
}

function seis() {
    chute = parseInt(document.getElementById('6').value)
    console.log("Chute: " + chute)
    testarChute()
}

function sete() {
    chute = parseInt(document.getElementById('7').value)
    console.log("Chute: " + chute)
    testarChute()
}

function oito() {
    chute = parseInt(document.getElementById('8').value)
    console.log("Chute: " + chute)
    testarChute()
}

function nove() {
    chute = parseInt(document.getElementById('9').value)
    console.log("Chute: " + chute)
    testarChute()
}

function dez() {
    chute = parseInt(document.getElementById('10').value)
    console.log("Chute: " + chute)
    testarChute()
}

function jogar() {
    document.getElementById('escolha').innerHTML = "<h2 class='nome'>Informe o seu nome</h2><input type='text' class='input-nome' id='input-nome'><input type='button' class='btn-iniciar' id='iniciar' onclick='iniciar()' value='Iniciar'>"
}

function iniciar() {
    nome = document.getElementById('input-nome').value
    document.getElementById('escolha').innerHTML = "<div id='display'><label class='label-nome'>Nome</label><input type='text' class='display-nome' id='display-name' disabled='disabled'><label class='label-chance'>Chances</label><input type='text' class='display-vida' id='display-vida' disabled='disabled'></input></div>" +
        "<div><h2 id='h2-mensagem'>Escolha um número:</h2></div>" +
        "<div class='numeros' id='numeros'><input type='button' id='0' value='0' onclick='zero()'><input type='button' id='1' value='1' onclick='um()'><input type='button' id='2' value='2' onclick='dois()'><input type='button' id='3' value='3' onclick='tres()'>" +
        "<input type='button' id='4' value='4' onclick='quatro()'><input type='button' id='5' value='5' onclick='cinco()'>" +
        "<input type='button' id='6' value='6' onclick='seis()'><input type='button' id='7' value='7' onclick='sete()'><input type='button' id='8' value='8' onclick='oito()'>" +
        "<input type='button' id='9' value='9' onclick='nove()'><input type='button' id='10' value='10' onclick='dez()'></div>"
    document.getElementById('display-name').value = nome
    document.getElementById('display-vida').value = tentativas
}

function reiniciarTentativa() {

    document.getElementById('display-vida').value = tentativas
}

function venceu() {
    document.getElementById('h2-mensagem').innerHTML = "<div id='resultado'><h1>PARABÉNS <span>" + nome +
        "</span>!<br> Voce descobriu o número oculto.</h1></div>"
    document.getElementById('secreto').innerHTML = "<h1 class='numero-secreto'>" + numeroSecreto + "</h1>"

    document.getElementById('numeros').innerHTML = "<img src='https://media1.tenor.com/images/967bc82bf36a" +
        "719f831ab85a820bc705/tenor.gif?itemid=17020676'></img>"
}

function perdeu() {
    document.getElementById('h2-mensagem').innerHTML = "<div id='resultado'><h1><span>" + nome + "</span>, Que pena" +
        "! Voce não descobriu o numero secreto...</h1></div>"
    document.getElementById('secreto').innerHTML = "<h1 class='numero-secreto'>" + numeroSecreto + "</h1>"

    document.getElementById('numeros').innerHTML = "<img src='https://media1.tenor.com/images/9a5ff62f574b85866b7eea16ed32ba52/tenor.gif?itemid=17098797'></img>"
}

function mensagemMenor() {
    document.getElementById('h2-mensagem').innerHTML = "<h2><p><span>" + nome + "</span>, o número secreto é menor que " + chute + ".</p></h2>"
    reiniciarTentativa()
}

function mensagemMaior() {
    document.getElementById('h2-mensagem').innerHTML = "<h2><p><span>" + nome + "</span>, o número secreto é maior que " + chute + ".</p></h2>"
    reiniciarTentativa()
}

document.addEventListener("keypress", function(e) {
    if (e.key == 'Enter') {
        var iniciar = document.querySelector("#iniciar");
        iniciar.click()
    }
});