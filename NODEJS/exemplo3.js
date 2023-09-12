const http = require('http')

const getTurmna = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject)=>{
        http.get(url,res =>{
            let resultado = ''
            res.on('data', dados =>{
                resultado += dados
            })
            
            res.on('end', ()=>{
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })    
    })
}

let nomes = []
getTurmna('A')
.then(alunos =>{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurmna('B')
    .then(alunos =>{
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurmna('C')
        .then(alunos =>{
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)      
        })
    })
})

console.log("--------------------------------------------------")

Promise.all([getTurmna('A'),getTurmna('B'),getTurmna('C')]) 
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))
.catch(e => console.log(e.message))
