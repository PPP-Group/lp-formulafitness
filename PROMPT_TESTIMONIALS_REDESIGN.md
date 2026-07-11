# Prompt — Redesign da página Testimonials (com pesquisa de referência)

## O que a pesquisa mostrou

Pesquisei tendências atuais de design para seções de depoimentos (2026) e o padrão que mais aparece
como "estado da arte" hoje é o chamado **"Wall of Love"**: em vez de um carrossel único ou uma grade
uniforme, é um mural com cards de tamanhos variados (estilo *bento/masonry*), misturando texto, foto
real do cliente, nota em estrelas e selo de verificação, organizado para ser escaneável rapidamente —
o visitante bate o olho e já sente o volume de prova social, sem precisar ler tudo.

Outros pontos que apareceram de forma consistente em várias fontes:
- **Movimento com propósito, não decoração**: fade-in/scale ao entrar no viewport (scroll reveal),
  não animações contínuas que competem com a leitura.
- **Autenticidade acima de polimento**: foto real (não stock), nome completo, e no caso de academias/
  personal trainers, fotos de antes/depois com contexto (não só o texto do depoimento isolado) —
  isso teve destaque específico em pesquisa sobre sites de academia/personal trainer.
- **Vídeo quando possível**: depoimentos em vídeo têm engajamento/conversão bem acima do texto puro,
  mesmo que seja só uma foto + 2 frases quando vídeo não é viável para todos os casos.
- **Micro-interação no hover**: leve elevação/escala do card, não precisa de efeito 3D chamativo.
- **Filtro opcional por categoria**: alguns sites permitem filtrar depoimentos por produto/serviço —
  faz sentido aqui porque a Formula Fitness já tem categorias claras de serviço (Personal Training,
  Semi-Private, Active Aging, Recovery).
- Carrosséis "de vitrine" continuam válidos, mas cada vez mais como complemento (destaque de 1-2
  depoimentos fortes no topo), não como a única forma de mostrar todos os depoimentos.

Fontes: [Web Design Trends 2026 – Elementor](https://elementor.com/blog/web-design-trends-2026/),
[12 Testimonial Page Examples That Convert – FeedbackRobot](https://www.feedbackrobot.com/articles/website-testimonial-page-examples),
[Website testimonial examples – Webflow Blog](https://webflow.com/blog/testimonials-on-website),
[15 creative testimonial examples – Wix](https://www.wix.com/blog/testimonials),
[8 compelling testimonial examples – Framer Blog](https://www.framer.com/blog/testimonials-on-website-examples/),
[19 Inspiring Wall of Love Examples – Curator](https://curator.io/blog/wall-of-love),
[10 Examples of Walls of Love that convert – Reviewskits](https://reviewskits.com/blog/10-examples-walls-of-love-that-convert),
[Wall of Love: The Complete Guide – Say About Us](https://sayabout.us/blog/wall-of-love-guide),
[Bento Grid Design 2026 – Landdding](https://landdding.com/blog/blog-bento-grid-design-guide),
[Bento grids UX – LogRocket](https://blog.logrocket.com/ux-design/bento-grids-ux/),
[Fitness Websites: 20+ Inspiring Examples – Site Builder Report](https://www.sitebuilderreport.com/inspiration/fitness-websites),
[Gym website design ideas – WodGuru](https://wod.guru/blog/gym-website-design/).

## Como isso se aplica ao seu projeto

O projeto já tem, sem precisar de dependência nova, quase tudo que esse padrão pede:
- `src/hooks/useIntersectionObserver.js` (`useScrollReveal`) — pronto para o fade-in/scale no scroll.
- O padrão de hover já usado em quase todo card do site (`transform: translateY(-4px)` +
  `box-shadow: var(--shadow-md)`) — é exatamente a micro-interação recomendada, só precisa reaplicar.
- `Partners.jsx` já implementa uma faixa de marquee infinito em CSS puro — a mesma técnica dá pra
  reaproveitar se fizer sentido para uma "fileira de destaque" no topo.
- A galeria de antes/depois já existe na própria página (`tm-gallery`, em `Testimonials.jsx`) — hoje
  ela fica separada dos depoimentos; a pesquisa sugere aproximar/cruzar essas duas coisas.
- `src/components/ui/VideoCard.jsx` + `src/components/ui/Modal.jsx` já existem e já são usados para
  depoimentos em vídeo em outras páginas — dá pra reaproveitar aqui também, se fizer sentido.

Copie o prompt abaixo no Claude Code.

---

```
Quero redesenhar a apresentação dos depoimentos na página Testimonials (src/pages/Testimonials.jsx),
que hoje usa src/components/sections/ReviewsGrid.jsx — uma grade estática de cards uniformes, sem
animação. Pesquisei tendências atuais de design de depoimentos e quero aplicar o padrão que mais se
destacou: um "Wall of Love" em grade bento/masonry (cards de tamanhos variados, não todos iguais),
com as seguintes características:

1. LAYOUT: cards de tamanhos variados (ex.: alguns depoimentos em destaque ocupam um card maior/mais
   alto com o texto completo e foto maior; a maioria ocupa cards menores e mais compactos). Evite uma
   grade totalmente uniforme — a variação de tamanho é o que torna o mural escaneável e interessante.
2. ANIMAÇÃO DE ENTRADA: use o hook já existente `useScrollReveal` (src/hooks/useIntersectionObserver.js)
   para os cards aparecerem com um fade-in/translateY sutil e escalonado (stagger) conforme entram no
   viewport — sem exagerar, é movimento funcional, não decorativo.
3. MICRO-INTERAÇÃO NO HOVER: reaproveite a linguagem de hover já usada em quase todo card do site
   (leve elevação + sombra mais forte, usando os tokens --shadow-card/--shadow-md e a transição
   --ease-standard já definidos em variables.css). Não precisa inventar um efeito novo.
4. AUTENTICIDADE: mantenha foto real do cliente (já existe em vários itens do array `reviews` em
   Testimonials.jsx), nome completo, e considere aproximar a seção "Before & After" (tm-gallery, mais
   abaixo na mesma página) dos depoimentos — hoje elas estão desconectadas uma da outra, mas a
   pesquisa mostra que casar a foto de resultado com o relato do cliente reforça a prova social.
5. AVALIE (e me diga o que decidiu, não precisa implementar tudo): 
   a) Vale destacar 1–2 depoimentos "hero" no topo da seção com tipografia maior antes do restante da
      grade?
   b) Vale um filtro simples por serviço (Personal Training / Semi-Private / Active Aging / Recovery),
      usando os dados que já existem em src/data/services.js, já que os depoimentos hoje não têm essa
      categorização — se optar por isso, vai precisar adicionar essa categoria aos dados também.
   c) Vale reaproveitar VideoCard.jsx + Modal.jsx para incluir 1–2 depoimentos em vídeo dentro do
      mesmo mural (já existem vídeos de depoimento usados em outras páginas, ex. Home/Active Aging),
      misturando com os depoimentos em texto?

REGRAS:
- Não adicione nenhuma biblioteca nova (framer-motion, gsap, swiper, etc.) sem antes me perguntar e
  justificar por que o CSS puro + useScrollReveal não dão conta do resultado desejado.
- Use exclusivamente os design tokens de src/styles/variables.css (cores, radius, shadow, spacing) —
  nada de valores soltos.
- Mobile-first: teste em 320px, 768px, 1024px, 1440px. Numa grade bento/masonry isso é o ponto mais
  arriscado — garanta que em mobile os cards empilham de forma legível, sem cortes de texto estranhos.
- Mantenha o restante da página Testimonials.jsx (Before & After gallery, CTA banner, seção de
  filosofia no fim) — o pedido é só sobre a apresentação da seção de depoimentos em si, a menos que
  você decida integrar a galeria de antes/depois junto (ponto 4 acima), o que é bem-vindo.
- Ao final, rode npm run build e npm run lint sem erros, e me mostre/descreva o resultado antes de eu
  considerar concluído.

Antes de codar, me devolva um plano curto: qual das opções do item 5 você recomenda incluir nesta
rodada e por quê, e como pretende estruturar os dados dos depoimentos (schema de reviews) para
suportar isso.
```
