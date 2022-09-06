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
        case 1:
            insertNewElement(lista, 1)
            console.log(lista)
            break;
        case 2:
            insertNewElement(lista, lista.length)
            console.log(lista)
            break;
        case 3 :
        default:
            break;
    }
}