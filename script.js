const perguntas = [
  {
    pergunta: "Qual é a diferença entre let e var em JavaScript?",
    respostas: [
      "let declara uma variável global enquanto var declara uma variável local.",
      "let permite a reatribuição de valores enquanto var não.",
      "let tem escopo de bloco enquanto var tem escopo de função."
    ],
    correta: 2 // A resposta correta é a opção C (let tem escopo de bloco enquanto var tem escopo de função)
  },
  {
    pergunta: "O que é o operador '===' em JavaScript?",
    respostas: [
      "É o operador de igualdade estrita que compara o valor e o tipo de duas expressões.",
      "É o operador de igualdade solta que compara apenas o valor de duas expressões.",
      "É o operador de atribuição que define o valor de uma variável."
    ],
    correta: 0 // A resposta correta é a opção A (É o operador de igualdade estrita que compara o valor e o tipo de duas expressões)
  },
  {
    pergunta: "Como se chama o processo de acessar elementos HTML usando JavaScript?",
    respostas: [
      "Assincronismo",
      "Manipulação de eventos",
      "Manipulação do DOM"
    ],
    correta: 2 // A resposta correta é a opção C (Manipulação do DOM)
  },
  {
    pergunta: "O que é uma função de callback em JavaScript?",
    respostas: [
      "Uma função que é chamada automaticamente quando ocorre um erro.",
      "Uma função que é passada como argumento para outra função e é executada após a conclusão de uma operação assíncrona.",
      "Uma função que executa operações matemáticas complexas."
    ],
    correta: 1 // A resposta correta é a opção B (Uma função que é passada como argumento para outra função e é executada após a conclusão de uma operação assíncrona)
  },
  {
    pergunta: "Qual é o método usado para enviar uma requisição HTTP assíncrona em JavaScript?",
    respostas: [
      "GET",
      "POST",
      "fetch"
    ],
    correta: 2 // A resposta correta é a opção C (fetch)
  },
  {
    pergunta: "O que é o hoisting em JavaScript?",
    respostas: [
      "É o processo de mover declarações de variáveis e funções para o topo do seu escopo antes da execução do código.",
      "É o processo de reorganizar o HTML de um documento durante a renderização.",
      "É o processo de converter valores de strings em números automaticamente."
    ],
    correta: 0 // A resposta correta é a opção A (É o processo de mover declarações de variáveis e funções para o topo do seu escopo antes da execução do código)
  },
  {
    pergunta: "O que é o evento 'click' em JavaScript?",
    respostas: [
      "Um evento que é acionado quando um usuário clica em um elemento HTML.",
      "Um evento que é acionado quando uma página é carregada.",
      "Um evento que é acionado quando um usuário digita algo em um campo de formulário."
    ],
    correta: 0 // A resposta correta é a opção A (Um evento que é acionado quando um usuário clica em um elemento HTML)
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "Não há diferença, ambos são usados para comparação de igualdade.",
      " '==' compara apenas o valor das variáveis, enquanto '===' compara valor e tipo.",
      "'===' é usado para atribuição de valores, enquanto '==' é usado para comparação."
    ],
    correta: 1 // A resposta correta é a opção B (" '==' compara apenas o valor das variáveis, enquanto '===' compara valor e tipo.")
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Uma linguagem de programação baseada em objetos.",
      "Uma tecnologia usada para estilizar páginas da web.",
      "Uma interface de programação que representa a estrutura de uma página HTML e permite interações dinâmicas com ela."
    ],
    correta: 2 // A resposta correta é a opção C (Uma interface de programação que representa a estrutura de uma página HTML e permite interações dinâmicas com ela)
  },
  {
    pergunta: "Qual é o resultado da operação 2 + '2' em JavaScript?",
    respostas: [
      "4",
      "22",
      "Erro"
    ],
    correta: 1 // A resposta correta é a opção B (22)
  }
];

const quiz = document.querySelector('#quiz')
const template =  document.querySelector('template') 
const quizItem = template.content.cloneNode(true)
quiz.appendChild(quizItem)

// loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
