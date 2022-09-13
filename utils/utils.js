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
 * Remover um valor de uma lista
 * @param {Array} lista Array que deseja remover um valor
 * @param {Number} indice Posição que deseja remover o valor
 * @returns Retorna a lista com o valor removido
 */
 function removeElement(lista, indice){
    let ultPos = findLastIndex(lista)

    let indiceRemocao = indice - 1


    if(lista.length == indice){
        lista[indice-1]=0
    }else{
        for (let index = indiceRemocao; index < ultPos; index++) {
            lista[index] = lista[index+1]
        }
    }
    lista[ultPos] = 0
    return lista
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
        sx = ler("Digite o sexo da nova pessoa: ")
        pessoa.sexo = sx.toUpperCase()
        pessoa.idade = Number(ler("Digite a idade da nova pessoa: "))
        pessoa.peso = Number(ler("Digite o peso da nova pessoa: "))
        console.log(`Nova pessoa adiconada!`)
        list[index] = pessoa
    }
    
    let ultPos

    let indexNewElement = pos - 1
    if (lista[indexNewElement] == 0) {
        lista[indexNewElement] = pessoa
        
    }else{
        for (let index = indexNewElement; index < lista.length; index++) {
            if (lista[index]  !== 0) {
                ultPos = index
            }else{
                break;
            }
        }
        for (let index = ultPos; index >= indexNewElement; index--) {
            lista[index+1] = lista[index]
        }
        lista[indexNewElement] = pessoa
    }
    return lista
}



/**
 * Mostra o conteudo do indice desejado
 * @param {Array} lista array para achar o conteudo
 * @param {Number} pos posição que deseja mostrar o conteudo
 * @returns Retorna o conteudo do índice
 */
function findElement (lista, pos){
    let ach 
    if(pos > lista.length){   
        return console.log("Posição inválida")
    }else{

        for (let index = 0; index < lista.length; index++) {
            if (pos == index + 1) {
                if(lista[index] == 0){               
                    console.log("Não existem elementos nessa posição")
                }else{
                    ach = JSON.stringify(lista[index])
                    console.log(`A pessoa selacionada tem os seguintes atributos: ${ach}`)
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
            achpos = ler("Qual nome deseja encontrar: ")
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
            achpos = ler("Qual sexo deseja encontrar: ")
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
            achpos = ler("Qual idade deseja encontrar: ")
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
            achpos = ler("Qual peso deseja encontrar: ")
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

function menu(lista){
    console.log("\nOque deseja fazer com a lista?\n0. Mostrar a lista\n1. Inserção de um elemento no início da lista.\n2. Inserção de um elemento ao final da lista.\n3. Inserção de um elemento em uma posição entre outros elementos já existentes.\n4. Remoção de um elemento no início da lista.\n5. Remoção de um elemento ao final da lista.\n6. Remoção de um elemento no meio da lista.\n7. Acessar um elemento através da sua posição.\n8. Acessar um elemento através de uma propriedade.\n9. Remova todos os elementos com base na propriedade fornecida pelo usuárioa.\n10. Mostre quantas pessoas são de cada sexo e seus nomes.\n11. Mostre quantas pessoas possuem 18 anos ou mais e quantas possuem menos.\n12. Mostre qual a soma total das idades.\n13. Mostre qual a média de idade.\n14. Mostre qual a pessoa mais jovem e qual a pessoa mais idosa.\n15. Mostre qual a soma total dos pesos.\n16. Mostre qual a pessoa mais leve e a pessoa mais pesada.\n17. Mostre qual a média de peso.")

    let escolha = Number(ler("Qual opção deseja? "))
    if(escolha == 3){
        let ult = findLastIndex(lista)
        if (ult == lista.length-1){
            console.log("lista cheia nao pode adicionar mais")
        }else{
            let nvInd = Number(ler(`Qual a posiçao que você deseja inserir o novo índice?`))
            let resultado = insertNewElement(lista, nvInd)
            console.log(lista)
        }
    }else if(escolha == 6){
        let zero2 = 0
        for (let index = 0; index < lista.length; index++) {
            const elemento = lista[index]
            if(elemento ==0){
                zero2 += 1  
            }else if(elemento !== 0){
                zero2 -= 1
            }
        }
        if (zero2 === lista.length) {
            return console.log("Não é possivel remover um elemento de uma lista zerada!")
        }else{
            let rmv = Number(ler(`Qual a posiçao que você deseja inserir o novo índice (entre 2 e ${lista.length-1})?`))
            console.log(rmv)
            return console.log(removeElement(lista, rmv))

        }
    }else if(escolha == 7){
        let posição = Number(ler(`Digite a posição que deseja mostrar o valor: `))
        findElement(lista, posição)
    }else if (escolha == 8){
        findByProperty(lista)
    }else if(escolha == 10){
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

    }else{
        return escolha
    }
}

function endWhile(){
    let cnt = String(ler(`Deseja continuar a modificar a lista (Y / N)? `))
    cnt = cnt.toUpperCase()
    let parada = true

    if(cnt != "Y" && cnt != "N"){
        while (parada) {
            cnt = String(ler(`Digite os valores: (Y / N)? `))
            cnt = cnt.toUpperCase()
            if(cnt == "Y"){
                parada = false
                return true
            }else if (cnt == "N"){
                parada = false
            }
        }
    }else if(cnt == "Y"){
        return true
    }else if (cnt == "N"){   
        return false
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
    findByProperty,
    menu,
    endWhile
}