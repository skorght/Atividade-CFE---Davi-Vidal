//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo({
    top: 0,
    left:0,
    behavior: 'smooth'
    })
}
//Validação de Login
function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;


    if(usuario == "adm" && senha == "123"){
        window.location = "index.html";
        logado = 1;
    }

    if(logado == 0){
        alert("Acesso Negado, Tente Novamente");
    }
}

//Ativar alert no botão cadastrar
function cadastro(){

    alert("Cadastro Realizado com Sucesso")
    window.location = "login.html"
    
}