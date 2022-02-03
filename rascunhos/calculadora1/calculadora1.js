
function clicar() {
var n1 = document.getElementById("1").value
var n2  = document.getElementById("2").value
var nn1 = Number(n1)
var nn2 = Number(n2)
auxi = document.getElementById('auxiliar')
var res = document.getElementById('res')
var name = document.getElementsByName('botão')

var num1 =  nn1 + nn2
var num2 = nn1 - nn2
var num3 = nn1 * nn2
var num4 = nn1 / nn2
var num5 = nn1 ** nn2
var num6   = nn1 ** (1/nn2)
var num7 = nn1 % nn2 

if (n1.length == 0   ) {
auxi.innerHTML = '<p class="aparecido"  >por favor, escolha os números  </p>'
}else if (name[0].checked) {res.innerHTML =  `<p class="aparecido"  > ${n1} + ${n2} é ${num1}                             </p>`
}else if (name[1].checked ){ res.innerHTML = `<p class="aparecido"  > ${n1} - ${n2} é ${num2}                             </p>` 
}else if (name[2].checked ){ res.innerHTML = `<p class="aparecido"  > ${n1} X ${n2} é ${num3}                              </p>`
}else if (name[3].checked ){ res.innerHTML = `<p class="aparecido"  > ${n1} / ${n2} é ${num4}                               </p>`
}else if (name[4].checked ){ res.innerHTML = `<p class="aparecido"  > ${n1}  <sup>${n2}</sup> é ${num5}                       </p>`
}else if (name[5].checked ){ res.innerHTML = `<p class="aparecido"  >  a raiz de índice  ${n2} de ${n1} é ${num6}                          </p>`
}else if (name[6].checked ){ res.innerHTML = `<p class="aparecido"  > o resto da divisão inteira de  ${n1}  por  ${n2} é ${num7}  </p>`
}else{ auxi.innerHTML = '<p class="aparecido"  >por favor, escolha uma opção  </p>'  } 








}
function ajudar()  {

    var n1 = document.getElementById("1").value
    var n2  = document.getElementById("2").value
    var nn1 = Number(n1)
    var nn2 = Number(n2)
    var nl = n1.length 
    var auxi = document.getElementById('auxiliar')
    var res = document.getElementById('res')
    res.innerText = 'res'
    var name = document.getElementsByName('botão')


      if (name[0].checked) {auxi.innerHTML = '<p class="aparecido"  >ajuda0 </p>'
}else if (name[1].checked ){ auxi.innerHTML = '<p class="aparecido"  >ajuda1  </p>' 
}else if (name[2].checked ){ auxi.innerHTML = '<p class="aparecido"  >ajuda2  </p>'
}else if (name[3].checked ){ auxi.innerHTML = '<p class="aparecido"  >ajuda3  </p>'
}else if (name[4].checked ){ auxi.innerHTML = '<p class="aparecido"  >ajuda4  </p>'
}else if (name[5].checked ){ auxi.innerHTML = '<p class="aparecido"  >ajuda5  </p>'
}else if (name[6].checked ){auxi.innerHTML = `<p class="aparecido"  > ajuda6   </p>`
}




}


