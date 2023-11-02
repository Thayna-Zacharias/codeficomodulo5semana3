var prompt = require('prompt-sync')();

function inicia() {
    let numero = parseFloat(prompt('Digite um número (0 para sair): '));
    let soma = 0;
    let contador = 0;


    while (numero !== 0) {
        soma += numero;
        contador++;
        numero = parseFloat(prompt('Digite um número (0 para sair): '));
    }

    if (contador === 0) {
        console.log('Nenhum número foi digitado.');
        return;
    }
    
    const media = soma / contador;
    console.log(`A média dos números digitados é: ${media}`);
}
inicia();