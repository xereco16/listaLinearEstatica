const {
    ler,
    escrever,
    findLastIndex,
    insertNewElement,
    removeElement,   
    createList
} = require('./utils/utils');



let lista = []

createList(lista,10)

console.log(lista)

console.log(removeElement(lista, 5))

console.log(insertNewElement(lista, 5))