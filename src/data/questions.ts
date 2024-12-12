import { Question } from "@/types/Question";

export const questions: Question[] = [
  {
    question: 'Qual é o principal objetivo do React?',
    options: [
      'Gerenciar servidores backend.',
      'Construir interfaces de usuário reutilizáveis.', 
      'Manipular o DOM diretamente.',
      'Fazer animações complexas.'
    ],
    answer: 1 // Correta
  },
  {
    question: 'Qual Hook permite gerenciar estados em um componente funcional?',
    options: [
      'useState', 
      'useReducer',
      'useContext',
      'useEffect'
    ],
    answer: 0 // Correta
  },
  {
    question: 'Qual é a diferença entre `props` e `state`?',
    options: [
      'Ambos são usados para enviar dados de um componente para outro.',
      'props são mutáveis; state é imutável.',
      'props são passados para o componente; state é gerenciado dentro do componente.', 
      'Não há diferença entre eles.'
    ],
    answer: 2 // Correta
  },
  {
    question: 'O que o Hook `useEffect` faz no React?',
    options: [
      'Manipula diretamente o DOM.',
      'Permite executar efeitos colaterais, como chamadas de API.', 
      'Substitui o useState.',
      'Garante que o componente nunca seja renderizado.'
    ],
    answer: 1 // Correta
  },
  {
    question: 'Qual é a importância da chave (`key`) em listas renderizadas no React?',
    options: [
      'Ela melhora o desempenho ao identificar quais itens mudaram.', 
      'Ela não é obrigatória e pode ser omitida.',
      'É usada apenas para aplicar estilos CSS.',
      'Define a posição exata do elemento no DOM.'
    ],
    answer: 0 // Correta
  },
  {
    question: 'Como você cria um componente funcional em React?',
    options: [
      'Usando uma classe que estende React.Component.',
      'Criando uma função que retorna JSX.', 
      'Chamando o Hook useComponent().',
      'Declarando uma função construtora com métodos de ciclo de vida.'
    ],
    answer: 1 // Correta
  },
  {
    question: 'O que significa JSX no React?',
    options: [
      'JavaScript XML.', 
      'JSON for React.',
      'JavaScript Extended.',
      'Java Simple eXtension.'
    ],
    answer: 0 // Correta
  },
  {
    question: 'Como você passa dados para um componente filho no React?',
    options: [
      'Com o Context API.',
      'Através de props.', 
      'Chamando setState no componente pai.',
      'Usando Hooks.'
    ],
    answer: 1 // Correta
  }
];
