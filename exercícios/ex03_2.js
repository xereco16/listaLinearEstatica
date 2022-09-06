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

let maior = []
let menor = []
for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    if (pessoa.idade >= 18) {
        maior.push(pessoa.nome)
    }else if(pessoa.idade < 18){
        menor.push(pessoa.nome)
    }
}
console.log("pessoas com mais de 18 anos: ")
console.log(maior)
console.log("pessoas com menos de 18 anos: ")
console.log(menor)