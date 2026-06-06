# DESIGN SYSTEM — Formula Fitness

> Documento de referência com todos os tokens visuais extraídos do site original.
> **Princípio**: Fidelidade total ao visual existente. Nenhuma cor, fonte ou espaçamento deve ser inventado.

---

## 1. PALETA DE CORES

### Cores primárias
```css
--color-bg-primary:       #0a0a0a;       /* Fundo principal (quase preto) */
--color-bg-secondary:     #111111;       /* Fundo de seções alternadas */
--color-bg-tertiary:      #1a1a1a;       /* Fundo de cards/elementos elevados */
--color-bg-card:          #141414;       /* Fundo de cards */

--color-brand-green:      #b8e63c;       /* Verde principal da marca — CTA, destaques */
--color-brand-green-dark: #9cc832;       /* Verde hover/ativo */
--color-brand-green-light:#d4f07a;       /* Verde claro para acentos sutis */

--color-text-primary:     #ffffff;       /* Texto principal */
--color-text-secondary:   #b3b3b3;       /* Texto secundário/descrições */
--color-text-muted:       #777777;       /* Texto terciário/labels */
--color-text-on-green:    #0a0a0a;       /* Texto sobre fundo verde */
```

### Cores de suporte
```css
--color-border:           #2a2a2a;       /* Bordas sutis */
--color-border-hover:     #3a3a3a;       /* Bordas em hover */
--color-divider:          #1f1f1f;       /* Linhas divisórias */
--color-overlay:          rgba(0,0,0,0.7); /* Overlay de modais/lightbox */
--color-overlay-light:    rgba(0,0,0,0.4); /* Overlay suave */

--color-star-yellow:      #f5c518;       /* Estrelas de review */
--color-error:            #ff4444;       /* Campos inválidos no form */
--color-success:          #b8e63c;       /* Feedback positivo (usa verde da marca) */
```

### Gradientes
```css
--gradient-hero:          linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%);
--gradient-card-hover:    linear-gradient(180deg, transparent 0%, rgba(184,230,60,0.05) 100%);
--gradient-section-fade:  linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
```

---

## 2. TIPOGRAFIA

### Fontes
```css
/* Fonte primária — headings e display */
--font-heading: 'Poppins', sans-serif;

/* Fonte secundária — body text */
--font-body: 'Inter', 'Helvetica Neue', sans-serif;

/* Nota: Verificar no site original se usam exatamente estas.
   Elementor frequentemente usa Poppins para headings.
   Ajustar após inspeção direta do CSS do site. */
```

### Escala tipográfica
```css
/* Display / Hero */
--text-display:       clamp(2.5rem, 5vw, 4.5rem);    /* ~72px max */
--text-display-lh:    1.1;
--text-display-ls:    -0.02em;
--text-display-weight: 700;

/* H1 */
--text-h1:            clamp(2rem, 4vw, 3.5rem);       /* ~56px max */
--text-h1-lh:         1.15;
--text-h1-weight:     700;

/* H2 — Títulos de seção */
--text-h2:            clamp(1.5rem, 3vw, 2.5rem);     /* ~40px max */
--text-h2-lh:         1.2;
--text-h2-weight:     600;

/* H3 — Subtítulos / card titles */
--text-h3:            clamp(1.125rem, 2vw, 1.5rem);   /* ~24px max */
--text-h3-lh:         1.3;
--text-h3-weight:     600;

/* H4 — Labels / small headings */
--text-h4:            clamp(0.875rem, 1.5vw, 1.125rem); /* ~18px max */
--text-h4-lh:         1.4;
--text-h4-weight:     600;

/* Body */
--text-body:          clamp(0.875rem, 1.2vw, 1rem);   /* ~16px max */
--text-body-lh:       1.7;
--text-body-weight:   400;

/* Body small */
--text-small:         clamp(0.75rem, 1vw, 0.875rem);  /* ~14px max */
--text-small-lh:      1.6;

/* Overline / eyebrow text */
--text-overline:      0.75rem;                         /* 12px */
--text-overline-ls:   0.15em;
--text-overline-weight: 600;
--text-overline-transform: uppercase;

/* Button text */
--text-button:        0.875rem;
--text-button-weight: 600;
--text-button-ls:     0.05em;
--text-button-transform: uppercase;
```

---

## 3. ESPAÇAMENTO

### Escala de spacing
```css
--space-2xs:    0.25rem;   /* 4px */
--space-xs:     0.5rem;    /* 8px */
--space-sm:     0.75rem;   /* 12px */
--space-md:     1rem;      /* 16px */
--space-lg:     1.5rem;    /* 24px */
--space-xl:     2rem;      /* 32px */
--space-2xl:    3rem;      /* 48px */
--space-3xl:    4rem;      /* 64px */
--space-4xl:    6rem;      /* 96px */
--space-5xl:    8rem;      /* 128px */
```

### Spacing de seções
```css
--section-padding-y:       clamp(4rem, 8vw, 8rem);     /* Padding vertical entre seções */
--section-padding-y-small: clamp(2rem, 4vw, 4rem);     /* Seções menores */
--container-max-width:     1200px;                       /* Largura máxima do conteúdo */
--container-padding-x:     clamp(1rem, 4vw, 2rem);      /* Padding lateral do container */
```

---

## 4. LAYOUT E GRID

### Container
```css
.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding-x);
}
```

### Grid padrão
```css
/* Grid de 2 colunas (usado em About, InBody, Active Aging) */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}
@media (min-width: 768px) {
  .grid-2 { grid-template-columns: 1fr 1fr; }
}

/* Grid de 3 colunas (usado em Training Programs, Video Testimonials) */
.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}
@media (min-width: 768px) {
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
}
```

### Breakpoints
```css
--bp-mobile:    320px;     /* Mobile small */
--bp-mobile-lg: 480px;     /* Mobile large */
--bp-tablet:    768px;     /* Tablet */
--bp-desktop:   1024px;    /* Desktop */
--bp-desktop-lg:1280px;    /* Desktop large */
--bp-wide:      1440px;    /* Wide */
```

---

## 5. COMPONENTES — TOKENS VISUAIS

### Botões
```css
/* Botão primário (verde) */
.btn-primary {
  background: var(--color-brand-green);
  color: var(--color-text-on-green);
  font-size: var(--text-button);
  font-weight: var(--text-button-weight);
  letter-spacing: var(--text-button-ls);
  text-transform: var(--text-button-transform);
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}
.btn-primary:hover {
  background: var(--color-brand-green-dark);
  transform: translateY(-1px);
}

/* Botão outline */
.btn-outline {
  background: transparent;
  color: var(--color-brand-green);
  border: 2px solid var(--color-brand-green);
  padding: 0.75rem 1.75rem;
  border-radius: 4px;
  font-size: var(--text-button);
  font-weight: var(--text-button-weight);
  letter-spacing: var(--text-button-ls);
  text-transform: var(--text-button-transform);
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-outline:hover {
  background: var(--color-brand-green);
  color: var(--color-text-on-green);
}

/* Link como botão (texto + seta) */
.btn-link {
  color: var(--color-brand-green);
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.3s ease;
}
.btn-link:hover {
  gap: 0.75rem;
}
```

### Cards
```css
.card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.card:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-4px);
}
```

### Accordion
```css
.accordion-item {
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-lg) 0;
}
.accordion-trigger {
  width: 100%;
  background: none;
  border: none;
  color: var(--color-text-primary);
  font-size: var(--text-h4);
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.accordion-content {
  color: var(--color-text-secondary);
  font-size: var(--text-body);
  line-height: var(--text-body-lh);
  padding-top: var(--space-md);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}
```

### Formulários
```css
.form-input {
  width: 100%;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 0.875rem 1rem;
  color: var(--color-text-primary);
  font-size: var(--text-body);
  font-family: var(--font-body);
  transition: border-color 0.3s ease;
}
.form-input:focus {
  outline: none;
  border-color: var(--color-brand-green);
}
.form-input::placeholder {
  color: var(--color-text-muted);
}
.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* Chevron down */
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}
```

---

## 6. SOMBRAS E ELEVAÇÃO

```css
--shadow-sm:     0 1px 3px rgba(0,0,0,0.3);
--shadow-md:     0 4px 12px rgba(0,0,0,0.4);
--shadow-lg:     0 8px 24px rgba(0,0,0,0.5);
--shadow-card:   0 2px 8px rgba(0,0,0,0.3);
--shadow-glow:   0 0 20px rgba(184,230,60,0.15);   /* Glow verde sutil */
```

---

## 7. ICONOGRAFIA

O site usa ícones mínimos. Prioridade:
1. SVGs inline do próprio site (play button, ícones de seção)
2. Lucide React para ícones adicionais (menu, chevron, close, arrow)
3. Sem icon libraries pesadas (nada de FontAwesome inteiro)

---

## 8. IMAGENS E MÍDIA

### Tratamento de imagens
```css
/* Imagens em cards */
.card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

/* Thumbnail de vídeo */
.video-thumbnail {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 8px;
}
.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
```

### Lazy loading
```jsx
<img
  src={imageSrc}
  alt="Descrição acessível"
  loading="lazy"
  decoding="async"
/>
```

---

## 9. RESPONSIVIDADE — REGRAS

| Breakpoint | Comportamento |
|---|---|
| 320–479px | 1 coluna, navegação hamburger, font sizes mínimos |
| 480–767px | 1 coluna com mais breathing room |
| 768–1023px | 2 colunas onde aplicável, navegação pode expandir |
| 1024–1279px | Layout desktop completo |
| 1280px+ | Container max-width, conteúdo centralizado |

### Navbar
- **Mobile** (< 1024px): Logo à esquerda, hamburger à direita, menu fullscreen overlay
- **Desktop** (≥ 1024px): Logo à esquerda, links ao centro, CTA à direita

### Hero
- **Mobile**: Texto centralizado, imagem/vídeo abaixo ou background
- **Desktop**: Layout lado a lado ou texto sobre background

---

## 10. REFERÊNCIA RÁPIDA DE IMPLEMENTAÇÃO

```css
/* Reset global mínimo */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  line-height: var(--text-body-lh);
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
}
```

> **IMPORTANTE**: Todos os valores acima devem ser CONFERIDOS contra o site real via DevTools antes de serem finalizados. Este documento é um ponto de partida baseado na análise visual — os valores exatos podem variar em 1–2px ou em tons de cor.
