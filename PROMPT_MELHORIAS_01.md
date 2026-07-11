# Prompt — Rodada 1 de Melhorias (Formula Fitness)

Já entrei no código e localizei o arquivo/componente exato de cada uma das 11 melhorias que você
pediu. O prompt abaixo já vem com esses achados embutidos, então o Claude Code não precisa "procurar"
nada — só validar e executar. Copie o bloco entre as crases e cole no Claude Code, dentro do repositório.

---

```
Você vai aplicar uma rodada de 11 melhorias pontuais no site da Formula Fitness (React 18 + Vite 5 +
React Router v6, CSS puro com tokens em src/styles/variables.css). Já mapeei os arquivos exatos de
cada melhoria — use essa informação como ponto de partida, mas confirme no código antes de alterar,
pois posso ter passado por cima de alguma nuance.

REGRAS GERAIS PARA TODA A RODADA:
- Uma melhoria por vez. Depois de cada uma, rode `npm run build` e confirme que não há erros antes de
  seguir para a próxima.
- Não altere textos, preços, horários ou dados de contato — só o que está pedido explicitamente.
- Qualquer novo estilo deve reutilizar os design tokens existentes em variables.css (cores, radius,
  shadow, spacing, etc.), nunca valores soltos.
- Teste responsividade (320px, 768px, 1024px, 1440px) em qualquer página cujo layout você tocar.
- Ao final da rodada, rode `npm run lint` e `npm run build` e me dê um resumo do que mudou por item.
- Se qualquer item abaixo tiver ambiguidade que eu não previ, pare e pergunte antes de decidir sozinho.

═══════════════════════════════════════════════════════════════════
1. PRÉ-CARREGAMENTO DOS FORMULÁRIOS (GoHighLevel)
═══════════════════════════════════════════════════════════════════
Contexto técnico: os formulários não são HTML nativo — são iframes do GoHighLevel carregados via
`src/components/ui/FormModal.jsx`, controlados por `src/components/ui/FormModalProvider.jsx`
(provider global, montado em `src/components/layout/Layout.jsx`). Existem 3 variantes, cada uma com
seu próprio formId, registradas em FormModalProvider.jsx:
  - "consult" → formId 8uSlqyvGEhjrMDPsIkQf (usado por quase todos os botões "Book a Consultation")
  - "referral" → formId GuQTIYMSHInIxFcvmyQk (página Referrals)
  - "youth" → formId oq94z1VX2BjkgmgMyN8F (Youth Training)
Cada iframe aponta para `https://api.formulafitness.co/widget/form/{formId}`. O script
`https://api.formulafitness.co/js/form_embed.js` já é carregado globalmente no `index.html`.

O problema: em FormModal.jsx, a linha `if (!open || !config) return null` faz o componente (e o
iframe dentro dele) só existir no DOM depois que o usuário clica e o modal abre — ou seja, o iframe só
começa a carregar no momento do clique, daí a demora perceptível.

O que fazer: analise a melhor estratégia para pré-carregar esses 3 iframes assim que a página abre,
para que o clique apenas *exiba* um iframe já carregado, sem esperar rede. Considere, por exemplo:
  a) Renderizar os 3 iframes ocultos (fora da tela ou com display controlado por CSS, não desmontados
     do DOM) já no FormModalProvider, e ao abrir o modal apenas trocar a visibilidade/mover o iframe já
     pronto para dentro do modal, em vez de recriar o elemento (hoje há um `key={variantKey}` que força
     remount a cada troca — isso também precisa mudar).
  b) Adicionar `<link rel="preconnect" href="https://api.formulafitness.co" crossorigin>` no
     index.html para acelerar a conexão inicial, independentemente da estratégia acima.
  c) Avaliar se faz sentido atrasar esse pré-carregamento com `requestIdleCallback` (ou equivalente) ou
     um pequeno delay após o load da página, para não competir com o carregamento do conteúdo principal
     e não prejudicar métricas como LCP.
Escolha e implemente a abordagem que achar mais robusta, e me explique o trade-off que escolheu
(ex.: leve impacto em requests iniciais vs. clique instantâneo depois).

═══════════════════════════════════════════════════════════════════
2. REMOVER A SEÇÃO "Transform Your Body / Enter your Contact Info" DE TODAS AS PÁGINAS
═══════════════════════════════════════════════════════════════════
Essa seção é o componente `src/components/sections/ContactSection.jsx` (painel com foto + "Transform
Your Body. Transform Your Life." de um lado, e "Enter your Contact Info" + formulário do outro). Ela é
renderizada como `<ContactSection />` nestes 12 arquivos, sempre logo antes do `<ConsultCTA />` final:
  - src/pages/Home.jsx
  - src/pages/PersonalTraining.jsx
  - src/pages/SemiPrivate.jsx
  - src/pages/RecoveryService.jsx
  - src/pages/ActiveAging.jsx
  - src/pages/InBody.jsx
  - src/pages/YouthTraining.jsx
  - src/pages/TrainingServices.jsx
  - src/pages/Testimonials.jsx
  - src/pages/Team.jsx
  - src/pages/About.jsx
  - src/pages/BioPage.jsx

Remova a tag `<ContactSection />` e o import correspondente desses 12 arquivos. Mantenha o
`<ConsultCTA />` (é uma seção diferente, "Ready to take the first step?", que deve continuar).

⚠️ Atenção a um detalhe: o `<section>` do ContactSection carrega `id="consult"`, que é o alvo do
fallback `href="/#consult"` usado em `src/components/ui/ConsultLink.jsx` (o link funciona via JS na
prática, mas o href é um fallback de acessibilidade/no-JS). Depois de remover ContactSection dessas
páginas, esse anchor deixa de existir nelas. Avalie se vale mover `id="consult"` para outra seção fixa
dessas páginas (ex.: o `<section>` do ConsultCTA) para preservar o fallback, ou se isso é aceitável
como está — sua decisão, mas registre o que escolheu.

Depois de remover de todos os arquivos, confirme que o componente `ContactSection.jsx` não ficou
órfão sem uso em nenhum outro lugar antes de decidir se vale apagar o arquivo (não é obrigatório
apagar — só remover o uso já resolve o pedido).

═══════════════════════════════════════════════════════════════════
3. ALINHAMENTO DO TEXTO NA PÁGINA TERMS OF SERVICE (e Refund Policy, que usa o mesmo componente)
═══════════════════════════════════════════════════════════════════
Terms of Service e Refund Policy são renderizadas pelo mesmo componente genérico
`src/pages/LegalPage.jsx` (Terms.jsx e Refund.jsx só passam o conteúdo). O hero usa `PageHero`, que
usa a classe `.container` padrão (max-width 1200px, definida em global.css). Logo abaixo, o bloco de
conteúdo usa:
  `<div className="container" style={{ maxWidth: '780px' }}>`
Como `.container` já tem `margin: 0 auto`, esse `maxWidth: 780px` inline faz esse bloco mais estreito
ficar centralizado dentro do container maior — e por isso o texto do corpo começa mais à direita do que
o título do hero, dando a impressão de desalinhamento entre hero e conteúdo.
Corrija para que a borda esquerda do texto do corpo fique alinhada com a borda esquerda do título/texto
do hero (ex.: trocando a centralização por alinhamento à esquerda nesse bloco, sem quebrar o
max-width de leitura confortável). Aplique a correção uma vez em LegalPage.jsx — isso corrige Terms of
Service e Refund Policy ao mesmo tempo, já que compartilham o componente.

═══════════════════════════════════════════════════════════════════
4. REMOVER SEÇÃO "Build Strength & Gain Confidence" DA PÁGINA SEMI-PRIVATE
═══════════════════════════════════════════════════════════════════
Em `src/pages/SemiPrivate.jsx`, remova o bloco:
  <CtaBanner
    heading="Build Strength & Gain Confidence"
    subheading="Get Started Today!"
    button="Get Started"
    image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
  />
Ele fica entre `<LocationBlock />` e `<FindUs />`. Remova só esse `<CtaBanner>`; se o import de
CtaBanner ficar sem uso nesse arquivo depois da remoção, remova o import também.

═══════════════════════════════════════════════════════════════════
5. REMOVER SEÇÃO "Start Your Transformation with Expert Coaching" DA PÁGINA PERSONAL TRAINING
═══════════════════════════════════════════════════════════════════
Em `src/pages/PersonalTraining.jsx`, remova o bloco:
  <CtaBanner
    heading="Start Your Transformation with Expert Coaching"
    subheading="Experience results-driven training built for you!"
    button="Book a consultation"
    image={upload('2026/05/Formula-Fitness-03.2026-145-1-scaled.jpeg')}
  />
Fica logo depois de `<Partners />` (que também será removido no item 6) e antes de `<FindUs />`.

═══════════════════════════════════════════════════════════════════
6. REMOVER A SEÇÃO "Our Partners" DA PÁGINA PERSONAL TRAINING
═══════════════════════════════════════════════════════════════════
Ainda em `src/pages/PersonalTraining.jsx`, remova a tag `<Partners />` (componente
`src/components/sections/Partners.jsx`, o carrossel de logos "Our Partners") e o respectivo import.
Não mexa no componente Partners.jsx em si — ele continua em uso na Home.

═══════════════════════════════════════════════════════════════════
7. REDESENHAR A SEÇÃO "What is Active Aging?" NA PÁGINA ACTIVE AGING
═══════════════════════════════════════════════════════════════════
Em `src/pages/ActiveAging.jsx`, é esta seção (linhas ~68–77):
  <section className="section aa-values">
    <div className="container">
      <span className="eyebrow">what is active aging?</span>
      <ul className="aa-values__list">
        {['Energy', 'Longevity', 'Life', 'Less Limitation', 'Strong'].map(...)}
      </ul>
    </div>
  </section>
O estilo está em `src/pages/ActiveAgingPage.css`, classes `.aa-values`, `.aa-values__list`,
`.aa-values__chip` — hoje é uma lista de "pills" grandes centralizadas, sem imagem nem estrutura de
card, o que destoa do resto do site.
Redesenhe essa seção para seguir o padrão visual predominante no site: seções como `FeatureRow`
(`src/components/sections/FeatureRow.jsx`, usado várias vezes nesta mesma página) combinam imagem +
texto/lista em duas colunas, com os tokens de radius/shadow/spacing do design system. Use isso como
referência de "padrão estético" — pode reaproveitar o componente FeatureRow existente com uma imagem
nova, ou criar uma variação nova que mantenha a mesma linguagem visual (cards com `--shadow-card`,
`--radius-lg`, cores de `--color-brand`, etc.). Fique à vontade para propor a melhor solução, mas
mantenha o conteúdo (as 5 palavras-chave: Energy, Longevity, Life, Less Limitation, Strong) de alguma
forma reconhecível.

═══════════════════════════════════════════════════════════════════
8. REFAZER OS CARDS DA SEÇÃO "What You Get" NA PÁGINA ACTIVE AGING
═══════════════════════════════════════════════════════════════════
Mesma página, seção logo abaixo (linhas ~99–111), classe `.aa-inclusions` (estilizada em
ActiveAgingPage.css, linhas ~86–124): hoje é uma grade de itens em lista (ícone de check + texto),
sem imagem, 2 a 4 colunas dependendo do breakpoint.
Compare com o padrão de card mais usado no site — por exemplo `.aa-program` (mesma página, seção
"Rediscover Your Vitality", com imagem no topo + título + texto) ou os cards de "Training Programs" na
Home (`src/components/sections/Programs.jsx`). Refaça os cards de "What You Get" para se parecerem
mais com esse padrão (imagem/ícone maior e mais visual, hierarquia de título + descrição, mesma
linguagem de shadow/radius/hover), em vez da lista atual de linha única com ícone pequeno + texto.
Mantenha os 8 itens de conteúdo (`inclusions` no topo do arquivo) — só a apresentação visual muda.

═══════════════════════════════════════════════════════════════════
9. REMOVER A SEÇÃO "Our Social Circle" DA PÁGINA ACTIVE AGING
═══════════════════════════════════════════════════════════════════
Ainda em `src/pages/ActiveAging.jsx`, remova o bloco (linhas ~178–189):
  <section className="section section--alt">
    <div className="container">
      <SectionTitle eyebrow="our social circle" title="Your Journey at a Glance" ... />
      <div className="aa-gallery">...</div>
    </div>
  </section>
Fica entre `<Results />` e `<FindUs />`. Se as classes `.aa-gallery` / `.aa-gallery__item` em
ActiveAgingPage.css ficarem sem uso em qualquer lugar do projeto depois da remoção, pode limpá-las.

═══════════════════════════════════════════════════════════════════
10. REMOVER A SEÇÃO "Get Your InBody Analysis Today" DA PÁGINA INBODY SCAN
═══════════════════════════════════════════════════════════════════
Em `src/pages/InBody.jsx`, remova o bloco (linhas ~115–119):
  <CtaBanner
    heading="Get Your InBody Analysis Today—Click The Button Below!"
    button="Book a Consultation"
    image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
  />
Fica entre a seção de resultados de exemplo do InBody e `<FindUs />`.

═══════════════════════════════════════════════════════════════════
11. MODERNIZAR OS DEPOIMENTOS NA PÁGINA TESTIMONIALS
═══════════════════════════════════════════════════════════════════
Hoje a página `src/pages/Testimonials.jsx` renderiza os depoimentos via
`src/components/sections/ReviewsGrid.jsx` (+ `ReviewsGrid.css`): uma grade estática de 1/2/3 colunas
de cards brancos, sem nenhuma animação, com texto truncado por `-webkit-line-clamp`.

O site já tem um padrão mais moderno pronto, usado na Home: `src/components/sections/Reviews.jsx`
(+ Reviews.css) é um carrossel 3D com autoplay, pausa no hover, swipe touch, navegação por setas e
dots, avatar com iniciais coloridas, "Read more/Show less" para textos longos, e nota geral com link
para o Yelp. Também existe o hook `src/hooks/useIntersectionObserver.js` (exporta `useScrollReveal`)
pronto para animações de entrada ao rolar a página, caso prefira uma abordagem de grade com reveal em
vez de carrossel.

Modernize a apresentação dos depoimentos na página Testimonials usando essa linguagem já estabelecida
no site (reaproveite o componente Reviews.jsx adaptado, ou construa algo novo na mesma linha visual —
com animação de entrada, hover states, etc.). Fique à vontade para escolher o formato (carrossel,
masonry com reveal no scroll, grid com stagger animation...) desde que fique visivelmente mais
dinâmico que uma grade estática e continue consistente com o design system do site.

⚠️ Atenção ao formato dos dados: o array `reviews` local em Testimonials.jsx tem o formato
`{ id, name, avatar, text }` (com foto de avatar, sem nota em estrelas nem data), enquanto o array
`reviews` em `src/data/reviews.js` (usado pela Home) tem o formato `{ id, name, location, stars, date,
text }` (sem avatar, com iniciais geradas). Se for reaproveitar o componente Reviews.jsx como base,
trate essa diferença de schema (avatar real vs. iniciais, com/sem estrelas e data) sem quebrar nenhum
dos dois usos.

═══════════════════════════════════════════════════════════════════
COMO EXECUTAR
═══════════════════════════════════════════════════════════════════
1. Antes de codar, me devolva um plano curto confirmando os arquivos por item (principalmente os
   itens 7, 8 e 11, que são redesign e não só remoção).
2. Execute os itens na ordem: primeiro as remoções simples (2, 4, 5, 6, 9, 10) — são baixo risco e
   rápidas de validar — depois o ajuste de alinhamento (3), depois o pré-carregamento de formulários
   (1, que mexe em lógica compartilhada global), e por último os redesigns (7, 8, 11).
3. Depois de cada item, rode o build e confirme visualmente (descreva o que mudou).
4. Ao final, rode uma checagem de responsividade nas páginas afetadas (Home, Personal Training,
   Semi-Private, Active Aging, InBody, Testimonials, Terms of Service, Refund Policy) e me dê um
   resumo final com qualquer decisão de design que você tomou por conta própria nos itens 7, 8 e 11.
```
