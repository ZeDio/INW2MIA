//Classes
class Conta{
    constructor(numero, cpf, saldo, ativa){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativa = ativa;
    }

    ativar(){
        this.ativa = true
    }

    credito(valor){
        if(this.ativa){
            if(valor<0){
                console.log("Impossivel realizar valor negativo ou zerado...")
            }
            else if(valor == 0){
                console.log("Impossivel realizar valor zerado...")
            }
            else{
                this.saldo = this.saldo + valor
            }
        }
        else{
            console.log("Conta está inativa...")
        }
    }

    debito(valor){
        if(this.ativa){
            if(valor<0){
                console.log("Impossivel realizar valor negativo ou zerado...")
            }
            else if(valor == 0){
                console.log("Impossivel realizar valor zerado...")
            }
            else if(this.saldo<valor){  
                console.log("Saldo insuficiente...")
            }
            else{
                this.saldo = this.saldo - valor
            }
        }
        else{
            console.log("Conta está inativa...")
        }
    }

}

class Poupanca extends Conta{
    constructor(numero, cpf, saldo, ativa, diaAniversarioPoupanca){
        super(numero),
        super(cpf),
        super(saldo),
        super(ativa),
        this.diaAniversarioPoupanca = diaAniversarioPoupanca
    }
    correcao(dia){
        if(dia == this.diaAniversarioPoupanca){
            super().credito(super().saldo*0.05)
        }
        else{
            console.log("O dia não é o mesmo da conta...")
        }
    }
}

//Progama Final

const leia = require("prompt-sync")()
let op = ""
let valor = 0
let mensagemInicio = `[Nome Do Banco]`

console.log("1 - Conta Poupança")
console.log("2 - Conta corrente")
tipo = leia("Digite o numero do tipo de conta a ser aberta: ")

if (tipo=="1"){
    console.log("Conta Poupança")

    let numero = parseInt(leia("Digite o numero da conta: "))
    let cpf = leia("Digite o cpf: ")
    
    let c1 = new Poupanca(numero,cpf,0,false, 1)
    c1.ativar()

    for(let x=1; x<=10; x++){
        console.log("Movimento "+x)
        console.log("Saldo da conta R$: "+c1.saldo)
        valor = parseInt(leia("Digite o valor: "))
        op = leia("Digite D - débito ou C - crédito: ").toUpperCase()
        if(op=="C"){
            c1.credito(valor)
        }
        else if(op=="D"){
            c1.debito(valor)
        }
    }

    let dia = leia("Digite qual é o dia hojé: ")
    c1.correcao(dia)
    

    console.log("Saldo final da conta R$: "+c1.saldo)
}