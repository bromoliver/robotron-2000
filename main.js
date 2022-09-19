const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

somar.addEventListener("click", () => {manipula_dados("somar")})

subtrair.addEventListener("click", (evento) => {manipula_dados("subtrair")})

function manipula_dados(operacao){
    if(operacao === "subtrair"){
        braco.value = parseInt(braco.value) - 1

    }else{
        braco.value = parseInt(braco.value) + 1
    }
}