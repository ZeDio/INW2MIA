const leia = require("prompt-sync")()

let CODIGO = ["COD01","COD02", "COD03"]
let SERVICO = ["Entrar em contato com o chatVS..","Fazer consulta com oftalmologista..","Buscar Oculos..                      "]
let VALORUNITARIODOACAO = [5.00,10.00,1.00]
let MOVIMENTO = [0,0,0]
let SERVICOselecionado
let valorTOTAL = 0
let continuar

console.log('Visão Educada \t Bem Vindos!!\n\n')

do{
for(x=0; x<10; x++){
console.log("CODIGOS\t\tServiços\t\t\t\tValor Da Doação")
for(i=0; i<CODIGO.length; i++){
    console.log(CODIGO[i]+"\t\t"+SERVICO[i]+"\t\t\t"+VALORUNITARIODOACAO[i])
}

let comecando = leia("Por favor, insira o codigo do pedido..: ").toUpperCase()
for(i=0; i<CODIGO.length; i++){
    if(comecando === CODIGO[i]){
        SERVICOselecionado = SERVICO[i]
        MOVIMENTO[i] += 1
        valorTOTAL += VALORUNITARIODOACAO[i]
    }else{
        console.log("Serviso não foi encontrado")
    }
}
console.log("\n\nServiço selecionado foi..: "+SERVICOselecionado)

console.log('Carrinho De Compras')
for(i=0; i<CODIGO.length; i++){
    console.log(CODIGO[i]+"\t\t"+SERVICO[i]+"\t\t\t\t"+MOVIMENTO[i])
}
console.log("\t\t")
}
console.log("Total da doação que o senhor(a) vez foi de R$:"+valorTOTAL+".00")

continuar = leia("Deseja continuar??: ").toUpperCase()
}while(continuar ==='S' || continuar ==='SIM')
console.log("Até mais!!")