function mudarCor (cor, id) { //paramentros que serão puxados no html
  let paragrafo = //variavel para encontrar o paragrafo e salvar ele 
      //pelo seu id
  document.querySelector(id) //que sera selecionado aqui
  /* querySelector é basicamente:
"procure um elemento usando o seletor".
por exemplo, se o seletor recebido for '.p2'.
Então o JavaScript procura no HTML um elemento
que tenha a classe p2.
Quando encontra:
<p class="p2">, aplica a regra da function*/

  paragrafo.style.backgroundColor = cor;  //e sera alterado a cor aqui
  return cor; //retornando a funcao para nn dar problema 
} 

