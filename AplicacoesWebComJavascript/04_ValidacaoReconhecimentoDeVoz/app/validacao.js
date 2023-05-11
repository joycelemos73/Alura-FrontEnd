function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        console.log('Chute inválido: Precisa ser número');
    }

    if(numeroForMaiorOuMenorQueValorPermitido(numero)) {
        console.log(`Chute inválido: O número secreto precisa estar 
        entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
