function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Chute inválido: Precisa ser número</div>';
    }

    if(numeroForMaiorOuMenorQueValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Chute inválido: Fale um número 
        entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
