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

let maior3 = 0
let pesoMai
let menor3 = 0
let pesoMen
for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    if(pessoa.peso > maior3){
        maior3 = pessoa.peso
    }
    for (let index = 0; index < lista.length; index++) {
        const pessoa = lista[index];
        if(pessoa.peso === maior3){
            pesoMai = pessoa.nome
        }
    }
    menor3 = maior3
   for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    if(pessoa.peso<menor3){
        menor3 = pessoa.peso
        pesoMen = pessoa.nome
    }
    for (let index = 0; index < lista.length; index++) {
        const pessoa = lista[index];
        if(pessoa.peso === menor3){
            pesoMen = pessoa.nome
        }
    }
   }
}

console.log(`A pessoa mais pesada é: ${pesoMai} que tem ${maior3}Kg`)
console.log(`A pessoa mais leve é: ${pesoMen} que tem ${menor3}kg`)
