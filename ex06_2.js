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

let maior = 0
let nomeMai
let menor = 0
let nomeMen
for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    if(pessoa.idade > maior){
        maior = pessoa.idade
    }
    for (let index = 0; index < lista.length; index++) {
        const pessoa = lista[index];
        if(pessoa.idade === maior){
            nomeMai = pessoa.nome
        }
    }
    menor = maior
   for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    if(pessoa.idade<menor){
        menor = pessoa.idade
        nomeMen = pessoa.nome
    }
    for (let index = 0; index < lista.length; index++) {
        const pessoa = lista[index];
        if(pessoa.idade === menor){
            nomeMen = pessoa.nome
        }
    }
   }
}

console.log(`A pessoa mais velha é: ${nomeMai} que tem ${maior} anos`)
console.log(`A pessoa mais nova é: ${nomeMen} que tem ${menor} anos`)
