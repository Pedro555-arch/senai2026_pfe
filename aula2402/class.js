class Veiculo {
    //atributos ou caracteristicas
    modelo = 'SUV';
    marca = 'Honda - HRV';
    ano = 2025;

    //métodos ou ações
    dirigir(){
        console.log('Começou a se mover');
    }
    break(){
        console.log('Parei a bagaça');
    }
}

//instanciar ou criar objeto
const carro = new Veiculo();
carro.dirigir();
carro.break();
//console.log(carro); (Primeira versão do bagulho com o console log indicando as classes)