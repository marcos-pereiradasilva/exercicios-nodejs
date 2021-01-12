let txtv = document.querySelector('input#txtvel');
let res = document.querySelector('div#res');
let vel = Number(txtv.value);
let result = vel - 7


function calcular() {
    if (result <= 60) {
        res.innerHTML = `<p>A velocidade ${vel}-7 apurada foi:<strong>${result}</strong></p>`
        res.innerHTML += `<p>Você não foi <strong>MULTADO</strong></p>`
        res.innerHTML += `Dirija sempre usando cinto de segurança!`
    } else {
        res.innerHTML = `<p>A velocidade ${vel}-7 apurada foi:<strong>${result}</strong></p>`
        res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade</p>`
    }
}