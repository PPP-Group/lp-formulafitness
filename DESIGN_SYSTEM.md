# Design System — Formula Fitness

## Visão geral

**Stack:** Vite + React 18 JSX + React Router v6 + CSS puro (Custom Properties)

**Filosofia:**
- **Tokens primeiro.** Todos os valores (cor, espaçamento, tipografia, raio, sombra) vivem em `src/styles/variables.css`. Nunca use valores hardcoded nos componentes.
- **Mobile-first.** Media queries partem do menor breakpoint e crescem.
- **Acessibilidade por padrão.** Contraste mínimo WCAG AA, foco visível em todos os interativos, atributos `aria` onde necessário.
- **Sem dependências extras.** Apenas React, React Router e CSS nativo.

---

## Estrutura de ficheiros

```
src/
  styles/
    variables.css        ← fonte única de verdade dos tokens
    global.css           ← reset, helpers, .btn, .eyebrow, acessibilidade
    animations.css       ← keyframes, .anim-fade-up, .reveal
  components/
    ui/
      Button.jsx/css         ← Fase 2: variantes, tamanhos, loading
      Typography.jsx/css     ← Fase 2: Heading, Text, Code
      FormElements.jsx/css   ← Fase 2: Input, Textarea, Select
      LayoutPrimitives.jsx/css ← Fase 2: Container, Section, Grid, Flex
      Feedback.jsx/css       ← Fase 2: Badge, Tag, Spinner, Skeleton
      Media.jsx/css          ← Fase 2: Image, Icon, Avatar
      SectionTitle.jsx/css   ← existente — eyebrow + título + subtítulo
      Modal.jsx/css          ← existente
      Accordion.jsx/css      ← existente
      VideoCard.jsx/css      ← existente
      QuoteCarousel.jsx/css  ← existente
      BMICalculator.jsx/css  ← existente
    layout/
      Header.jsx/css         ← Fase 3: navbar responsiva
      Footer.jsx/css         ← Fase 3: footer completo
    sections/
      Hero.jsx/css           ← Fase 3: hero principal
      FeatureRow.jsx/css     ← Fase 3: feature com imagem
      LeadForm.jsx/css       ← Fase 3: formulário de leads
      Reviews.jsx/css        ← Fase 3: depoimentos
      CtaBanner.jsx/css      ← Fase 3: banner CTA
      StepsSection.jsx/css   ← Fase 3: passos numerados
      Programs.jsx/css       ← Fase 3: cards de programas
```

---

## Como importar e usar os tokens

Os tokens são variáveis CSS globais — disponíveis em qualquer ficheiro CSS do projeto automaticamente via `@import './variables.css'` em `global.css`.

```css
/* Usar diretamente em qualquer CSS */
.meu-componente {
  background: var(--color-brand);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
}
```

---

## Tokens de Cor

### Paleta primária (brand blue)

| Token                    | Valor     | Uso                              |
|--------------------------|-----------|----------------------------------|
| `--color-primary-50`     | `#eff4ff` | Fundos suaves, badge backgrounds |
| `--color-primary-200`    | `#b3cffd` | Bordas, ícones suaves            |
| `--color-primary-500`    | `#467ff7` | Cor de marca principal           |
| `--color-primary-700`    | `#2252c9` | Hover, estados ativos            |
| `--color-primary-900`    | `#0f2a6b` | Texto sobre fundo claro          |

Aliases funcionais: `--color-brand` (= 500), `--color-brand-dark` (= 700), `--color-brand-light` (≈ 300)

### Paleta accent / navy

| Token                    | Valor     | Uso                         |
|--------------------------|-----------|-----------------------------|
| `--color-accent-50`      | `#e8ecf3` | Fundos suaves               |
| `--color-accent-200`     | `#9ba8c5` | Bordas                      |
| `--color-accent-500`     | `#182340` | Navy principal              |
| `--color-accent-700`     | `#101828` | Hover sobre navy            |
| `--color-accent-900`     | `#070e1a` | Textos sobre fundo escuro   |

Alias: `--color-navy` (= 500)

### Neutros / Gray

| Token              | Valor     |
|--------------------|-----------|
| `--color-gray-50`  | `#f9fafb` |
| `--color-gray-100` | `#f3f4f6` |
| `--color-gray-300` | `#d1d5db` |
| `--color-gray-500` | `#6b7280` |
| `--color-gray-700` | `#374151` |
| `--color-gray-900` | `#111827` |

### Cores funcionais

| Token                       | Valor     | Uso                              |
|-----------------------------|-----------|----------------------------------|
| `--color-bg-primary`        | `#ffffff` | Fundo da página                  |
| `--color-bg-secondary`      | `#f4f7fc` | Seções alternadas                |
| `--color-bg-tertiary`       | `#eaeff8` | Cards hover, inputs disabled     |
| `--color-bg-card`           | `#ffffff` | Cards                            |
| `--color-text-primary`      | `#111827` | Texto principal                  |
| `--color-text-secondary`    | `#4b5563` | Texto secundário                 |
| `--color-text-muted`        | `#9ca3af` | Placeholder, captions            |
| `--color-text-on-brand`     | `#ffffff` | Texto sobre fundo brand          |
| `--color-border`            | `#e2e8f0` | Bordas padrão                    |
| `--color-border-hover`      | `#cbd5e1` | Bordas em hover                  |

### Cores semânticas

| Token                  | Valor     | Uso                      |
|------------------------|-----------|--------------------------|
| `--color-success-green`| `#22c55e` | Sucesso                  |
| `--color-success-bg`   | `#f0fdf4` | Fundo de alerta sucesso  |
| `--color-warning`      | `#f59e0b` | Aviso                    |
| `--color-warning-bg`   | `#fffbeb` | Fundo de alerta aviso    |
| `--color-error`        | `#ef4444` | Erro                     |
| `--color-error-bg`     | `#fef2f2` | Fundo de alerta erro     |
| `--color-info`         | `#3b82f6` | Informação               |
| `--color-info-bg`      | `#eff6ff` | Fundo de alerta info     |
| `--color-star-yellow`  | `#fec42d` | Estrelas de avaliação    |

---

## Tipografia

### Famílias

| Token              | Valor                             | Uso              |
|--------------------|-----------------------------------|------------------|
| `--font-heading`   | `'Poppins', sans-serif`           | Títulos (h1–h6)  |
| `--font-body`      | `'Sofia Sans', 'Helvetica Neue'`  | Corpo de texto   |
| `--font-display`   | `'Rajdhani', 'Poppins'`           | Display / hero   |

### Escala responsiva (clamp)

| Token            | Intervalo         | Uso                   |
|------------------|-------------------|-----------------------|
| `--text-display` | 2.5–4.5rem        | Hero headline         |
| `--text-h1`      | 2–3.5rem          | Título de página      |
| `--text-h2`      | 1.5–2.5rem        | Título de seção       |
| `--text-h3`      | 1.125–1.5rem      | Subtítulo de seção    |
| `--text-h4`      | 0.875–1.125rem    | Card title            |
| `--text-body`    | 0.875–1rem        | Corpo de texto        |
| `--text-small`   | 0.75–0.875rem     | Textos auxiliares     |
| `--text-overline`| 0.75rem           | Eyebrow/label         |
| `--text-button`  | 0.875rem          | Label de botão        |

### Escala fixa

`xs(12px)` · `sm(14px)` · `base(16px)` · `lg(18px)` · `xl(20px)` · `2xl(24px)` · `3xl(30px)` · `4xl(36px)` · `5xl(48px)` · `6xl(60px)`

### Pesos

`--font-normal(400)` · `--font-medium(500)` · `--font-semibold(600)` · `--font-bold(700)`

### Line heights

`--leading-tight(1.25)` · `--leading-snug(1.375)` · `--leading-normal(1.5)` · `--leading-relaxed(1.625)`

### Letter spacing

`--tracking-tight(-0.025em)` · `--tracking-normal(0)` · `--tracking-wide(0.025em)` · `--tracking-wider(0.05em)` · `--tracking-widest(0.1em)`

---

## Espaçamento

### Escala nomeada (legada — manter para retrocompatibilidade)

`--space-2xs(4px)` · `--space-xs(8px)` · `--space-sm(12px)` · `--space-md(16px)` · `--space-lg(24px)` · `--space-xl(32px)` · `--space-2xl(48px)` · `--space-3xl(64px)` · `--space-4xl(96px)` · `--space-5xl(128px)`

### Escala numérica (base 4px) — preferir em código novo

`--space-0` · `--space-1(4px)` · `--space-2(8px)` · `--space-3(12px)` · `--space-4(16px)` · `--space-5(20px)` · `--space-6(24px)` · `--space-8(32px)` · `--space-10(40px)` · `--space-12(48px)` · `--space-14(56px)` · `--space-16(64px)` · `--space-20(80px)` · `--space-24(96px)` · `--space-32(128px)`

---

## Border Radius

| Token           | Valor    |
|-----------------|----------|
| `--radius-none` | `0`      |
| `--radius-xs`   | `2px`    |
| `--radius-sm`   | `6px`    |
| `--radius-md`   | `4px`    |
| `--radius-lg`   | `8px`    |
| `--radius-xl`   | `12px`   |
| `--radius-2xl`  | `16px`   |
| `--radius-3xl`  | `24px`   |
| `--radius-pill` | `100px`  |
| `--radius-full` | `9999px` |

---

## Sombras

| Token            | Uso                       |
|------------------|---------------------------|
| `--shadow-sm`    | Cards sutis               |
| `--shadow-md`    | Dropdowns, popovers       |
| `--shadow-lg`    | Modais, drawers           |
| `--shadow-2xl`   | Overlays, hero images     |
| `--shadow-card`  | Cards com pouco relevo    |
| `--shadow-glow`  | Hover state com glow azul |
| `--shadow-brand` | Sombra colorida brand     |

---

## Breakpoints

| Token       | Valor  | Uso                       |
|-------------|--------|---------------------------|
| `--bp-sm`   | 640px  | Phones landscape          |
| `--bp-md`   | 768px  | Tablets                   |
| `--bp-lg`   | 1024px | Desktops pequenos         |
| `--bp-xl`   | 1280px | Desktops                  |
| `--bp-2xl`  | 1536px | Desktops grandes          |

> Os tokens de breakpoint são referência — CSS Media Queries ainda precisam de valores literais:
> `@media (min-width: 768px) { ... }`

---

## Transições

| Token               | Valor  |
|---------------------|--------|
| `--duration-fast`   | 150ms  |
| `--duration-normal` | 250ms  |
| `--duration-slow`   | 400ms  |

Easings: `--ease-standard` · `--ease-decelerate` · `--ease-accelerate` · `--ease-bounce`

---

## Z-index

| Token          | Valor |
|----------------|-------|
| `--z-base`     | 0     |
| `--z-raised`   | 10    |
| `--z-dropdown` | 100   |
| `--z-sticky`   | 200   |
| `--z-overlay`  | 300   |
| `--z-modal`    | 400   |
| `--z-toast`    | 500   |

---

## Componentes

### Button — `src/components/ui/Button.jsx`

```jsx
import Button from '@components/ui/Button'

<Button variant="primary" size="md">Book Now</Button>
<Button variant="outline" size="lg" as="a" href="#consult">Learn More</Button>
<Button variant="danger" loading>Saving…</Button>
<Button variant="primary" leftIcon={<PlusIcon />}>Add Item</Button>
```

| Prop        | Valores                                          | Default    |
|-------------|--------------------------------------------------|------------|
| `variant`   | `primary` `secondary` `outline` `ghost` `danger` `link` | `primary` |
| `size`      | `sm` `md` `lg`                                   | `md`       |
| `loading`   | `boolean`                                        | `false`    |
| `disabled`  | `boolean`                                        | `false`    |
| `leftIcon`  | `ReactNode`                                      | —          |
| `rightIcon` | `ReactNode`                                      | —          |
| `as`        | tag ou componente (`'button'`, `'a'`, `Link`…)   | `'button'` |

> As classes CSS globais `.btn .btn-primary`, `.btn-outline`, `.btn-link` continuam funcionando — Button.jsx usa o mesmo sistema de classes.

---

### Heading / Text / Code — `src/components/ui/Typography.jsx`

```jsx
import { Heading, Text, Code } from '@components/ui/Typography'

<Heading as="h1" size="display">Optimal Training.</Heading>
<Heading as="h2" color="brand">Our Programs</Heading>
<Text variant="lead">We focus on your whole health.</Text>
<Text variant="caption" color="muted">Last updated June 2026</Text>
<Code block>{`const fitness = 'formula'`}</Code>
```

**Heading props:** `as` (h1–h6) · `size` (1–6, display) · `weight` (normal, medium, semibold, bold) · `color` (brand, muted, inverse)

**Text props:** `as` (qualquer tag) · `variant` (body, lead, small, caption, label) · `color` (brand, secondary, muted, inverse, success, warning, error)

---

### Input / Textarea / Select — `src/components/ui/FormElements.jsx`

```jsx
import { Input, Textarea, Select } from '@components/ui/FormElements'

<Input id="name" label="Full Name" required placeholder="John Doe" />
<Input id="email" type="email" label="Email" error="Please enter a valid email." />
<Textarea id="msg" label="Message" helper="Max 500 characters." rows={5} />
<Select
  id="goal"
  label="Main Goal"
  required
  options={[
    { value: 'weight-loss', label: 'Weight Loss' },
    { value: 'strength',    label: 'Build Strength' },
  ]}
/>
```

Todos os três aceitam: `id` · `label` · `helper` · `error` · `required` · `disabled` · qualquer prop HTML nativa.

> O LeadForm.jsx existente continua usando `className="form-input"` diretamente — totalmente compatível.

---

### Container / Section / Grid / Flex — `src/components/ui/LayoutPrimitives.jsx`

```jsx
import { Container, Section, Grid, Flex } from '@components/ui/LayoutPrimitives'

<Section alt>
  <Container>
    <Grid cols={3} gap="lg">
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
    </Grid>
  </Container>
</Section>

<Flex direction="row" align="center" justify="between" gap="md">
  <Logo />
  <Nav />
  <Button>CTA</Button>
</Flex>
```

**Container sizes:** `sm(640px)` · `md(768px)` · `lg(1200px)` · `xl(1280px)` · `full`

**Grid cols:** `1` · `2` · `3` · `4` (responsivo automaticamente)

**Grid / Flex gap:** `none` · `sm` · `md` · `lg` · `xl`

---

### Badge / Tag / Spinner / Skeleton — `src/components/ui/Feedback.jsx`

```jsx
import { Badge, Tag, Spinner, Skeleton } from '@components/ui/Feedback'

<Badge variant="success">Active</Badge>
<Badge variant="navy" size="lg">Popular</Badge>
<Tag onRemove={() => removeFilter('yoga')}>Yoga</Tag>
<Spinner size="md" color="brand" />
<Skeleton variant="line" />
<Skeleton variant="circle" width="3rem" height="3rem" />
<Skeleton variant="block" height="200px" />
```

**Badge variants:** `primary` · `brand` · `success` · `warning` · `error` · `neutral` · `navy`

**Spinner colors:** `brand` · `white` · `muted`

**Skeleton variants:** `line` · `block` · `circle`

---

### Image / Icon / Avatar — `src/components/ui/Media.jsx`

```jsx
import { Image, Icon, Avatar } from '@components/ui/Media'

<Image src="/assets/gym.jpg" alt="Gym" aspectRatio="16/9" />
<Image src="/assets/trainer.jpg" alt="Trainer" aspectRatio="1/1" fit="cover" />

<Icon size="lg" color="brand">
  <svg viewBox="0 0 24 24">…</svg>
</Icon>

<Avatar src="/assets/team/john.jpg" alt="John Doe" size="lg" />
<Avatar initials="JD" size="md" />   {/* fallback sem imagem */}
```

**Image fit:** `cover` · `contain` · `fill`

**Icon sizes:** `xs` · `sm` · `md` · `lg` · `xl` · `2xl`

**Avatar sizes:** `xs` · `sm` · `md` · `lg` · `xl` · `2xl`

---

### SectionTitle — `src/components/ui/SectionTitle.jsx` (existente)

```jsx
import SectionTitle from '@components/ui/SectionTitle'

<SectionTitle
  eyebrow="Our Services"
  title="Tailored Programs for Every Goal"
  description="From personal training to recovery, we cover your whole health."
  align="center"
  as="h2"
/>
```

Props: `eyebrow` · `title` · `description` · `align` (left | center | right) · `as` (h1–h6)

---

## Guia "O que usar quando"

### Botões

| Situação                                   | Variante     |
|--------------------------------------------|--------------|
| Ação principal da página / CTA primário    | `primary`    |
| Ação secundária / alternativa              | `secondary`  |
| Ação secundária sobre fundo escuro/brand   | `outline`    |
| Ação terciária sem destaque                | `ghost`      |
| Ação destrutiva (cancelar, apagar)         | `danger`     |
| Link textual com seta                      | `link`       |
| Formulário em processo / aguardando        | `loading`    |

### Tamanhos de botão

| Contexto                                   | Tamanho |
|--------------------------------------------|---------|
| CTAs hero, banners, destaque máximo        | `lg`    |
| Uso geral na maioria das seções            | `md`    |
| Tabelas, listas, inline com texto          | `sm`    |

### Tipografia

| Uso                                        | Componente / classe        |
|--------------------------------------------|----------------------------|
| Título principal de página                 | `<Heading as="h1">`        |
| Título de seção                            | `<Heading as="h2">`        |
| Subtítulo dentro de seção                  | `<Heading as="h3">`        |
| Eyebrow / label de seção                   | `.eyebrow` ou `<Text variant="label">` |
| Corpo de texto padrão                      | `<Text variant="body">`    |
| Introdução / lead paragraph                | `<Text variant="lead">`    |
| Legenda, metadata, data                    | `<Text variant="caption">` |
| Aviso de erro inline                       | `<Text variant="caption" color="error">` |

### Layout

| Uso                                        | Componente                 |
|--------------------------------------------|----------------------------|
| Limitar largura e centrar (maioria)         | `<Container size="lg">`    |
| Bloco de texto (artigos, bio)              | `<Container size="md">`    |
| Seção com fundo branco                     | `<Section>`                |
| Seção com fundo cinza secundário           | `<Section alt>`            |
| Grelha de cards (features, serviços)       | `<Grid cols={3}>`          |
| Header / nav / footer                      | `<Flex>`                   |

### Feedback

| Uso                                        | Componente                 |
|--------------------------------------------|----------------------------|
| Estado do membro / plano                   | `<Badge variant="brand">`  |
| Destaque de plano popular                  | `<Badge variant="navy" size="lg">` |
| Estado de sucesso / confirmação            | `<Badge variant="success">` |
| Filtros ativos selecionados pelo user      | `<Tag onRemove={…}>`       |
| Aguardando resposta de API                 | `<Spinner>`                |
| Carregamento de cards / lista              | `<Skeleton variant="block">` |

---

## Convenções de nomenclatura

### CSS

- **BEM leve:** `.bloco__elemento--modificador`
  - Ex: `.lead-form__field`, `.header__dropdown-link`, `.btn--loading`
- **Componentes de design system** usam prefixos próprios para evitar conflitos:
  - Layout primitives: `.lp-container`, `.lp-section`, `.lp-grid`, `.lp-flex`
  - Componentes de media: `.ds-image`, `.ds-icon`
  - Componentes de feedback: `.ds-tag`
- **Tokens:** `--categoria-subcategoria-variante`
  - Ex: `--color-text-primary`, `--shadow-brand`, `--space-4`

### Componentes JSX

- PascalCase para componentes: `Button`, `SectionTitle`, `LeadForm`
- Props descritivas em inglês: `variant`, `size`, `loading`, `as`, `leftIcon`
- Props booleanas em forma afirmativa: `loading`, `disabled`, `required`, `alt`, `wrap`
- `as` prop para polimorfismo (renderiza como tag ou componente diferente)

### Ficheiros

- `ComponenteName.jsx` + `ComponenteName.css` — sempre no mesmo diretório
- UI genérica → `src/components/ui/`
- Layout (header, footer) → `src/components/layout/`
- Seções de página → `src/components/sections/`
- Páginas completas → `src/pages/`
