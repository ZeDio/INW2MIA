class Conta{
    constructor(numero, cpf, saldo, ativa){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativa = ativa;
    }
    ativarConta(){
        if(this.ativa == true) {
            console.log("A conta já está ativa")
            return
        }
            this.ativa = true
            console.log("A conta está ativa agora..")
    }
    debito(){

    }
    credito(){

    }
}

//Progama Final