
//ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = location.href
    const href = link.href
    if(url.includes(href)) {
        link.classList.add('ativo');
    }
}


links.forEach(ativarLink);

//ativar itens do orçamento 

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
    }


    console.log(elemento);
}
parametros.forEach(ativarProduto);

//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa')
    pergunta.setAttribute('aria-expanded', ativa);

    console.log(resposta);
}

function eventosPerguntas(pergunta) {
   pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas)

console.log(perguntas);

// galeria de bicicletas 
const galeria = document.querySelectorAll('.modelo-imagens img');
const galeriaContainer = document.querySelector('.modelo-imagens');


function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)');
    console.log(media)
    if(media) {
    galeriaContainer.prepend(img)}
}

function eventGaleria(img) {
img.addEventListener("click", trocarImagem);
}

galeria.forEach (eventGaleria);

//animação
if(window.SimpleAnime) {
new SimpleAnime();}