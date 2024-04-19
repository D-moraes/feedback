function pegarNota() {
    let nota = localStorage.getItem("nota")

    let pNota = document.querySelector(".p_nota")

    pNota.innerHTML = `Você selecionou ${nota} de 5`
}

pegarNota()