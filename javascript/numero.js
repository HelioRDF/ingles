$(() => {
    let id = 1
    numero.forEach(element => {
        addTable(element, id, "numero")
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
        "play").attr("src", `./audio/numero/${palavraIngles
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

const numero =
    [
        {
            palavraIngles: "one",
            palavraPortugues: "1",
        },
        {
            palavraIngles: "two",
            palavraPortugues: "2",
        }, {
            palavraIngles: "three",
            palavraPortugues: "3",
        }, {
            palavraIngles: "four",
            palavraPortugues: "4",
        }, {
            palavraIngles: "five",
            palavraPortugues: "5",
        }, {
            palavraIngles: "six",
            palavraPortugues: "6",
        }, {
            palavraIngles: "seven",
            palavraPortugues: "7",
        }, {
            palavraIngles: "eight",
            palavraPortugues: "8",
        }, {
            palavraIngles: "nine",
            palavraPortugues: "9",
        }, {
            palavraIngles: "ten",
            palavraPortugues: "10",
        },
    ]

