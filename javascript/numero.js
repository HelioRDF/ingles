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
        {
            palavraIngles: "eleven",
            palavraPortugues: "11",
        },
        {
            palavraIngles: "twelve",
            palavraPortugues: "12",
        },
        {
            palavraIngles: "thirteen",
            palavraPortugues: "13",
        },
        {
            palavraIngles: "fourteen",
            palavraPortugues: "14",
        },
        {
            palavraIngles: "fifteen",
            palavraPortugues: "15",
        },
        {
            palavraIngles: "sixteen",
            palavraPortugues: "16",
        },
        {
            palavraIngles: "seventeen",
            palavraPortugues: "17",
        },
        {
            palavraIngles: "eighteen",
            palavraPortugues: "18",
        },
        {
            palavraIngles: "nineteen",
            palavraPortugues: "19",
        },
        {
            palavraIngles: "twenty",
            palavraPortugues: "20",
        },
        {
            palavraIngles: "twenty one",
            palavraPortugues: "21",
        },
        {
            palavraIngles: "twenty two",
            palavraPortugues: "22",
        },
        {
            palavraIngles: "twenty three",
            palavraPortugues: "23",
        },
        {
            palavraIngles: "twenty four",
            palavraPortugues: "24",
        },
        {
            palavraIngles: "twenty five",
            palavraPortugues: "25",
        },
        {
            palavraIngles: "twenty six",
            palavraPortugues: "26",
        },
        {
            palavraIngles: "twenty seven",
            palavraPortugues: "27",
        },
        {
            palavraIngles: "twenty eight",
            palavraPortugues: "28",
        },
        {
            palavraIngles: "twenty nine",
            palavraPortugues: "29",
        },
        {
            palavraIngles: "thirty",
            palavraPortugues: "30",
        },
        {
            palavraIngles: "forty",
            palavraPortugues: "40",
        },
        {
            palavraIngles: "fifty",
            palavraPortugues: "50",
        },
        {
            palavraIngles: "sixty",
            palavraPortugues: "60",
        },
        {
            palavraIngles: "seventy",
            palavraPortugues: "70",
        },
        {
            palavraIngles: "eighty",
            palavraPortugues: "80",
        },
        {
            palavraIngles: "ninety",
            palavraPortugues: "90",
        },
        {
            palavraIngles: "one hundred",
            palavraPortugues: "50",
        },
    ]

