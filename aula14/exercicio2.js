const numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];
const numerosPrimos = numeros.filter(ehPrimo);
console.log('Números Primos:', numerosPrimos);

const quadradosPrimos = numerosPrimos.map((numero) => {
    return numero * numero
});
console.log('Quadrados dos Números Primos:', quadradosPrimos);

function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
