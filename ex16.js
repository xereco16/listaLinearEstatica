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

let maior = 0
let nomeMai
let menor = 0
let nomeMen
for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    if(pessoa.peso > maior){
        maior = pessoa.peso
    }
    for (let index = 0; index < lista.length; index++) {
        const pessoa = lista[index];
        if(pessoa.peso === maior){
            nomeMai = pessoa.nome
        }
    }
    menor = maior
   for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    if(pessoa.peso<menor){
        menor = pessoa.peso
        nomeMen = pessoa.nome
    }
    for (let index = 0; index < lista.length; index++) {
        const pessoa = lista[index];
        if(pessoa.peso === menor){
            nomeMen = pessoa.nome
        }
    }
   }
}

console.log(`A pessoa mais pesada é: ${nomeMai} que tem ${maior}Kg`)
console.log(`A pessoa mais leve é: ${nomeMen} que tem ${menor}kg`)
