function calcMedia() {
    var numero1 = parseInt(document.getElementById('num-1').value);
    var numero2 = parseInt(document.getElementById('num-2').value);
    var numero3 = parseInt(document.getElementById('num-3').value);

    var resultado = (numero1 + numero2 + numero3) / 3;

    document.getElementById('result').value = resultado;
}