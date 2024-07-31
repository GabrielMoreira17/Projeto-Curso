function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (altura > 0) {
        var imc = peso / (altura * altura);
        document.getElementById('resultImc').value = 'Seu IMC é: ' + imc.toFixed(2);
    } else {
        document.getElementById('resultImc').value = 'Altura inválida';
    }
}