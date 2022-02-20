const txtN1 = document.getElementById('txtn1');
const txtN2 = document.getElementById('txtn2');
const txtOp = document.getElementById('txtop');
const res = document.querySelector('div.res');

function verificar() {
    if (txtN1.value == '' || txtN2.value == '') {
        alert('Valor inválido');
    } else {
        calcular(Number(txtN1.value),Number(txtN2.value), txtOp.value);
    }
};