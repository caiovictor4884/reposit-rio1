








function clicar(){

 
    var fim =  Number(document.getElementById('1').value)
    var passo = Number(document.getElementById('2').value)
    var res = document.getElementById("res")

    var input2 = document.getElementById('b2')

    input2.style.display = 'inline-block'


    for ( c = 0  ; c < fim    ;  c = c + passo  )
    {

        var etapa =  c / passo
        var Es = etapa.toString()
        var I =  'd'+ Es
        var I2 = "i" + Es


        res.innerHTML += ` <p class = 'aparecido' id = '${I}'
        >${c} km -- hora ${I}
        <input type="text"  id = '${I2}'  >   </p>     `

    }




}
/* seria possível transportar vars de uma função para outra usando o return? */
function clicar2() {

var res2 = document.getElementById('res2')
var fim =  Number(document.getElementById('1').value)
var passo = Number(document.getElementById('2').value)
var horas = document.getElementsByClassName('aparecido')

for(d = 0 ; d < fim ; d = d + passo   ) {

var b1 = d / passo    
var b2 = b1.toString()
var b3 = "i" + b2
 res2.innerHTML +=   ` <div class = "aparecido2t"   > hora  ${b2}   </div>      <div class = "aparecido2"   >   ${document.getElementById(b3).value}  </div>  `







}




}

function apagartudo()   {
res = document.getElementById('res')
res2 = document.getElementById('res2')

res.innerHTML = "..."
res2.innerHTML = "..."



}