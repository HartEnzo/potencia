const prompt = require('prompt-sync')();
console.log("Vamos calcular uma potencia")

let base = prompt("Base: ")

console.log(typeof base)

base = +base

let expoente = +prompt("Expoente: ")
let resultado = base
let base_aux = base
for (let j =1; j < expoente; j++){
    
    for(let i= 1; i < base; i++){

    resultado += base_aux
}
base_aux = resultado
}
console.log(resultado)