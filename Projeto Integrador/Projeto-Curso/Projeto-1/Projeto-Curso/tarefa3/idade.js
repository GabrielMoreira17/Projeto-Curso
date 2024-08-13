function VerificaIdade() {
    var idade = parseInt(document.getElementById('idade-1').value);
    var maiorIdade = 18;

    if (idade >= maiorIdade) {
        alert("Você é maior de idade");
    } else {
        alert("Você não é maior de idade");
    }
}
