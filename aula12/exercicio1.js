
var prompt = require('prompt-sync')();

function inicia() {

    const num1 = parseInt(prompt('Digite o primeiro número: '));
    const num2 = parseInt(prompt('Digite o segundo número: '));

    let resultado = 0;

    for (let i = 0; i < num2; i++) {
        resultado += num1;
    }

    console.log(`A multiplicação de ${num1} por ${num2} é: ${resultado}`);
}
inicia();