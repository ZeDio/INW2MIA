const somaNovo = (num1,num2) =>{
    return (num1 + num2); //retorna os valores..
}

console.log("\nA soma dos valores.. "+somaNovo(15,20))
console.log("A soma dos valores.. ",somaNovo(15,20))

// retornar --> codigo.js

const parImparNovo = (numero) =>{
    if(numero < 0){
        return 'Negativo'
    }
    if(numero == 0){
        return 'Neutro'
    }
    if((numero%2)==0){
        return 'Impar'
    }
    else{
        return 'Par'
    }
}

console.log("Seu numero é", parImparNovo(10)+"\n")