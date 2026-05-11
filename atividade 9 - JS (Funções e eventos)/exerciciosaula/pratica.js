function imprimeTitulo () { //declarando a função
document.write ("<h1>Titulo top<h1/>");
document.write ("<h1>Titulo top 2<h1/>");

for (let i = 0; i < 5; i++) { //for igual o do c
    document.write ("<h1>Titulo top 3<h1/>");
}
}

let titulotop = imprimeTitulo

imprimeTitulo () //chamando a função, é extremamente importante para que funcione

