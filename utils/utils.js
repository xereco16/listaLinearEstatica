const prompt = require('prompt-sync');
const ler = prompt();
const escrever = (valor) => {
    console.log(valor);
}

function createList (lista, num){
    for (let index = 0; index < num; index++) {
        let pessoa = {}
    
        pessoa.nome = ler("Digite o nome da pessoa: ")
        sx = ler("Digite o sexo da pessoa: ")
        pessoa.sexo = sx.toUpperCase();
        pessoa.idade = Number(ler("Digite a idade da pessoa: "))
        pessoa.peso = Number(ler("Digite o peso da pessoa: "))
        console.log(`pessoa ${index+1} adiconada!`)
        lista[index] = pessoa
    }
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
 * @param {Number} pos Índice da posição desejada
 * @returns Retorna a lista com o valor adicionado
 */
function insertNewElement (lista, pos){
    let list = []
    let pessoa = {}
    for (let index = 0; index < 1; index++) {
    
        pessoa.nome = ler("Digite o nome da nova pessoa: ")
        pessoa.sexo = ler("Digite o sexo da nova pessoa: ")
        pessoa.idade = Number(ler("Digite a idade da nova pessoa: "))
        pessoa.peso = Number(ler("Digite o peso da nova pessoa: "))
        console.log(`Nova pessoa adiconada!`)
        list[index] = pessoa
    }
    
    let ultPos = Number(findLastIndex(lista))

    let indexNewElement = pos - 1

    for (let index = ultPos; index >= indexNewElement; index--) {
        lista[index + 1] = lista[index]
    }
    lista[indexNewElement] = pessoa
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
        lista[index] = lista[index+1]
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
                    return JSON.stringify(lista[index])
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

function findByProperty(lista) {
console.log("Acessar a lista por uma informação: \na) Pelo nome\nb) Pelo sexo\nc) Pela idade \nd) Pelo peso")
let esc = String(ler("Qual sua escolha?"))
let achpos
let elementoEcn = false

switch (esc) {
    case "a":
        achpos = ler("Qual nome deseja encontrar")
        for (let index = 0; index < lista.length; index++) {
            const pessoa = lista[index]
            if(pessoa.nome === achpos){
                /*return*/ console.log(`A pessoa encontrada na posicão ${index+1}`)
                console.log(pessoa)
                return lista[index]
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
                /*return*/ console.log(`A pessoa encontrada na posicão ${index+1}`)
                console.log(pessoa)
                return lista[index]
                elementoEcn = true
            }
        }
        break;
    case "c":
        achpos = ler("Qual idade deseja encontrar")
        for (let index = 0; index < lista.length; index++) {
            const pessoa = lista[index];
            if (pessoa.idade === achpos) {
                /*return*/ console.log(`A pessoa encontrada na posicão ${index+1}`)
                console.log(pessoa)
                return lista[index]
                elementoEcn = true
            }
        }
        break;
    case "d":
        achpos = ler("Qual peso deseja encontrar")
        for (let index = 0; index < lista.length; index++) {
            const pessoa = lista[index];
            if (pessoa.peso === achpos) {
                /*return*/ console.log(`A pessoa encontrada na posicão ${index+1}`)
                console.log(pessoa)
                return lista[index]
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


}


module.exports = {
    ler,
    escrever,
    findLastIndex,
    insertNewElement,
    removeElement,
    findElement,
    insertElemntInEnd,
    createList,
    findByProperty
}