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

createList(lista, 3)

console.log(removeElement(lista, 3))

console.log(insertNewElement(lista,3))