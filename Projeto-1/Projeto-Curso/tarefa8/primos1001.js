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