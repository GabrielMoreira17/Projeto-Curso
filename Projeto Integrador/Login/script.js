document.getElementById('Login-btn').addEventListener('click', function(){
const email = document.getElementById('email-login').value;
const senha = document.getElementById('senha-login').value;

const emailCerto = "email@exemplo.com"
const senhaCerta = "senha123"

if(email === '' || senha === ''){
    alert('Preencha todos os campos');
    return;
}

if(email !== emailCerto || senha !== senhaCerta){
    alert('Email ou Senha Invalidos');
}
})