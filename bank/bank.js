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
        super(numero,cpf,saldo,ativa),
        this.diaAniversarioPoupanca = diaAniversarioPoupanca
    }
    correcao(dia){
        if(dia == this.diaAniversarioPoupanca){
            this.credito(this.saldo*0.05)
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

console.log("Flor Do Din Din")
console.log("Banco que rouba mais do que o da arminha e o do nove dedos :D \n")
console.log("1 - Conta Poupança")
console.log("2 - Conta corrente ")
console.log("3 - Sair \n")
tipo = leia("Digite o numero do tipo de conta a ser aberta: ")

if (tipo=="1"){
    console.log("Conta Poupança")

    let numero = parseInt(leia("Digite o numero da conta: "))
    let cpf = leia("Digite o cpf: ")
    let diaAniversarioPoupanca = leia("Digite o dia de criação da conta: ")
    let cp = new Poupanca(numero,cpf,0,false, diaAniversarioPoupanca)
    cp.ativar()

    for(let x=1; x<=10; x++){
        console.log("\n \n Movimento "+x+"\n")
        console.log("Saldo da conta R$: "+cp.saldo)
        valor = parseInt(leia("Digite o valor: "))
        op = leia("Digite D - débito ou C - crédito: ").toUpperCase()
        if(op=="C"){
            cp.credito(valor)
        }
        else if(op=="D"){
            cp.debito(valor)
        }
    }
    console.log("\n \n Saldo final da conta R$: "+cp.saldo)
    let dia = leia("Digite qual é o dia hojé: ")
    cp.correcao(dia)
    console.log("\n Saldo final da conta R$: "+cp.saldo)
}

else if(tipo=="2"){

}

if else(tipo=="3"){
    console.log("Você escolheu encerrar o atendimento.. Tchau!!")
}