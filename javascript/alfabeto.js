$(() => {
    let id = 1
    vogal.forEach(element => {
        addTable(element, id, "vogal")
        id++;
    });
    alfabeto.forEach(element => {
        addTable(element, id, "alfabeto")
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

function addTable(palavras, id, table) {
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
  


    trTable.append(thTableId);
    trTable.append(tdTableButton);
   
    trTable.append(tdTablePalavra);
    trTable.append(tdTabletTraducao);
    table = $("#"+table);
    table.append(trTable);
}

const vogal =
    [
        {
            palavraIngles: "A",
            palavraPortugues: "Ei",
        },
        {
            palavraIngles: "E",
            palavraPortugues: "I",
        }, {
            palavraIngles: "I",
            palavraPortugues: "Ai",
        }, {
            palavraIngles: "O",
            palavraPortugues: "OU",
        }, {
            palavraIngles: "U",
            palavraPortugues: "YU",
        },
    ]

    const alfabeto =
    [
        {
            palavraIngles: "A",
            palavraPortugues: "Ei",
        },
        {
            palavraIngles: "B",
            palavraPortugues: "BI",
        }, {
            palavraIngles: "CI",
            palavraPortugues: "Ai",
        }, {
            palavraIngles: "DI",
            palavraPortugues: "OU",
        },
    ]
