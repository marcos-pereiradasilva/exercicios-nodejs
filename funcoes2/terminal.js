const funcao = require('./app.js')
let resultado = undefined


//--------------------------------------------------
//2ª questão

resultado = funcao.positNeg(-50)
msg = resultado
console.log(msg)

//3ª Questao----------------------------------------------

resultado = funcao.duzia(18)
msg = 'O preço final é: ' + resultado
console.log(msg)
    //4ª Questão--------------------------------------------

resultado = funcao.media(8, 9)
msg = 'A média é: ' + resultado
console.log(msg)


//5ª Questão------------------------------------------------

resultado = funcao.conversorFahr(200)
msg = 'Temperatura em graus Celsius: ' + resultado
console.log(msg)

//6ª Questão------------------------------------------------

resultado = funcao.remunMensal(12, 90, 7.5)
msg = 'A remuneração total é: ' + resultado
console.log(msg)

//7ª Questão------------------------------------------------------

resultado = funcao.contaCorrente(4000, 8000, 14.386)
msg = resultado
console.log(msg)

//8ª Questao------------------------------------------------------

resultado = funcao.controleEstoq(5000, 100, 1000)

//9º Questão------------------------------------------------------