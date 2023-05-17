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

class Corrente extends Conta{
    constructor(numero, cpf, saldo, ativa, contadorTalao){
        super(numero,cpf,saldo,ativa),
        this.contadorTalao = contadorTalao
    }

    pediTalao(){
        this.contadorTalao = 3;
        if(this.contadorTalao >= 1){
            this.debito(this.saldo - 30)
            this.contadorTalao = this.contadorTalao - 1
            console.log("O saldo da sua conta é de "+ this.saldo +". E você ainda bode retirar mais "+ this.contadorTalao +" talão(ões) da sua conta.. \n")
        }
        else if(this.contadorTalao <= 0 || this.saldo == 0){
            console.log("Você não pode retirar mais talões, por causa que é possivel retirar 3 apenas..")
            console.log("Saldo da conta R$: "+cp.saldo)
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
console.log("2 - Conta Corrente ")
console.log("3 - Sair \n")
tipo = leia("Digite o numero do tipo de conta a ser aberta: ")

if (tipo=="1"){
    do{
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
        continuar = leia(console.log(" \n Deseja continuar com as operações na conta?? n\ (Se sim digite S, se não digite N)"))
    } while(continuar == "S")
}

else if(tipo=="2"){
    do{
        console.log("Conta Corrente")

        let numero = parseInt(leia("Digite o numero da conta: "))
        let cpf = leia("Digite o cpf: ")
        let cc = new Poupanca(numero,cpf,0,false)
        cc.ativar()

        for(let x=1; x<=10; x++){
            console.log("\n \n Movimento "+x+"\n")
            console.log("Saldo da conta R$: "+cc.saldo)
            valor = parseInt(leia("Digite o valor: "))
            op = leia("Digite D - débito ou C - crédito: ").toUpperCase()
            if(op=="C"){
                cc.credito(valor)
            }
            else if(op=="D"){
                cc.debito(valor)
            }
        }
        talao = leia(console.log("Você gostaria de retirar um talão de cheque? \n (Se sim digite S, se não digite N)\n")).toUpperCase()
        if(talao == "S"){
            for(let y = 1; y<=3; x++){
                cc.pediTalao(talao)
            }
        }
        else{
            console.log("Saldo final da conta R$: "+cp.saldo+"\n")
        }
        console.log("\n Saldo final da conta R$: "+cp.saldo)
        continuar = leia(console.log(" \n Deseja continuar com as operações na conta?? n\ (Se sim digite S, se não digite N)"))
    } while(continuar == "S")
}

else if(tipo=="3"){
    console.log("Você escolheu encerrar o atendimento.. Tchau!!")
}