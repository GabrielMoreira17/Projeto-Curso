
function calculaDelta(){
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        alert('Por Favor, insira valores numéricos validos para a, b e c.');
        return;
    }

    const delta = (b * b) - (4 * a * c);

    let resultado = `<h2>Resultado:</h2>`;
    resultado += `<p><b>Valores fornecidos:</b></p>`;
    resultado += `<p>a = ${a}</p>`;
    resultado += `<p>b = ${b}</p>`;
    resultado += `<p>c = ${c}</p>`;
    resultado += `<p><b>Cálculo de Δ:</b></p>`;
    resultado += `<p>Δ = b² - 4ac</p>`;
    resultado += `<p>Δ = ${b}² - 4 * ${a} * ${c}</p>`;
    resultado += `<p>Δ = ${b * b} - ${4 * a * c}</p>`;
    resultado += `<p>Δ = ${delta}</p>`;

    document.getElementById('results').innerHTML = resultado;

}