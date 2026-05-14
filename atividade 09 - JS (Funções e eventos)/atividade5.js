function operacao() { /*cria operacao sem parametro pois realizei as ops atraves do getelementbyid*/
  let calculo = document.getElementById("valor").value
    * document.getElementById("quantidade").value;
  /*variavel calculo pega os dois valores pelos id definidos e puxados, e pega seu .value, ou seja, o que o usuario vai digitar, e multiplica-os*/

  document.getElementById("res").innerHTML = calculo; //pega o id do ultimo p, o qual o valor deve ser inserido, e atraves do innerhtml, que insere um valor no html, atribui a variavel calculo que foi feita acima multiplicando os values
}
