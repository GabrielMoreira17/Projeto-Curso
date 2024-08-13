document.getElementById('inverte-txt').addEventListener('click', function InvertendoTexto(){
    const inputFrase = document.getElementById('txt-org').value;

    if(inputFrase.trim() === ''){
        alert('Por Favor, insira uma frase');
        return;
    }

    const fraseInvertida = inverterFrase(inputFrase);

    document.getElementById('txt-invertido').textContent = fraseInvertida;
});

function inverterFrase(frase){
    let resultado = '';
    for (let i = frase.length - 1; i >= 0; i--){
        resultado += frase[i];
    }
    return resultado;
}