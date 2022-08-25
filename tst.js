const {
    ler,
    escrever,
    findLastIndex,
    insertNewElement,
    removeElement,
    findElement 
} = require('./utils/utils');



let lista = {}

lista.pessoa1=['cadu', 'M', 0, 74.6]
lista.pessoa2=['bia', 'F', 16, 50]

console.log(findElement(lista.pessoa2, 4))