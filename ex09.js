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

