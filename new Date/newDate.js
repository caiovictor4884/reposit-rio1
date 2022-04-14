var agora = new Date
var atual=[/*0*/ agora.getDay()   , /*1*/ agora.getDate() ,
           /*2*/ agora.getMonth() , /*3*/ agora.getFullYear() ,
            /*4*/ agora.getHours() , /*5*/ agora.getMinutes()   
          ]

var res = document.getElementById('res')
var res2 = document.getElementById('res2')
var imgprincipal = document.getElementById('principal')
var picture = document.getElementsByClassName('blue')
var body = document.getElementById('fire')

function  maiormenor1(n) {

if ( n == 1){

    return `${n} hora  `
}else{
return `${n} horas  `

}

}/* plural ou singular de hora */

function maiormenor2(n) {

    if ( n == 1){
    
        return `${n} minuto `
    }else{
    return `${n} minutos  `
    
    }
    
}/* plural ou singular de minuto */

switch (atual[2]) {

case 0 :
    var m = 'janeiro'
        break
case 1:
    var m = 'fevereiro'
        break
case 2:
    var m = 'março'
        break
case 3:
    var m = 'abril'
        break
case 4:
    var m = 'maio'
        break
case 5:
    var m = 'junho'
        break
case 6:
    var m = 'julho'
        break
case 7:
    var m = 'agosto'
        break
case 8:
    var m = 'setembro'
        break
case 9 :
    var m = 'outubro'
        break
case 10:
    var m = 'novembro'
        break
case 11:
    var m = 'dezembro'
        break

}// var m = mês

switch (atual[0]) {

    case 0 :
        var s = 'domingo'
            break
    case 1:
        var s = 'segunda feira'
            break
    case 2:
        var s = 'terça feira'
            break
    case 3:
        var s = 'quarta feira'
            break
    case 4:
        var s = 'quinta feira'
            break
    case 5:
        var s = 'sexta feira'
            break
    case 6:
        var s = 'sábado'
            break

}// var s = dias da semana

function bom(n1) {
    if      (n1 < 4 ) { return {fala : 'boa madrugada' ,   src : "url(IMGS/hora/imgjs4.jfif)" }}
    else if (n1 <= 5 ){ return {fala : 'boa madrugada' ,   src : "url(IMGS/hora/imgjs3.jfif)" }}
    else if (n1 < 8 ){ return {fala : 'bom dia'       ,   src : "url(IMGS/hora/imgjs1.jfif)" }}
    else if (n1 < 12){ return {fala : 'bom dia'       ,   src : "url(IMGS/hora/imgjs2.jfif)" }}
    else if (n1 < 17) { return {fala : 'boa tarde'     ,   src : "url(IMGS/hora/imgjs2.jfif)" }}
    else if (n1 <= 18){ return {fala : 'boa tarde'     ,   src : "url(IMGS/hora/imgjs5.jfif)" }}
    else              { return {fala : 'boa noite'     ,   src : "url(IMGS/hora/imgjs4.jfif)" }}
    


 } /* define a saudação e a imagem de fundo 
 ultilizadas com base a na var hora */ 


 function feriado ( n1 , n2 ) {

    /*Natal */if( n1 == 11 &&  20 < n2 < 30   ) {
    
            return{ A : 'é natal' 
            , B : 'IMGS/natal/NeA.jpg' , C : 'IMGS/natal/NeB.jpg'
            , D : 'IMGS/natal/NeC.jpg', E : 'IMGS/natal/NeD.jpg'  }
        }
    /*ano novo */else if( n1 == 11 || n2 >= 30  &&  n1 ==0 || n2 < 2   )  {
    
            return{ A : 'é ano novo' 
            , B : 'IMGS/anonovo/AeA.jpg' , C : 'IMGS/anonovo/AeB.jpg'
            , D : 'IMGS/anonovo/AeC.jpg', E : 'IMGS/anonovo/AeD.jpg'  }
        }
    /*carnaval*/else if( n1 == 1 || n2 >=25 &&  n1 == 2 &&   n2 <= 2   ) {
    
            return{ A : 'é carnaval' 
            , B : 'IMGS/Carnaval/CeA.jpg' , C : 'IMGS/Carnaval/CeB.jpg'
            , D : 'IMGS/Carnaval/CeC.jpg', E : 'IMGS/Carnaval/CeD.jpg'  }
        }
      /*junino*/else if( n1 == 5 &&  11 < n2 < 30   ){
    
            return{ A : 'é São João' 
            , B : 'IMGS/junina/JeA.jpg' , C : 'IMGS/junina/JeB.jpg'
            , D : 'IMGS/junina/JeC.jpg', E : 'IMGS/junina/JeD.jpg'  }
        }
    /*hallowen*/else if( n1 == 9 &&  29 < n2 <= 31   ){
    
            return{ A : 'é hallowen' 
            , B : 'IMGS/hallowen/HeA.jpg' , C : 'IMGS/hallowen/HeB.jpg'
            , D : 'IMGS/hallowen/HeACjpg', E : 'IMGS/hallowen/HeD.jpg'  }
        }
    /*relógio */else{
    
            return{ A : 'é um dia normal' 
            , B : 'IMGS/relogio/ReA.jpg' , C : 'IMGS/relogio/ReB.jpg'
            , D : 'IMGS/relogio/ReC.jpg', E : 'IMGS/relogio/ReD.jpg'  }
        }   
    
    } // n1 = mes  n2 = dia
    



    picture[0].srcset   = feriado( atual[2] , atual[1] ).E
    picture[1].srcset   = feriado( atual[2] , atual[1] ).D
    picture[2].srcset   = feriado( atual[2] , atual[1] ).C
    picture[3].src      = feriado( atual[2] , atual[1] ).B
    res2.innerText      = feriado( atual[2] , atual[1] ).A


body.style.backgroundImage =   bom(atual[4]).src

res.innerText = `${bom(atual[4]).fala}, hoje é ${s}, ${atual[1]}de
 ${m}de ${atual[3]} e agora são ${maiormenor1(atual[4])}
e ${maiormenor2(atual[5])}     ` 
