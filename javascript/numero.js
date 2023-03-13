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
    let ingles = palavras.ingles;
    let portugues = palavras.portugues;
    let divAudio = $("#audio")
    let audio = $("<audio>").attr("id", ingles).attr("class",
        "play").attr("src", `./audio/numero/${ingles
            }.mp3`)
    divAudio.append(audio)
    let trTable = $("<tr>");
    let thTableId = $("<th>").attr("scope",
        "row").text(id);
    let iconePlay = $("<i>").attr("class",
        "fas fa-play material-icons")
    let button = $("<button>").attr("type",
        "button").attr("class",
            "play-button").attr("onclick", `playAudio('${ingles
                }')`).append(iconePlay);;
    let tdTableButton = $("<td>").attr("scope",
        "row").append(button);
    let tdTablePalavra = $("<td>").attr("scope",
        "row").text(ingles.toUpperCase());
    let tdTabletTraducao = $("<td>").attr("scope",
        "row").text(portugues.toUpperCase());



   // trTable.append(thTableId);
    trTable.append(tdTableButton);

    trTable.append(tdTablePalavra);
    trTable.append(tdTabletTraducao);
    table = $("#" + table);
    table.append(trTable);
}

const numero =
    [
        {
            ingles: "one",
            portugues: "1",
        },
        {
            ingles: "two",
            portugues: "2",
        }, {
            ingles: "three",
            portugues: "3",
        }, {
            ingles: "four",
            portugues: "4",
        }, {
            ingles: "five",
            portugues: "5",
        }, {
            ingles: "six",
            portugues: "6",
        }, {
            ingles: "seven",
            portugues: "7",
        }, {
            ingles: "eight",
            portugues: "8",
        }, {
            ingles: "nine",
            portugues: "9",
        }, {
            ingles: "ten",
            portugues: "10",
        },
        {
            ingles: "eleven",
            portugues: "11",
        },
        {
            ingles: "twelve",
            portugues: "12",
        },
        {
            ingles: "thirteen",
            portugues: "13",
        },
        {
            ingles: "fourteen",
            portugues: "14",
        },
        {
            ingles: "fifteen",
            portugues: "15",
        },
        {
            ingles: "sixteen",
            portugues: "16",
        },
        {
            ingles: "seventeen",
            portugues: "17",
        },
        {
            ingles: "eighteen",
            portugues: "18",
        },
        {
            ingles: "nineteen",
            portugues: "19",
        },
        {
            ingles: "twenty",
            portugues: "20",
        },
        {
            ingles: "twenty one",
            portugues: "21",
        },
        {
            ingles: "twenty two",
            portugues: "22",
        },
        {
            ingles: "twenty three",
            portugues: "23",
        },
        {
            ingles: "twenty four",
            portugues: "24",
        },
        {
            ingles: "twenty five",
            portugues: "25",
        },
        {
            ingles: "twenty six",
            portugues: "26",
        },
        {
            ingles: "twenty seven",
            portugues: "27",
        },
        {
            ingles: "twenty eight",
            portugues: "28",
        },
        {
            ingles: "twenty nine",
            portugues: "29",
        },
        {
            ingles: "thirty",
            portugues: "30",
        },
        {
            ingles: "forty",
            portugues: "40",
        },
        {
            ingles: "fifty",
            portugues: "50",
        },
        {
            ingles: "sixty",
            portugues: "60",
        },
        {
            ingles: "seventy",
            portugues: "70",
        },
        {
            ingles: "eighty",
            portugues: "80",
        },
        {
            ingles: "ninety",
            portugues: "90",
        },
        {
            ingles: "one hundred",
            portugues: "100",
        },
    ]

