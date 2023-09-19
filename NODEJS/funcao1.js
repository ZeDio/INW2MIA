//criação da função normal
function escreveNoConsole(){
    console.log("\nPrimeiro exemplo - função normal\n")
}

//chama a função para executar
escreveNoConsole()

//variação de função normla ou declarada
const escreveNoConsoleVariacao = function(){
    console.log("Segundo exemplo - variacao do modo normla\n")
}

//chama a função para executar
escreveNoConsoleVariacao()

//arrow function função seta ou flecha
//toda arrow function usar os caracters = junto com >
const escreveComArrow = ()=>{
    console.log("Terceiro exemplo - Arrow function\n") //o return é opcional
}

//chama a função para executar
escreveComArrow()

//arrow function => com parametro
const escreveComArrowParametro = (texto) =>{
    console.log(texto)
    //se tiver apenas um parâmetro pode ser omitido as chaves{}
}

//chama a função para executar
escreveComArrowParametro('Quarto exemplo - usando paremetro\n')
escreveComArrow()
escreveComArrowParametro('Outro texto')

//funcao arrow que soma dois valores
const somarDois = (num1,num2)=>{
    console.log('A soma é '+(num1+num2)+'\n')
}

//chama a função para executar
console.log('\n----------------------\n')
somarDois(10,10)

//variacao arrow function sem parentes e sem chave
const varianteArrow = texto => console.log(texto)
