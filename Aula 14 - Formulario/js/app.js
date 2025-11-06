const txtEmail = document.getElementById('id-txt-login');
const txtSenha=document.getElementById('id-txt-senha');
txtSenha.placeholder="digite senha"
txtEmail.placeholder="email@gmail.com";
const API = "http//localhost:3000/cadastro";
document.getElementById("id-frm-login").addEventListener("submit", (e)=>{
    e.preventDefault();
});

async function enviar() {
    const novoEmail={
        email:document.getElementById("id-txt-login").value
    }
    const test = await fetch(API, {
        body:JSON.stringify(novoEmail)
    })
}