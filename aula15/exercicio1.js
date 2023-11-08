let pessoa = {};
pessoa.nome = 'Thayná';
pessoa.idade = 27;

console.log(pessoa);

pessoa.idade = 18;
console.log(pessoa.idade);

let pessoa2 = {
    nome: 'Raiane',
    idade: 20
};
console.log(pessoa2);

for(chave in pessoa2){
    console.log(`${chave}: ${pessoa2[chave]}`)
}

pessoa2.apresentacao = function(){
    return `Olá, ${pessoa2.nome}!`
}
console.log(pessoa2.apresentacao());

pessoa.email = 'email@pessoa1.br'
console.log(pessoa.email);