const prompt = require('prompt-sync');
const ler = prompt();
const escrever = (valor) => {
    console.log(valor);
}


/**
 * Função para acahar o índice do ultimo elemoento do vetor
 * @param {Array} lista  Array que deseja achar o ultimo índice
 * @returns  Retorna o índice do ultimo elemento 
 */
function findLastIndex (lista){
    let lastElementIndex = 0

    for (let index = 0; index < lista.length; index++) {
        if(lista[index] !== 0 ){
            lastElementIndex = index
        }else{
            break
        }
    }
    return lastElementIndex
}

/**
 * Adiciona um valor no meio da lista
 * @param {Array} lista Array que deseja adicionar o valor
 * @param {*} elm Número ou palavra que deseja adicionar
 * @param {Number} pos Índice da posição desejada
 * @returns Retorna a lista com o valor adicionado
 */
function insertNewElement (lista, elm, pos){
    
    let ultPos = Number(findLastIndex(lista))

    let indexNewElement = pos - 1

    for (let index = ultPos; index >= indexNewElement; index--) {
        lista[index + 1] = lista[index]
    }
    lista[indexNewElement] = elm
    return lista
}


/**
 * Remover um valor de uma lista
 * @param {Array} lista Array que deseja remover um valor
 * @param {Number} indice Posição que deseja remover o valor
 * @returns Retorna a lista com o valor removido
 */
function removeElement(lista, indice){
    let ultPos = findLastIndex(lista)

    let indiceRemocao = indice - 1

    for (let index = indiceRemocao; index < ultPos; index++) {
        lista[index] = lista[index + 1]
    }
    lista[ultPos] = 0
    return lista
}


/**
 * Mostra o conteudo do indice desejado
 * @param {Array} lista array para achar o conteudo
 * @param {Number} pos posição que deseja mostrar o conteudo
 * @returns Retorna o conteudo do índice
 */
function findElement (lista, pos){
    if(pos > lista.length){
        return console.log("Posição inválida")
    }else{

        for (let index = 0; index < lista.length; index++) {
            if (pos == index + 1) {
                if(lista[index] == 0){
                    return console.log("Não existem elementos nessa posição")
                }else{
                    return lista[index]
                }   
            }
        }
    } 
}


function insertElemntInEnd(lista,elm){

    let final = lista.length

    insertNewElement(lista, elm, final+1)

    return lista

}


module.exports = {
    ler,
    escrever,
    findLastIndex,
    insertNewElement,
    removeElement,
    findElement,
    insertElemntInEnd
}