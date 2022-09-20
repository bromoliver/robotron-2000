const controle = document.querySelectorAll(".controle-ajuste")



controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipula_dados(evento.target.textContent, evento.target.parentNode)
    })

})




function manipula_dados(operacao, controle){
    const peca = controle.querySelector(".controle-contador")
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1

    }else{
        peca.value = parseInt(peca.value) + 1
    }
}