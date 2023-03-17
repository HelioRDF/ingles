// Array de palavras
const topPalavras = [
    { "ingles": "a", "portugues": "um/uma", "visibilidade": false },
    { "ingles": "abandon", "portugues": "abandonar", "visibilidade": false },
    { "ingles": "ability", "portugues": "habilidade", "visibilidade": false }
];

// Elementos HTML
const botaoAbrirPopup = document.querySelector('.botao-abrir-popup');
const popupFundo = document.querySelector('.popup-fundo');
const botaoResponder = document.querySelector('.botao-responder');
const botaoProximo = document.querySelector('.botao-proximo');
const botaoTraduzir = document.querySelector('.botao-traduzir');
const pergunta = document.querySelector('.pergunta');
const resposta = document.querySelector('.resposta');
const mensagemAcerto = document.querySelector('.mensagem-acerto');
const mensagemErro = document.querySelector('.mensagem-erro');
const mensagemTraduzir = document.querySelector('.mensagem-traduzir');

// Variável para controlar o índice da pergunta atual
let indicePergunta = 0;

// Função para exibir a popup
function exibirPopup() {
    popupFundo.style.display = 'flex';
    resposta.value = '';
    resposta.focus();
}

// Função para fechar a popup
function fecharPopup() {
    popupFundo.style.display = 'none';
}

// Função para exibir a pergunta atual
function exibirPergunta() {
    pergunta.textContent = topPalavras[indicePergunta].ingles;
}

// Função para avançar para a próxima pergunta
function proximaPergunta() {
    indicePergunta++;
    mensagemErro.textContent = '';
    mensagemAcerto.textContent = '';
    mensagemTraduzir.textContent = '';
    if (indicePergunta >= topPalavras.length) {
        indicePergunta = 0;
    }
    exibirPergunta();
}

// Evento de clique do botão "Abrir popup"
botaoAbrirPopup.addEventListener('click', exibirPopup);

// Evento de clique do botão "Fechar popup"
popupFundo.addEventListener('click', function (event) {
    if (event.target === popupFundo) {
        fecharPopup();
    }
});

// Evento de clique do botão "Responder"
botaoResponder.addEventListener('click', function () {
    mensagemErro.textContent = '';
    mensagemAcerto.textContent = '';
    mensagemTraduzir.textContent = '';
    if (resposta.value === topPalavras[indicePergunta].portugues) {
        mensagemAcerto.textContent = 'Resposta correta!';
    } else {
        mensagemErro.textContent = 'Resposta incorreta!';
    }
});

// Evento de clique do botão "Próximo"
botaoProximo.addEventListener('click', proximaPergunta);

// Evento de clique do botão "Próximo"
botaoTraduzir.addEventListener('click', () => {
  //  mensagemTraduzir.textContent = topPalavras[indicePergunta].portugues

    pergunta.textContent = topPalavras[indicePergunta].ingles +" ("+  topPalavras[indicePergunta].portugues+")"
});

// Exibir a primeira pergunta ao carregar a página
exibirPergunta();
