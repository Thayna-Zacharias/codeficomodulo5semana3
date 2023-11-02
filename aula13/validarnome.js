var prompt = require('prompt-sync')();

function validaUsuario( nomeDeUsuario ) {
    if( nomeDeUsuario.length < 12 ) {
        console.log( 'ERRO! O nome deve ter pelo menos 12 caracteres' );
        return false;
    }
    nomeDeUsuario = nomeDeUsuario.toLowerCase();
    
    if( nomeDeUsuario.indexOf('@') == -1 ) {
        console.log( "ERRO! Usuarios devém conter '@' no seu nome" );
        return false;
    }
    if( nomeDeUsuario.indexOf('user@') != 0 ) {
        console.log( "ERRO! Usuarios devém conter 'user@' no inicio de seu nome" );
        return false;
    }
    if( nomeDeUsuario.indexOf('admin') != -1 ) {
        console.log( "ERRO! Usuarios não devém conter admin no seu nome" );
        return false;
    }
    console.log(`Nome de Usuário válido! Seu nome de usuário é: ${nomeDeUsuario}`) 

    return true;
}

function inicia() {
    //

    while( true ) {
        let nomeDeUsuario = prompt( 'Digite seu nome de usuário: ');

        if( validaUsuario(nomeDeUsuario) ) {
            break;
        }
        
    }
}
inicia();