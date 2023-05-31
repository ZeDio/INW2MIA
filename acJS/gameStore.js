class produtoJogos{
    constructor(id, descricao, ativo, estoque, preco, lancamento, desenvolvedor){
        this.id = id;
        this.descricao = descricao;
        this.ativo = ativo;
        this.estoque = estoque;
        this.preco = preco;
        this.lancamento = lancamento;
        this.desenvolvedor = desenvolvedor;
    }

    ativar(){
        this.ativa = true
    }

    incluirEstoque(qtd){
        if(this.ativa){
            if(qtd > 10){
                console.log("Não é possivel realizar a operação")
            }
            else{
                this.estoque = this.estoque+qtd
            }
        }
        else{
            console.log("O produto está inativo...")
        }
    }

    retirarEstoque(qtd){
        if(this.ativa){
            if(qtd > this.estoque){
                console.log("Não é possivel realizar a operação")
            }
            else{
                this.estoque = this.estoque-qtd
            }
        }
        else{
            console.log("O produto está inativo...")
        }
    }
}

//Progama Principal
const leia = require('prompt-sync')()
let op = ""

console.log("Games Store")
console.log("Loja mais confiante de comprar jogos :D \n")
escolha = leia("Deseja continuar para compras... S/N: ")

if(escolha =="S"){
    console.log("\n \n Games Store")
    console.log("Loja mais confiante de comprar jogos :D \n")

    console.log("Cadastre o produto primeiramente..")
    let idPDT = leia("Digite o ID do produto: ")
    let descricaoPDT = leia("Digite a descrição do produto: ")
    let precoPDT = leia("Digite o preço do produto por unidade: ")
    let lancamentoPDT = leia("Digite quando foi lançado o produto: ")
    let desenvolvedorPDT = leia("Digite quem é o desenvolvedor do produto: ")

    let PDT = new produtoJogos(idPDT, descricaoPDT, false, 10, precoPDT, lancamentoPDT, desenvolvedorPDT)
    console.log("\n Produto cadastrado !!!")
    PDT.ativar()

    do{
        for(let x=1; x<=5; x++){
            console.log("\n \n Venda "+x+"\n")
            console.log("Nome do produto: "+PDT.descricao)
            console.log("Estoque do produto: "+PDT.estoque)
            qtd = parseInt(leia("\n \n Digite quantos produtos deseja comprar: "))

            console.log("Valor a pagar "+(qtd*PDT.preco))
            if(PDT.estoque <= 0){
                console.log("Não é possivel realizar a operação")
            }
            else{
                PDT.retirarEstoque(qtd)
            }
        }
        
        continuar = leia(console.log(" \n \n Deseja continuar com as operações na conta?? \n (Se sim digite S, se não digite N)"))
    }while(continuar == "S")
}
else{
    console.log("Até depois!!")
}