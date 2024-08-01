// Função para calcular a potência de forma recursiva
function potencia(base, expoente) {
    if (expoente === 0) {
        return 1; // Qualquer número elevado a 0 é 1
    }
    return base * potencia(base, expoente - 1);
}

// Função para exibir os resultados
function exibirResultados() {
    const base = 2;
    const expoenteMax = 8;
    const container = document.getElementById('results');
    
    container.innerHTML = ''; // Limpa qualquer conteúdo anterior
    
    for (let expoente = 0; expoente <= expoenteMax; expoente++) {
        const resultado = potencia(base, expoente);
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
