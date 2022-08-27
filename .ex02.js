const {
    ler,
    escrever,
    findLastIndex,
    insertNewElement,
    removeElement,
    insertElemntInEnd,   
    createList
} = require('./utils/utils');


let lista = []

createList(lista, 10)

console.log(removeElement(lista, 10))

console.log(insertNewElement(lista,10))