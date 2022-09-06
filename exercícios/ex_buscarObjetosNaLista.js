const {
    ler
} = require('./;utils/utils');

console.log("Primeiramente vamos guardar alguns objetos na lista");

let listaPessoas = [];
for (let index = 0; index < 3; index++) {
    let pessoa = {};
    pessoa.nome = ler("Digite o nome da pessoa: ");
    pessoa.idade = Number(ler("Digite a idade da pessoa: "));
    pessoa.sexo = ler("Digite o sexo da pessoa: ");
    pessoa.peso = Number(ler("Digite o peso da pessoa: "));
    listaPessoas[index] = pessoa;
}

console.log("Agora vamos buscar os objetos na lista");
console.log("Digite a opção pela qual deseja buscar os objetos");
console.log("1 - Buscar por nome");
console.log("2 - Buscar por idade");
console.log("3 - Buscar por sexo");
console.log("4 - Buscar por peso");

let opcao = Number(ler("Digite a opção: "));
let busca = "";
let elementEncontrado = false;
switch (opcao) {
    case 1:
        busca = ler("Digite o nome da pessoa: ");
        for (let index = 0; index < listaPessoas.length; index++) {
            const pessoa = listaPessoas[index];
            if (pessoa.nome === busca) {
                console.log("Pessoa encontrada na posição " + (index + 1));
                console.log(pessoa);
                elementEncontrado = true;
            }
        }
        break;
    case 2:
        busca = Number(ler("Digite a idade da pessoa: "));
        for (let index = 0; index < listaPessoas.length; index++) {
            const pessoa = listaPessoas[index];
            if (pessoa.idade === busca) {
                console.log("Pessoa encontrada na posição " + (index + 1));
                console.log(pessoa);
                elementEncontrado = true;
            }
        }
        break;
    case 3:
        busca = ler("Digite o sexo da pessoa: ");
        for (let index = 0; index < listaPessoas.length; index++) {
            const pessoa = listaPessoas[index];
            if (pessoa.sexo === busca) {
                console.log("Pessoa encontrada na posição " + (index + 1));
                console.log(pessoa);
                elementEncontrado = true;
            }
        }
        break;
    case 4:
        busca = Number(ler("Digite o peso da pessoa: "));
        for (let index = 0; index < listaPessoas.length; index++) {
            const pessoa = listaPessoas[index];
            if (pessoa.peso === busca) {
                console.log("Pessoa encontrada na posição " + (index + 1));
                console.log(pessoa);
                elementEncontrado = true;
            }
        }
        break;
    default:
        console.log("Opção inválida");
        break;
}
if (!elementEncontrado) {
    console.log("Nenhuma pessoa encontrada para a busca");
}