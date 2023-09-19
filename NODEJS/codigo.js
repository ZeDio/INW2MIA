//desafio :D
//crie uma arrow function chamada parImpar que receber um parametro numerico e informar na saida este numero e mais um texto conforme a situação.
//[numero], este valor é negativo
//[numero], este valor é neutro 0
//[numero], este valor é par
//[numero], este valor é impar

const parImpar = (numero) =>{
    if(numero < 0){
        console.log(numero+", este valor é negativo")
    }
    if(numero == 0){
        console.log(numero+", este valor é neutro 0")
    }
    if((numero%2)==0){
        console.log(numero+", este valor é par")
    }
    else{
        console.log(numero+", este valor é impar")
    }
}

parImpar(2)