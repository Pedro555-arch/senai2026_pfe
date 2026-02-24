class Bicicleta {
    //encapsulamento
    #cor;
    #modelo;
    #marca;
    #velocidadeMaxima;

    //métodos getters e setters
    setcor(valor){
        this.#cor = valor;
    }
    getCor(){
        return this.#cor;
    }
    setModelo(valor){
        this.#modelo = valor;
    }
    getModelo(){
        return this.#modelo;
    }
    setMarca(valor){
        this.#marca = valor;
    }
    getMarca(){
        return this.#marca;
    }
    setVelocidadeMax(valor){
        if (valor > 35) {
            console.log('Velocidade não permitida');
        }else{
            this.#velocidadeMaxima = valor;
        }
    }
    getVelocidadeMax(){
        return this.#velocidadeMaxima;
    }

}
const bicicreta = new Bicicleta();
bicicreta.setVelocidadeMax(36);
console.log(bicicreta.getVelocidadeMax());