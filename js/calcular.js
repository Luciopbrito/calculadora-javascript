var botao = document.getElementsByTagName('input')[3]
var n1 = document.getElementById('txtn1')
var op = document.getElementById('txtop')
var n2 = document.getElementById('txtn2')
var res = document.querySelector('div.resposta')
botao.addEventListener('click', calcular)

function calcular() {
    if (n1.value == '') {
        alert('Valor inválido');
        document.getElementById('txtn1').focus();
    } else if (n2.value == '') {
        alert('Valor inválido');
        document.getElementById('txtn2').focus();
    } else {
        switch (op.value) {
            case '+':
                var resultado =  Number(n1.value) + Number(n2.value);
                res.innerHTML = `A soma de ${n1.value} e ${n2.value} é igual a <strong>${resultado}</strong>`;
                res.style.display = 'block';
                res.style.textAlign = 'center'
                break;
            case '-':
                var resultado =  Number(n1.value) - Number(n2.value);
                res.innerHTML = `A subtração de ${n1.value} e ${n2.value} é igual a <strong>${resultado}</strong>`;
                res.style.display = 'block';
                res.style.textAlign = 'center'
                break;
            case '/':
                var resultado =  Number(n1.value) / Number(n2.value);
                res.innerHTML = `A divisão de ${n1.value} e ${n2.value} é igual a <strong>${resultado}</strong>`;
                res.style.display = 'block';
                res.style.textAlign = 'center'
                break;
            case '*':
            case 'X':
            case 'x':
                var resultado =  Number(n1.value) * Number(n2.value);
                res.innerHTML = `A multiplicação de ${n1.value} e ${n2.value} é igual a <strong>${resultado}</strong>`;
                res.style.display = 'block';
                res.style.textAlign = 'center'
                break;
            default:
                alert('Operação inválida');
                document.getElementById('txtop').focus();
                break;
        }
    }
}