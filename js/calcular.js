function calcular(n1, n2, op) {
    switch (op) {
        case '+':
            res.innerHTML = `A soma de ${n1} e ${n2} é igual a <strong>${n1 + n2}</strong>`;
            break;
        case '-':
            res.innerHTML = `A subtração de ${n1} e ${n2} é igual a <strong>${n1 - n2}</strong>`;
            break;
        case '/':
            res.innerHTML = `A divisão de ${n1} e ${n2} é igual a <strong>${n1 / n2}</strong>`;
            break;
        case '*':
        case 'X':
        case 'x':
            res.innerHTML = `A multiplicação de ${n1} e ${n2} é igual a <strong>${n1 * n2}</strong>`;
            break;
        default:
            alert('Operação inválida');
            break;
    }
    res.style.display = 'block';
    res.style.textAlign = 'center';
}