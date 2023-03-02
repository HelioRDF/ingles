$(() => {
    grupoA.forEach(element => {
        addTableVerbo(element)
    });
    let audioControl = document.getElementsByClassName("play")
    for (i = 0; i < audioControl.length; i++) {
        audioControl[i].playbackRate = speedControl.value;
    }
})

function playAudio(id) {
    const audio = document.getElementById(id);
    audio.play();
}

const speedControl = document.getElementById('speed');
function changeSpeed() {
    let audioControl = document.getElementsByClassName("play")
    for (i = 0; i < audioControl.length; i++) {
        audioControl[i].playbackRate = speedControl.value;
    }
}

function addTableVerbo(palavras) {
    let id = palavras.id;
    let palavraIngles = palavras.palavraIngles;
    let palavraPortugues = palavras.palavraPortugues;
    let divAudio = $("#audio")
    let audio = $("<audio>").attr("id", palavraIngles).attr("class", "play").attr("src", `./audio/${palavraIngles}.mp3`)
    divAudio.append(audio)
    let trTable = $("<tr>");
    let thTableId = $("<th>").attr("scope", "row").text(id);
    let iconePlay = $("<i>").attr("class", "fas fa-play material-icons")
    let button = $("<button>").attr("type", "button").attr("class", "play-button").attr("onclick", `playAudio('${palavraIngles}')`).append(iconePlay);;
    let tdTableButton = $("<td>").attr("scope", "row").append(button);
    let tdTablePalavra = $("<td>").attr("scope", "row").text(palavraIngles.toUpperCase());
    let imagem = $("<img>").attr("src", `./imagem/${palavraIngles}.png`).attr("alt", palavraPortugues).attr("title", palavraPortugues).attr("width", 64).attr("class", 'ilustracao');
    let tdTableImagem = $("<td>").attr("scope", "row").append(imagem);
    trTable.append(thTableId);
    trTable.append(tdTableButton);
    trTable.append(tdTablePalavra);
    trTable.append(tdTableImagem);
    table = $("tbody");
    table.append(trTable);
}

const grupoA =
    [{
        id: 1,
        palavraIngles: "add",
        palavraPortugues: "adicionar",
    },
    {
        id: 2,
        palavraIngles: "agree",
        palavraPortugues: "concordar",
    },
    {
        id: 3,
        palavraIngles: "answer",
        palavraPortugues: "responder / atender",
    },
    {
        id: 4,
        palavraIngles: "arrive",
        palavraPortugues: "chegar",
    },
    {
        id: 5,
        palavraIngles: "ask",
        palavraPortugues: "perguntar",
    },
    {
        id: 6,
        palavraIngles: "bake",
        palavraPortugues: "assar",
    },

    {
        id: 7,
        palavraIngles: "be",
        palavraPortugues: "ser ou estar",
    },

    {
        id: 8,
        palavraIngles: "begin",
        palavraPortugues: "iniciar/começar",
    },
    {
        id: 9,
        palavraIngles: "believe",
        palavraPortugues: "acreditar",
    },
    {
        id: 10,
        palavraIngles: "bless",
        palavraPortugues: "abençoar",
    },
    {
        id: 11,
        palavraIngles: "break",
        palavraPortugues: "quebrar",
    },
    {
        id: 12,
        palavraIngles: "bring",
        palavraPortugues: "trazer",
    },
    {
        id: 13,
        palavraIngles: "brush",
        palavraPortugues: "escovar",
    },
    {
        id: 14,
        palavraIngles: "build",
        palavraPortugues: "construir",
    },
    {
        id: 15,
        palavraIngles: "burn",
        palavraPortugues: "queimar",
    },
    {
        id: 16,
        palavraIngles: "buy",
        palavraPortugues: "comprar",
    },
    {
        id: 17,
        palavraIngles: "call",
        palavraPortugues: "chamar",
    },
    {
        id: 18,
        palavraIngles: "clean",
        palavraPortugues: "limpar",
    },
    {
        id: 19,
        palavraIngles: "comb",
        palavraPortugues: "pentear",
    },
    {
        id: 20,
        palavraIngles: "come",
        palavraPortugues: "vir",
    },
    {
        id: 21,
        palavraIngles: "come back",
        palavraPortugues: "voltar",
    },
    {
        id: 22,
        palavraIngles: "cook",
        palavraPortugues: "cozinhar",
    },
    {
        id: 23,
        palavraIngles: "cry",
        palavraPortugues: "chorar",
    },


    ]

