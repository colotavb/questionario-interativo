const perguntas = [
    {
    enunciado: "Quando te chamam para sair em um sabado a noite oque você faz, fica em casa ou aproveita a oportunidade?",
    alternativas: [
    "Claro que aproveito!",
    "Não, prefiro ficar em casa"
    ]
    },
    {
    enunciado: "Você prefere no seu tempo livre fazer coisas ao ar livre como ir ao parque, ou ficar em casa vendo um filme e jogando video-game?",
    alternativas: [
    "Aproveito para ir ao parque e fazer atividdaes físiscas"
    "Gosto de ver um filme e jogar video-game"
    ]
    },
    {
    enunciado: "Você gosta de ler no seu tempo livre?",
    alternativas: [
    "Sim, adoro ler!"
    "Não, prefiro fazer outras coisas"
    ]
    },
    {
    enunciado: "Se você pudesse fazer alguma viagem, você iria para fora do brasil ou faria alguma coisa por aqui mesmo?"
    alternativas: [
    "Sim, iria para algum lugar do Brasil!",
    "Não, ficaria e fazeria alguma coisa por aqui!"
    ]
    
    },
    {
    enunciado: "Você gosta de fazer passeios aos finais de semana?",
    alternativas: [
    "Sim, gosto."
    "Não, odeio!"
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
