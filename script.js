function Avaliar(){ 
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

function logar(){
    document.getElementById("popuplogin").style.display = "block";
    document.getElementById("fecharpopuplogin").onclick = function() {
        document.getElementById("popuplogin").style.display = "none";
    };
}

function login(event){
    event.preventDefault();

    var login = document.getElementById("txtemail").value;
    var senha = document.getElementById("txtsenha").value;
    if (login == "" || senha == ""){
        alert("Preencha todos os campos.");
        return;
    } else

    if(login == "meu@email.com" && senha == "minhasenha"){
        alert("login realizado com sucesso");
    }
    else{
        alert("usuário ou senha incorretos");
    }    
    document.getElementById("popuplogin").style.display = "none";
        this.reset();
}
document.getElementById("loginForm").addEventListener("submit", login);

