# MASTER PROMPT — Formula Fitness Website Rebuild

> **Objetivo**: Reconstruir fielmente o site formulafitness.co como um projeto React moderno, pronto para produção.
> **Regra #1**: O resultado NÃO deve parecer gerado por IA. Cada decisão visual deve ter intenção humana.
> **Regra #2**: A primeira entrega é uma cópia fiel do site atual, corrigindo bugs e mantendo o padrão original.

---

## 1. CONTEXTO DO PROJETO

**Cliente**: Formula Fitness — estúdio de personal training em Los Alamitos, Califórnia.
**Público**: Adultos (25–55 anos) buscando treino personalizado, semi-privado, recuperação e active aging.
**Tom da marca**: Profissional, acolhedor, premium sem ser intimidante. Foco em resultados sustentáveis.

**Site atual**: https://formulafitness.co/
- Construído com WordPress + Elementor
- Páginas: Home, Services (6 subpáginas), Testimonials, Referrals, Team, Join Our Team, Prices, Blogs, About, FAQs
- Integrações: YouTube embeds, Yelp reviews, BMI calculator, formulário de contato
- Design: dark theme dominante, tons de verde (#verde da marca), tipografia clean

---

## 2. ESCOPO E FASES

### Fase 1 — Réplica Fiel (ATUAL)
Copiar o site existente com máxima fidelidade:
- Mesmo layout, mesmas seções, mesma ordem
- Mesmas cores, tipografia, espaçamentos
- Mesmas imagens (usar URLs originais do WordPress como placeholder)
- Mesmo conteúdo textual, palavra por palavra
- Corrigir apenas: bugs visuais, responsividade quebrada, performance

**NÃO FAZER na Fase 1**:
- Não redesenhar seções
- Não trocar fontes
- Não adicionar animações que não existem no original
- Não reorganizar o conteúdo

### Fase 2 — Melhorias (FUTURO)
- Animações e micro-interações
- Otimização de performance
- SEO técnico
- Acessibilidade WCAG 2.1

---

## 3. STACK TÉCNICO

```
Framework:        React 18+ (Vite)
Styling:          CSS Modules ou Tailwind CSS (decidir baseado no original)
Animações:        Framer Motion (quando necessário)
Roteamento:       React Router v6
Build:            Vite
Package Manager:  npm
Linting:          ESLint + Prettier
Deploy:           GitHub Pages ou Vercel (preparar ambos)
```

---

## 4. ESTRUTURA DO PROJETO

```
formula-fitness/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── assets/
│       └── images/          # Imagens do site
├── src/
│   ├── index.jsx
│   ├── App.jsx
│   ├── styles/
│   │   ├── global.css       # Reset, variáveis CSS, tipografia base
│   │   ├── variables.css    # Design tokens (cores, spacing, breakpoints)
│   │   └── animations.css   # Keyframes globais
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx          # Navbar + menu mobile
│   │   │   ├── Footer.jsx          # Footer completo
│   │   │   └── Layout.jsx          # Wrapper com Header + Footer
│   │   ├── ui/
│   │   │   ├── Button.jsx          # Botões reutilizáveis
│   │   │   ├── SectionTitle.jsx    # Títulos de seção padronizados
│   │   │   ├── Card.jsx            # Cards genéricos
│   │   │   ├── VideoCard.jsx       # Card com thumbnail + play icon
│   │   │   ├── TestimonialCard.jsx # Card de depoimento
│   │   │   ├── AccordionItem.jsx   # Item do accordion
│   │   │   ├── Modal.jsx           # Modal/lightbox para vídeos
│   │   │   └── BMICalculator.jsx   # Calculadora de BMI interativa
│   │   └── sections/
│   │       ├── Hero.jsx            # Hero da home
│   │       ├── Partners.jsx        # Logo carousel de parceiros
│   │       ├── About.jsx           # Seção "Health is Wealth"
│   │       ├── Programs.jsx        # Training Programs (3 cards)
│   │       ├── InBody.jsx          # Seção InBody 580
│   │       ├── Triumphs.jsx        # Personal Triumphs
│   │       ├── ActiveAging.jsx     # Gateway to Active Aging
│   │       ├── VideoTestimonials.jsx # Vídeos de depoimentos
│   │       ├── BMISection.jsx      # Seção da calculadora BMI
│   │       ├── Reviews.jsx         # Slider de reviews (Yelp)
│   │       └── ConsultCTA.jsx      # CTA de consulta / formulário
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── PersonalTraining.jsx
│   │   ├── SemiPrivate.jsx
│   │   ├── RecoveryService.jsx
│   │   ├── ActiveAging.jsx
│   │   ├── InBody.jsx
│   │   ├── YouthTraining.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Referrals.jsx
│   │   ├── Team.jsx
│   │   ├── JoinTeam.jsx
│   │   ├── Prices.jsx
│   │   ├── Blogs.jsx
│   │   ├── About.jsx
│   │   └── FAQ.jsx
│   ├── hooks/
│   │   ├── useScrollPosition.js
│   │   ├── useIntersectionObserver.js
│   │   └── useMediaQuery.js
│   ├── utils/
│   │   ├── bmiCalculator.js
│   │   └── constants.js      # Textos, URLs, dados estáticos
│   └── data/
│       ├── navigation.js      # Estrutura do menu
│       ├── services.js        # Dados dos serviços
│       ├── testimonials.js    # Dados dos depoimentos
│       ├── team.js            # Dados do time
│       └── reviews.js         # Reviews do Yelp
├── .gitignore
├── .prettierrc
├── .eslintrc.cjs
├── package.json
├── vite.config.js
├── README.md
└── DESIGN_SYSTEM.md
```

---

## 5. INSTRUÇÕES PARA O CLAUDE CODE

### Ao receber o link do site:
1. Acesse `https://formulafitness.co/` e todas as subpáginas listadas na navegação
2. Extraia e documente: cores exatas (hex), fontes, tamanhos, espaçamentos
3. Mapeie cada seção da home com seu conteúdo e layout
4. Identifique padrões de componentes reutilizáveis

### Ao codificar:
1. **Comece pelo setup**: `npm create vite@latest formula-fitness -- --template react`, instale dependências
2. **Configure o design system** primeiro: `variables.css` com todos os tokens
3. **Construa bottom-up**: componentes UI → seções → páginas → roteamento
4. **Teste cada componente** isoladamente antes de compor
5. **Mobile-first**: toda estilização começa no mobile e escala com media queries

### Padrões de código:
- Componentes funcionais com hooks
- Props destructuring com defaults
- CSS Modules para escopo (ou Tailwind se o original usar utility-classes)
- Nomes de arquivo em PascalCase para componentes
- Nomes de arquivo em camelCase para utilitários e hooks
- Comentários explicativos em seções complexas (não comentar o óbvio)
- Sem `console.log` no código final

### Checklist de fidelidade (para cada seção):
- [ ] Layout idêntico ao original (desktop + mobile)
- [ ] Cores idênticas
- [ ] Tipografia idêntica (família, peso, tamanho, line-height)
- [ ] Espaçamentos idênticos
- [ ] Conteúdo textual idêntico
- [ ] Imagens nos mesmos lugares
- [ ] Interações idênticas (hover, click, scroll)
- [ ] Responsividade funcional nos mesmos breakpoints

---

## 6. ASSETS E RECURSOS DO SITE ORIGINAL

### URLs de imagens (usar como src direto):
- Logo SVG: `https://formulafitness.co/wp-content/uploads/2023/06/formula-fitness-logo.svg`
- Play icon: `https://formulafitness.co/wp-content/uploads/2023/08/play-icon-full.svg`
- Play icon com texto: `https://formulafitness.co/wp-content/uploads/2023/08/play-icon-with-text.svg`
- Ícone de seção: `https://formulafitness.co/wp-content/uploads/2023/06/Icon.png`

### Vídeos do YouTube (embeds/lightbox):
- Vídeo principal: `https://www.youtube.com/embed/3ktiZboJ0X20`
- Katie: `https://www.youtube.com/embed/b2opnbIFN2s`
- Dharshun: `https://www.youtube.com/embed/7-c4PrDbBmo`
- Adrian: `https://www.youtube.com/embed/gBsjx7-7vDw`

### Parceiros (logos — usar URLs originais):
As imagens de parceiros estão em: `https://formulafitness.co/wp-content/uploads/2025/04/`

---

## 7. NAVEGAÇÃO COMPLETA

```
Home: /
Services: /training-services/
  ├── Personal Training: /personal-training/
  ├── Semi-Private: /semi-private-personal-training/
  ├── Recovery Service: /recovery-service/
  ├── Active Aging: /active-aging/
  ├── InBody Scan: /inbody/
  └── Youth Training: /youth-training-program/
Testimonials: /testimonials/
  ├── Testimonials: /testimonials/
  └── Referral Program: /referrals/
Team: /team-members-page/
  ├── Our Team: /team-members-page/
  └── Join Our Team: /join-our-team/
Prices: /prices/
Blogs: /blogs/
About: /about/
  ├── About: /about/
  └── FAQs: /faq/
Book a Consultation: #consult (scroll/modal)
```

---

## 8. SEO E META TAGS

Cada página deve ter:
- `<title>` descritivo e único
- `<meta name="description">` único
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Canonical URL
- Schema.org JSON-LD para LocalBusiness

Home:
```
title: "Your Path to Fitness Excellence - Formula Fitness"
description: "Join Formula Fitness for a transformative fitness journey. Elevate your well-being with expert guidance and a supportive community."
```

---

## 9. PERFORMANCE TARGETS

- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Total Bundle Size: < 300KB gzipped (excluindo imagens)

### Técnicas obrigatórias:
- Lazy loading de imagens abaixo do fold
- Code splitting por rota (React.lazy + Suspense)
- Preload de fontes críticas
- Otimização de imagens (WebP quando possível)
- Minificação de CSS/JS (Vite faz automaticamente)

---

## 10. REGRAS INEGOCIÁVEIS

1. **Pixel-perfect na Fase 1** — não improvise, copie
2. **Sem bibliotecas desnecessárias** — cada dependência precisa justificativa
3. **Responsivo de verdade** — testar em 320px, 768px, 1024px, 1440px
4. **Acessibilidade básica** — alt text, roles ARIA, navegação por teclado
5. **Código limpo** — sem repetição, componentes reutilizáveis, nomes semânticos
6. **Git-ready** — commits organizados, .gitignore configurado, README completo
7. **npm start funcional** — `npm run dev` deve abrir o projeto sem erros
