let livro = {
    titulo: 'A História da Psiquiatria no Brasil',
    autor: 'Jurandir Freire Costa',
    anoPublicacao: 2006,
    genero: 'História',
    disponivel: true,
    emprestarLivro: function(){
        livro.disponivel = false    
    }
};
console.log(livro);
livro.emprestarLivro();
console.log(livro.disponivel); 