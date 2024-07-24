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