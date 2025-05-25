let usuariologado = null;

function Avaliar(){ 
    if (!usuariologado){
        alert("Faça login para deixar uma avaliação.");
        return;
    }

    document.getElementById("popup").style.display = "block";
    document.getElementById("fecharpopup").onclick = function() {
        document.getElementById("popup").style.display = "none";
    };
    
    document.getElementById("formulario").onsubmit = function(e) {
        e.preventDefault();

        const avaliacao = document.getElementById("avaliacao").value;
        const comentario = document.getElementById("comentario").value;

        console.log("Avaliação enviada:", avaliacao, comentario);
        alert("Obrigado pela avaliação!");
        document.getElementById("popup").style.display = "none";
        this.reset();
      };
};
/*===================================================================================*/
function logar(){
    document.getElementById("popuplogin").style.display = "block";
    document.getElementById("fecharpopuplogin").onclick = function() {
        document.getElementById("popuplogin").style.display = "none";
    };
}

const usuarios = [
    {email: "usuario1@email.com", senha: "123456"},
    {email: "usuario2@email.com", senha: "654321"},
    {email: "usuario3@email.com", senha: "541654"},
    {email: "meu@email.com", senha: "minhasenha"},
    {email: "teste@email.com", senha: "senhateste"}
]

function login(event){
    event.preventDefault();

    var login = document.getElementById("txtemail").value.trim();
    var senha = document.getElementById("txtsenha").value.trim();

    if (login == "" || senha == ""){
        alert("Preencha todos os campos.");
        return;
    }

    const validarlogin = usuarios.find(user => user.email == login && user.senha == senha);

    if(validarlogin){
        usuariologado = validarlogin;
        alert("login realizado com sucesso");
        document.getElementById("popuplogin").style.display = "none";
        document.getElementById("loginForm").reset();
    }
    else {
        alert("usuário ou senha incorretos");
    }    
}
document.getElementById("loginForm").addEventListener("submit", login);
/*===================================================================================*/

function Conta(){
    document.getElementById("popuplogin").style.display = "none";

    document.getElementById("popupconta").style.display = "block";
    document.getElementById("fecharpopupconta").onclick = function() {
        document.getElementById("popupconta").style.display = "none";
    };
}
/*===============================RETRABALHAR====================================================*/
function enviarConta(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Simulação de envio (poderia ser um fetch para uma API real)
    if (email && senha) {
        console.log("Email:", email);
        console.log("Senha:", senha);

        alert("Cadastro realizado com sucesso!");

        // Limpar campos
        document.getElementById("contaform").reset();

        // Fechar o popup
        document.getElementById("popupconta").style.display = "none";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

