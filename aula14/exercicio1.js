let tarefas = [
   "Estudar JavaScript",
   "Fazer exercícios de arrays",
   "Preparar apresentação",
   "Enviar relatório",
   "Terminar modulo 4 - Feito",
   "Aprender html e css - Feito"
 ];
 console.log('--------------')
 let contador = 1;
 tarefas.forEach( (tarefa) => {
    console.log( `${contador} - ${tarefa}`)
    contador++
 });
 console.log('--------------')
 let tarefasPendentes = tarefas.filter( (tarefa) => {
   return tarefa.includes('Feito') === false
 });
 console.log(tarefasPendentes)
 console.log('--------------')
 let tarefas2primeiras = tarefas.slice(0,2);

 console.log(tarefas2primeiras);
 console.log('--------------')
 tarefas.pop();
 console.log(tarefas)
 console.log('--------------')
 tarefas.push('Ler livro novo')
 console.log(tarefas);