

$(() => {

    grupoA.forEach(element => {
        console.log(element)
        addTable(element)
    });
    // preencherCartelaNumerica();
})


function addTable(palavras) {

    let id = palavras.id;
    let palavraIngles = palavras.palavraIngles;
    let palavraPortugues = palavras.palavraPortugues;


    let trTable = $("<tr>");
    let thTableId = $("<th>").attr("scope", "row").text(id);
    let iconePlay = $("<i>").attr("class", "fas fa-play material-icons")
    let button = $("<button>").attr("type", "button").attr("class", "play-button").attr("onclick", `playAudio('${palavraIngles}')`).append(iconePlay);;
    let tdTableButton = $("<td>").attr("scope", "row").append(button);
    let tdTablePalavra = $("<td>").attr("scope", "row").text(palavraIngles);

    let imagem = $("<img>").attr("src", `./imagem/${palavraIngles}.png`).attr("alt", palavraPortugues).attr("title", palavraPortugues).attr("width", 50);
    let tdTableImagem = $("<td>").attr("scope", "row").append(imagem);

    trTable.append(thTableId);
    trTable.append(tdTableButton);
    trTable.append(tdTablePalavra);
    trTable.append(tdTableImagem);

    table = $("#myTable");
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

    ]

