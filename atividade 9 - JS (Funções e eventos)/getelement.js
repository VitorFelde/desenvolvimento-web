function tenis () {

let d = new Date().toLocaleString(); //definindo a variavel d com o valor de data e hora
let input = document.getElementById ("datahora"); //criando a variavel input, que vai pegar o valor do html, atraves do id
input.value = d; //definindo o valor para a variavel value, e atribuindo a ela o valor de 'd'
}
tenis (); //quando a pagina é carregada ja vai ter um valor