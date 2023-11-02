var prompt = require('prompt-sync')();

function inverteTexto( texto ) {
    let textoInvertido = '';

    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    return textoInvertido;
}
function inicia() {
    const texto = prompt('Digite um texto: ');
    const textoInvertido = inverteTexto( texto );

    console.log('Texto invertido:', textoInvertido);
}
inicia();
