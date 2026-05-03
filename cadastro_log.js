var listaUsuarios = [];
var listaSenhas = [];

function irCadastro() {
    document.getElementById("home").style.display = "none";
    document.getElementById("tela_cadastro").style.display = "block";
}

function irParaLogin() {
    document.getElementById("home").style.display = "none";
    document.getElementById("tela_cadastro").style.display = "none";
    document.getElementById("tela_login").style.display = "block";
}

function Registrar() {
    var user = ipt_User.value.toLowerCase();
    var senha = ipt_Senha_User.value;
    var msg_erro = "";

    if (user == "" || senha == "") {
        msg_erro = "<p id='msg_alerta'>Preencha todos os campos!</p><br>";
    } else if (!user.includes('@')) {
        msg_erro = "<p id='msg_alerta'>Usuário deve conter @!</p><br>";
    } else if (senha.length < 8) {
        msg_erro = " <p id='msg_alerta'>Senha deve ter 8+ caracteres!</p><br>";
    }

    if (msg_erro != "") {
        div_msg.innerHTML = msg_erro;
    } else {
        listaUsuarios.push(user);
        listaSenhas.push(senha);
        console.log(listaUsuarios);

        div_msg.innerHTML = " <p id='msg_alerta'>Cadastro realizado! Agora você pode fazer login.</p>";
        ipt_User.value = "";
        ipt_Senha_User.value = "";
    }
}



function irLogin() {
    document.getElementById("tela_cadastro").style.display = "none";
    document.getElementById("tela_login").style.display = "block";
}


let tentativas = 3;

function Validar() {
    var userLogin = ipt_Login_User.value.toLowerCase();
    var senhaLogin = ipt_Login_Senha.value;
    var msg_erro = "";

    var indice = listaUsuarios.indexOf(userLogin);

    if (userLogin == "" || senhaLogin == "") {
        alert(`Preencha todos os campos!`);

    } else if (indice == -1) {
        alert(`Usuário não encontrado`);

    } else if (listaSenhas[indice] != senhaLogin) {

        let i = 0;

        while (i < 1) {
            tentativas--;
            i++;
        }

        if (tentativas > 0) {
            msg_erro = `<p id='msg_alerta'>Senha incorreta. Restam ${tentativas} tentativas</p>`;
        } else {
            msg_erro = `<p id='msg_alerta'>Acesso bloqueado!</p>`;
        }

    } else {
        tentativas = 3;
        div_msg.innerHTML = `<p id='msg_alerta'>Login realizado! Bem-vindo(a) a AgroSense</p> `;
        window.location.href = ("");

    }

    div_msg.innerHTML = msg_erro;
}