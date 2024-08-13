document.getElementById('Mostra-Potencia').addEventListener('click', function() {

    const base = parseFloat(document.getElementById('base').value);
    const expoente = parseInt(document.getElementById('expo').value);

    function potencia(base, expoente) {
        if (expoente === 0) {
            return 1;
        }
        
        let resultado = 1;
        let expoenteAbs = Math.abs(expoente);
        
        for (let i = 0; i < expoenteAbs; i++) {
            resultado *= base;
        }
        
        if (expoente < 0) {
            return 1 / resultado;
        }
        
        return resultado;
    }


    const resultado = potencia(base, expoente);


    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});
