var b0 = document.getElementById('clicar0')
var b1 = document.getElementById('clicar1')
var b2 = document.getElementById('clicar2')

b0.addEventListener( 'click' , clicar0  )
b1.addEventListener( 'click' , clicar1  )
b2.addEventListener( 'click' , clicar2  )


 function clicar0() {
var res1 = document.getElementById('res1')
var num = Number(document.getElementById('númerodecandidatos').value)

for ( c = 0 ; c < num ; c++   ){
res1.innerHTML += `
<p>       candidato : 
<input type="text" name="nomecan" id="">
    número de votos :
<input type="number" name="votoscan" id="">  </p> 
`
}
 }

function clicar1() {
var nomes = document.getElementsByName('nomecan')
var votos = document.getElementsByName('votoscan')
var num = Number(document.getElementById('númerodecandidatos').value)
var voton = [] // não sofrerá sort, enquanto voto sofrerá
var candidatos = {voto : [] , nome : []  }

for(c = 0 ; c < num ; c = c + 1 ){

candidatos.voto.push(Number(votos[c].value)) 
candidatos.nome.push(nomes[c].value) 
voton.push(Number(votos[c].value)) 

}//da valor a voton e candidatos
function calcnome(x,y,z){
return   y.nome[x.indexOf(z)]  
}//retorna o nome do candidato

res2.innerText = ` o candidato 
${calcnome( voton,candidatos ,
    candidatos.voto.sort()[candidatos.voto.length -1])} 
 obteve
    ${candidatos.voto.sort()[candidatos.voto.length -1]} 
    votos
`
}
