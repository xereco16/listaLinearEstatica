const {
    ler,
    escrever,
    findLastIndex,
    insertNewElement,
    removeElement,   
    createList
} = require('./utils/utils');


let lista = []

createList(lista,3)

console.log(lista)

removeElement(lista, 1)

console.log(lista)