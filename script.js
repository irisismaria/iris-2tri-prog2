const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Com quem Blair Waldorf se casou na 5ª temporada?",
        alternativas: [
            {
                texto: "Louis",
                afirmacao: "1-acertou "
            },
            {
                texto: "Nate",
                afirmacao: "1- errou"
            }
        ]
    },
    {
        enunciado: "Quem manda para a Serena uma caixa de champanhe na escola?",
        alternativas: [
            {
                texto: "Georgina Sparks",
                afirmacao: "2- acertou"
            },
            {
                texto: "Chuck Bass",
                afirmacao: "2- errou"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do livro que o Dan Humphrey faz sobre seus amigos?",
        alternativas: [
            {
                texto: "Inside",
                afirmacao: "3- acertou"
            },
            {
                texto: "sobre mim",
                afirmacao: "3- errou"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do filho da Blair e do Chuck?",
        alternativas: [
            {
                texto: "Henry Bass",
                afirmacao: "4- acertou"
            },
            {
                texto: "Leo Waldorf",
                afirmacao: "4- errou"
            }
        ]
    },
    {
        enunciado: "No final, quem era a garota do blog? ",
        alternativas: [
            {
                texto: "Nate Archibald",
                afirmacao: "5- errou"
            },
            {
                texto: "daniel Humphrey",
                afirmacao: "5- acertou "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "gabarito";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
