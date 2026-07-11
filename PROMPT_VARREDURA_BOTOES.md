# Prompt — Varredura de botões/navbar quebrados

Antes de escrever o prompt eu tentei investigar de fora (lendo o código e testando o site publicado),
mas cheguei a um limite: as mudanças da rodada anterior ainda estão **só no seu ambiente local, sem
commit** (`git status` mostra tudo como "not staged") — o site publicado em
lp-formulafitness.vercel.app ainda é a versão antiga, sem nenhuma das 11 melhorias. Ou seja, o bug que
você está vendo só existe no seu `npm run dev` (ou build local), e só o Claude Code, rodando aí no seu
ambiente, consegue reproduzir e depurar de verdade. Por isso o prompt abaixo é focado em fazer *ele*
reproduzir, achar a causa raiz e só depois corrigir — em vez de eu arriscar um palpite às cegas.

Duas pistas que valem a pena ele verificar primeiro (acelera a investigação):

1. **`git diff --stat -w` (ignorando espaço/quebra de linha)** mostra que a mudança real de conteúdo
   ficou concentrada em ~19 arquivos, batendo com os 11 itens pedidos — ou seja, não é um problema de
   "mudança gigante fora de escopo", é algo pontual nesses arquivos.
2. O item 1 (pré-carregamento dos formulários) foi a mudança arquitetural mais profunda: o
   `FormModalProvider` deixou de ser "só abre quando clica" e passou a ficar sempre montado, envolvendo
   `<Header>` inteiro dentro do `Layout.jsx`, com um modal fixo (`position: fixed; inset:0; z-index:1100`)
   sempre presente no DOM (só escondido por CSS). Como isso é a única mudança que afeta o site inteiro
   de uma vez (todas as páginas passam por `Layout.jsx`), é o suspeito nº 1 para um bug que derrubou
   "quase todos os botões" simultaneamente — mas peço pra ele confirmar com dados reais (console,
   estilos computados), não só assumir.

---

```
Depois da última rodada de mudanças (pré-carregamento dos formulários GHL, remoção de seções, ajuste
de alinhamento no Terms of Service, redesign de Active Aging e Testimonials), quase todos os botões do
site pararam de funcionar — incluindo o hover e o clique nos itens da navbar (dropdowns de Services,
Testimonials, Team, About). Preciso que você faça uma varredura completa e conserte a causa raiz, não
só os sintomas.

PASSO 1 — REPRODUZA E ISOLE A CAUSA
1. Rode `npm run dev` e abra o console do navegador. Navegue pela Home e por pelo menos 3 subpáginas.
   Anote TODO erro/warning que aparecer no console, no load da página e ao clicar em qualquer botão.
2. Rode `git diff --stat -w` (ignora diferenças de espaço/quebra de linha) para ver o escopo real das
   mudanças — deve dar por volta de 19 arquivos. Foque a investigação neles antes de qualquer outro
   lugar; se aparecer diferença de conteúdo real em arquivos que "não deveriam" ter mudado (ex.:
   Header.jsx, Header.css, Footer.jsx), isso também é sinal de algo errado.
3. Suspeito principal: `src/components/ui/FormModalProvider.jsx` e `src/components/ui/FormModal.jsx`.
   Essa foi a única mudança da rodada que afeta o site inteiro de uma vez, porque `FormModalProvider`
   envolve `<Header>` e `<Outlet>` juntos dentro de `src/components/layout/Layout.jsx`. Verifique
   especificamente:
   - O `<div className="form-modal">` (renderizado sempre, mesmo fechado, via createPortal) está
     realmente aplicando `visibility: hidden` + `pointer-events: none` no estado fechado na página
     renderizada de verdade (inspecione o elemento, não só o CSS-fonte — pode haver outra regra com
     mais especificidade sobrescrevendo isso)?
   - Ele está criando um novo *stacking context* (via `position: fixed` + `z-index: 1100`) que, por
     algum motivo de ordem de render ou CSS, está capturando cliques/hover mesmo escondido?
   - O hook `useFormModal()` lança algum erro (`throw new Error(...)`) em algum componente que é
     renderizado fora de `<FormModalProvider>` por engano, o que faria aquele clique especificamente
     falhar silenciosamente?
   - Os 3 iframes do GoHighLevel, ao serem pré-carregados, disparam algum erro de CORS/console que
     trava outra coisa na página?
4. Investigue a navbar separadamente — pode ser o mesmo problema ou pode ser independente:
   - Hover: `.header__item.has-dropdown:hover .header__dropdown` (em `src/components/layout/Header.css`)
     depende só de CSS puro. Se o hover não estiver funcionando, use o DevTools pra forçar o estado
     `:hover` no elemento e ver se o `.header__dropdown` correspondente realmente muda `visibility`/
     `opacity`/`display` — se sim, o CSS está certo e o problema é outra coisa cobrindo o elemento por
     cima (ex.: o form-modal do item 3 acima, ou outro elemento com z-index/position mal calculado).
   - Clique: os links do dropdown e os itens do menu usam `<Link>` do react-router — confirme que não
     há nenhum erro de contexto (ex.: `useLocation`/`useFormModal` sendo chamado fora do provider certo)
     quebrando a árvore de componentes do Header.
5. Depois de achar a causa raiz, me explique em 2-3 frases o que estava acontecendo antes de corrigir.

PASSO 2 — CORRIJA
6. Aplique a correção mínima necessária. Não reverta funcionalidades pedidas (o pré-carregamento dos
   formulários deve continuar funcionando) — corrija a causa do conflito, não desfaça a feature.
7. Rode `npm run build` e `npm run lint` sem erros.

PASSO 3 — VARREDURA COMPLETA (sem exceção, em todas as páginas)
Depois de corrigir, faça uma checklist manual clicando em CADA botão/link interativo do site — não
amostre, cheque todos. Para cada página (Home e todas as subpáginas em src/pages/), confirme:
   - Todos os botões "Book a Consultation" / "Get Started" / CTAs de seção abrem o formulário certo.
   - Navbar desktop: hover mostra o dropdown em Services, Testimonials, Team, About; clique em cada
     item do dropdown navega para a página certa; clique nos itens sem dropdown (Prices, Blogs)
     também navega.
   - Menu mobile (viewport estreito): o hamburger abre/fecha, os grupos com submenu expandem/colapsam,
     todos os links navegam, e o botão de CTA no menu mobile abre o formulário.
   - Botão fechar do modal de formulário, tecla Esc, e clique fora do modal fecham o modal.
   - Botões de accordion (ex.: seção "Health is Wealth" na Home) expandem/colapsam.
   - Play buttons de vídeo (Video Testimonials, FAQ, páginas de serviço) abrem o player/modal.
   - Carrossel de reviews (Home) e o novo carrossel/grid de Testimonials: setas, dots, swipe.
   - Calculadora de BMI: toggle métrico/imperial e botão de calcular funcionam.
   - Botão "scroll to top".
   - Links do footer (Information, Latest News, redes sociais, Terms/Refund).
   - Formulário de referral na página Referrals e o formulário embutido em Prices.
Liste qualquer botão que ainda não esteja funcionando ao final — não dê a tarefa por concluída até
essa lista estar vazia.

PASSO 4 — RELATÓRIO FINAL
Me devolva um resumo: (a) qual era a causa raiz, (b) o que foi corrigido, (c) confirmação de que a
varredura completa do Passo 3 passou em todas as páginas, (d) se sobrou algum item quebrado que precisa
de mais investigação.
```
