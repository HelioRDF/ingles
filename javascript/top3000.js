$(() => {
    let idAprender = 1
    let idAprendida = 1

    topPalavras.forEach(element => {
        if (element.visibilidade) {
            addTable(element, idAprender, "top3000filtro")
            idAprender++;
        }
    });
    topPalavras.forEach(element => {
        if (!element.visibilidade) {
        addTable(element, idAprendida, "top3000")
        idAprendida++;}
    });

    let audioControl = document.getElementsByClassName("play")
    for (i = 0; i < audioControl.length; i++) {
        audioControl[i
        ].playbackRate = speedControl.value;
    }

    // Adiciona um manipulador de eventos para o botão "Remover" em cada linha da tabela
    $("#top3000filtro").on("click", ".bt_visibilidade", function () {
        $(this).closest("tr").remove(); // Remove a linha correspondente da tabela
    });
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

function visibilidade(objeto) {
    topPalavras.forEach(element => {
        console.log("antes=", element.visibilidade)
        if (element.ingles === objeto) {
            element.visibilidade = !element.visibilidade;
            console.log(element)
        }
    });
}
function list() {
    //  console.log(JSON.stringify(topPalavras))
    let text = ""
    topPalavras.forEach((obj) => {
        text += "\n" + JSON.stringify(obj) + ",";
    });
    console.log(text)
}


function addTable(palavra, id, table) {

    let ingles = palavra.ingles;
    let portugues = palavra.portugues;
    let divAudio = $("#audio")
    let audio = $("<audio>").attr("id", ingles).attr("class",
        "play").attr("src", `./audio/top3000/${ingles}.mp3`)
    divAudio.append(audio)
    let trTable = $("<tr>");
    let thTableId = $("<th>").attr("scope",
        "row").text(id);
    let iconePlay = $("<i>").attr("class",
        "fas fa-play material-icons")
    let button = $("<button>").attr("type",
        "button").attr("class",
            "play").attr("onclick", `playAudio('${ingles
                }')`).append(iconePlay);
    let tdTableButton = $("<td>").attr("scope",
        "row").append(button);
    let tdTablePalavra = $("<td>").attr("scope",
        "row").text(ingles.toUpperCase());
    let tdTabletTraducao = $("<td>").attr("scope",
        "row").text(portugues.toUpperCase());

    let iconeAlter = $("<i>").attr("class",
        "fas fa-check material-icons")

    let buttonVisibilidade = $("<button>").attr("type",
        "button").attr("class",
            "bt_visibilidade").attr("onclick", `visibilidade('${palavra.ingles
                }')`).append(iconeAlter);

    let tdTableButtonVisibilidade = $("<td>").attr("scope",
        "row").append(buttonVisibilidade);

    trTable.append(thTableId);
    trTable.append(tdTableButton);
    trTable.append(tdTablePalavra);
    trTable.append(tdTabletTraducao);
    trTable.append(tdTableButtonVisibilidade);
    table = $("#" + table);
    table.append(trTable);
}

const topPalavras = [
    {"ingles":"a","portugues":"um/uma","visibilidade":false},
    {"ingles":"abandon","portugues":"abandonar","visibilidade":false},
    {"ingles":"ability","portugues":"habilidade","visibilidade":false},
    {"ingles":"able","portugues":"capaz","visibilidade":true},
    {"ingles":"abortion","portugues":"aborto","visibilidade":false},
    {"ingles":"about","portugues":"sobre","visibilidade":false},
    {"ingles":"above","portugues":"acima","visibilidade":true},
    {"ingles":"abroad","portugues":"no exterior","visibilidade":true},
    {"ingles":"absence","portugues":"ausência","visibilidade":true},
    {"ingles":"absolute","portugues":"absoluto","visibilidade":false},
    {"ingles":"absolutely","portugues":"absolutamente","visibilidade":false},
    {"ingles":"absorb","portugues":"absorver","visibilidade":false},
    {"ingles":"abuse","portugues":"abuso","visibilidade":false},
    {"ingles":"academic","portugues":"acadêmico","visibilidade":false},
    {"ingles":"accept","portugues":"aceitar","visibilidade":false},
    {"ingles":"access","portugues":"acesso","visibilidade":false},
    {"ingles":"accident","portugues":"acidente","visibilidade":false},
    {"ingles":"accompany","portugues":"acompanhar","visibilidade":true},
    {"ingles":"accomplish","portugues":"realizar","visibilidade":true},
    {"ingles":"according","portugues":"de acordo com","visibilidade":true},



]