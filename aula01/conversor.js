function som() {
    var num1 = document.getElementById("valor")
    var res = document.getElementById("resp")
    var val1 = Number(num1.value)
    var soma = 5.51 * val1
    while (val1 <= 0) {
        return num1
    }
    if (val1 <= 0) {
        res.innerHTML = ("digita um valor ")
        return num1

    }

    res.innerHTML = (`O valor de ${val1} convertido em dolar e ${soma.toFixed(2)}`)
}