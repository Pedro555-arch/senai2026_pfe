class Livro{
    //atributo ou caracteristicas
    titulo = 'Vidas Secas'
    autor = 'Graciliano Ramos'
    editora = ' Grupo Editorial Record'
    ano = '1938'
    paginas = '176'
    genero = 'Romance regionalista'
    idioma = 'Português brasileiro'
    valor = 'R$30,00'

    mostrar () {
        console.log(this.autor); //chamada de atributo
    }
}
const impressao = new Livro();
impressao.mostrar();
//console.log(impressao);