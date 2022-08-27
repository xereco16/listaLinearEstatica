const {
    ler,
    escrever,
    findLastIndex,
    insertNewElement,
    removeElement,
    createList   
} = require('./utils/utils');


let lista = []
createList(lista, 10)
console.log(lista)

console.log(removeElement(lista,1))
console.log(insertNewElement(lista, 1))
