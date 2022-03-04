import {Respostas} from "./models/respostas.js";

const pergunta = document.querySelector('#input')
const arrayPerguntas = []
const resposta = document.querySelector('#resposta')
const magicBall = document.querySelector('img')
magicBall.addEventListener("click", verificaInput)

function verificaInput (event) {
    event.preventDefault()
    if (pergunta.value === ''){
        resposta.innerText = 'Faça uma pergunta!'
    } else if (arrayPerguntas.some((arg) => arg === pergunta.value)){
        resposta.innerText = 'Me pergunte algo diferente!'
    } else {
        resposta.innerText = Respostas.geraResposta()
        arrayPerguntas.push(pergunta.value)
    }

}