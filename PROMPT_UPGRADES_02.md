# Prompt — Rodada 2 de Upgrades (Formula Fitness)

Investiguei os 7 pontos no código atual (que ainda está só local, sem deploy) antes de escrever o
prompt. Achei a causa raiz de dois bugs (itens 1 e 5) e trouxe referência visual real do site antigo
para o item 2 e pesquisa de conversão para o item 4. Copie o bloco entre as crases no Claude Code.

---

```
Rodada de 7 upgrades no site da Formula Fitness (React 18 + Vite 5, CSS puro com tokens em
src/styles/variables.css). Já investiguei cada item no código — use os achados abaixo como ponto de
partida, mas confirme antes de alterar.

REGRAS GERAIS:
- Um item por vez. Rode `npm run build` depois de cada um antes de seguir para o próximo.
- Use só os design tokens de variables.css — nada de cor/spacing solto.
- Mobile-first: teste 320px, 768px, 1024px, 1440px em qualquer página que tocar.
- Não adicione dependência nova sem perguntar e justificar.
- Ao final de tudo, rode npm run lint e npm run build sem erros, e me dê um resumo por item.

═══════════════════════════════════════════════════════════════════
1. DROPDOWN DA NAVBAR FICA "PRESO" ABERTO APÓS CLIQUE
═══════════════════════════════════════════════════════════════════
Causa raiz encontrada: em src/components/layout/Header.css, o dropdown abre por
`.header__item.has-dropdown:hover .header__dropdown` OU `.header__item.has-dropdown:focus-within
.header__dropdown`. O `:focus-within` foi adicionado para acessibilidade via teclado — mas como
`<Link>` é um elemento focável, ao CLICAR nele o link recebe foco do navegador e continua focado
mesmo depois do mouse sair dali. Isso mantém `:focus-within` verdadeiro indefinidamente naquele item,
então quando você passa o mouse em outro item do menu, os DOIS dropdowns ficam visíveis ao mesmo
tempo (o antigo via :focus-within "grudado", o novo via :hover).

Corrija isso na raiz, sem quebrar a navegação por teclado (Tab) que o :focus-within resolve hoje.
Duas abordagens possíveis — escolha a que achar mais robusta:
  a) Controle o dropdown "ativo" via estado em JS no próprio Header (parecido com o que já existe
     para o menu mobile via `openGroup`), usando onMouseEnter/onMouseLeave por item para desktop, e
     mantendo o suporte a teclado separadamente.
  b) Tire o foco do link programaticamente quando o mouse sai do item (`onMouseLeave` chamando
     `document.activeElement.blur()` se ele estiver dentro daquele item), preservando o CSS atual.
Teste: passe o mouse por Services → clique em algo do dropdown (ou simplesmente clique no item pai) →
sem recarregar, passe o mouse em Testimonials → confirme que SÓ o dropdown de Testimonials aparece.

═══════════════════════════════════════════════════════════════════
2. REDESIGN DA PÁGINA REFERRAL PROGRAM (src/pages/Referrals.jsx + ReferralsPage.css)
═══════════════════════════════════════════════════════════════════
O conteúdo já está fiel ao site original (formulafitness.co/referrals/) — os textos batem quase
palavra por palavra. O problema é puramente visual: hoje as 3 seções principais (ref-earn, ref-tiers,
ref-vip) usam o MESMO estilo de card branco genérico para tudo, sem hierarquia visual nenhuma.

Fui ver o site original visualmente e ele usa 3 recursos que a nossa versão não tem:
  a) Na seção "How You Earn": cada item tem um ícone dentro de um círculo azul claro acima do título
     (pessoas / alvo / infinito), não é só texto em card.
  b) Na seção "What You Can Redeem": não são cards separados — é uma LISTA/tabela vertical com um
     número de pontos à esquerda (destacado com uma barra azul), e o tier mais alto (o de maior valor)
     tem destaque visual forte: fundo azul sólido (--color-brand) com texto branco, se diferenciando
     dos outros tiers. Essa lista fica lado a lado com uma foto real do estúdio.
  c) Na seção "VIP Treatment": é um bloco de largura total com fundo azul sólido (--color-brand) e
     texto branco centralizado — não é uma lista com bullets discretos como está hoje.

Recrie esse nível de hierarquia visual usando os componentes/tokens que já existem no projeto (não
copie código do site antigo, que é WordPress/Elementor — reconstrua com React + os tokens do design
system). Aproveite padrões que já existem em outras páginas do projeto: o `.cta-banner` (seção de
largura total com fundo de cor sólida, já usado em várias páginas) é uma boa referência para o item
(c); ícones em círculo colorido aparecem em outros lugares do site e podem servir de referência para
o item (a). Para o item (b), pode ser uma lista nova ou um componente de "tabela de tiers" — use sua
própria composição da tela.

Mantenha 100% do conteúdo textual (pontos, recompensas, textos) — é só a apresentação visual que muda.

═══════════════════════════════════════════════════════════════════
3. BOTÃO ILEGÍVEL/QUEBRADO NAS SUBPÁGINAS DE VAGAS (Join Our Team)
═══════════════════════════════════════════════════════════════════
Fluxo: src/pages/JoinTeam.jsx lista vagas em cards (`.job-card`, botão "Read More" com classes
`btn btn-outline`) que levam para src/pages/JobPost.jsx (`/join-our-team/:slug`), que tem um botão
"Apply Now" (`<a className="btn btn-primary job-post__apply">`, um mailto: gerado a partir de
`company.email`).

Revisei o CSS de ambos (JoinTeam.css, JobPost.css, Button.css, global.css) e não encontrei uma causa
óbvia — as classes .btn-primary/.btn-outline parecem corretas e com bom contraste no código-fonte.
Isso pode significar que o bug só aparece em runtime (ex.: alguma regra com mais especificidade
sobrescrevendo a cor, um dado de src/data/jobs.js causando erro de render, ou algo em outra folha de
estilo que eu não tenha visto). Preciso que você:
  1. Rode `npm run dev`, abra CADA vaga listada em /join-our-team, e verifique visualmente o botão
     "Apply Now" (contraste de texto, se o clique abre o cliente de e-mail corretamente).
  2. Verifique também o botão "Read More" de cada card na listagem — o problema pode estar aí também.
  3. Abra o DevTools e inspecione o elemento do botão problemático: veja no painel "Computed" qual
     regra está definindo a cor do texto/fundo, e identifique o que está sobrescrevendo o esperado.
  4. Corrija a causa raiz (não force cor inline só pra "resolver visualmente" sem entender o porquê).
Me diga o que encontrou antes de considerar concluído.

═══════════════════════════════════════════════════════════════════
4. REDESIGN DA PÁGINA PRICES PARA CONVERSÃO MÁXIMA (é a página nº 1 de geração de leads)
═══════════════════════════════════════════════════════════════════
Pesquisei boas práticas de página de conversão/lead-gen para 2026. Os pontos que mais se aplicam aqui:
  - Prova social específica > genérica: citar números reais (ex.: "5.0 ★ em 61+ avaliações no Yelp")
    converte mais que um selo vago de confiança.
  - Formulário com poucos campos, visível sem clique extra, é o que mais reduz fricção — por isso
    você pediu para tirar o formulário de trás do botão especificamente nesta página.
  - Um objetivo de conversão único por página, sem distrações — mas ainda assim, contexto de valor
    (o que a pessoa recebe, por que vale a pena) reduz a taxa de abandono do formulário.
  - Depoimentos amarrados ao resultado específico convertem mais que depoimentos genéricos.

Hoje src/pages/Prices.jsx é muito raso: PageHero + uma seção com foto + texto genérico + um botão que
ABRE o modal de formulário (mesmo padrão do resto do site) + o ConsultCTA final. Não há nenhuma
informação de valor, prova social, ou o formulário em si na página.

O que fazer:
  1. EMBUTA O FORMULÁRIO DIRETO NA PÁGINA (só nesta página, como você pediu). Hoje o formulário do
     GoHighLevel só existe dentro de src/components/ui/FormModal.jsx, num componente interno chamado
     `GhlFrame` que não é exportado — ele só é usado dentro do modal. Extraia esse `GhlFrame` para um
     componente reutilizável exportado (ex.: src/components/ui/GhlFrame.jsx) e use-o tanto no
     FormModal quanto, embutido diretamente (sem modal, sempre visível), na página Prices — usando a
     variante "consult" (mesmo formId já configurado em FormModalProvider.jsx). Mantenha o botão
     "Get Started" que abre o modal em TODAS as outras páginas — a mudança de "formulário sempre
     visível" é só para /prices.
  2. ADICIONE CONTEXTO DE VALOR antes ou ao lado do formulário, usando dados que JÁ EXISTEM no projeto
     (não invente números novos) — puxe da categoria "Pricing, Plans & Guarantee" de src/data/faq.js,
     que já tem essas respostas prontas: preço a partir de $85/sessão, sem taxa de matrícula/mensalidade
     fixa, planos de pagamento com 0% de juros, garantia de satisfação com reembolso das sessões
     restantes. Apresente isso como 3-4 bullets/ícones de confiança perto do formulário (não precisa
     copiar o texto inteiro da FAQ, resuma como "trust badges" curtos).
  3. ADICIONE PROVA SOCIAL: reaproveite o padrão de nota/Yelp já usado em src/components/sections/
     Reviews.jsx (5.0 ★, 61+ reviews, link pro Yelp) ou 1-2 cards de depoimento curtos.
  4. Estrutura sugerida da página (adapte como achar melhor): Hero atual → bloco de confiança (bullets
     de preço/garantia/pagamento) → formulário embutido + prova social ao lado → FAQ rápida de 2-3
     perguntas sobre preço (reaproveitando dados de faq.js) → remover ou manter o ConsultCTA final,
     sua escolha, já que a página já vai ter o formulário visível.
  5. Mobile-first: o formulário GHL embutido precisa ficar 100% funcional e sem overflow horizontal
     em 320px — teste isso com atenção, é o ponto mais arriscado dessa mudança.

═══════════════════════════════════════════════════════════════════
5. SUBPÁGINAS DE BLOG MAL FORMATADAS
═══════════════════════════════════════════════════════════════════
Causa raiz encontrada: o schema de conteúdo em src/data/blog.js só suporta blocos `{ h }` (subtítulo)
e `{ p }` (parágrafo) — não existe um tipo de bloco para LISTAS. Isso fez com que, ao portar o
conteúdo do site original, vários trechos que deveriam ser listas com bullets ficassem espremidos
dentro de um único parágrafo, separados só por ponto e vírgula/período. O pior caso é o post
'one-on-one-vs-small-group-training-which-is-right-for-you' — praticamente todos os parágrafos abaixo
de "Benefits of..."/"Downsides of..."/"Is ... a Good Fit for Me?" são, na real, 2-4 itens de lista
disfarçados de texto corrido (ex.: "More attention to detail: ... More personalized experience: ...
Injuries or body pain: ..." tudo em um parágrafo só).

O que fazer:
  1. Adicione suporte a um novo tipo de bloco de lista no schema de src/data/blog.js, por exemplo
     `{ list: ['item 1', 'item 2', ...] }`, e trate esse tipo em src/pages/BlogPost.jsx renderizando
     um `<ul>` com estilo (reaproveite o padrão de lista com bullet/ícone azul já usado em outras
     partes do site, ex. `.job-post__section li` ou `.ref-vip__list li`).
  2. Revise TODOS os posts em src/data/blog.js (são 6 no total) procurando parágrafos que na verdade
     são listas disfarçadas (frases separadas por ponto-e-vírgula ou padrão "Rótulo: descrição. Rótulo:
     descrição.") e converta para o novo bloco de lista. O post
     'one-on-one-vs-small-group-training-which-is-right-for-you' é o pior caso — comece por ele.
  3. Depois de ajustar os dados, revise visualmente cada uma das 6 subpáginas de blog
     (/blogs/:slug) pra confirmar que a leitura ficou limpa, sem parágrafos gigantes.

═══════════════════════════════════════════════════════════════════
6. BARRA DE PESQUISA NA PÁGINA FAQ
═══════════════════════════════════════════════════════════════════
src/pages/FAQ.jsx renderiza src/data/faq.js (9 categorias, cada uma com vários itens {title, body})
em 2 colunas, cada categoria usando o componente Accordion (src/components/ui/Accordion.jsx — só um
item aberto por vez dentro de cada categoria).

Adicione um campo de busca no topo da página (abaixo do PageHero, antes das colunas) que filtra em
tempo real por título E corpo da pergunta (case-insensitive). Comportamento sugerido:
  - Categorias sem nenhum item correspondente à busca ficam ocultas.
  - Dentro de uma categoria com match, mostre só os itens que correspondem (ou destaque os que
    correspondem — sua escolha, mas priorize clareza).
  - Ao digitar uma busca, expanda automaticamente os itens que dão match (hoje o Accordion só abre um
    item por vez via defaultOpen; avalie se precisa ajustar esse componente para aceitar controle
    externo de quais itens estão abertos, ou se cria uma variante para o modo de busca).
  - Estado vazio: se nada corresponder, mostre uma mensagem amigável (ex.: "Nenhuma pergunta encontrada
    — tente outro termo, ou entre em contato conosco").
  - Sem resultado nenhum na busca, sugira o botão de "Book a Consultation" como alternativa.

═══════════════════════════════════════════════════════════════════
7. AUMENTAR O TAMANHO DA LOGO NA NAVBAR
═══════════════════════════════════════════════════════════════════
Hoje em src/components/layout/Header.css a logo varia de altura conforme o estado do header:
  - `.header__logo img` (padrão): 38px, 40px em telas ≥768px, 52px em ≥1024px
  - `.header__logo-full` (estado não-scrolled/topo): 56px, 60px em ≥768px
  - `.header--pill .header__logo img` (estado scrolled/pílula): 34px, 42px em ≥1024px
Aumente esses valores de forma perceptível em todos os breakpoints e nos 3 estados (padrão, full,
pill), mantendo a proporção da logo e sem deixar o header mais alto que o necessário (cuidado para a
logo maior não colidir com os itens do menu ou ficar cortada — ajuste `--header-height` em
variables.css também, se precisar de mais espaço vertical). Teste nos 3 estados: topo da Home (hero
escuro), rolando a página (pill/solid) e no mobile.

═══════════════════════════════════════════════════════════════════
ORDEM DE EXECUÇÃO SUGERIDA
═══════════════════════════════════════════════════════════════════
1 e 7 (Header — rápidos, mesmo arquivo) → 3 (bug a investigar) → 5 (dados do blog) → 6 (FAQ) →
2 (redesign Referrals) → 4 (Prices, o mais crítico e trabalhoso, por último com calma).

Ao final, rode uma checagem de responsividade nas páginas afetadas (Home/todas via Header, Referrals,
todas as subpáginas de Join Our Team, todas as 6 subpáginas de blog, FAQ, Prices) e me dê um resumo
por item, incluindo o que você descobriu no item 3.
```
