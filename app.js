let numero = 0;

let numerosDescrescentes = 1;

let resultados = [];

setarTexto('h1', 'Tabuada');
setarTexto('p', 'Informe o número:');

function setarTexto(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

function pegarDados(){

    numero = document.querySelector('input').value;
    //console.log(numero);
    limparCampo();
    desativarElemento('calcular', 'disabled', true);
    calcular(numero);
    setarTexto('p', `A tabuada de ${numero} é: `);
    ativarElemento('reiniciar', 'disabled', false);
    desativarElemento('input', 'disabled', true);
}


function calcular(numeroP){

    while(numerosDescrescentes != 11){
        
        resultados.push(numerosDescrescentes * numeroP);

        numerosDescrescentes++;

        console.log('Entrei no while');
        console.log(numeroP + 'valor do número');


    }
    console.log(resultados);
    exibiValor(resultados);
    resultados = [];
}

function exibiValor(valor){
    let campo = document.querySelector('input');
    campo.value = valor;
}

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
}

function desativarElemento(tag, atributo, estado){
    let elemento = document.getElementById(tag).setAttribute(atributo, estado);
}

function ativarElemento(tag, atributo, estado){
    let elemento = document.getElementById(tag).removeAttribute(atributo, estado);
}

function reiniciar(){
    limparCampo();
    ativarElemento('calcular', 'disabled', false);
    ativarElemento('input', 'disabled', true);
    desativarElemento('reiniciar', 'disabled', true);
    setarTexto('p', 'Informe o número:')

    numerosDescrescentes = 1;



}