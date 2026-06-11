// analise booleana
let status = true
let ação = prompt("indique uma ação 0 ou 1");


if(ação!=="" && ação<=1  && ação>=0){ 
let confimar =confirm("deseja alterar o sistema?");

if(confimar){

if(ação===0){
    status = false
   console.log(`O SISTEMA FOI DESATIVADO
    O STATUS AGORA É ${status}`)
    
}else{(` O SISTEMA ESTÁ ATIVADO
    O STATUS É ${status}`)
}

    console.log(`Voce confirmou a alteraçao${ação}`)


} else {
  alert ("você canncelou a alteração")

}
}

 else { alert ("você nao informou o código de ação")

}