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
            let ultPos = findLastIndex(lista)
            if (ultPos == lista.length-1){
                console.log("lista cheia nao pode adicionar mais")
            }else{
                insertNewElement(lista, 1)
                console.log(lista)
            }
            break;
        case 2:
            let tam = 0
            for (let index = 0; index < lista.length; index++) {
                if(lista[index] == 0){
                    tam += 1
                }
            }
            let ult = findLastIndex(lista)
            if (ult == lista.length-1){
                console.log("lista cheia nao pode adicionar mais")
            }else if(tam === lista.length){
                insertNewElement(lista,1)
                console.log(lista)
            }else{
                ult += 1
                insertNewElement(lista, ult+1)
                console.log(lista)
            }
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
        case 9:
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
            break;
        case 11:
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
            break;
        case 12:
            let soma = 0

            for (let index = 0; index < lista.length; index++) {
                const pessoa = lista[index];
                soma += pessoa.idade
            }

            console.log(`A soma das idades é: ${soma}`)
            break;
        case 13:
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
            break;
        case 14:
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
            break;
        case 15:
            let soma3 = 0

            for (let index = 0; index < lista.length; index++) {
                const pessoa = lista[index];
                soma3 += pessoa.peso
            }
            
            console.log(`A soma dos pesos é: ${soma3}`)
            break;
        case 16:
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
            break;
        case 17:
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
            break;
        default:
            console.log("nao pensei em nenhuma mensagem pra colocar aqui mas eu nao encontrei esse valor ai")
            break;
    }
}