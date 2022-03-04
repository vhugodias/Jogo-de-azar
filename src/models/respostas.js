class Respostas {
    static geraResposta(){
        let respostas = [
            "Definitivamente sim",
            "Definitivamente não",
            "Talvez",
            "Não tenho certeza",
            "Melhor não arriscar",
            "Vai na fé",
            "Vai dar ruim",
            "Só não diga que eu não avisei"
        ]
        let respostaAtual = respostas[Math.floor(Math.random()*Math.floor(respostas.length))]
        return respostaAtual
    }
}

export {Respostas}