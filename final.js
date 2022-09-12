const {
    ler,
    escrever,
    findLastIndex,
    insertNewElement,
    removeElement,
    findElement,
    insertElemntInEnd,
    createList,
    findByProperty,
    menu,
    endWhile  
} = require('./utils/utils');

let lista = [0,0,0]

while(endWhile()){
    switch (menu(lista)) {
        case 0:
            console.log(lista)
            break;
        case 1:
            insertNewElement(lista, 1)
            console.log(lista)
            break;
        case 2:
            insertNewElement(lista, lista.length)
            console.log(lista)
            break;
        case 4 :
            let zero = 0
            for (let index = 0; index < lista.length; index++) {
                const elemento = lista[index]
                if(elemento ==0){
                    zero += 1  
                }else if(elemento !== 0){
                    zero -= 1
                }
            }
            if (zero === lista.length) {
                console.log("Não é possivel remover um elemento de uma lista zerada!")
            }else{
                console.log("ELEMENTO REMOVIDO!!")
                console.log(removeElement(lista, 1))
            }
            break;
        case 5:
            let zero1 = 0
            for (let index = 0; index < lista.length; index++) {
                const elemento = lista[index]
                if(elemento ==0){
                    zero1 += 1  
                }else if(elemento !== 0){
                    zero1 -= 1
                }
            }
            if (zero1 === lista.length) {
                console.log("Não é possivel remover um elemento de uma lista zerada!")
            }else{
                console.log("ELEMENTO REMOVIDO!!")
                console.log(removeElement(lista, 3))
            }
            break;
        default:
            break;
    }
}