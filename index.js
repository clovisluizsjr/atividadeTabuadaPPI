//aplicacao web que gere uma tabuada informando o numero e quantidade da sequencia
import express from 'express';  //criar aplicação web rápida

const host = '0.0.0.0';
const porta = 3000;
const app = express();

function retornaPaginaInicial(requisicao, resposta) {
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Uhul</title>');
    resposta.write('<h1>Informe o parâmetro do número e quantidade da sequência na url >> http://localhost:3000/aplicacao?tabuada=3&sequencia=25</h1>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
}

function retornaTabuada(requisicao, resposta) {
    //extrair da url da o numero e a quantidade da sequência
    let tabuada = requisicao.query.tabuada;
    let sequencia = requisicao.query.sequencia;
    if (!sequencia) {
        sequencia = 1;
    }
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Tabuada do número ' + tabuada + '</h1>');
    if (tabuada && sequencia) {
        sequencia = parseInt(sequencia);
        tabuada = parseInt(tabuada)
        for (let i = 0; i < sequencia; i++) {
            const resultado = tabuada * i;
            resposta.write('<p>' + tabuada + ' x ' + i + ' = ' + resultado + '</p>');
        }
    }
    else {
        resposta.write('<h1>Informe o parâmetro do número e quantidade da sequência na url >> http://localhost:3000/aplicacao?tabuada=3&sequencia=25</h1>');
    }
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
}

app.get('/aplicacao', retornaTabuada);
app.get('/', retornaPaginaInicial);

app.listen(porta, host, () => {
    console.log("Servidor está executando em http://" + host + ":" + porta);
});