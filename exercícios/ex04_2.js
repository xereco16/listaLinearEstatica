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

createList(lista, 10)

let soma = 0

for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    soma += pessoa.idade
}

console.log(`A soma das idades é: ${soma}`)