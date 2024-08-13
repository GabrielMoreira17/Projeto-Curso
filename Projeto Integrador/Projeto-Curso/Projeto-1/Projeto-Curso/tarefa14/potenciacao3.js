// Função para calcular a potência usando um laço de repetição
function calcularPotencia(base, expoente) {
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }
    return resultado;
}

// Função para exibir os resultados
function exibirResultados() {
    const base = 2;
    const expoenteMax = 8;
    const container = document.getElementById('results');

    container.innerHTML = ''; // Limpa qualquer conteúdo anterior

    for (let expoente = 0; expoente <= expoenteMax; expoente++) {
        const resultado = calcularPotencia(base, expoente);
        const resultadoHTML = `
            <div class="result">
                <span>${base}<sup>${expoente}</sup> = ${resultado}</span>
            </div>
        `;
        container.innerHTML += resultadoHTML;
    }
}

// Executar a função para exibir os resultados
exibirResultados();
