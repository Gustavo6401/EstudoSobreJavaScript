function botao() {
    document.getElementById("RISADA-MALIGNA").innerHTML = "MUAHAHAHAHA"

    alert("Seu computador foi infectado por um VÍRUS e ele vai explodir a QUALQUER MOMENTO!");
}

function redirecionar() {
    window.open("https://www.youtube.com/watch?v=yWgWhuN8wc4");
    window.location.href = "https://www.youtube.com/watch?v=yWgWhuN8wc4";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");

    elemento.innerHTML = "Obrigado por Passar o Mouse";
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página Carregada");
}

function funcaoChange(elemento) {
    alert(elemento.value)
}