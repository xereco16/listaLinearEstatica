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