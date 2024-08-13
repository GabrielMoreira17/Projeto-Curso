function potencia(base, expoente) {
    if (expoente === 0) {
        return 1;
    }
    return base * potencia(base, expoente - 1);
}

function exibirResultadosRecursivo(base, expoente, maxExpoente) {
    if (expoente > maxExpoente) {
        return;
    }

    const resultado = potencia(base, expoente);
    

    const container = document.getElementById('results');
    const resultadoHTML = `
        <div class="result">
            <span>${base}<sup>${expoente}</sup> = ${resultado}</span>
        </div>
    `;
    container.innerHTML += resultadoHTML;


    exibirResultadosRecursivo(base, expoente + 1, maxExpoente);
}

document.addEventListener('DOMContentLoaded', () => {
    const base = 2;
    const expoenteMax = 8;
    exibirResultadosRecursivo(base, 0, expoenteMax);
});
