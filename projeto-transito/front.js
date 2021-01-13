let txtVelocidade = document.querySelector('#txt-velocidade');
let resultado = document.querySelector('#resultado');

function calcular() {
    let velocidadeConstatada = txtVelocidade.value;
    let velocidadeApurada = velocidadeConstatada - 7;

    if (verificarVelocidade(velocidadeConstatada)) {
        resultado.innerHTML = `<p>A velocidade ${velocidadeConstatada}-7 apurada foi:<strong>${velocidadeApurada}</strong></p>`
        resultado.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade</p>`
    } else {
        resultado.innerHTML = `<p>A velocidade ${velocidadeConstatada}-7 apurada foi:<strong>${velocidadeApurada}</strong></p>`
        resultado.innerHTML += `<p>Você não foi <strong>MULTADO</strong></p>`
        resultado.innerHTML += `Dirija sempre usando cinto de segurança!`
    }
}
