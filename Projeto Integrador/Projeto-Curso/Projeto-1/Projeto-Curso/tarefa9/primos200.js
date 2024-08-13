// Função para verificar se um número é primo
function isPrimo(num) {
    if (num <= 1) return false; // 0 e 1 não são primos
    if (num <= 3) return true;  // 2 e 3 são primos
    if (num % 2 === 0 || num % 3 === 0) return false; // Elimina múltiplos de 2 e 3
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Função para exibir os números primos na tabela
function exibirPrimos() {
    const limite = 200;
    const tabelaCorpo = document.querySelector('#tabela-primos tbody');

    tabelaCorpo.innerHTML = ''; // Limpa o corpo da tabela

    for (let num = 0; num <= limite; num++) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = num;

        if (isPrimo(num)) {
            td.classList.add('primo');
        }

        tr.appendChild(td);
        tabelaCorpo.appendChild(tr);
    }
}

// Adiciona um evento de clique ao botão para exibir os primos
document.getElementById('mostrar-primos').addEventListener('click', exibirPrimos);
