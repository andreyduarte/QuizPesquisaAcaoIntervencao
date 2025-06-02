const quizData = [
    // ... (mesmos dados do quizData anterior) ...
    {
      question: "Qual premissa fundamental estabelece o alicerce para a compreensão das posturas críticas da Pesquisa-Ação (PA) e da Pesquisa-Intervenção (PI), desafiando noções tradicionais de pesquisa?",
      options: [
        "A priorização de métodos quantitativos para maior objetividade.",
        "A manutenção da neutralidade absoluta do pesquisador como observador externo.",
        "O reconhecimento de que toda análise já contém uma proposta de intervenção e que a neutralidade do pensamento é ilusória.",
        "A busca exclusiva pela geração de conhecimento teórico, sem foco em problemas práticos."
      ],
      correctAnswerIndex: 2,
      rationales: [ 
        "Ambas as abordagens frequentemente utilizam métodos qualitativos e participativos, em vez de se focarem na quantificação.",
        "Este é o princípio da pesquisa tradicional que ambas as abordagens buscam desafiar diretamente.",
        "Esta premissa questiona a objetividade pura e reconhece o pesquisador como um agente implicado na realidade que estuda.",
        "Ambas as metodologias têm um forte compromisso com problemas do mundo real e a transformação social."
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
      rationales: [
        "A PA é marcada pela sua flexibilidade e dinamismo, adaptando-se à realidade.",
        "Este ciclo contínuo de planejamento, ação, observação e reflexão é a espinha dorsal da metodologia da PA.",
        "A participação ativa e colaborativa dos envolvidos é um pilar da PA.",
        "A PA tem um duplo objetivo de resolver problemas práticos e, ao mesmo tempo, gerar conhecimento relevante."
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
      rationales: [
        "Esta é a lógica mais próxima da pesquisa tradicional ou da PA, que a PI busca criticar e inverter.",
        "A PI é uma abordagem ativa e participativa que recusa a passividade do observador.",
        "Esta inversão epistemológica é a marca da PI, onde o conhecimento emerge do próprio ato de transformar.",
        "A PI busca produzir novos conhecimentos e análises a partir da intervenção."
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
      rationales: [
        "Geralmente, a PI é que propõe uma crítica mais radical às instituições.",
        "Esta é a distinção epistemológica mais precisa entre as duas abordagens.",
        "O ciclo de planejar-agir-observar-refletir é a marca registrada da PA, não da PI.",
        "Ambas valorizam o envolvimento, mas a 'implicação' é um conceito metodológico central na PI."
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
      rationales: [
        "A escolha do método envolve pressupostos teóricos e filosóficos que vão além da técnica.",
        "A preferência está ligada a uma postura teórica e política, não sendo apenas uma questão de gosto pessoal.",
        "Esta opção captura a profundidade da escolha metodológica.",
        "Os princípios destas metodologias são aplicados em diversas áreas, como saúde e educação."
      ]
    }
];

const mainQuizTitleEl = document.getElementById('main-quiz-title');
const quizDescriptionAreaEl = document.getElementById('quiz-description-area');
const quizContentEl = document.getElementById('quiz-content');
const questionCounterEl = document.getElementById('question-counter');
const currentQNumEl = document.getElementById('current-q-num');
const totalQNumEl = document.getElementById('total-q-num');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const nextBtnEl = document.getElementById('next-btn');
const scoreAreaEl = document.getElementById('score-area');
const finalScoreEl = document.getElementById('final-score');
const restartBtnEl = document.getElementById('restart-btn');

let currentQuestionIndex = 0; // Mantido para controlar as perguntas reais
let score = 0;
let answerProcessedForThisQuestion = false;
let quizActive = false; // Nova flag para controlar se o quiz (perguntas) começou

const optionLetters = ['A', 'B', 'C', 'D'];

function initializeQuizView() {
    quizActive = false;
    currentQuestionIndex = 0; // Reseta o índice de perguntas para o início
    score = 0;

    mainQuizTitleEl.style.display = 'block';
    quizDescriptionAreaEl.style.display = 'block';
    quizContentEl.style.display = 'none';
    scoreAreaEl.style.display = 'none';
    
    nextBtnEl.textContent = "Iniciar Quiz";
    nextBtnEl.disabled = false;
    nextBtnEl.style.display = 'inline-block'; // Garante que o botão esteja visível
}

function loadQuestion() {
    answerProcessedForThisQuestion = false;
    optionsContainerEl.innerHTML = '';
    
    mainQuizTitleEl.style.display = 'none'; // Título principal some após iniciar
    quizDescriptionAreaEl.style.display = 'none';
    quizContentEl.style.display = 'block';
    scoreAreaEl.style.display = 'none';

    nextBtnEl.disabled = true; 
    nextBtnEl.textContent = "Avançar";

    const currentQuestion = quizData[currentQuestionIndex];
    currentQNumEl.textContent = currentQuestionIndex + 1;
    totalQNumEl.textContent = quizData.length;
    questionTextEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach((optionText, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.dataset.index = index;

        const mainContentDiv = document.createElement('div');
        mainContentDiv.classList.add('option-main-content');

        const letterSpan = document.createElement('span');
        letterSpan.classList.add('option-letter');
        letterSpan.textContent = optionLetters[index];
        mainContentDiv.appendChild(letterSpan);

        const textSpan = document.createElement('span');
        textSpan.classList.add('option-text');
        textSpan.textContent = optionText;
        mainContentDiv.appendChild(textSpan);
        
        optionDiv.appendChild(mainContentDiv);

        const feedbackDiv = document.createElement('div');
        feedbackDiv.classList.add('option-feedback');
        
        const statusP = document.createElement('p');
        statusP.classList.add('feedback-status');
        
        const rationaleP = document.createElement('p');
        rationaleP.classList.add('rationale-text');
        rationaleP.textContent = currentQuestion.rationales[index];
        
        feedbackDiv.appendChild(statusP);
        feedbackDiv.appendChild(rationaleP);
        optionDiv.appendChild(feedbackDiv);

        optionDiv.addEventListener('click', () => handleOptionClick(optionDiv, index));
        optionsContainerEl.appendChild(optionDiv);
    });
}

function handleOptionClick(clickedOptionDiv, clickedIndex) {
    if (answerProcessedForThisQuestion) return;

    answerProcessedForThisQuestion = true;
    nextBtnEl.disabled = false;

    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.correctAnswerIndex;

    const allOptionDivs = optionsContainerEl.querySelectorAll('.option');
    allOptionDivs.forEach(opt => opt.classList.add('processed'));

    const clickedFeedbackDiv = clickedOptionDiv.querySelector('.option-feedback');
    const clickedStatusP = clickedFeedbackDiv.querySelector('.feedback-status');

    if (clickedIndex === correctAnswerIndex) {
        clickedOptionDiv.classList.add('correct-selection');
        clickedStatusP.innerHTML = '<span class="icon">✓</span> Resposta correta';
        score++;
    } else {
        clickedOptionDiv.classList.add('incorrect-selection');
        clickedStatusP.innerHTML = '<span class="icon">✗</span> Não era bem isso.';
        
        const correctOptionDiv = optionsContainerEl.querySelector(`.option[data-index='${correctAnswerIndex}']`);
        if (correctOptionDiv) {
            correctOptionDiv.classList.add('actually-correct');
            const correctFeedbackDiv = correctOptionDiv.querySelector('.option-feedback');
            const correctStatusP = correctFeedbackDiv.querySelector('.feedback-status');
            correctStatusP.innerHTML = '<span class="icon">✓</span> Resposta correta';
        }
    }
}

function handleNextButtonClick() {
    if (!quizActive) { // Se o quiz (perguntas) não começou, inicia-o
        quizActive = true;
        loadQuestion(); // Carrega a primeira pergunta real
    } else { // Se o quiz já está ativo, avança para a próxima pergunta ou resultados
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showFinalScore();
        }
    }
}

function showFinalScore() {
    mainQuizTitleEl.style.display = 'none';
    quizDescriptionAreaEl.style.display = 'none';
    quizContentEl.style.display = 'none';
    scoreAreaEl.style.display = 'block';
    finalScoreEl.textContent = `${score} de ${quizData.length}`;
    nextBtnEl.style.display = 'none'; // Esconde o botão "Avançar" na tela de score
}

function restartQuiz() {
    initializeQuizView();
}

nextBtnEl.addEventListener('click', handleNextButtonClick);
restartBtnEl.addEventListener('click', restartQuiz);

// Inicializa a visualização do quiz (mostra descrição)
initializeQuizView();