const {
    ler,
    escrever,
    findLastIndex,
    insertNewElement,
    removeElement,
    findElement,
    createList,
    findByProperty
} = require('./utils/utils');


let lista = []

createList(lista, 3)

let soma = 0

for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    soma += pessoa.peso
}

console.log(`A soma dos pesos é: ${soma}`)