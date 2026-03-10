class Pessoa {
    //encapsulamento
    nome;//atributo público
    #cpf;//atributo privado
    #salario;//atributo privado

    //métodos getters e setters
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }
    setSalario(valor){
        this.#salario = valor;
    }
    getCpf(){
        return this.#salario;
    }

}
const silva = new Pessoa();
silva.nome = 'Pedro';
console.log(silva.setCpf(333333332));
console.log(silva.getCpf)
console.log(silva)