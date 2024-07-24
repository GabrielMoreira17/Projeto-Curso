alert("Bem Vindo");

document.getElementById('btn-msg').addEventListener('click', function(){
    alert("Você clicou no botão");
})

function VerificaIdade(){
    var idade = document.getElementById('idade-1').value;
    var maiorIdade = 18;

    if(idade > maiorIdade){
        alert("Você é maior de idade")
    } else{
        alert("Você não é maior de idade");
    }
}

function calcMedia(){
var numero1 = parseInt(document.getElementById('num-1').value);
var numero2 = parseInt(document.getElementById('num-2').value);
var numero3 = parseInt(document.getElementById('num-3').value);

var resultado = (numero1 + numero2 + numero3) / 3;

document.getElementById('result').value = resultado;

}