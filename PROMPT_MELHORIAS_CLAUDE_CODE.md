# Prompt para Claude Code — Melhorias no site Formula Fitness

> Este arquivo tem duas partes: (1) um resumo do que eu levantei sobre o projeto, pra você conferir se bate com o que você espera; (2) um **prompt pronto para colar no Claude Code**, já com todo o contexto do projeto, faltando só a lista de melhorias (seção `MELHORIAS DESEJADAS`).

---

## 1. O que eu entendi do projeto

**Negócio:** Formula Fitness é um estúdio de personal training em Los Alamitos, CA. Site institucional/lead-gen — não é e-commerce, não tem preços públicos (a página `/prices` só coleta contato pra um consultor ligar depois). Objetivo central de toda página é levar o visitante a "Book a Consultation".

**Stack técnico:**
- React 18 + Vite 5, React Router v6 (rotas com code-splitting via `React.lazy` + retry customizado em `lazyWithRetry`)
- CSS puro com design tokens em `src/styles/variables.css` (sem Tailwind/UI framework)
- Sem testes automatizados, sem TypeScript
- Deploy: Vercel (produção atual) e Netlify configurados como fallback
- `prompts/` na raiz guarda os documentos originais usados para construir o site (`MASTER_PROMPT.md`, `DESIGN_SYSTEM.md`, `INTERACTIONS.md`, `PROJECT_SETUP.md`, `CLAUDE_CODE_INSTRUCTIONS.md`) — o site é uma **réplica fiel (Fase 1)** do site antigo em WordPress (formulafitness.co), e o próprio README já menciona uma **Fase 2 planejada** (animações/scroll reveal, performance, SEO técnico, acessibilidade WCAG) que aparentemente ainda não foi executada.

**Mapa completo de páginas (21 rotas):**
- `/` Home
- `/training-services` (hub de serviços)
- `/personal-training`, `/semi-private-personal-training`, `/recovery-service`, `/active-aging`, `/inbody`, `/youth-training-program` (subpáginas de serviço)
- `/testimonials`, `/referrals`
- `/team`, `/bio/:slug` (dinâmica)
- `/join-our-team`, `/join-our-team/:slug` (dinâmica)
- `/prices`
- `/blogs`, `/blogs/:slug` (dinâmica)
- `/about`, `/faq`
- `/terms-of-service`, `/refund-policy`
- `*` NotFound

**Home — seções na ordem em que aparecem:**
1. Header fixo (pill nav flutuante) com dropdowns (Services, Testimonials, Team, About) + relógio digital decorativo + CTA "Book a Consultation"
2. Hero — foto da equipe, headline "Optimal Training. Sustainable Results.", CTA
3. Carrossel de logos de parceiros (InBody, Thorne, NASM, Rogue, MyZone, RockTape, etc.)
4. "Health is Wealth" — vídeo + accordion (Client-First Approach, Sustainable Fitness Journey, Innovative Training, Whole-Health Improvement, Highly-Skilled Trainers & Team)
5. Training Programs — 3 cards (Private PT, Small Group PT, Recovery Lab)
6. InBody 580 — bloco 2 colunas com checklist
7. "Personal Training, Personal Triumphs" — 2 colunas texto+imagem
8. "Your Gateway to Active Aging" — 2 colunas texto+imagem
9. Video Testimonials — 3 cards (Katie, Dharshun, Adrian) + "View More"
10. Calculadora de BMI (seção dark, toggle métrico/imperial) — ferramenta funcional
11. Reviews — carrossel com nota do Yelp (5.0, 61+ reviews)
12. "Real People Real Results" — cards antes/depois (Yaska, Nadia, Dykes + mais 8 nomes)
13. Find Us — mapa embutido + endereço/telefone/horário
14. Banner "Transform Your Body. Transform Your Life." + formulário de contato
15. CTA final "Ready to take the first step?"
16. Footer — logo, tagline, redes sociais, links (Latest News, Information, Contact), horário, copyright, Terms/Refund

**Subpáginas de serviço:** seguem um padrão comum (hero da página, "3 passos", bullets de benefícios, seção de localização, CTA), com conteúdo específico de cada serviço. FAQ é a página com mais profundidade de conteúdo (preços a partir de $85/sessão, sem mensalidade fixa, garantia de satisfação/reembolso, sessões de 55min, atendimento 7 dias/semana).

**Pontos que notei e que podem ser relevantes pra sua lista de melhorias** (não presumi nenhuma ação, só registrando o que vi):
- Páginas `/personal-training`, `/active-aging`, `/inbody` e outras têm um `<article>` (provavelmente um card de depoimento) que aparece antes do conteúdo principal no DOM — pode valer revisão de ordem/semântica HTML para SEO e leitores de tela.
- Não há testes automatizados nem TypeScript.
- Fase 2 (animações, SEO técnico, acessibilidade, performance) está documentada mas parece não implementada ainda.
- Termos de Uso e Política de Reembolso são bem enxutos — pode valer revisão jurídica dependendo do objetivo.

---

## 2. Prompt pronto para o Claude Code

Copie o bloco abaixo, **substitua a seção `MELHORIAS DESEJADAS`** pela sua lista, e cole no Claude Code dentro do repositório do projeto.

```
Você vai trabalhar no site da Formula Fitness (estúdio de personal training em Los Alamitos, CA),
um projeto React 18 + Vite 5 + React Router v6, com CSS puro e design tokens (sem framework de UI).
Deploy em produção: Vercel (https://lp-formulafitness.vercel.app/).

ANTES DE COMEÇAR:
1. Leia os documentos de referência do projeto na pasta prompts/: MASTER_PROMPT.md, DESIGN_SYSTEM.md,
   INTERACTIONS.md, PROJECT_SETUP.md, CLAUDE_CODE_INSTRUCTIONS.md — eles definem o tom de marca, a
   estrutura esperada e as regras que já guiaram a construção do site até aqui.
2. Leia src/styles/variables.css — é a fonte única de verdade para cores, tipografia, espaçamento,
   sombras e breakpoints. Qualquer melhoria visual deve reutilizar esses tokens, não inventar valores novos.
3. Rode `npm run dev` e navegue pelo site localmente para confirmar que está tudo funcionando antes de
   mexer em qualquer coisa.

REGRAS GERAIS:
- Este é um site institucional de geração de leads (não e-commerce). O objetivo de toda página é levar
  o visitante a "Book a Consultation" — não perca isso de vista ao propor mudanças.
- O site é uma réplica fiel do site original (formulafitness.co, WordPress/Elementor). Não redesenhe
  seções nem mude o tom da marca a menos que a melhoria pedida exija isso explicitamente.
- Mobile-first sempre. Teste em 320px, 768px, 1024px e 1440px.
- Reutilize componentes existentes em src/components/ui e src/components/sections antes de criar novos.
- Sem dependências novas sem justificativa clara — o projeto hoje só depende de react, react-dom e
  react-router-dom em produção.
- Sem console.log no código final. Siga os padrões de ESLint/Prettier já configurados
  (`npm run lint`, `npm run format`).
- Rode `npm run build` ao final e confirme que não há erros antes de considerar a tarefa concluída.
- Se uma melhoria for ambígua ou impactar várias páginas de uma vez, pare e pergunte antes de aplicar
  em massa — prefira fazer uma mudança por vez e validar.
- Não altere o conteúdo textual das páginas (textos, preços, horários, dados de contato) a menos que
  a melhoria peça isso explicitamente.

ESTRUTURA DO PROJETO (referência rápida):
- src/pages/         → páginas roteadas (Home + subpáginas)
- src/components/sections/ → seções da Home (Hero, Programs, Reviews, InBody, etc.)
- src/components/ui/       → componentes reutilizáveis (Button, Modal, Accordion, BMICalculator, etc.)
- src/components/layout/   → Header, Footer, Layout
- src/data/          → conteúdo estático (navigation, services, testimonials, team, faq, blog, reviews)
- src/styles/        → variables.css (tokens), global.css, animations.css
- src/hooks/, src/utils/   → hooks e utilitários

MELHORIAS DESEJADAS:
<<< COLE AQUI A LISTA DE MELHORIAS QUE VOCÊ QUER, DE PREFERÊNCIA PRIORIZADA (ex: 1. crítico, 2. importante, 3. nice-to-have) >>>

COMO EXECUTAR:
1. Antes de codar, me devolva um plano curto: quais arquivos serão tocados por melhoria e em que ordem
   você pretende executá-las.
2. Execute uma melhoria por vez. Depois de cada uma, rode o build e descreva o que mudou.
3. Ao final de todas as melhorias, rode uma checagem de responsividade nas páginas afetadas e liste
   qualquer trade-off ou decisão que tomou por conta própria.
```

---

### Próximo passo

Me manda a lista de melhorias que você quer e eu finalizo a seção `MELHORIAS DESEJADAS` do prompt acima com prioridades e qualquer observação técnica específica de cada uma.
