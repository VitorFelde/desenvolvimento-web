function desconto(preco, taxaDesconto) { //iniciando função
    let precoDesconto = Number(preco * taxaDesconto); //definindo variavel com o valor de preco * desconto, atributos criados na function 
    return precoDesconto; //retornando a funcao
}

let precoInput = document.getElementById("preco").value; 
let taxaInput = document.getElementById("desconto1").value;

let valorFinal = desconto(precoInput, taxaInput);

document.getElementById("resultado").value = valorFinal;
