const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de chegar em Los Angeles e não sabe para onde vai, na sua frente tem uma placa indicando o sentido de dois pontos turísticos. Qual você escolhe para ir?",
        alternativas: [
            {
                texto: "Calçada da Fama",
                afirmacao: "Na Calçada de Fama você viu o nome de muitos artistas que é fã."
            },
            {
                texto: "Museu de Arte do Condado de Los Angeles",
                afirmacao: "Viu muitas obras de arte, e tirou ótimas fotos por lá."
            }
        ]
    },
    {
        enunciado: "Depois de conhecer o lugar, você decide ir comer em algum restaurante conhecido. Qual escolher?",
        alternativas: [
            {
                texto: "The Apple Pan",
                afirmacao: "No The Apple Pan, você pediu o clássico hambúrguer da casa, batata frita, refrigerante e o sucesso da casa, a torta de maçã."
            },
            {
                texto: "Pink's Hot Dogs",
                afirmacao: "No Pink's Hot Dogs, você matou sua fome com um clássico Hot Dog, batata frita e refrigerante."
            }
        ]
    },
    {
        enunciado: "Agora você quer praticar algum esporte. Qual esporte você irá praticar?",
        alternativas: [
            {
                texto: "Andar de skate na pista Venice Beach Skatepark",
                afirmacao: "Uma tarde em Venice Beach Skatepark, onde andou de skate mandando várias manobras, conheceu gente nova e ainda destravou manobras inéditas."
            },
            {
                texto: "Surfar em Malibu",
                afirmacao: "Uma tarde em Malibu, surfando nas ondas douradas e conhecendo pessoas incríveis na praia."
            }
        ]
    },
    {
        enunciado: "Você ira assistir o por do sol em?",
        alternativas: [
            {
                texto: "Píer de Santa Mônica",
                afirmacao: "Já o pôr do sol no Píer de Santa Mônica, entre a roda-gigante iluminada, o parque de diversões, as lojinhas de souvenirs e os shows de mágica e música, a energia da praia ganha um encanto único."
            },
            {
                texto: "Observatório Griffith",
                afirmacao: "No pôr do sol no Observatório Griffith, você desfrutou de vistas espetaculares de Los Angeles, como o famoso letreiro de Hollywood."
            }
        ]
    },
    {
        enunciado: "Agora está de noite e você está em dúvida onde vai?",
        alternativas: [
            {
                texto: "Show do Metallica",
                afirmacao: "Viver a energia de um show do Metallica, com explosões de luz, fogo e milhares de vozes cantando juntas, foi uma experiência inesquecível."
            },
            {
                texto: "Jogo dos Los Angeles Lakers",
                afirmacao: "Em um jogo eletrizante entre Los Angeles Lakers e Boston Celtics, LeBron James jogou sua camisa autografada para a torcida e você conseguiu pegá-la, tornando a noite inesquecível."
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
    caixaPerguntas.textContent = "Resumo do dia...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();