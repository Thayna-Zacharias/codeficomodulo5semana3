
var prompt = require('prompt-sync')();

function inicia() {
    const numero = parseInt(prompt('Digite um número inteiro positivo: '));

    if (numero <= 0) {
        console.log('Nenhum número na sequência.');
    } else if (numero === 1) {
        console.log('Sequência de Fibonacci até 1:\n0');
    } else if (numero === 2) {
        console.log('Sequência de Fibonacci até 2:\n0, 1');
    } else {
        console.log(`Sequência de Fibonacci até ${numero}:`);
        let a = 0;
        let b = 1;
        let resultado = '0, 1';

        while (true) {
            const next = a + b;
            if (next > numero) {
                break;
            }
            resultado += ', ' + next;
            a = b;
            b = next;
        }

        console.log(resultado);
    }
}
inicia();