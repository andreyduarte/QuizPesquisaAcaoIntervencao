const quizData = [
    {
      question: "Qual premissa fundamental estabelece o alicerce para a compreensão das posturas críticas da Pesquisa-Ação (PA) e da Pesquisa-Intervenção (PI), desafiando noções tradicionais de pesquisa?",
      options: [
        "A priorização de métodos quantitativos para maior objetividade.",
        "A manutenção da neutralidade absoluta do pesquisador como observador externo.",
        "O reconhecimento de que toda análise já contém uma proposta de intervenção e que a neutralidade do pensamento é ilusória.",
        "A busca exclusiva pela geração de conhecimento teórico, sem foco em problemas práticos."
      ],
      correctAnswerIndex: 2,
      rationaleCorrect: "Correto! Esta premissa questiona a objetividade pura e reconhece o pesquisador como um agente implicado na realidade que estuda.",
      rationaleOptions: [
        "Ambas as abordagens frequentemente utilizam métodos qualitativos e participativos.",
        "Este é o princípio da pesquisa tradicional que ambas as abordagens buscam desafiar.",
        "Esta premissa questiona a objetividade pura e reconhece o pesquisador como um agente implicado.", // Rationale para a correta já está em rationaleCorrect
        "Ambas as metodologias têm um forte compromisso com problemas do mundo real."
      ]
    },
    {
      question: "Qual dos seguintes é um princípio fundamental e característica do processo iterativo da Pesquisa-Ação (PA)?",
      options: [
        "A aplicação rígida de um protocolo de pesquisa pré-definido, sem desvios.",
        "A ação baseada no ciclo reflexivo (ação-reflexão-ação), caracterizada por um 'vaivém' entre as etapas.",
        "A pesquisa realizada exclusivamente sobre as pessoas, sem sua participação ativa nas etapas do processo.",
        "O foco único na geração de conhecimento teórico, desvinculado da solução de problemas práticos."
      ],
      correctAnswerIndex: 1,
      rationaleCorrect: "Correto! Este ciclo contínuo de planejamento, ação, observação e reflexão é a espinha dorsal da PA.",
      rationaleOptions: [
        "A PA é marcada pela sua flexibilidade e dinamismo.",
        "Este ciclo contínuo é a espinha dorsal da metodologia da PA.", // Rationale para a correta
        "A participação ativa e colaborativa é um pilar da PA.",
        "A PA tem um duplo objetivo de resolver problemas práticos e gerar conhecimento."
      ]
    },
    {
      question: "A Pesquisa-Intervenção (PI) se distingue epistemologicamente por inverter uma lógica comum na pesquisa tradicional. Qual é a sua proposta central?",
      options: [
        "Conhecer para depois, e somente se necessário, transformar a realidade.",
        "Observar passivamente a realidade para então descrevê-la detalhadamente.",
        "'Transformar para conhecer', onde a intervenção é o modo primário de saber e a pesquisa é ação e construção.",
        "Priorizar a aplicação de teorias preexistentes para validar sua eficácia na prática."
      ],
      correctAnswerIndex: 2,
      rationaleCorrect: "Correto! Esta inversão epistemológica é a marca da PI, onde o conhecimento emerge do próprio ato de transformar.",
      rationaleOptions: [
        "Esta é a lógica mais próxima da pesquisa tradicional ou da PA, que a PI busca inverter.",
        "A PI é uma abordagem ativa e participativa.",
        "Esta inversão epistemológica é a marca da PI.", // Rationale para a correta
        "A PI busca produzir novos conhecimentos a partir da intervenção."
      ]
    },
    {
      question: "Embora PA e PI compartilhem o objetivo de transformação, uma diferença fundamental reside em sua ênfase e ponto de partida epistemológico. Qual alternativa melhor descreve essa diferença?",
      options: [
        "A PA sempre busca uma desconstrução radical das instituições, enquanto a PI foca em melhorias incrementais.",
        "A PA frequentemente parte da lógica de 'conhecer para transformar' ou um duplo objetivo, enquanto a PI enfatiza o 'transformar para conhecer'.",
        "A PI utiliza um ciclo rígido de planejar-agir-observar-refletir, enquanto a PA é totalmente não estruturada.",
        "A PA recusa a implicação do pesquisador, enquanto a PI a considera opcional."
      ],
      correctAnswerIndex: 1,
      rationaleCorrect: "Correto! Esta é a distinção epistemológica mais precisa entre as duas abordagens.",
      rationaleOptions: [
        "Geralmente, a PI é que propõe uma crítica mais radical.",
        "Esta é a distinção epistemológica mais precisa.", // Rationale para a correta
        "O ciclo de planejar-agir-observar-refletir é da PA.",
        "Ambas valorizam o envolvimento, mas a 'implicação' é central na PI."
      ]
    },
    {
      question: "Considerando as discussões sobre Pesquisa-Ação e Pesquisa-Intervenção, a escolha entre uma dessas metodologias representa, fundamentalmente:",
      options: [
        "Apenas uma decisão técnica sobre qual ferramenta de coleta de dados usar.",
        "Uma preferência pessoal do pesquisador sem maiores implicações teóricas.",
        "Uma decisão epistemológica e política, refletindo a postura do pesquisador sobre conhecimento, poder e mudança social.",
        "Uma opção exclusiva para pesquisas em ciências sociais, não podendo ser usada em outras áreas."
      ],
      correctAnswerIndex: 2,
      rationaleCorrect: "Correto! Esta opção captura a profundidade da escolha metodológica.",
      rationaleOptions: [
        "A escolha do método envolve pressupostos teóricos e filosóficos.",
        "A preferência está ligada a uma postura teórica e política.",
        "Esta opção captura a profundidade da escolha metodológica.", // Rationale para a correta
        "Os princípios destas metodologias são aplicados em diversas áreas."
      ]
    }
];

const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const nextBtnEl = document.getElementById('next-btn');
const feedbackAreaEl = document.getElementById('feedback-area');
const scoreAreaEl = document.getElementById('score-area');
const finalScoreEl = document.getElementById('final-score');
const restartBtnEl = document.getElementById('restart-btn');
const questionAreaEl = document.getElementById('question-area');

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionElement = null;
let answerChecked = false;

function loadQuestion() {
    answerChecked = false;
    selectedOptionElement = null;
    feedbackAreaEl.innerHTML = '';
    feedbackAreaEl.className = 'feedback-area'; // Reset class
    optionsContainerEl.innerHTML = ''; // Limpa opções anteriores

    const currentQuestion = quizData[currentQuestionIndex];
    questionTextEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach((optionText, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.textContent = optionText;
        optionDiv.dataset.index = index;
        optionDiv.addEventListener('click', () => selectOption(optionDiv, index));
        optionsContainerEl.appendChild(optionDiv);
    });
    nextBtnEl.textContent = "Verificar Resposta";
    nextBtnEl.disabled = true; // Desabilita até uma opção ser selecionada
}

function selectOption(optionDiv, index) {
    if (answerChecked) return; // Não permite mudar após checar

    if (selectedOptionElement) {
        selectedOptionElement.classList.remove('selected');
    }
    selectedOptionElement = optionDiv;
    selectedOptionElement.classList.add('selected');
    nextBtnEl.disabled = false;
}

function checkAnswer() {
    answerChecked = true;
    nextBtnEl.disabled = true; // Desabilita temporariamente
    
    const currentQuestion = quizData[currentQuestionIndex];
    const selectedIndex = parseInt(selectedOptionElement.dataset.index);

    // Remove 'selected' de todas e aplica 'correct' ou 'incorrect'
    const optionsElements = optionsContainerEl.querySelectorAll('.option');
    optionsElements.forEach(opt => opt.classList.remove('selected'));

    if (selectedIndex === currentQuestion.correctAnswerIndex) {
        score++;
        selectedOptionElement.classList.add('correct');
        feedbackAreaEl.textContent = currentQuestion.rationaleCorrect;
        feedbackAreaEl.className = 'feedback-area correct-feedback';
    } else {
        selectedOptionElement.classList.add('incorrect');
        // Destaca a correta também
        optionsElements[currentQuestion.correctAnswerIndex].classList.add('correct');
        
        let feedbackText = `Incorreto. ${currentQuestion.rationaleOptions[selectedIndex] || ''} `;
        feedbackText += `A resposta correta era: "${currentQuestion.options[currentQuestion.correctAnswerIndex]}".`;
        feedbackAreaEl.textContent = feedbackText;
        feedbackAreaEl.className = 'feedback-area incorrect-feedback';
    }
    
    // Habilita o botão para a próxima pergunta ou para finalizar
    nextBtnEl.disabled = false;
    if (currentQuestionIndex < quizData.length - 1) {
        nextBtnEl.textContent = "Próxima Pergunta";
    } else {
        nextBtnEl.textContent = "Ver Pontuação Final";
    }
}


function showNextQuestionOrResults() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionAreaEl.style.display = 'none';
    nextBtnEl.style.display = 'none';
    feedbackAreaEl.style.display = 'none';
    scoreAreaEl.style.display = 'block';
    finalScoreEl.textContent = `${score} de ${quizData.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionAreaEl.style.display = 'block';
    nextBtnEl.style.display = 'inline-block';
    feedbackAreaEl.style.display = 'block';
    scoreAreaEl.style.display = 'none';
    feedbackAreaEl.innerHTML = '';
    feedbackAreaEl.className = 'feedback-area';
    loadQuestion();
}

nextBtnEl.addEventListener('click', () => {
    if (!answerChecked) {
        if (selectedOptionElement) {
            checkAnswer();
        } else {
            // Poderia adicionar um alerta se nenhuma opção foi selecionada, mas o botão já fica desabilitado
        }
    } else {
        showNextQuestionOrResults();
    }
});

restartBtnEl.addEventListener('click', restartQuiz);

// Carrega a primeira pergunta ao iniciar
loadQuestion();