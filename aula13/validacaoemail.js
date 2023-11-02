var prompt = require('prompt-sync')();

//  
function verificaEmail( email ) {
    if( email.indexOf('@gmail.com') != -1 ) {
        console.log("O e-mail contém o domínio '@gmail.com'")
    } else {
        console.log("O e-mail não contém o domínio '@gmail.com'.")
        const dominio = email.slice(email.indexOf('@'));
        console.log( `O e-mail contém o domínio: ${dominio}`)
    }
}

function inicia() {
    const email = prompt( 'Digite seu email ');

    verificaEmail( email );
}
inicia();
