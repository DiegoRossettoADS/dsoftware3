//simular banco de dados
const usuarios = [];
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

function login(event){
    event.preventDefault();

    var login = document.getElementById("txtemail").value.trim();
    var senha = document.getElementById("txtsenha").value.trim();

    if (login === "" || senha === ""){
        alert("Preencha todos os campos.");
        return;
    }

    const validarlogin = usuarios.find(user => user.email === login && user.senha === senha);

    if (validarlogin){
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
document.getElementById("contaform").addEventListener("submit", enviarConta);
/*===================================================================================*/

function Conta(){
    document.getElementById("popuplogin").style.display = "none";

    document.getElementById("popupconta").style.display = "block";
    document.getElementById("fecharpopupconta").onclick = function() {
        document.getElementById("popupconta").style.display = "none";
    };
}
/*===================================================================================*/
function enviarConta(event){
    event.preventDefault();

    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var confirmar = document.getElementById("confirmar").value.trim();

    console.log("email:", email, "| senha:", senha, "| confirmar:", confirmar);

    if (!email || !senha || !confirmar){
        alert("Preencha todos os campos.");
        return;
    }

    if (senha !== confirmar) {
        alert("As senhas não coincidem.");
        return;
    }

    const existe = usuarios.find(user => user.email === email);
    if(existe) {
        alert("Este email já foi cadastrado.");
        return;
    }

    //Simulação de envio

    usuarios.push({email: email, senha: senha});

    console.log("Usuário cadastrado:", {email, senha});
    alert("Cadastro realizado com sucesso!");

    document.getElementById("contaform").reset();
    document.getElementById("popupconta").style.display = "none";
}

