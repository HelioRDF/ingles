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
            idAprendida++;
        }
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

function listTrue() {
    //  console.log(JSON.stringify(topPalavras))
    let text = ""
    topPalavras.forEach((obj) => {
        if (obj.visibilidade == true) {
            text += "\n" + JSON.stringify(obj) + ",";
        }
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
{"ingles":"able","portugues":"capaz","visibilidade":false},
{"ingles":"abortion","portugues":"aborto","visibilidade":false},
{"ingles":"about","portugues":"sobre","visibilidade":false},
{"ingles":"above","portugues":"acima","visibilidade":false},
{"ingles":"abroad","portugues":"no exterior","visibilidade":false},
{"ingles":"absence","portugues":"ausência","visibilidade":false},
{"ingles":"absolute","portugues":"absoluto","visibilidade":false},
{"ingles":"absolutely","portugues":"absolutamente","visibilidade":false},
{"ingles":"absorb","portugues":"absorver","visibilidade":false},
{"ingles":"abuse","portugues":"abuso","visibilidade":false},
{"ingles":"academic","portugues":"acadêmico","visibilidade":false},
{"ingles":"accept","portugues":"aceitar","visibilidade":false},
{"ingles":"access","portugues":"acesso","visibilidade":false},
{"ingles":"accident","portugues":"acidente","visibilidade":false},
{"ingles":"accompany","portugues":"acompanhar","visibilidade":false},
{"ingles":"accomplish","portugues":"realizar","visibilidade":true},
{"ingles":"according","portugues":"de acordo com","visibilidade":false},
{"ingles":"account","portugues":"conta","visibilidade":false},
{"ingles":"accurate","portugues":"preciso","visibilidade":false},
{"ingles":"accuse","portugues":"acusar","visibilidade":false},
{"ingles":"achieve","portugues":"alcançar","visibilidade":true},
{"ingles":"achievement","portugues":"realização","visibilidade":true},
{"ingles":"acid","portugues":"ácido","visibilidade":false},
{"ingles":"acknowledge","portugues":"reconhecer","visibilidade":false},
{"ingles":"acquire","portugues":"adquirir","visibilidade":false},
{"ingles":"across","portugues":"através","visibilidade":false},
{"ingles":"act","portugues":"agir","visibilidade":false},
{"ingles":"action","portugues":"ação","visibilidade":false},
{"ingles":"active","portugues":"ativo","visibilidade":false},
{"ingles":"activist","portugues":"ativista","visibilidade":false},
{"ingles":"activity","portugues":"atividade","visibilidade":false},
{"ingles":"actor","portugues":"ator","visibilidade":false},
{"ingles":"actress","portugues":"atriz","visibilidade":false},
{"ingles":"actual","portugues":"real","visibilidade":false},
{"ingles":"actually","portugues":"na verdade","visibilidade":true},
{"ingles":"ad","portugues":"anúncio","visibilidade":false},
{"ingles":"adapt","portugues":"adaptar","visibilidade":false},
{"ingles":"add","portugues":"adicionar","visibilidade":false},
{"ingles":"addition","portugues":"adição","visibilidade":false},
{"ingles":"additional","portugues":"adicional","visibilidade":false},
{"ingles":"address","portugues":"endereço","visibilidade":false},
{"ingles":"adequate","portugues":"adequado","visibilidade":false},
{"ingles":"adjust","portugues":"ajustar","visibilidade":false},
{"ingles":"adjustment","portugues":"ajuste","visibilidade":false},
{"ingles":"administration","portugues":"administração","visibilidade":false},
{"ingles":"administrator","portugues":"administrador","visibilidade":false},
{"ingles":"admire","portugues":"admirar","visibilidade":false},
{"ingles":"admission","portugues":"admissão","visibilidade":false},
{"ingles":"admit","portugues":"admitir","visibilidade":false},
{"ingles":"adolescent","portugues":"adolescente","visibilidade":false},
{"ingles":"adopt","portugues":"adotar","visibilidade":false},
{"ingles":"adult","portugues":"adulto","visibilidade":false},
{"ingles":"advance","portugues":"avançar","visibilidade":false},
{"ingles":"advanced","portugues":"avançado","visibilidade":false},
{"ingles":"advantage","portugues":"vantagem","visibilidade":false},
{"ingles":"adventure","portugues":"aventura","visibilidade":false},
{"ingles":"advertising","portugues":"publicidade","visibilidade":false},
{"ingles":"advice","portugues":"conselho","visibilidade":true},
{"ingles":"advise","portugues":"aconselhar","visibilidade":true},
{"ingles":"adviser","portugues":"consultor","visibilidade":true},
{"ingles":"advocate","portugues":"defensor","visibilidade":false},
{"ingles":"affair","portugues":"assunto/caso","visibilidade":true},
{"ingles":"affect","portugues":"afetar","visibilidade":false},
{"ingles":"afford","portugues":"permitir/arcar","visibilidade":true},
{"ingles":"afraid","portugues":"com medo","visibilidade":true},
{"ingles":"African","portugues":"africano","visibilidade":false},
{"ingles":"African-American","portugues":"afro-americano","visibilidade":false},
{"ingles":"after","portugues":"depois","visibilidade":false},
{"ingles":"afternoon","portugues":"tarde","visibilidade":false},
{"ingles":"again","portugues":"novamente","visibilidade":false},
{"ingles":"against","portugues":"contra","visibilidade":true},
{"ingles":"age","portugues":"idade","visibilidade":false},
{"ingles":"agency","portugues":"agência","visibilidade":false},

]