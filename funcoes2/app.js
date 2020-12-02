//2º - Programa que lê um número e escreve se é positivo ou negativo (considera o zero como positivo)//

const num1 = parseInt(process.argv[2], 10);

function positNeg(num1) {
    if (num1 >= 0) {
        return (num1 + ' É positivo ');
    } else {
        return (num1 + ' É ou negativo');
    }
}

// 3º - Programa que lê a quantidade de maçãs compradas, calcula e escreva o custo total da compra. Maçã custa R$ 1,30 se comprado menos de uma duzia, e R$1,00 se comprado uma dúzia ou mais.

const quant = parseFloat(process.argv[2], 10);
const res = parseFloat(process.argv[4], 10);

function duzia(quant) {
    if (quant >= 12) {
        const res = parseFloat(quant * 1.00)
        return (res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    } else {
        const res = parseFloat(quant * 1.30)
        return (res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    }
}

//4º - Programa que lê duas notas, calcula a média aritmética simples e escreve na tela uma mensagem que o aluno foi APROVADO ou REPROVADO e a média. Média igual ou maior que 6 o aluno está aprovado.

const nota1 = parseFloat(process.argv[2], 10);
const nota2 = parseFloat(process.argv[3], 10);


function media(nota1, nota2) {
    const med = parseFloat((nota1 + nota2) / 2)
    if (med >= 6) {
        return (med)

    } else {
        return (med)
    }
}

// 5º - Programa que lê uma temperatura em graus Fahrenheit, converte para graus Celsius e escreve o valor na tela.

const fahr = parseFloat(process.argv[2], 10);

function conversorFahr(fahr) {
    const celsius = (((fahr - 32) / 9) * 5)
    return (celsius);
}

// 6º - Programa deve ler número de horas trabalhadas em um mês e salário por hora. A jornada de trabalho é de 40 horas semanais. Para esse caso deve-se considerar que o mês possue 4 semanas. Caso o trabalhador trabalhe mais de 40 horas semanais receberá horas extras. O Cálculo da hora extra é o valor da hora regular com acréscimo de 50%. Escrever na tela o salário total do funcionário.

const quantHrTrab = parseFloat(process.argv[2], 10)
const valHoras = parseFloat(process.argv[3], 10)
const quantHrExtra = parseFloat(process.argv[4], 10)
const valExtra = parseFloat(process.argv[5], 10)
const salExtra = parseFloat(process.argv[6], 10)


function remunMensal(quantHrExtra, quantHrTrab, valHoras, valExtra) {

    if (quantHrExtra == 0 && quantHrTrab <= 160) {
        const salario = (quantHrTrab * valHoras)
        console.log(salario)

    } else if (quantHrExtra > 0 && quantHrTrab <= 160) {
        const salario = (quantHrTrab * valHoras)
        const valExtra = ((valHoras * .5) + valHoras)
        const salTot = ((quantHrExtra * valExtra) + salario)
        return (salTot)
    } else if (quantHrTrab > 160) {
        console.log('Horas Trabalhadas superior a 160.')
    }
}

// 7º - Criar um programa que leia:Conta corrente do cliente, saldo, débito e crédito. Após, calcule e escreva na telao saldo atual(saldo atual= saldo-débito+crédito).Testar se saldo atual é maior ou igual a zero, escrever mensagem de Saldo Positivo senão escrever Saldo Negativo.

const numConta = parseInt(process.argv[2], 10)

function contaCorrente(credito, debito, numConta) {
    const contCor = credito
    const contCor1 = debito
    const saldAtual = (credito - debito)

    if (saldAtual < 0) {
        return (numConta + ' nº C/corrente - Saldo "NEGATIVO "')
    } else {
        return (numConta + ' nº C/corrente - Saldo "POSITIVO" ')
    }
}

// 8º - Criar um programa que leia:quantidade autal em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto.Calcular e escrever a quantidade média (quantidade media=quantidade máxima + quantidade mínima/2). Se a quantidade em estoque for maior que ou igual a quantidade média escrever na tela mensagem "Não Efetuar Compra" senão "Efetuar Compra".

function controleEstoq(qtMax, qtAtual, qtMin, qtEstoq) {

    const qtdMaxima = qtMax
    const qtdAtual = qtAtual
    const qtdMinima = qtMin

    const media = parseFloat((qtdMaxima + qtdMinima) / 2)
    const estAtual = parseFloat(qtdMaxima - qtdAtual)

    if (qtdAtual >= media && qtdAtual >= qtdMinima) {
        console.log('"Não efetuar Compra"', qtdAtual)
    } else if (qtdAtual <= media && qtdAtual >= qtdMinima) {
        console.log('"Efetuar Compra"', qtdAtual)
    } else {
        console.log('Efetuar compra "URGENTE", estoque abaixo de 1000 peças.', qtdAtual)
    }
}

//------------------------------------------------------------------------------


exports.maiormenor = maiormenor
exports.positNeg = positNeg
exports.duzia = duzia
exports.media = media
exports.conversorFahr = conversorFahr
exports.remunMensal = remunMensal
exports.contaCorrente = contaCorrente
exports.controleEstoq = controleEstoq