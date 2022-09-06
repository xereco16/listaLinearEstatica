const {
    ler,
    escrever,
    findLastIndex,
    insertNewElement,
    removeElement,
    findElement,
    insertElemntInEnd,
    createList,
    findByProperty  
} = require('../utils/utils');


let lista = []
createList(lista, 10)
console.log(lista)

//EX 01

console.log(removeElement(lista,1))
console.log(insertNewElement(lista, 1))

//EX 02

console.log(removeElement(lista, 10))
console.log(insertNewElement(lista,10))

//EX 03

console.log(removeElement(lista, 5))
console.log(insertNewElement(lista,5))

//EX 04

removeElement(lista, 1)
console.log(lista)

//EX 05

removeElement(lista, 10)
console.log(lista)

//EX 06

removeElement(lista, 5)
console.log(lista)

//EX 07

let posição = Number(ler(`Digite a posição que deseja mostrar o valor: `))
let result = findElement(lista, posição)
console.log(`A pessoa selacionada tem os seguintes atributos: ${result}`)

//EX 08

findByProperty(lista)


/*console.log("Acessar a lista por uma informação: \na) Pelo nome\nb) Pelo sexo\nc) Pela idade \nd) Pelo peso")
let esc = String(ler("Qual sua escolha?"))
let achpos
let elementoEcn = false

switch (esc) {
    case "a":
        achpos = ler("Qual nome deseja encontrar")
        for (let index = 0; index < lista.length; index++) {
            const pessoa = lista[index]
            if(pessoa.nome === achpos){
                console.log(`A pessoa encontrada na posicão ${index+1}`)
                console.log(pessoa)
                elementoEcn = true
            }  
        }
        break;
    case "b":
        achpos = ler("Qual sexo deseja encontrar")
        achpos = achpos.toUpperCase();
        for (let index = 0; index < lista.length; index++) {
            const pessoa = lista[index];
            if (pessoa.sexo === achpos ) {
                console.log(`A pessoa encontrada na posicão ${index+1}`)
                console.log(pessoa)
                elementoEcn = true
            }
        }
        break;
    case "c":
        achpos = ler("Qual idade deseja encontrar")
        for (let index = 0; index < lista.length; index++) {
            const pessoa = lista[index];
            if (pessoa.idade === achpos) {
                console.log(`A pessoa encontrada na posicão ${index+1}`)
                console.log(pessoa)
                elementoEcn = true
            }
        }
        break;
    case "d":
        achpos = ler("Qual peso deseja encontrar")
        for (let index = 0; index < lista.length; index++) {
            const pessoa = lista[index];
            if (pessoa.peso === achpos) {
                console.log(`A pessoa encontrada na posicão ${index+1}`)
                console.log(pessoa)
                elementoEcn = true
            }
        }
        break;
    default:
        console.log("Não contrei esse valor")
        break;
}

if(!elementoEcn){
    console.log("Nenhuma pessoa encontrada na busca");
}*/

//EX 01 LISTA 02

console.log("Remover alguem da lista por uma informação: \na) Pelo nome\nb) Pelo sexo\nc) Pela idade \nd) Pelo peso")
let esc = String(ler("Qual sua escolha?"))
let achpos
let elementoEcn = false


switch (esc) {
    case "a":
        achpos = ler("Qual nome deseja remover: ")
        for (let index = 0; index < lista.length; index++) {
            const pessoa = lista[index]
            if(pessoa.nome === achpos){
                let idx = index
                removeElement(lista,idx+1)
                console.log(lista)
                elementoEcn = true
            }  
        }
        break;
    case "b":
        achpos = ler("Qual sexo deseja remover: ")
        achpos = achpos.toUpperCase();
        for (let index = 0; index < lista.length; index++) {
            const pessoa = lista[index];
            if (pessoa.sexo === achpos ) {
                let idx = index
                removeElement(lista,idx+1)
                console.log(lista)
                elementoEcn = true
            }
        }
        break;
    case "c":
        achpos = ler("Qual idade deseja remover: ")
        for (let index = 0; index < lista.length; index++) {
            const pessoa = lista[index];
            if (pessoa.idade === achpos) {
                let idx = index
                removeElement(lista,idx+1)
                console.log(lista)
                elementoEcn = true
            }
        }
        break;
    case "d":
        achpos = ler("Qual peso deseja remover: ")
        for (let index = 0; index < lista.length; index++) {
            const pessoa = lista[index];
            if (pessoa.peso === achpos) {
                let idx = index
                removeElement(lista,idx+1)
                console.log(lista)
                elementoEcn = true
            }
        }
        break;
    default:
        console.log("Não contrei esse valor")
        break;
}

if(!elementoEcn){
    console.log("Nenhuma pessoa encontrada na busca");
}

//EX 02 LISTA 02

let masc = []
let fem = []
for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    if (pessoa.sexo === "M") {
        masc.push(pessoa.nome)
    }else if(pessoa.sexo === "F"){
        fem.push(pessoa.nome)
    }
}
console.log("pessoas do sexo masculino: ")
console.log(masc)
console.log("pessoas do sexo feminino: ")
console.log(fem)

//EX 03 LISTA 02

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

//EX 04 LISTA 02

let soma = 0

for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    soma += pessoa.idade
}

console.log(`A soma das idades é: ${soma}`)

//EX 05 LISTA 02

let soma2 = 0
let cont = 0

for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    cont += 1
    soma2 += pessoa.idade
}
    
let media = (soma2/cont)

media = media.toFixed(2)

console.log(`A media de idade é de: ${media}`)

//EX 06 LISTA 02

let maior2 = 0
let nomeMai
let menor2 = 0
let nomeMen
for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    if(pessoa.idade > maior2){
        maior2 = pessoa.idade
    }
    for (let index = 0; index < lista.length; index++) {
        const pessoa = lista[index];
        if(pessoa.idade === maior2){
            nomeMai = pessoa.nome
        }
    }
    menor2 = maior2
   for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    if(pessoa.idade<menor2){
        menor2 = pessoa.idade
        nomeMen = pessoa.nome
    }
    for (let index = 0; index < lista.length; index++) {
        const pessoa = lista[index];
        if(pessoa.idade === menor2){
            nomeMen = pessoa.nome
        }
    }
   }
}

console.log(`A pessoa mais velha é: ${nomeMai} que tem ${maior2} anos`)
console.log(`A pessoa mais nova é: ${nomeMen} que tem ${menor2} anos`)

//EX 07 LISTA 02

let soma3 = 0

for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    soma3 += pessoa.peso
}

console.log(`A soma dos pesos é: ${soma3}`)

//EX 08 LISTA 02

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

//EX 09 LISTA 02

let soma4 = 0
let cont2 = 0

for (let index = 0; index < lista.length; index++) {
    const pessoa = lista[index];
    cont2 += 1
    soma4 += pessoa.peso
}
    
let media2 = (soma4/cont2)

media2 = media2.toFixed(2)

console.log(`A media de peso é de: ${media2}`)
