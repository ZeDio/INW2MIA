function loginEmail(){
    var email = document.getElementById('emial').value;
    var password = document.getElementById('password').value;   

    firebase.auth().singInWithEmailAndPassword(email,password).then(()=>{
        alert('Usuário logado');
    }).catch(err=>{
        console.log('error',error)
    })
}