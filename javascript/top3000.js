$(() => {
    let idAprender = 1
    let idAprendida = 1


    palavras_aprendendo.forEach(element => {
        if (element.visibilidade) {
            addTable(element, idAprender, "tbody-aprender")
            idAprender++;
        }
    });
    palavras_aprendidas.forEach(element => {
        if (!element.visibilidade) {
            addTable(element, idAprendida, "tbody-aprendida")
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


    $('#tabela-dados').DataTable({
        "pageLength": 25, // Define a quantidade de linhas por página
        "lengthMenu": [[25, 50, 100, 200, 300], [25, 50, 100, 200, 300]]
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
    palavras_aprendidas.forEach(element => {
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
    palavras_aprendidas.forEach((obj) => {

        text += "\n" + JSON.stringify(obj) + ",";
    });
    console.log(text)
}

function listTrue() {
    //  console.log(JSON.stringify(topPalavras))
    let text = ""
    palavras_aprendidas.forEach((obj) => {
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
const palavras_aprendendo = [
    { "ingles": "anger", "portugues": "raiva", "visibilidade": true },
    { "ingles": "anyway", "portugues": "de qualquer maneira", "visibilidade": true },
    { "ingles": "apart", "portugues": "separado", "visibilidade": true },
    { "ingles": "apartment", "portugues": "apartamento", "visibilidade": true },
    { "ingles": "apparent", "portugues": "aparente", "visibilidade": true },
    { "ingles": "apparently", "portugues": "aparentemente", "visibilidade": true },
    { "ingles": "appeal", "portugues": "apelar", "visibilidade": true },
    { "ingles": "appear", "portugues": "aparecer", "visibilidade": true },
    { "ingles": "appearance", "portugues": "aparência", "visibilidade": true },
    
    
]
const palavras_aprendidas = [
  
    { "ingles": "a", "portugues": "um/uma", "visibilidade": false },
    { "ingles": "abandon", "portugues": "abandonar", "visibilidade": false },
    { "ingles": "ability", "portugues": "habilidade", "visibilidade": false },
    { "ingles": "able", "portugues": "capaz", "visibilidade": false },
    { "ingles": "abortion", "portugues": "aborto", "visibilidade": false },
    { "ingles": "about", "portugues": "sobre", "visibilidade": false },
    { "ingles": "above", "portugues": "acima", "visibilidade": false },
    { "ingles": "abroad", "portugues": "no exterior", "visibilidade": false },
    { "ingles": "absence", "portugues": "ausência", "visibilidade": false },
    { "ingles": "absolute", "portugues": "absoluto", "visibilidade": false },
    { "ingles": "absolutely", "portugues": "absolutamente", "visibilidade": false },
    { "ingles": "absorb", "portugues": "absorver", "visibilidade": false },
    { "ingles": "abuse", "portugues": "abuso", "visibilidade": false },
    { "ingles": "academic", "portugues": "acadêmico", "visibilidade": false },
    { "ingles": "accept", "portugues": "aceitar", "visibilidade": false },
    { "ingles": "access", "portugues": "acesso", "visibilidade": false },
    { "ingles": "accident", "portugues": "acidente", "visibilidade": false },
    { "ingles": "accompany", "portugues": "acompanhar", "visibilidade": false },
    { "ingles": "accomplish", "portugues": "realizar", "visibilidade": false },
    { "ingles": "according", "portugues": "de acordo com", "visibilidade": false },
    { "ingles": "account", "portugues": "conta", "visibilidade": false },
    { "ingles": "accurate", "portugues": "preciso", "visibilidade": false },
    { "ingles": "accuse", "portugues": "acusar", "visibilidade": false },
    { "ingles": "achieve", "portugues": "alcançar", "visibilidade": false },
    { "ingles": "achievement", "portugues": "realização", "visibilidade": false },
    { "ingles": "acid", "portugues": "ácido", "visibilidade": false },
    { "ingles": "acknowledge", "portugues": "reconhecer", "visibilidade": false },
    { "ingles": "acquire", "portugues": "adquirir", "visibilidade": false },
    { "ingles": "across", "portugues": "através", "visibilidade": false },
    { "ingles": "act", "portugues": "agir", "visibilidade": false },
    { "ingles": "action", "portugues": "ação", "visibilidade": false },
    { "ingles": "active", "portugues": "ativo", "visibilidade": false },
    { "ingles": "activist", "portugues": "ativista", "visibilidade": false },
    { "ingles": "activity", "portugues": "atividade", "visibilidade": false },
    { "ingles": "actor", "portugues": "ator", "visibilidade": false },
    { "ingles": "actress", "portugues": "atriz", "visibilidade": false },
    { "ingles": "actual", "portugues": "real", "visibilidade": false },
    { "ingles": "actually", "portugues": "na verdade", "visibilidade": false },
    { "ingles": "ad", "portugues": "anúncio", "visibilidade": false },
    { "ingles": "adapt", "portugues": "adaptar", "visibilidade": false },
    { "ingles": "add", "portugues": "adicionar", "visibilidade": false },
    { "ingles": "addition", "portugues": "adição", "visibilidade": false },
    { "ingles": "additional", "portugues": "adicional", "visibilidade": false },
    { "ingles": "address", "portugues": "endereço", "visibilidade": false },
    { "ingles": "adequate", "portugues": "adequado", "visibilidade": false },
    { "ingles": "adjust", "portugues": "ajustar", "visibilidade": false },
    { "ingles": "adjustment", "portugues": "ajuste", "visibilidade": false },
    { "ingles": "administration", "portugues": "administração", "visibilidade": false },
    { "ingles": "administrator", "portugues": "administrador", "visibilidade": false },
    { "ingles": "admire", "portugues": "admirar", "visibilidade": false },
    { "ingles": "admission", "portugues": "admissão", "visibilidade": false },
    { "ingles": "admit", "portugues": "admitir", "visibilidade": false },
    { "ingles": "adolescent", "portugues": "adolescente", "visibilidade": false },
    { "ingles": "adopt", "portugues": "adotar", "visibilidade": false },
    { "ingles": "adult", "portugues": "adulto", "visibilidade": false },
    { "ingles": "advance", "portugues": "avançar", "visibilidade": false },
    { "ingles": "advanced", "portugues": "avançado", "visibilidade": false },
    { "ingles": "advantage", "portugues": "vantagem", "visibilidade": false },
    { "ingles": "adventure", "portugues": "aventura", "visibilidade": false },
    { "ingles": "advertising", "portugues": "publicidade", "visibilidade": false },
    { "ingles": "advice", "portugues": "conselho", "visibilidade": false },
    { "ingles": "advise", "portugues": "aconselhar", "visibilidade": false },
    { "ingles": "adviser", "portugues": "consultor", "visibilidade": false },
    { "ingles": "advocate", "portugues": "defensor", "visibilidade": false },
    { "ingles": "affair", "portugues": "assunto/caso", "visibilidade": false },
    { "ingles": "affect", "portugues": "afetar", "visibilidade": false },
    { "ingles": "afford", "portugues": "permitir/arcar", "visibilidade": false },
    { "ingles": "afraid", "portugues": "com medo", "visibilidade": false },
    { "ingles": "African", "portugues": "africano", "visibilidade": false },
    { "ingles": "African-American", "portugues": "afro-americano", "visibilidade": false },
    { "ingles": "after", "portugues": "depois", "visibilidade": false },
    { "ingles": "afternoon", "portugues": "tarde", "visibilidade": false },
    { "ingles": "again", "portugues": "novamente", "visibilidade": false },
    { "ingles": "against", "portugues": "contra", "visibilidade": false },
    { "ingles": "age", "portugues": "idade", "visibilidade": false },
    { "ingles": "agency", "portugues": "agência", "visibilidade": false },
    { "ingles": "agenda", "portugues": "agenda", "visibilidade": false },
    { "ingles": "agent", "portugues": "agente", "visibilidade": false },
    { "ingles": "aggressive", "portugues": "agressivo", "visibilidade": false },
    { "ingles": "ago", "portugues": "atrás", "visibilidade": false },
    { "ingles": "agree", "portugues": "concordar", "visibilidade": false },
    { "ingles": "agreement", "portugues": "acordo", "visibilidade": false },
    { "ingles": "agricultural", "portugues": "agrícola", "visibilidade": false },
    { "ingles": "ah", "portugues": "ah", "visibilidade": false },
    { "ingles": "ahead", "portugues": "adiante", "visibilidade": false },
    { "ingles": "aid", "portugues": "ajuda", "visibilidade": false },
    { "ingles": "aide", "portugues": "ajudante", "visibilidade": false },
    { "ingles": "AIDS", "portugues": "AIDS", "visibilidade": false },
    { "ingles": "aim", "portugues": "objetivo", "visibilidade": false },
    { "ingles": "air", "portugues": "ar", "visibilidade": false },
    { "ingles": "aircraft", "portugues": "aeronave", "visibilidade": false },
    { "ingles": "airline", "portugues": "companhia aérea", "visibilidade": false },
    { "ingles": "airport", "portugues": "aeroporto", "visibilidade": false },
    { "ingles": "album", "portugues": "álbum", "visibilidade": false },
    { "ingles": "alcohol", "portugues": "álcool", "visibilidade": false },
    { "ingles": "alive", "portugues": "vivo", "visibilidade": false },
    { "ingles": "all", "portugues": "todo", "visibilidade": false },
    { "ingles": "alliance", "portugues": "aliança", "visibilidade": false },
    { "ingles": "allow", "portugues": "permitir", "visibilidade": false },
    { "ingles": "ally", "portugues": "aliado", "visibilidade": false },
    { "ingles": "alone", "portugues": "sozinho", "visibilidade": false },
    { "ingles": "along", "portugues": "ao longo de", "visibilidade": false },
    { "ingles": "already", "portugues": "já", "visibilidade": false },
    { "ingles": "also", "portugues": "também", "visibilidade": false },
    { "ingles": "alter", "portugues": "alterar", "visibilidade": false },
    { "ingles": "alternative", "portugues": "alternativa", "visibilidade": false },
    { "ingles": "always", "portugues": "sempre", "visibilidade": false },
    { "ingles": "AM", "portugues": "AM", "visibilidade": false },
    { "ingles": "amazing", "portugues": "incrível", "visibilidade": false },
    { "ingles": "American", "portugues": "americano", "visibilidade": false },
    { "ingles": "analysis", "portugues": "análise", "visibilidade": false },
    { "ingles": "analyst", "portugues": "analista", "visibilidade": false },
    { "ingles": "analyze", "portugues": "analisar", "visibilidade": false },
    { "ingles": "and", "portugues": "e", "visibilidade": false },
    { "ingles": "animal", "portugues": "animal", "visibilidade": false },
    { "ingles": "anniversary", "portugues": "aniversário", "visibilidade": false },
    { "ingles": "anything", "portugues": "qualquer coisa", "visibilidade": true },
    { "ingles": "anywhere", "portugues": "qualquer lugar", "visibilidade": true },
    { "ingles": "although", "portugues": "embora", "visibilidade": false },
    { "ingles": "among", "portugues": "entre", "visibilidade": false },
    { "ingles": "almost", "portugues": "quase", "visibilidade": false },
    { "ingles": "angry", "portugues": "irritado", "visibilidade": false },
    { "ingles": "anyone", "portugues": "qualquer pessoa", "visibilidade": false },
    { "ingles": "apple", "portugues": "maçã", "visibilidade": false },
    { "ingles": "angle", "portugues": "ângulo", "visibilidade": false },
    { "ingles": "anxiety", "portugues": "ansiedade", "visibilidade": false },
    { "ingles": "anticipate", "portugues": "antecipar", "visibilidade": false },
    { "ingles": "announce", "portugues": "anunciar", "visibilidade": false },
    { "ingles": "ancient", "portugues": "antigo", "visibilidade": false },
    { "ingles": "any", "portugues": "qualquer", "visibilidade": false },
    { "ingles": "anybody", "portugues": "qualquer um", "visibilidade": false },
    { "ingles": "anymore", "portugues": "não mais", "visibilidade": false },
    { "ingles": "amount", "portugues": "quantidade", "visibilidade": false },
    { "ingles": "answer", "portugues": "resposta", "visibilidade": false },
    { "ingles": "another", "portugues": "outro", "visibilidade": false },
    { "ingles": "annual", "portugues": "anual", "visibilidade": false },

]