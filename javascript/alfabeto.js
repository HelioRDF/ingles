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
    table = $("#" + table);
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
            palavraPortugues: "Ái",
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
            palavraIngles: "C",
            palavraPortugues: "CI",
        }, {
            palavraIngles: "D",
            palavraPortugues: "DI",
        },
        {
            palavraIngles: "E",
            palavraPortugues: "I",
        },
        {
            palavraIngles: "F",
            palavraPortugues: "ÉF",
        },
        {
            palavraIngles: "G",
            palavraPortugues: "GI",
        },
        {
            palavraIngles: "H",
            palavraPortugues: "EICH",
        },
        {
            palavraIngles: "I",
            palavraPortugues: "ÁI",
        },

        {
            palavraIngles: "J",
            palavraPortugues: "JEI",
        },

        {
            palavraIngles: "K",
            palavraPortugues: "KEI",
        },

        {
            palavraIngles: "L",
            palavraPortugues: "ÉL",
        },

        {
            palavraIngles: "M",
            palavraPortugues: "EM",
        },

        {
            palavraIngles: "N",
            palavraPortugues: "EN",
        },

        {
            palavraIngles: "O",
            palavraPortugues: "OU",
        },

        {
            palavraIngles: "P",
            palavraPortugues: "PI",
        },

        {
            palavraIngles: "Q",
            palavraPortugues: "KIU",
        },

        {
            palavraIngles: "R",
            palavraPortugues: "AR",
        },
        {
            palavraIngles: "S",
            palavraPortugues: "ÉS",
        },
        {
            palavraIngles: "T",
            palavraPortugues: "TI",
        },
        {
            palavraIngles: "U",
            palavraPortugues: "YU",
        },
        {
            palavraIngles: "V",
            palavraPortugues: "VI",
        },
        {
            palavraIngles: "W",
            palavraPortugues: "DOBIU",
        },
        {
            palavraIngles: "X",
            palavraPortugues: "ECS",
        },
        {
            palavraIngles: "Y",
            palavraPortugues: "UAI",
        },
        {
            palavraIngles: "Z",
            palavraPortugues: "ZI",
        },

    ]
