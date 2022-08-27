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

findByProperty(lista)

// console.log("Acessar a lista por uma informação: \na) Pelo nome\nb) Pelo sexo\nc) Pela idade \nd) Pelo peso")
// let esc = String(ler("Qual sua escolha?"))
// let achpos
// let elementoEcn = false

// switch (esc) {
//     case "a":
//         achpos = ler("Qual nome deseja encontrar")
//         for (let index = 0; index < lista.length; index++) {
//             const pessoa = lista[index]
//             if(pessoa.nome === achpos){
//                 console.log(`A pessoa encontrada na posicão ${index+1}`)
//                 console.log(pessoa)
//                 elementoEcn = true
//             }  
//         }
//         break;
//     case "b":
//         achpos = ler("Qual sexo deseja encontrar")
//         achpos = achpos.toUpperCase();
//         for (let index = 0; index < lista.length; index++) {
//             const pessoa = lista[index];
//             if (pessoa.sexo === achpos ) {
//                 console.log(`A pessoa encontrada na posicão ${index+1}`)
//                 console.log(pessoa)
//                 elementoEcn = true
//             }
//         }
//         break;
//     case "c":
//         achpos = ler("Qual idade deseja encontrar")
//         for (let index = 0; index < lista.length; index++) {
//             const pessoa = lista[index];
//             if (pessoa.idade === achpos) {
//                 console.log(`A pessoa encontrada na posicão ${index+1}`)
//                 console.log(pessoa)
//                 elementoEcn = true
//             }
//         }
//         break;
//     case "d":
//         achpos = ler("Qual peso deseja encontrar")
//         for (let index = 0; index < lista.length; index++) {
//             const pessoa = lista[index];
//             if (pessoa.peso === achpos) {
//                 console.log(`A pessoa encontrada na posicão ${index+1}`)
//                 console.log(pessoa)
//                 elementoEcn = true
//             }
//         }
//         break;
//     default:
//         console.log("Não contrei esse valor")
//         break;
// }

// if(!elementoEcn){
//     console.log("Nenhuma pessoa encontrada na busca");
// }