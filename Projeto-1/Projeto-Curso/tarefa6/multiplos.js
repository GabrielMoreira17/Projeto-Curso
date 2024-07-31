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