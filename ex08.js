const {
    ler,
    escrever,
    findLastIndex,
    insertNewElement,
    removeElement,
    findElement
} = require('./utils/utils');



let lista = []

for (let index = 0; index < 5; index++) {
    let nome = String(ler(`Digite seu nome: `));
    lista.push(nome)
    let idade = Number(ler(`Digite sua idade: `));
    lista.push(idade)
}