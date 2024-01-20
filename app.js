let listaSorteados = [];
let numLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;


function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirTextoTela('h1', 'Numero secreto');
    exibirTextoTela('p', 'Escolha um numero entre 1 e 10' );
}


function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoTela('h1','Acertou')

        let palavraTentativa = tentativa > 1 ?'Tentativas': 'Tentativa';
        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativa} ${palavraTentativa}!`;


        exibirTextoTela('p',mensagemTentativa);

        document.getElementById("reiniciar").removeAttribute('disabled')
    }else{
        if(chute > numeroSecreto){
            exibirTextoTela('p','O numero e menor que o chute!');
        }else{
            exibirTextoTela('p','O numero secreto e maior!');
        }
        tentativa++;
        limparCampo();
    }

}


function limparCampo(){
    chute= document.querySelector('input')
    chute.value = '';
}
function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random()*numLimite+1);
   let quantidadeElementosLista = listaSorteados.length;

   if(quantidadeElementosLista == numLimite){
    listaSorteados = [];
   }

   if(listaSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else{
        listaSorteados.push(numeroEscolhido);
        return numeroEscolhido;
   }
};


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1;
    limparCampo();
    exibirMensagemInicial()
    document.getElementById("reiniciar").setAttribute('disabled',true)
}