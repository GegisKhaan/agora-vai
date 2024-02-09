const perguntas = [
    {
      pergunta: "Qual é o operador utilizado para atribuição de valores em JavaScript?",
      respostas: [
        "=",
        "==",
        "==="
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o tipo de dado que é usado para representar números em JavaScript?",
      respostas: [
        "int",
        "number",
        "num"
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de linha única em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "#"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a estrutura de controle usada para tomar decisões em JavaScript?",
      respostas: [
        "if",
        "switch",
        "both if and switch"
      ],
      correta: 2
    },
    {
      pergunta: "Qual símbolo é usado para concatenar strings em JavaScript?",
      respostas: [
        "+",
        "&",
        "|"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas: [
        "5",
        "32",
        "TypeError"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de negação em JavaScript?",
      respostas: [
        "!",
        "~",
        "-"
      ],
      correta: 0
    }
  ];
  
      const quiz = document.querySelector('#quiz')
      const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent=corretas.size + ' de ' + totalDePerguntas
  
      //loop ou laço de repetição
      for(const item of perguntas){
        const quizItem = template.content.cloneNode(true)
        quizItem.querySelector('h3').textContent = item.pergunta
  
      for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
  
          corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
      
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
        quizItem.querySelector('dl').appendChild(dt)
      }
  
    quizItem.querySelector('dl dt').remove()
  
  
        //coloca a pergunta na tela
      quiz.appendChild(quizItem)
    }