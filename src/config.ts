// ╔════════════════════════════════════════════════════════════════════╗
// ║                                                                    ║
// ║              ✦  ÁREA DE CONFIGURAÇÃO — EDITE AQUI  ✦              ║
// ║                                                                    ║
// ║   Todos os textos, fotos, música, datas e cores que aparecem no    ║
// ║   site podem ser alterados neste único arquivo.                    ║
// ║   Não é preciso mexer em nenhum outro lugar.                       ║
// ║                                                                    ║
// ╚════════════════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────
// 🎵 MÚSICA DE FUNDO
// ─────────────────────────────────────────────
// Substitua o arquivo em /public/music.mp3 por sua música
// OU altere o caminho abaixo para apontar para outro arquivo.
// Formatos suportados: mp3, ogg, wav, m4a
export const MUSIC_SRC = '/music.mp3';
export const MUSIC_VOLUME = 0.45; // 0 a 1

// ─────────────────────────────────────────────
// 💙 NOME DA PESSOA
// ─────────────────────────────────────────────
export const PERSON_NAME = 'Luís';

// ─────────────────────────────────────────────
// 🌌 TELA INICIAL
// ─────────────────────────────────────────────
export const INTRO = {
  mainText: 'Eu fiz pensando em você, mozi',
  subText: 'Então... fica mais uum pouquinho?',
  buttonText: 'Entrar',
  buttonIcon: '✦',
  hint: '♫ Recomendo usar fones.',
};

// ─────────────────────────────────────────────
// 💌 SEÇÃO 1 — A CARTA
// ─────────────────────────────────────────────
export const LETTER = {
  title: 'Antes de qualquer coisa...',
  // Cada item do array é um parágrafo, revelado gradualmente ao rolar.
  paragraphs: [
    'Eu não sei bem por onde começar. Talvez porque, quando algo importa demais, as palavras sempre parecem pequenas demais.',
    'Mas eu sei que eu queria te dar algo que não coubesse num embrulho. Algo que ficasse com você, pra sempre. E que mesmo que a gente não esteja junto fisicamente, você pudesse sentir que eu to aqui, do seu lado. ',
    'Eu pensei em cada detalhe disso aqui. Cada cor, cada palavra, cada segundo que você vai passar olhando. E enquanto eu montava, eu sorria — porque sabia que, em algum momento, você estaria aqui, lendo.',
    'Isso não é um site. É um modo de dizer que você existe de um jeito que mudou a minha forma de olhar pra coisas simples.',
  ],
  closing: 'Se você chegou até aqui...\nacho que já pode continuar.',
};

// ─────────────────────────────────────────────
// ✨ SEÇÃO 2 — PEQUENAS COISAS
// ─────────────────────────────────────────────
export const SMALL_THINGS = {
  title: 'Porque são as pequenas coisas.',
  subtitle: 'Clique em cada uma para descobrir.',
  cards: [
    {
      front: 'Seu jeito de falar.',
      hidden: 'Tem dias que eu ouço sua voz na minha cabeça e preciso parar um segundo, só pra sorrir.',
    },
    {
      front: 'Seu sorriso (A COISA MAIS FOFA DO MUNDO)',
      hidden: 'Não é só um sorriso. É o tipo que faz a gente achar que, talvez, o mundo possa ser belo.',
    },
    {
      front: 'As nossas conversas aleatórias (e irritantes).',
      hidden: 'Aquelas que não levam a lugar nenhum e, mesmo assim, ficam sendo as minhas favoritas.',
    },
    {
      front: 'Os momentos que parecem simples.',
      hidden: 'Mas que, quando a gente lembra, percebe que foram os que mais valeram a pena.',
    },
    {
      front: 'A forma como você me escuta.',
      hidden: 'Sem pressa, sem julgamento. Só presente. Isso é raro. E eu não esqueço.',
    },
    {
      front: 'Você sendo você.',
      hidden: 'Sem precisar ser nada diferente. Do jeito que você é, já é mais do que suficiente.',
    },
  ],
};

// ─────────────────────────────────────────────
// 📸 SEÇÃO 3 — MEMÓRIAS (GALERIA)
// ─────────────────────────────────────────────
// Substitua as URLs das fotos por suas próprias imagens.
// Você pode usar URLs diretas ou colocar arquivos em /public.
export const MEMORIES = {
  title: 'Eu i você',
  subtitle: 'um pouquiinho do que somos.',
  photos: [
    {
      src: 'https://i.pinimg.com/736x/53/56/0a/53560a16aabd62580388665643bbee48.jpg',
      caption: 'paixonadinhos.',
      size: 'tall',
      rotate: -4,
    },
    {
      src: 'https://i.pinimg.com/1200x/70/8d/ab/708dab28aba72c65862d2cc896c05a75.jpg',
      caption: 'beso.',
      size: 'square',
      rotate: 3,
    },
    {
      src: 'https://i.pinimg.com/736x/7c/66/61/7c6661686efe3f259b6471e87442b4f0.jpg',
      caption: 'a gente la no torre ewaifel.',
      size: 'wide',
      rotate: -2,
    },
    {
      src: 'https://i.pinimg.com/736x/d6/1e/5c/d61e5c7f27ed0548042c5a0146077358.jpg',
      caption: 'voce o preto.',
      size: 'tall',
      rotate: 5,
    },
    {
      src: 'https://i.pinimg.com/736x/34/14/5f/34145fcdf15d031d15860bf9cd73adce.jpg',
      caption: 'o preto ta',
      size: 'square',
      rotate: -3,
    },
    {
      src: 'https://i.pinimg.com/736x/6f/a6/8b/6fa68bc96d2e838540587db78f55ccdb.jpg',
      caption: 'que odio oxe raivura',
      size: 'wide',
      rotate: 2,
    },
    {
      src: 'https://i.pinimg.com/736x/6c/5c/c6/6c5cc6bef8dba639c5979be5bcd218e8.jpg',
      caption: 'vocee',
      size: 'tall',
      rotate: -5,
    },
    {
      src: 'https://i.pinimg.com/736x/f6/77/48/f67748dd0e13a7d15dae44faf621c4a2.jpg',
      caption: 'euu',
      size: 'square',
      rotate: 4,
    },
  ],
};

// ─────────────────────────────────────────────
// 🌠 SEÇÃO 4 — CONSTELAÇÃO
// ─────────────────────────────────────────────
export const CONSTELLATION = {
  title: 'Se eu pudesse guardar algumas coisas...',
  subtitle: 'Clique nas estrelas. Cada uma guarda algo.',
  stars: [
    { x: 15, y: 35, message: 'O som da sua risada (é como musica de dormir para mim).' },
    { x: 28, y: 22, message: 'O jeito que você fecha os olhos quando algo te faz rir.' },
    { x: 42, y: 30, message: 'A sua calma e paciência.' },
    { x: 55, y: 18, message: 'A forma como você cuida das coisas sem alarde.' },
    { x: 68, y: 28, message: 'Seus olhos que brilham tanto.' },
    { x: 80, y: 22, message: 'A honestidade que você carrega sem precisar falar.' },
    { x: 20, y: 55, message: 'O jeito que você transforma um dia comum e chato em algo  especial.' },
    { x: 35, y: 62, message: 'Seu jeito de lidar com as coisas.' },
    { x: 50, y: 58, message: 'A coragem de ser quem você é.' },
    { x: 65, y: 63, message: 'A forma como você faz o silêncio parecer aconchegante.' },
    { x: 78, y: 55, message: 'O gesto pequeno que você nem sabe que faz — e que eu reparo.' },
    { x: 88, y: 48, message: 'O simples fato de você existir.' },
    { x: 12, y: 45, message: 'A lembrança de um momento que não vou esquecer.' },
    { x: 45, y: 45, message: 'O centro de tudo, sem ter que se esforçar pra isso.' },
    { x: 72, y: 42, message: 'A certeza de que tudo, com você, vale cada segundo.' },
  ],
};

// ─────────────────────────────────────────────
// 💙 SEÇÃO 5 — CONTADOR DE MOMENTOS
// ─────────────────────────────────────────────
// Altere a data abaixo para o dia que marcou o início de tudo.
// Formato: 'AAAA-MM-DDTHH:MM:SS'
export const COUNTER = {
  title: 'Desde aquele dia...',
  startDate: '2026-09-01T00:00:00',
  closingPhrase: 'E, de alguma forma, cada segundo vale a pena.',
};

// ─────────────────────────────────────────────
// 🎁 SEÇÃO 6 — A SURPRESA
// ─────────────────────────────────────────────
export const SURPRISE = {
  title: 'Mass eu ainda tenho uma coisa.',
  boxHint: 'Clique para abrir.',
  // Primeira mensagem — revelada ao abrir a caixa
  firstMessage:
    'Eu não sei te explicar o que você é pra mim com precisão. Mas eu sei que, antes de você, algumas cores eram mais opacas. E depois de você, tudo parece ter um brilho que eu não sabia que existia.\n\nVocê não precisa fazer nada pra merecer isso. Você já é, por si só, o motivo.',
  // Botão que revela a segunda mensagem
  moreButtonText: 'mais uma coisa...',
  // Segunda mensagem — revelada ao clicar no botão
  secondMessage:
    'Obrigado.\n\nNão por algo específico. Por tudo.\nPor existir, por estar, por ser do jeito que você é.\n\nSe um dia você esquecer de como é importante, volta aqui, amor.\nEu te almo, com a alma.',
};

// ─────────────────────────────────────────────
// 🫶 SEÇÃO 7 — FINAL
// ─────────────────────────────────────────────
export const FINAL = {
  firstLine: 'Eu poderia escrever muuuito mais.',
  secondLine: 'Mas acho que você já entendeu.',
  finalLine: 'Obrigado por existir na minha vida.',
  heartIcon: '💙',
  signature: 'Feito somente pra você e por você, amor da vida.',
};

// ─────────────────────────────────────────────
// 🎨 CORES (SUBTOS DE AZUL)
// ─────────────────────────────────────────────
export const COLORS = {
  // Cor de destaque principal — azul luminoso
  luminous: '#7db5ff',
  luminousSoft: '#a8d0ff',
  // Cor de fundo principal
  background: '#05080f',
  // Cor de fundo secundária
  backgroundAlt: '#030611',
  // Texto principal
  textPrimary: '#c8d9f0',
  // Texto de destaque
  textHighlight: '#e8f2ff',
  // Bordas
  border: 'rgba(125, 181, 255, 0.12)',
  borderHover: 'rgba(125, 181, 255, 0.3)',
};
