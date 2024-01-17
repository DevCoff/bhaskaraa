'use strict';

let button = document.getElementById('calcular');
let button_limpar = document.getElementById('limpar');

button.addEventListener('click',calculo);
button_limpar.addEventListener('click',limpar);


function calculo(e) {
    e.preventDefault();
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num1').value);
    let num3 = parseFloat(document.getElementById('num1').value);

    let delta = Math.pow(num2,2) - 4*num1*num3;
    alert('Delta = ' + delta);

    if (delta > 0) {
        let raiz1 = (( -num2 + Math.sqrt(delta)) / (2*num1) );
        let raiz2 = (( -num2 - Math.sqrt(delta)) / (2*num1) );
        document.getElementById('resultado1').innerHTML = 'Raiz 1 =' + raiz1 + 'Raiz 2 =' + raiz2; 
    } else if ( delta === 0) {
        let raizUnica = (( -num2 + Math.sqrt(delta)) / (2*num1) );
        document.getElementById('resultado1').innerHTML = 'Raiz Unica =' + raizUnica; 
    } else if ( delta < 0) {
        document.getElementById('resultado1').innerHTML = 'Delta < 0 não existe raizes no conjunto dos números reais.';
    }
}

function limpar(e) {
    document.getElementById('num1').value=" ";
    document.getElementById('num2').value=" ";
    document.getElementById('num3').value=" ";
    document.getElementById('resultado1').innerHTML = null;

}