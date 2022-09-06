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

let soma4 = 0
let cont = 0

for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    cont += 1
    soma4 += pessoa.peso
}
    
let media = (soma4/cont)

media = media.toFixed(2)

console.log(`A media de peso é de: ${media}`)