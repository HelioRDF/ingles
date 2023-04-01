$(() => {

    // let audioControl = document.getElementsByClassName("play")
   // for (i = 0; i < audioControl.length; i++) {
 //       audioControl[i].playbackRate = speedControl.value;
  //  }
})


// Elementos HTML
const botaoAbrirPopup = document.querySelector('.botao-abrir-popup');
const botaoAbrirPopupWHDemons = document.querySelector('.botao-abrir-popup-wh-demonstrativos');
const botaoAbrirPopupDatas = document.querySelector('.botao-abrir-popup-datas');
const botaoAbrirPopupMaterial = document.querySelector('.botao-abrir-popup-material');
const botaoAbrirPopupSignos = document.querySelector('.botao-abrir-popup-signos');
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
botaoAbrirPopup.addEventListener('click', exibirPopupFull);
botaoAbrirPopupWHDemons.addEventListener('click', exibirPopupWhDemons);
botaoAbrirPopupDatas.addEventListener('click', exibirPopupDatas);
botaoAbrirPopupMaterial.addEventListener('click', exibirPopupMaterial);
botaoAbrirPopupSignos.addEventListener('click', exibirPopupSignos);

// Função para exibir a popup
function exibirPopupFull() {
    config()
    ativarBt()
    topPalavras=full;
    console.log(full);
    pergunta.textContent = topPalavras[indicePergunta].portugues;
   
}
// Função para exibir a popup
function exibirPopupWhDemons() {
    config()
    ativarBt()
    topPalavras=wh_demons;
    console.log(wh_demons);
    pergunta.textContent = wh_demons[indicePergunta].portugues;
}
// Função para exibir a popup
function exibirPopupDatas() {
    config()
    ativarBt()
    topPalavras=dates;
    console.log(dates);
    pergunta.textContent = dates[indicePergunta].portugues;
 }
// Função para exibir a popup
function exibirPopupMaterial() {
    config()
    ativarBt()
    topPalavras=materias;
    console.log(materias);
    pergunta.textContent = materias[indicePergunta].portugues;
}
// Função para exibir a popup
function exibirPopupSignos() {
    config();
    ativarBt()
    topPalavras=signos;
    console.log(signos);
    pergunta.textContent = signos[indicePergunta].portugues;
}

function config(){
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
    pergunta.textContent = topPalavras[indicePergunta].portugues;
}

function estruturaAudio() {
    let divAudio = $("#audioQuiz")
    let iconePlay = $("<i>").attr("class",
        "fas fa-play material-icons")
    let divBtAudio = $("#audioBtQuiz")
    let audio = $("<audio>").attr("id", topPalavras[indicePergunta].ingles).attr("class",
        "play").attr("src", `./audio/top3000/${topPalavras[indicePergunta].ingles}.mp3`)
    divAudio.append(audio)
    let button = $("<button>").attr("type",
        "button").attr("class",
            "play-button").attr("onclick", `playAudio('${topPalavras[indicePergunta].ingles
                }')`).append(iconePlay).append("Escutar");
    divAudio.empty();
    divBtAudio.empty();
    divAudio.append(audio);
    // divBtAudio.append(button)

}

//function playAudio(id) {
  //  const audio = document.getElementById(id);
  //  audio.play();
//}

// Evento de clique do botão "Fechar popup"
popupFundo.addEventListener('click', function (event) {
    if (event.target === popupFundo) {
        fecharPopup();
    }
});


// Função para avançar para a próxima pergunta
function proximaPergunta() {

    indicePergunta = Math.floor(Math.random() * topPalavras.length);
    if (indicePergunta == indicePerguntaAnt) {
        indicePergunta = Math.floor(Math.random() * topPalavras.length);
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
    if (indicePergunta == topPalavras.length) {
        indicePergunta = 0;
    }
    exibirPergunta();
}

// Evento de clique do botão "Próximo"
botaoTraduzir.addEventListener('click', () => {
    if (topPalavras.length < 1) {
        $(".botao-traduzir").attr("class", 'ocultarBotao')
    } else
        pergunta.textContent = topPalavras[indicePergunta].portugues + " (" + topPalavras[indicePergunta].ingles + ")"
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
    topPalavras.forEach(element => {
        log += "\n" + JSON.stringify(element)
    });
    console.log(log)

    if (indicePergunta == topPalavras.length) {
        indicePergunta = 0;
    }
    if (topPalavras.length < 1) {
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

// Evento de clique do botão "Responder"
botaoResponder.addEventListener('click', function () {
    mensagemErro.textContent = '';
    mensagemAcerto.textContent = '';
    mensagemTraduzir.textContent = '';
    if (resposta.value.toLowerCase().trim() === topPalavras[indicePergunta].ingles.toLowerCase().trim()) {
        mensagemAcerto.textContent = 'Resposta correta!';
        console.log("\nApagar =>", topPalavras[indicePergunta].ingles + " | " + topPalavras[indicePergunta].ingles + " | " + indicePergunta)

        topPalavras.splice(indicePergunta, 1);
        $(".botao-responder").attr("disabled", true);
        $(".botao-traduzir").attr("disabled", true);
        validarObjeto()
    } else {
        mensagemErro.textContent = 'Resposta incorreta!';
    }

});

let topPalavras="";
const full = [

    { "ingles": "what", "portugues": "qual/o que", "visibilidade": true },
    { "ingles": "where", "portugues": "onde", "visibilidade": true },
    { "ingles": "who", "portugues": "quem", "visibilidade": true },
    { "ingles": "why", "portugues": "por que", "visibilidade": true },
    { "ingles": "how", "portugues": "como", "visibilidade": true },
    { "ingles": "when", "portugues": "quando", "visibilidade": true },

    { "ingles": "Monday", "portugues": "Segunda-feira" },
    { "ingles": "Tuesday", "portugues": "Terça-feira" },
    { "ingles": "Wednesday", "portugues": "Quarta-feira" },
    { "ingles": "Thursday", "portugues": "Quinta-feira" },
    { "ingles": "Friday", "portugues": "Sexta-feira" },
    { "ingles": "Saturday", "portugues": "Sábado" },
    { "ingles": "Sunday", "portugues": "Domingo" },

    { "ingles": "January", "portugues": "Janeiro", "visibilidade": true },
    { "ingles": "February", "portugues": "Fevereiro", "visibilidade": true },
    { "ingles": "March", "portugues": "Março", "visibilidade": true },
    { "ingles": "April", "portugues": "Abril", "visibilidade": true },
    { "ingles": "May", "portugues": "Maio", "visibilidade": true },
    { "ingles": "June", "portugues": "Junho", "visibilidade": true },
    { "ingles": "July", "portugues": "Julho", "visibilidade": true },
    { "ingles": "August", "portugues": "Agosto", "visibilidade": true },
    { "ingles": "September", "portugues": "Setembro", "visibilidade": true },
    { "ingles": "October", "portugues": "Outubro", "visibilidade": true },
    { "ingles": "November", "portugues": "Novembro", "visibilidade": true },
    { "ingles": "December", "portugues": "Dezembro", "visibilidade": true },

    { "ingles": "this", "portugues": "esse/essa", "visibilidade": true },
    { "ingles": "these", "portugues": "esses/essas", "visibilidade": true },
    { "ingles": "that", "portugues": "aquele/aquela", "visibilidade": true },
    { "ingles": "those", "portugues": "aqueles/aquelas", "visibilidade": true },

    { "ingles": "math", "portugues": "matemática", "visibilidade": true },
    { "ingles": "history", "portugues": "história", "visibilidade": true },
    { "ingles": "geography", "portugues": "geografia", "visibilidade": true },
    { "ingles": "biology", "portugues": "biologia", "visibilidade": true },
    { "ingles": "chemistry", "portugues": "química", "visibilidade": true },
    { "ingles": "physics", "portugues": "física", "visibilidade": true },
    { "ingles": "literature", "portugues": "literatura", "visibilidade": true },
    { "ingles": "art", "portugues": "arte", "visibilidade": true },
    { "ingles": "music", "portugues": "música", "visibilidade": true },
    { "ingles": "physical education", "portugues": "educação física", "visibilidade": true },

]


const wh_demons = [

    { "ingles": "what", "portugues": "qual/o que", "visibilidade": true },
    { "ingles": "where", "portugues": "onde", "visibilidade": true },
    { "ingles": "who", "portugues": "quem", "visibilidade": true },
    { "ingles": "why", "portugues": "por que", "visibilidade": true },
    { "ingles": "how", "portugues": "como", "visibilidade": true },
    { "ingles": "when", "portugues": "quando", "visibilidade": true },

    { "ingles": "this", "portugues": "esse/essa", "visibilidade": true },
    { "ingles": "these", "portugues": "estes/estas", "visibilidade": true },
    { "ingles": "that", "portugues": "aquele/aquela", "visibilidade": true },
    { "ingles": "those", "portugues": "aqueles/aquelas", "visibilidade": true },]

const dates = [
    { "ingles": "Monday", "portugues": "Segunda-feira" },
    { "ingles": "Tuesday", "portugues": "Terça-feira" },
    { "ingles": "Wednesday", "portugues": "Quarta-feira" },
    { "ingles": "Thursday", "portugues": "Quinta-feira" },
    { "ingles": "Friday", "portugues": "Sexta-feira" },
    { "ingles": "Saturday", "portugues": "Sábado" },
    { "ingles": "Sunday", "portugues": "Domingo" },

    { "ingles": "January", "portugues": "Janeiro", "visibilidade": true },
    { "ingles": "February", "portugues": "Fevereiro", "visibilidade": true },
    { "ingles": "March", "portugues": "Março", "visibilidade": true },
    { "ingles": "April", "portugues": "Abril", "visibilidade": true },
    { "ingles": "May", "portugues": "Maio", "visibilidade": true },
    { "ingles": "June", "portugues": "Junho", "visibilidade": true },
    { "ingles": "July", "portugues": "Julho", "visibilidade": true },
    { "ingles": "August", "portugues": "Agosto", "visibilidade": true },
    { "ingles": "September", "portugues": "Setembro", "visibilidade": true },
    { "ingles": "October", "portugues": "Outubro", "visibilidade": true },
    { "ingles": "November", "portugues": "Novembro", "visibilidade": true },
    { "ingles": "December", "portugues": "Dezembro", "visibilidade": true },]

const materias =
    [
        { "ingles": "math", "portugues": "matemática", "visibilidade": true },
        { "ingles": "history", "portugues": "história", "visibilidade": true },
        { "ingles": "geography", "portugues": "geografia", "visibilidade": true },
        { "ingles": "biology", "portugues": "biologia", "visibilidade": true },
        { "ingles": "chemistry", "portugues": "química", "visibilidade": true },
        { "ingles": "physics", "portugues": "física", "visibilidade": true },
        { "ingles": "literature", "portugues": "literatura", "visibilidade": true },
        { "ingles": "art", "portugues": "arte", "visibilidade": true },
        { "ingles": "music", "portugues": "música", "visibilidade": true },
        { "ingles": "physical education", "portugues": "educação física", "visibilidade": true },]


        const signos =
        [
        { "ingles": "Aries", "portugues": "Áries", "visibilidade": true },
        { "ingles": "Taurus", "portugues": "Touro", "visibilidade": true },
        { "ingles": "Gemini", "portugues": "Gêmeos", "visibilidade": true },
        { "ingles": "Cancer", "portugues": "Câncer", "visibilidade": true },
        { "ingles": "Leo", "portugues": "Leão", "visibilidade": true },
        { "ingles": "Virgo", "portugues": "Virgem", "visibilidade": true },
        { "ingles": "Libra", "portugues": "Libra", "visibilidade": true },
        { "ingles": "Scorpio", "portugues": "Escorpião", "visibilidade": true },
        { "ingles": "Sagittarius", "portugues": "Sagitário", "visibilidade": true },
        { "ingles": "Capricorn", "portugues": "Capricórnio", "visibilidade": true },
        { "ingles": "Aquarius", "portugues": "Aquário", "visibilidade": true },
        { "ingles": "Pisces", "portugues": "Peixes", "visibilidade": true }
        ]