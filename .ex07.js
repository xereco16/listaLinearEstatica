const {
    ler,
    escrever,
    findLastIndex,
    insertNewElement,
    removeElement,
    findElement,
    createList
} = require('./utils/utils');



let lista = []

createList(lista, 10)

console.log(lista)


let posição = Number(ler(`Digite a posição que deseja mostrar o valor: `))

let result = findElement(lista, posição)

console.log(`A pessoa selacionada tem os seguintes atributos: ${result}`)