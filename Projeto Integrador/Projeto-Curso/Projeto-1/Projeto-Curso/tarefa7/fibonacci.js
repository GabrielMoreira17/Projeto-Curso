
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
