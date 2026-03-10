class Cidade {
    //atributos os características
    qtdeHabitantes = 208415;
    estado = 'São Paulo'
    nome = 'Araçatuba'
    mostrar(){
        console.log('A cidade de ' + this.nome + ' fica no estado de ' + this.estado + ' e possui ' + this.qtdeHabitantes + ' habitantes');
    }
}
const informacao = new Cidade();
//city.nome = ' Mirandopólis' (troca o nome da cidade)
informacao.mostrar();