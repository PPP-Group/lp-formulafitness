# INTERACTIONS & ANIMATIONS — Formula Fitness

> Guia de micro-interações, animações e comportamentos interativos.
> **Fase 1**: Implementar APENAS o que já existe no site original.
> **Fase 2**: Adicionar as melhorias listadas aqui como upgrade.

---

## 1. PRINCÍPIOS DE ANIMAÇÃO

```
Duração base:     300ms (interações rápidas: hover, toggle)
Duração média:    500ms (transições de conteúdo, accordion)
Duração longa:    800ms (entrada de seções, hero)

Easing padrão:    cubic-bezier(0.4, 0, 0.2, 1)   — "ease-out natural"
Easing entrada:   cubic-bezier(0, 0, 0.2, 1)       — "decelerate"
Easing saída:     cubic-bezier(0.4, 0, 1, 1)       — "accelerate"
Easing bounce:    cubic-bezier(0.34, 1.56, 0.64, 1) — para toques de personalidade

Regra de ouro:    Nada acima de 1s. Se a animação atrasa o uso, é bug, não feature.
```

---

## 2. ANIMAÇÕES EXISTENTES NO SITE ORIGINAL (FASE 1)

### 2.1 Navbar
```
Scroll behavior:
- Navbar fixa no topo (position: sticky/fixed)
- Background transparente → opaco ao scrollar (threshold: ~50px)
- Transição suave do background: 300ms

Mobile menu:
- Hamburger → X: rotação de linhas (300ms)
- Menu overlay: slide-in da direita ou fade-in (400ms)
- Links aparecem com stagger delay (50ms entre cada)
- Scroll do body desabilitado quando menu aberto
```

### 2.2 Hero
```
Load animation:
- Texto faz fade-in + slide-up sutil (translateY: 20px → 0)
- Stagger: título → subtítulo → botão CTA (150ms entre cada)
- Duração: 600ms cada elemento
```

### 2.3 Accordion (Seção About / "Health is Wealth")
```
Toggle:
- Ícone de seta rotaciona 180° (300ms)
- Conteúdo expande com max-height transition (400ms)
- Apenas um item aberto por vez (auto-collapse)
```

### 2.4 Botões
```
Hover:
- Background color transition (300ms)
- translateY(-1px) para leve elevação
- Nenhuma sombra adicional (site original é flat)

Active/Click:
- translateY(0) — volta à posição
- Scale(0.98) sutil por 100ms
```

### 2.5 Cards de Serviço
```
Hover:
- Border-color muda sutil (300ms)
- translateY(-4px) — card "flutua"
- Imagem pode ter scale(1.03) contido dentro do overflow:hidden
```

### 2.6 Lightbox de Vídeo
```
Abertura:
- Overlay faz fade-in (300ms)
- Player faz scale(0.95 → 1) + fade-in (400ms)

Fechamento:
- Reverso do acima
- Vídeo pausa ao fechar
- Click no overlay fecha
- ESC fecha
```

### 2.7 Slider de Reviews (Yelp)
```
Transição entre slides:
- Slide horizontal (500ms, ease-out)
- Auto-play: ~5s entre slides
- Indicadores de paginação com estado ativo
- Swipe no mobile (touch events)
```

### 2.8 Logo Carousel (Parceiros)
```
Scroll infinito:
- Logos movem da direita para a esquerda
- Velocidade constante, sem pause
- Duplicar logos para efeito seamless
- CSS animation (translateX), não JS
```

### 2.9 BMI Calculator
```
Interação do form:
- Focus nos inputs: borda muda de cor (300ms)
- Botão Calculate: efeito de loading breve (300ms)
- Resultado: fade-in + scale-up sutil (400ms)
- Cor do resultado muda conforme categoria (underweight/healthy/overweight/obese)
```

---

## 3. ANIMAÇÕES DE MELHORIA (FASE 2)

### 3.1 Scroll Reveal — Intersection Observer
```jsx
// Hook reutilizável
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Anima apenas uma vez
        }
      },
      { threshold: 0.15, ...options }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}
```

```css
/* Classes de reveal */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s var(--ease-decelerate),
              transform 0.6s var(--ease-decelerate);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Variações de direção */
.reveal-left  { transform: translateX(-30px); }
.reveal-right { transform: translateX(30px); }
.reveal-scale { transform: scale(0.95); }

/* Stagger para grupos */
.reveal-stagger > *:nth-child(1) { transition-delay: 0ms; }
.reveal-stagger > *:nth-child(2) { transition-delay: 100ms; }
.reveal-stagger > *:nth-child(3) { transition-delay: 200ms; }
.reveal-stagger > *:nth-child(4) { transition-delay: 300ms; }
```

### 3.2 Parallax sutil no Hero
```css
/* Apenas desktop — desabilitar no mobile por performance */
@media (min-width: 1024px) {
  .hero-background {
    will-change: transform;
    transform: translateY(calc(var(--scroll-y, 0) * 0.3));
  }
}
```

### 3.3 Contador animado (Stats/Números)
```jsx
// Para seções com números (ex: "50lbs lost", "6.5 years", etc.)
function AnimatedCounter({ target, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollReveal();

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
```

### 3.4 Hover avançado nos cards de serviço
```css
.service-card {
  position: relative;
  overflow: hidden;
}

/* Linha verde animada na borda inferior */
.service-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: var(--color-brand-green);
  transition: width 0.4s var(--ease-decelerate);
}
.service-card:hover::after {
  width: 100%;
}

/* Imagem zoom suave */
.service-card .card-image {
  transition: transform 0.6s var(--ease-decelerate);
}
.service-card:hover .card-image {
  transform: scale(1.05);
}
```

### 3.5 Smooth scroll para anchor links
```jsx
// Já coberto pelo CSS scroll-behavior: smooth
// Para controle mais fino:
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = 80; // Altura da navbar fixa
    const y = element.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
```

### 3.6 Cursor personalizado (opcional — Fase 2 avançada)
```css
/* Apenas se combinar com o tom premium do site */
/* Desabilitar em touch devices */
@media (hover: hover) and (pointer: fine) {
  .custom-cursor {
    /* Implementar com JS se desejado */
  }
}
```

---

## 4. TRANSIÇÕES DE PÁGINA (React Router)

```jsx
// Transição simples entre páginas
// Usar CSS, não Framer Motion (menos bundle)
.page-enter {
  opacity: 0;
}
.page-enter-active {
  opacity: 1;
  transition: opacity 300ms ease;
}
.page-exit {
  opacity: 1;
}
.page-exit-active {
  opacity: 0;
  transition: opacity 200ms ease;
}
```

---

## 5. PERFORMANCE DE ANIMAÇÕES

### Regras obrigatórias:
1. **Animar apenas** `transform` e `opacity` — nunca `width`, `height`, `top`, `left`, `margin`
2. **Usar `will-change`** com parcimônia — apenas em elementos que realmente animam
3. **`prefers-reduced-motion`** — respeitar a preferência do usuário:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
4. **Desabilitar parallax e efeitos pesados** em mobile
5. **60fps ou nada** — se o FPS cai, simplificar a animação

### Debugging:
- Chrome DevTools → Performance → verificar frame drops
- `transform: translateZ(0)` para forçar GPU acceleration quando necessário
- Evitar reflow: não ler layout properties dentro de animation frames

---

## 6. ESTADOS INTERATIVOS COMPLETOS

Cada elemento interativo deve ter TODOS estes estados:

```
Default    → Aparência normal
Hover      → Feedback visual ao passar o mouse
Focus      → Outline acessível para navegação por teclado
Active     → Feedback de clique/tap
Disabled   → Aparência de inativo (quando aplicável)
Loading    → Spinner ou skeleton (quando aplicável)
```

### Focus visível (acessibilidade):
```css
:focus-visible {
  outline: 2px solid var(--color-brand-green);
  outline-offset: 2px;
}

/* Remover outline default apenas quando :focus-visible é suportado */
:focus:not(:focus-visible) {
  outline: none;
}
```

---

## 7. TOUCH E MOBILE

```
Tap target mínimo:    44x44px (WCAG)
Touch feedback:       Usar -webkit-tap-highlight-color ou :active state
Swipe:                Implementar para carousels (touch-action: pan-y)
Hover:                Não depender de hover no mobile — efeitos apenas via @media (hover: hover)
Pull to refresh:      Desabilitar em seções de scroll horizontal
```

---

## 8. CHECKLIST DE IMPLEMENTAÇÃO

### Fase 1 (réplica):
- [ ] Navbar sticky com background transition no scroll
- [ ] Menu mobile com overlay
- [ ] Accordion funcional com animação
- [ ] Lightbox de vídeo do YouTube
- [ ] Slider de reviews com auto-play
- [ ] Logo carousel infinito
- [ ] BMI Calculator funcional
- [ ] Smooth scroll para #consult
- [ ] Hover em botões e cards
- [ ] prefers-reduced-motion respeitado

### Fase 2 (melhorias):
- [ ] Scroll reveal em todas as seções
- [ ] Stagger nos grids de cards
- [ ] Parallax no hero (desktop)
- [ ] Contadores animados
- [ ] Hover avançado nos cards (borda verde)
- [ ] Transições de página suaves
- [ ] Loading skeleton para imagens
