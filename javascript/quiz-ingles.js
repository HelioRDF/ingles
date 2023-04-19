$(() => {

    console.log(palavras_aprendendo);
    let audioControl = document.getElementsByClassName("play")
    for (i = 0; i < audioControl.length; i++) {
        audioControl[i].playbackRate = speedControl.value;
    }
})

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
let indicePerguntaAnt

// Evento de clique do botão "Abrir popup"
botaoAbrirPopup.addEventListener('click', exibirPopup);

// Função para exibir a popup
function exibirPopup() {
    popupFundo.style.display = 'flex';
    resposta.value = '';
    resposta.focus();
    // Exibir a primeira pergunta ao carregar a página
    exibirPergunta();
}

// Função para fechar a popup
function fecharPopup() {
    popupFundo.style.display = 'none';
}


// Função para exibir a pergunta atual
function exibirPergunta() {
    estruturaAudio()
    pergunta.textContent = palavras_aprendendo[indicePergunta].ingles;
    playAudio(palavras_aprendendo[indicePergunta].ingles)
}

function estruturaAudio() {
    let divAudio = $("#audioQuiz")
    let iconePlay = $("<i>").attr("class",
        "fas fa-play material-icons")
    let divBtAudio = $("#audioBtQuiz")
    let audio = $("<audio>").attr("id", palavras_aprendendo[indicePergunta].ingles).attr("class",
        "play").attr("src", `./audio/top3000/${palavras_aprendendo[indicePergunta].ingles}.mp3`)
    divAudio.append(audio)
    let button = $("<button>").attr("type",
        "button").attr("class",
            "play-button").attr("onclick", `playAudio('${palavras_aprendendo[indicePergunta].ingles
                }')`).append(iconePlay).append("Escutar");
    divAudio.empty();
    divBtAudio.empty();
    divAudio.append(audio);
    divBtAudio.append(button)

}

function playAudio(id) {
    const audio = document.getElementById(id);
    audio.play();
}

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
    if (resposta.value.toLowerCase().trim() === palavras_aprendendo[indicePergunta].portugues.toLowerCase().trim()) {
        mensagemAcerto.textContent = 'Resposta correta!';
        console.log("\nApagar =>", palavras_aprendendo[indicePergunta].ingles + " | " + palavras_aprendendo[indicePergunta].portugues + " | " + indicePergunta)

        palavras_aprendendo.splice(indicePergunta, 1);
        $(".botao-responder").attr("disabled", true);
        $(".botao-traduzir").attr("disabled", true);
        validarObjeto()
    } else {
        mensagemErro.textContent = 'Resposta incorreta!';
    }

});

// Função para avançar para a próxima pergunta
function proximaPergunta() {

    indicePergunta = Math.floor(Math.random() * palavras_aprendendo.length);
    if (indicePergunta == indicePerguntaAnt) {
        indicePergunta = Math.floor(Math.random() * palavras_aprendendo.length);
        console.log("Ops...")
    }
    indicePerguntaAnt = indicePergunta;
    mensagemErro.textContent = '';
    mensagemAcerto.textContent = '';
    mensagemTraduzir.textContent = '';
    $(".botao-responder").attr("disabled", false);
    $(".botao-traduzir").attr("disabled", false);
    $(".resposta").val('')
    $(".resposta").focus();
    if (indicePergunta == palavras_aprendendo.length) {
        indicePergunta = 0;
    }
    exibirPergunta();
}

// Evento de clique do botão "Próximo"
botaoTraduzir.addEventListener('click', () => {
    if (palavras_aprendendo.length < 1) {
        $(".botao-traduzir").attr("class", 'ocultarBotao')
    } else
        pergunta.textContent = palavras_aprendendo[indicePergunta].ingles + " (" + palavras_aprendendo[indicePergunta].portugues + ")"
});

function ativarBt() {
    $(".botao-responder").attr("disabled", false);
    $(".botao-traduzir").attr("disabled", false);
    $(".botao-proximo").attr("disabled", false);
    $(".play-button").attr("disabled", false);
}

function desativarBt() {
    $(".botao-responder").attr("disabled", true);
    $(".botao-traduzir").attr("disabled", true);
    $(".botao-proximo").attr("disabled", true);
    $(".play-button").attr("disabled", true);
}

function validarObjeto() {
    let log = "";
    palavras_aprendendo.forEach(element => {
        log += "\n" + JSON.stringify(element)
    });
    console.log(log)

    if (indicePergunta == palavras_aprendendo.length) {
        indicePergunta = 0;
    }
    if (palavras_aprendendo.length < 1) {
        desativarBt();
        pergunta.textContent = "Parabéns, você concluiu a lista de palavras"
        return false
    } else {
        return true
    }
}

// Evento de clique do botão "Próximo"
botaoProximo.addEventListener('click', proximaPergunta);

const speedControl = document.getElementById('speed');
function changeSpeed() {
    let audioControl = document.getElementsByClassName("play")
    for (i = 0; i < audioControl.length; i++) {
        audioControl[i
        ].playbackRate = speedControl.value;
    }
}

resposta.addEventListener("keyup", function (event) {
    // verifica se a tecla pressionada foi a tecla Enter
    if (event.keyCode === 13) {
        // executa a mesma ação que o botão HTML
        botaoResponder.click();
    }
});

// adiciona um evento de escuta ao input
resposta.addEventListener("keyup", function (event) {
    // verifica se a tecla pressionada foi a tecla de seta para a direita
    if (event.keyCode === 39) {
        // executa a mesma ação que o botão HTML
        botaoProximo.click();
    }
});

const palavras_aprendendo = [

    { "ingles": "apparent", "portugues": "aparente", "visibilidade": true },
    { "ingles": "apparently", "portugues": "aparentemente", "visibilidade": true },
    { "ingles": "appeal", "portugues": "apelar", "visibilidade": true },
    { "ingles": "appear", "portugues": "aparecer", "visibilidade": true },
    { "ingles": "appearance", "portugues": "aparência", "visibilidade": true },
    { "ingles": "appoint", "portugues": "designar", "visibilidade": true },
    { "ingles": "appointment", "portugues": "consulta, compromisso", "visibilidade": true },
    { "ingles": "appreciate", "portugues": "apreciar, valorizar", "visibilidade": true },
    { "ingles": "approach", "portugues": "abordagem, aproximação", "visibilidade": true },
]