function carregar() {

var agora = new  Date
var ano = Number(agora.getFullYear())
var hora = Number(agora.getHours())
var dia = Number(agora.getDate())
var semana0 = agora.getDay()
var mês0 = agora.getMonth()
/*tanto month quanto mês resultam em números, para converter os números para nomes dos mese e dias das semanas foram usados dois  'switch' */
var res = document.getElementById('p')
var fundo = document.getElementById('fundo') //a imagem que aparece na tela
var body = document.getElementById('body') // o proprio body
switch ( mês0 ) {

case 0 :
    var mes = 'janeiro'
    break
case 1 :
    var mes = 'fevereiro'
    break
case 2 :
    var mes = 'março'
    break
case 3:
    var mes = "abril"
    break
case 4 : 
    var mes = 'maio'
    break
case 5 :
    var mes = 'junho'
    break
case 6: 
    var mes = 'julho'
    break
case 7:
    var mes = 'agosto'
    break
case 8:
    var mes = 'setembro'
    break
case 9 :
    var mes ='outubro'
    break
case 10 : 
    var mes = 'novembro'
    break
case 11 :
    var mes = 'dezembro'
    break



}

switch (semana0)  {

case 0 :
    var c = " um domingo"
    break
case 1 :
    var c = " uma segunda feira "
    break
case 2:
    var c = " uma terça feira " 
    break
case 3 :
    var c = " uma quarta feira "
    break
case 4 :
    var c = " uma quinta feira "
    break
case 5 :
    var c = " uma sexta feira "
    break
case 6 :
    var c = 'um sábado'
    break


}


if (hora <= 5){
body.style.background = 'rgb(86, 33, 97)'
var s = 'boa madrugada'
fundo.src = 'imgs/madrugada.jfif'
}else if(hora <=12){
    body.style.background = 'rgb(227, 247, 173)'
var s = 'bom dia'
fundo.src = 'imgs/manha.jfif'
}else if(hora <=18){
    body.style.background = 'rgb(94, 122, 206)'
    var s = 'boa tarde'
    fundo.src = 'imgs/dia.jfif'
}else if(hora <24){
    body.style.background = 'rgb(18, 37, 92)'
    var s = 'boa noite'
    fundo.src = 'imgs/noite cidade.jfif'
}

/* mes - mês , janeiro fevereiro março...
   dia - 1 2 3 4 5 6 ...
   ano - 2001 2002 2003 2004 ...
    s  - bom dia boa tarde bo...
    c  - segunda-feira terça-feira quar...
*/

res.innerText = `${s}, hoje é ${dia} de ${mes} de ${ano}, ${c}   `


}
