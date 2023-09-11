// mongodb://localhost:27017/  ou  mongodb://127.0.0.1:27017/
// npm init -y
// npm i mongoose

const mongoose  = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
 {useNewUrlParser : true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS : 20000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error : '))

db.once('open', function(){
    console.log("Estamos conectados ao mongoDB");
})

const alunoSchema = new mongoose.Schema({
    matricula : String,
    turma : String,
    nome : String,
    idade : Number
});

const Aluno = mongoose.model('Aluno',alunoSchema)

const Gus = new Aluno({
    matricula : 'rm14866',
    turma : '2 Mia',
    nome:'Gustavo',
    idade: 16,  
});

const Mat = new Aluno({
    matricula : 'rm14541',
    turma : '2 Mia',
    nome:'Maetus',
    idade: 18,  
});

const Ant = new Aluno({
    matricula : 'rm15676',
    turma : '2 Mia',
    nome:'Antonio',
    idade: 16,  
});

const JD = new Aluno({
    matricula : 'rm12195',
    turma : '2 Mia',
    nome:'José Diogo',
    idade: 16,  
});

Gus.save()
Mat.save()
Ant.save()
JD.save()

Aluno.findOne({nome : 'Antonio', function (err, Aluno){
    console.log(Aluno)    
}})

//arrumar