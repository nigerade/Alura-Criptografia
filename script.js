// ao rolar o menu hamburguer aberto sai
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

// declarando variaveis
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let header2 = document.querySelector('#header');

// ao clicar no menu
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    header2.classList.toggle('header2');
    // muda a classe para header2 e puxa do css
    // ao clicar no menu hamburguer não deixa o fundo do logo ficar transparent
};

// ao scrollar depois de ter clicado no menu
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
    header2.classList.remove('header2');
    // tira a classe header2 para parar de puxar o css dessa classe e voltar a ficar transparent
};

// limpa a tela quando realiza alguma funcao
function limpaTela() {

    var textoColocado = document.getElementById('texto-colocado').value;
    var textoFormatado = document.getElementById('texto-formatado');

    document.getElementById('texto-colocado').value = "";
    document.getElementById('texto-formatado').value = "";
}

// tira a imagem da div e mostra o texto
function tirarImgParaLeitura() {

    var textoColocado = document.getElementById('texto-colocado').value;
    var textoFormatado = document.getElementById('texto-formatado').value;
}

// funcao de verificar se o usuário digitou apenas texto e não caracteres especiais, numeros...
function verifica() {

    var textoColocado = document.getElementById('texto-colocado').value
    var tamanho = textoColocado.length;
    var rex = /[a-z]+/;

    if (textoColocado != "") {
        for (indice = 0; indice < tamanho; indice++) {
            let novo = textoColocado[indice].match(rex);
            if ((novo != textoColocado[indice]) && (textoColocado[indice] != " ")) {
                limpaTela();
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

// apenas copia o texto descriptografado
function copia() {

    var textoFormatado = document.getElementById('texto-formatado').value;

    navigator.clipboard.writeText(textoFormatado)
    alert("Copiado para a Área de Transferência!");

    limpaTela();
}

// limpa o texto das textarea
function limpa() {

    // consegui resolver
    document.getElementById("texto-colocado").value = "";
    document.getElementById("texto-formatado").value = "";
}

// funcao de criptografar o texto
function criptografa() {

    if (verifica()) {

        tirarImgParaLeitura();

        var textoColocado = document.getElementById('texto-colocado').value;
        var textoFormatado = document.getElementById('texto-formatado');

        textoColocado = textoColocado.replace(/e/gi, "enter");
        textoColocado = textoColocado.replace(/i/gi, "imes");
        textoColocado = textoColocado.replace(/a/gi, "ai");
        textoColocado = textoColocado.replace(/o/gi, "ober");
        textoColocado = textoColocado.replace(/u/gi, "ufat");

        textoFormatado.value = textoColocado;
    }
    else {
        limpaTela();
        alert("Não use Letras Maiúsculas, caracteres especiais ou Deixe em Branco!");
    }
}

// funcao de descriptografar o texto
function descriptografa() {

    if (verifica()) {

        tirarImgParaLeitura();

        var textoColocado = document.getElementById('texto-colocado').value;
        var textoFormatado = document.getElementById('texto-formatado');

        textoColocado = textoColocado.replace(/ai/gi, "a");
        textoColocado = textoColocado.replace(/enter/gi, "e");
        textoColocado = textoColocado.replace(/imes/gi, "i");
        textoColocado = textoColocado.replace(/ober/gi, "o");
        textoColocado = textoColocado.replace(/ufat/gi, "u");

        textoFormatado.value = textoColocado;
    }

    else {
        limpaTela();
        alert("Não use Letras Maiúsculas, Caracteres Especiais ou Deixe em Branco!");
    }
}

