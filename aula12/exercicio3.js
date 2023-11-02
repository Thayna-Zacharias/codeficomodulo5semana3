var prompt = require('prompt-sync')();

function desenharRetangulo(altura, largura) {
    let linha;
    
    for (let i = 0; i < altura; i++) {
        if (i === 0 || i === altura - 1) {
            linha = '*'.repeat(largura);
        } else {
            linha = '*' + ' '.repeat(largura - 2) + '*';
        }

        console.log(linha);
    }
}

function obtemDados() {

    let continuar = true;

    while (continuar) {
        const imprimirRetangulo = prompt('Informe se deseja imprimir outro retângulo (s/n): ').toLowerCase();

        if (imprimirRetangulo !== 's') {
            continuar = false;
            break;
        }

        let altura = parseFloat(prompt('Informe a altura do retângulo: '));
        let largura = parseFloat(prompt('Informe a largura do retângulo: '));

        while (altura <= 0 || largura <= 0 || largura <= altura) {
            console.log('Entrada inválida. Certifique-se de que a altura seja maior que 0 e que a largura seja maior que a altura.');
            altura = parseFloat(prompt('Informe a altura do retângulo: '));
            largura = parseFloat(prompt('Informe a largura do retângulo: '));
        }

        desenharRetangulo(altura, largura);
    }
}

function inicia() {
    obtemDados();
}
inicia();