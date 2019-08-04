var firebaseConfig = {
    apiKey: "AIzaSyCo2zx_DeonQTpOlNbC8fbEWNstjY3-9u8",
    authDomain: "rappi-7f615.firebaseapp.com",
    databaseURL: "https://rappi-7f615.firebaseio.com",
    projectId: "rappi-7f615",
    storageBucket: "",
    messagingSenderId: "771861791798",
    appId: "1:771861791798:web:7e815ecbe746501a"
  };

  firebase.initializeApp(firebaseConfig);

  class firebaseConnection{

    login(email,senha){
        firebase.auth().signInWithEmailAndPassword(email,senha)
        .catch((error)=>{
            if(error.code=='auth/wrong-password'){
                alert('Senha errada')
            }else{
                alert('Tente novamente mais tarde')
            }
        })
    }
    sair(){
        firebase.auth().signOut();
    }
    cadastro(email,senha){
        firebase.auth().createUserWithEmailAndPassword(email,senha)
        .catch((error)=>{
            alert(error.code)
        });
    }
    olheiro(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                alert('Login efetuado com sucesso');
            }
        });
    }
    trocarImagem(){

    }
    inserirDados(nome, idade, endereco, telefone, email){
        let usuarios = firebase.database().ref();
        let chave = usuarios.push().key;
        usuarios.child(chave).set({
            nome:nome,
            idade:idade,
            telefone:telefone,
            endereco:endereco,
            email:email
        }); 
    }
    

}


export default new firebaseConnection();