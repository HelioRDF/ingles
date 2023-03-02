$(() => {
    let id = 1
    grupoA.forEach(element => {
        addTableVerbo(element, id)
        id++;
    });
    let audioControl = document.getElementsByClassName("play")
    for (i = 0; i < audioControl.length; i++) {
        audioControl[i
        ].playbackRate = speedControl.value;
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
        audioControl[i
        ].playbackRate = speedControl.value;
    }
}

function addTableVerbo(palavras, id) {
    let palavraIngles = palavras.palavraIngles;
    let palavraPortugues = palavras.palavraPortugues;
    let divAudio = $("#audio")
    let audio = $("<audio>").attr("id", palavraIngles).attr("class",
        "play").attr("src", `./audio/${palavraIngles
            }.mp3`)
    divAudio.append(audio)
    let trTable = $("<tr>");
    let thTableId = $("<th>").attr("scope",
        "row").text(id);
    let iconePlay = $("<i>").attr("class",
        "fas fa-play material-icons")
    let button = $("<button>").attr("type",
        "button").attr("class",
            "play-button").attr("onclick", `playAudio('${palavraIngles
                }')`).append(iconePlay);;
    let tdTableButton = $("<td>").attr("scope",
        "row").append(button);
    let tdTablePalavra = $("<td>").attr("scope",
        "row").text(palavraIngles.toUpperCase());
    let tdTabletTraducao = $("<td>").attr("scope",
        "row").text(palavraPortugues.toUpperCase());
    let imagem = $("<img>").attr("src", `./imagem/${palavraIngles
        }.png`).attr("alt", palavraPortugues).attr("title", palavraPortugues).attr("width",
            64).attr("class", 'ilustracao').attr("onerror","this.src='./imagem/em-breve.png'");
            
    let tdTableImagem = $("<td>").attr("scope",
        "row").append(imagem);
    trTable.append(thTableId);
    trTable.append(tdTableButton);
    trTable.append(tdTablePalavra);
    trTable.append(tdTabletTraducao);
    trTable.append(tdTableImagem);
    table = $("tbody");
    table.append(trTable);
}

const grupoA =
    [
        {
            palavraIngles: "add",
            palavraPortugues: "adicionar",
        },
        {
            palavraIngles: "agree",
            palavraPortugues: "concordar",
        },
        {
            palavraIngles: "answer",
            palavraPortugues: "responder / atender",
        },
        {
            palavraIngles: "arrive",
            palavraPortugues: "chegar",
        },
        {
            palavraIngles: "ask",
            palavraPortugues: "perguntar",
        },
        {
            palavraIngles: "bake",
            palavraPortugues: "assar",
        },
        {
            palavraIngles: "be",
            palavraPortugues: "ser ou estar",
        },
        {
            palavraIngles: "begin",
            palavraPortugues: "iniciar/começar",
        },
        {
            palavraIngles: "believe",
            palavraPortugues: "acreditar",
        },
        {
            palavraIngles: "bless",
            palavraPortugues: "abençoar",
        },
        {
            palavraIngles: "break",
            palavraPortugues: "quebrar",
        },
        {
            palavraIngles: "bring",
            palavraPortugues: "trazer",
        },
        {
            palavraIngles: "brush",
            palavraPortugues: "escovar",
        },
        {
            palavraIngles: "build",
            palavraPortugues: "construir",
        },
        {
            palavraIngles: "burn",
            palavraPortugues: "queimar",
        },
        {
            palavraIngles: "buy",
            palavraPortugues: "comprar",
        },
        {
            palavraIngles: "call",
            palavraPortugues: "chamar",
        },
        {
            palavraIngles: "clean",
            palavraPortugues: "limpar",
        },
        {
            palavraIngles: "comb",
            palavraPortugues: "pentear",
        },
        {
            palavraIngles: "come",
            palavraPortugues: "vir",
        },
        {
            palavraIngles: "come back",
            palavraPortugues: "voltar",
        },
        {
            palavraIngles: "cook",
            palavraPortugues: "cozinhar",
        },
        {
            palavraIngles: "cry",
            palavraPortugues: "chorar",
        },
        {
            palavraIngles: "dance",
            palavraPortugues: "dançar",
        },
        {
            palavraIngles: "date",
            palavraPortugues: "namorar",
        },
        {
            palavraIngles: "do",
            palavraPortugues: "fazer",
        },
        {
            palavraIngles: "dream",
            palavraPortugues: "sonhar",
        },
        {
            palavraIngles: "drink",
            palavraPortugues: "beber",
        },
        {
            palavraIngles: "drive",
            palavraPortugues: "dirigir",
        },
        {
            palavraIngles: "eat",
            palavraPortugues: "comer",
        },
        {
            palavraIngles: "enjoy",
            palavraPortugues: "curtir/aproveitar",
        },
        {
            palavraIngles: "erase",
            palavraPortugues: "apagar",
        },
        {
            palavraIngles: "feel",
            palavraPortugues: "sentir",
        },
        {
            palavraIngles: "fight",
            palavraPortugues: "lutar",
        },
        {
            palavraIngles: "fish",
            palavraPortugues: "pescar",
        },
        {
            palavraIngles: "flirt",
            palavraPortugues: "flertar",
        },
        {
            palavraIngles: "fly",
            palavraPortugues: "voar",
        },
        {
            palavraIngles: "forget",
            palavraPortugues: "esquecer",
        },
        {
            palavraIngles: "forgive",
            palavraPortugues: "perdoar",
        },
        {
            palavraIngles: "fry",
            palavraPortugues: "fritar",
        },
        {
            palavraIngles: "get",
            palavraPortugues: "obter",
        },
        {
            palavraIngles: "get up",
            palavraPortugues: "levantar",
        },
        {
            palavraIngles: "give",
            palavraPortugues: "dar",
        },
        {
            palavraIngles: "give up",
            palavraPortugues: "desistir",
        },
        {
            palavraIngles: "go",
            palavraPortugues: "ir",
        },
        {
            palavraIngles: "grow",
            palavraPortugues: "crescer",
        },
        {
            palavraIngles: "happen",
            palavraPortugues: "acontecer",
        },
        {
            palavraIngles: "have",
            palavraPortugues: "ter",
        },
        {
            palavraIngles: "heal",
            palavraPortugues: "curar",
        },
        {
            palavraIngles: "hear",
            palavraPortugues: "ouvir",
        },
        {
            palavraIngles: "help",
            palavraPortugues: "ajudar",
        },
        {
            palavraIngles: "hope",
            palavraPortugues: "ter esperança",
        },
        {
            palavraIngles: "hug",
            palavraPortugues: "abraçar",
        },
        {
            palavraIngles: "hunt",
            palavraPortugues: "caçar",
        },
        {
            palavraIngles: "hurt",
            palavraPortugues: "magoar",
        },
        {
            palavraIngles: "imagine",
            palavraPortugues: "imaginar",
        },
        {
            palavraIngles: "improve",
            palavraPortugues: "melhorar",
        },
        {
            palavraIngles: "intend",
            palavraPortugues: "pretender",
        },
        {
            palavraIngles: "introduce",
            palavraPortugues: "apresentar",
        },
        {
            palavraIngles: "invite",
            palavraPortugues: "convidar",
        },
        {
            palavraIngles: "jump",
            palavraPortugues: "pular",
        },
        {
            palavraIngles: "keep",
            palavraPortugues: "manter",
        },
        {
            palavraIngles: "kick",
            palavraPortugues: "chutar",
        },
        {
            palavraIngles: "kill",
            palavraPortugues: "matar",
        },
        {
            palavraIngles: "kiss",
            palavraPortugues: "beijar",
        },
        {
            palavraIngles: "knock",
            palavraPortugues: "bater",
        },
        {
            palavraIngles: "know",
            palavraPortugues: "saber/conhecer",
        },
        {
            palavraIngles: "learn",
            palavraPortugues: "aprender",
        },
        {
            palavraIngles: "lie",
            palavraPortugues: "mentir",
        },
        {
            palavraIngles: "like",
            palavraPortugues: "gostar",
        },
        {
            palavraIngles: "listen to",
            palavraPortugues: "escutar",
        },
        {
            palavraIngles: "live",
            palavraPortugues: "viver",
        },
        {
            palavraIngles: "look",
            palavraPortugues: "olhar",
        },
        {
            palavraIngles: "look for",
            palavraPortugues: "procurar",
        },
        {
            palavraIngles: "lose",
            palavraPortugues: "perder",
        },
        {
            palavraIngles: "love",
            palavraPortugues: "amar",
        },
        {
            palavraIngles: "make",
            palavraPortugues: "fazer",
        },
        {
            palavraIngles: "miss",
            palavraPortugues: "perder",
        },
        {
            palavraIngles: "name",
            palavraPortugues: "nomear",
        },
        {
            palavraIngles: "need",
            palavraPortugues: "precisar",
        },
        {
            palavraIngles: "number",
            palavraPortugues: "numerar",
        },
        {
            palavraIngles: "open",
            palavraPortugues: "abrir",
        },
        {
            palavraIngles: "organize",
            palavraPortugues: "organizar",
        },
        {
            palavraIngles: "pack",
            palavraPortugues: "empacotar",
        },
        {
            palavraIngles: "paint",
            palavraPortugues: "pintar",
        },
        {
            palavraIngles: "park",
            palavraPortugues: "estacionar",
        },
        {
            palavraIngles: "pay",
            palavraPortugues: "pagar",
        },
        {
            palavraIngles: "play",
            palavraPortugues: "jogar",
        },
        {
            palavraIngles: "practice",
            palavraPortugues: "praticar",
        },
        {
            palavraIngles: "pray",
            palavraPortugues: "orar",
        },
        {
            palavraIngles: "prepare",
            palavraPortugues: "preparar",
        },
        {
            palavraIngles: "print",
            palavraPortugues: "imprimir",
        },
        {
            palavraIngles: "pull",
            palavraPortugues: "puxar",
        },
        {
            palavraIngles: "push",
            palavraPortugues: "empurar",
        },
        {
            palavraIngles: "question",
            palavraPortugues: "questionar",
        },
        {
            palavraIngles: "read",
            palavraPortugues: "ler",
        },
        {
            palavraIngles: "record",
            palavraPortugues: "gravar",
        },
        {
            palavraIngles: "remember",
            palavraPortugues: "lembrar",
        },
        {
            palavraIngles: "rent",
            palavraPortugues: "alugar",
        },
        {
            palavraIngles: "repeat",
            palavraPortugues: "repetir",
        },
        {
            palavraIngles: "run",
            palavraPortugues: "correr",
        },
        {
            palavraIngles: "save",
            palavraPortugues: "salvar",
        },
        {
            palavraIngles: "say",
            palavraPortugues: "dizer",
        },
        {
            palavraIngles: "see",
            palavraPortugues: "ver",
        },
        {
            palavraIngles: "sell",
            palavraPortugues: "vender",
        },
        {
            palavraIngles: "share",
            palavraPortugues: "compartilhar",
        },
        {
            palavraIngles: "sing",
            palavraPortugues: "cantar",
        },
        {
            palavraIngles: "sit down",
            palavraPortugues: "sentar",
        },
        {
            palavraIngles: "sleep",
            palavraPortugues: "dormir",
        },
        {
            palavraIngles: "smell",
            palavraPortugues: "cheirar",
        },
        {
            palavraIngles: "smile",
            palavraPortugues: "sorrir",
        },
        {
            palavraIngles: "smoke",
            palavraPortugues: "fumar",
        },
        {
            palavraIngles: "speak",
            palavraPortugues: "falar",
        },
        {
            palavraIngles: "spend",
            palavraPortugues: "gastar",
        },
        {
            palavraIngles: "stay",
            palavraPortugues: "ficar",
        },
        {
            palavraIngles: "stop",
            palavraPortugues: "parar",
        },
        {
            palavraIngles: "study",
            palavraPortugues: "estudar",
        },
        {
            palavraIngles: "survive",
            palavraPortugues: "sobreviver",
        },
        {
            palavraIngles: "swim",
            palavraPortugues: "nadar",
        },
        {
            palavraIngles: "take",
            palavraPortugues: "tomar",
        },
        {
            palavraIngles: "take a shower",
            palavraPortugues: "tomar banho",
        },
        {
            palavraIngles: "talk",
            palavraPortugues: "conversar",
        },
        {
            palavraIngles: "teach",
            palavraPortugues: "ensinar",
        },
        {
            palavraIngles: "tell",
            palavraPortugues: "contar",
        },
        {
            palavraIngles: "think",
            palavraPortugues: "pensar",
        },
        {
            palavraIngles: "touch",
            palavraPortugues: "tocar / encostar",
        },
        {
            palavraIngles: "travel",
            palavraPortugues: "viajar",
        },
        {
            palavraIngles: "trust",
            palavraPortugues: "confiar",
        },
        {
            palavraIngles: "try",
            palavraPortugues: "tentar",
        },
        {
            palavraIngles: "turn off",
            palavraPortugues: "desligar",
        },
        {
            palavraIngles: "turn on",
            palavraPortugues: "ligar",
        },
        {
            palavraIngles: " understand",
            palavraPortugues: "entender",
        },
        {
            palavraIngles: "unite",
            palavraPortugues: "unir",
        },
        {
            palavraIngles: "visit",
            palavraPortugues: "visitar",
        },
        {
            palavraIngles: "vote",
            palavraPortugues: "votar",
        },
        {
            palavraIngles: "wait",
            palavraPortugues: "esperar",
        },
        {
            palavraIngles: "waste",
            palavraPortugues: "desperdiçar",
        },
        {
            palavraIngles: "wake up",
            palavraPortugues: "acordar",
        },
        {
            palavraIngles: "walk",
            palavraPortugues: "andar",
        },
        {
            palavraIngles: "want",
            palavraPortugues: "querer",
        },
        {
            palavraIngles: "wash",
            palavraPortugues: "lavar",
        },
        {
            palavraIngles: "watch",
            palavraPortugues: "assistir",
        },
        {
            palavraIngles: "wear",
            palavraPortugues: "vestir",
        },
        {
            palavraIngles: "win",
            palavraPortugues: "vencer",
        },
        {
            palavraIngles: "wish",
            palavraPortugues: "desejar",
        },
        {
            palavraIngles: "work",
            palavraPortugues: "trabalhar",
        },
        {
            palavraIngles: "write",
            palavraPortugues: "escrever",
        },
        {
            palavraIngles: "xerox",
            palavraPortugues: "copiar",
        },
        {
            palavraIngles: "yawn",
            palavraPortugues: "bocejar",
        },
    ]