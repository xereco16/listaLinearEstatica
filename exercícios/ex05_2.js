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
let cont = 0

for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    cont += 1
    soma += pessoa.idade
}
    
let media = (soma/cont)

media = media.toFixed(2)

console.log(`A media de idade é de: ${media}`)