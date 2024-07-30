alert("Bem Vindo");

document.getElementById('btn-msg').addEventListener('click', function () {
    alert("Você clicou no botão");
});

function VerificaIdade() {
    var idade = parseInt(document.getElementById('idade-1').value);
    var maiorIdade = 18;

    if (idade >= maiorIdade) {
        alert("Você é maior de idade");
    } else {
        alert("Você não é maior de idade");
    }
}

// Função para calcular a média de três números
function calcMedia() {
    var numero1 = parseInt(document.getElementById('num-1').value);
    var numero2 = parseInt(document.getElementById('num-2').value);
    var numero3 = parseInt(document.getElementById('num-3').value);

    var resultado = (numero1 + numero2 + numero3) / 3;

    document.getElementById('result').value = resultado;
}

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


function Multiplos(limite) {
    let soma = 0;
    let multiplos = [];

    for (let i = 0; i < limite; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
            multiplos.push(i);
        }
    }

    document.getElementById('result-mult').value = `Os múltiplos são: ${multiplos.join(', ')}\nSoma: ${soma}`;
}


const limite = 1000;

document.getElementById('mostra-multi').addEventListener('click', function() {
    Multiplos(limite);
});


function SomaTermosParesFibonacci(limite){
    let a = 0;
    let b = 1;
    let soma = 0;

    while(b <= limite){
        if(b % 2 === 0){
            soma += b;
        }

        const proximo = a + b;
        a = b;
        b = proximo;
    }

    return soma;
}

const limiteFibonacci = 50000;

document.getElementById('calcular-fibonacci').addEventListener('click', function(){
    const resultadoFibonacci = SomaTermosParesFibonacci(limiteFibonacci);

    document.getElementById('result-fibonacci').value = resultadoFibonacci;
})


function isPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}


function encontrarNPrimo(n) {
    let count = 0; 
    let num = 1; 

    while (count < n) {
        num++;
        if (isPrimo(num)) {
            count++;
        }
    }

    return num;
}

const N = 1001;

document.getElementById('calcular-primo').addEventListener('click', function() {

    const resultado = encontrarNPrimo(N);
    

    document.getElementById('result-primo').value = resultado;
});

function exibirPrimos(){
    const limite = 200;
    const tabelaCorpo = document.querySelector('#tabela-primos tbody');

    tabelaCorpo.innerHTML = '';

    for(let num = 0; num <= limite; num++){
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = num;

        if(isPrimo(num)){
            td.classList.add('primo');
        }

        tr.appendChild(td);
        tabelaCorpo.appendChild(tr);
    }
}

document.getElementById('mostrar-primos').addEventListener('click', exibirPrimos);
