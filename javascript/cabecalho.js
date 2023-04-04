$(() => {
    console.log("cabeçalho")
    addheader()
})


function addheader() {

    let div_logo = $(".logo");
    let link_home = $("<a>").attr("href", "./index.html").text("English Review")
    div_logo.append(link_home);
    let my_header = $(".my-header");
    my_header.prepend(div_logo);

    let nav_logo = $(".mynav")
    let ul_logo = $("<ul>")
    let verbo_li = $("<li>")
    let verbo_link = $("<a>").attr("href", "./verbo.html").text("Verbo")
    verbo_li.append(verbo_link)
    let alfabeto_li = $("<li>")
    let alfabeto_link = $("<a>").attr("href", "./alfabeto.html").text("Alfabeto")
    alfabeto_li.append(alfabeto_link)
    let numero_li = $("<li>")
    let numero_link = $("<a>").attr("href", "./numero.html").text("Números")
    numero_li.append(numero_link)
    // let gramatica_li = $("<li>")
    //  let gramatica_link = $("<a>").attr("href", "./gramatica.html").text("Gramatica")
    //  gramatica_li.append(gramatica_link)
    let top3000_li = $("<li>")
    let top3000_link = $("<a>").attr("href", "./top3000.html").text("Top 3000")
    top3000_li.append(top3000_link)
    let quiz_li = $("<li>")
    let quiz_link = $("<a>").attr("href", "./quiz.html").text("Quiz")
    //quiz_li.append(quiz_link)
    ul_logo.append(verbo_li)
    ul_logo.append(alfabeto_li)
    ul_logo.append(numero_li)
    //ul_logo.append(gramatica_li)
    ul_logo.append(top3000_li)
    ul_logo.append(quiz_li)
    nav_logo.append(ul_logo)
    my_header.append(nav_logo);

}


/*
let div_speed = $("<div>");
let label_speed= $("<label>").attr("for","speed").text("Velocidade:")
let select_speed=$("<select>").attr("id","speed").attr("onchange","changeSpeed()")
let option_a=$("<option>").attr("value",0.5).prop('selected', true).text("0.5")
let option_b=$("<option>").attr("value",0.7).text("0.7")
let option_c=$("<option>").attr("value",0.9).text("0.9")
let option_d=$("<option>").attr("value",1).text("1")
let option_e=$("<option>").attr("value",1.5).text("1.5")
div_speed.append(label_speed);
select_speed.append(option_a)

select_speed.append(option_c)
select_speed.append(option_d)
select_speed.append(option_e)
div_speed.append(select_speed);
my_header.append(div_speed)
*/