// NÚMEROS E OPERAÇÕES \\

let v1 = 10
let v2 = 5

const tsoma = v1 + v2
const tmenos = v1 - v2
const tmultipli = v1 * v2
const tdivid = v1 / v2
console.log("OPERAÇÕES")
let num = 0
num ++


let somabr = tsoma.toLocaleString("pt-BR",
  {
   minimunFractionDigits:2,
   maximunFractionDigits:2 
  });

console.log(`
    
    CÁLCULO COM OPERADORES MATEMATICO

   VALOR 1: ${v1} e VALOR 2: ${v2}
   ${num++}.RESULTADO SOMA: ${tsoma}
   ${num++}.RESULTADO SUBTRAÇÃO: ${tmenos}
   ${num++}.RESULTADO MULTIPLICAÇÃO: ${tmultipli}
   ${num++}.RESULTADO DIVISÃO: ${tdivid}
   
      `)



let produto = "COMPUTADOR"
let valor = 2256.00
let desconto = 750.00
const valorTotal = valor - desconto

let valorfinal= valorTotal.toLocaleString("pt-BR" , {
   minimunFractiondigits: 2,
   maximunFractionDigits: 2 
}) 
 
console.log(`
     PRODUTO PROMOCIONAL
     -------------------
    PRODUTO: ${COMPUTADOR}
    VALOR: R$ ${2256.00}
    DESCONTO APLICADO: ${750.00}
    VALOR FINAL R$ ${ valorTotal = valor - desconto}

    

    `)



    
  