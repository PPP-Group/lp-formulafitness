# PROJECT SETUP — Formula Fitness

> Instruções técnicas para inicialização, configuração e deploy do projeto.
> Seguir EXATAMENTE esta sequência. Cada passo valida o anterior.

---

## 1. INICIALIZAÇÃO

```bash
# Criar projeto com Vite + React
npm create vite@latest formula-fitness -- --template react

# Entrar no diretório
cd formula-fitness

# Instalar dependências base
npm install

# Instalar dependências adicionais
npm install react-router-dom

# Dev dependencies
npm install -D @types/react eslint prettier eslint-config-prettier
```

### Dependências permitidas (e APENAS estas):
```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x"
  },
  "devDependencies": {
    "vite": "^5.x",
    "@vitejs/plugin-react": "^4.x",
    "eslint": "^8.x",
    "prettier": "^3.x"
  }
}
```

> **Framer Motion**: NÃO instalar na Fase 1. Todas as animações da fase 1 são CSS puro.
> Adicionar apenas na Fase 2 se necessário: `npm install framer-motion`

---

## 2. CONFIGURAÇÃO DO VITE

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@data': '/src/data',
      '@assets': '/src/assets'
    }
  }
})
```

---

## 3. SCRIPTS DO PACKAGE.JSON

```json
{
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .js,.jsx --fix",
    "format": "prettier --write \"src/**/*.{js,jsx,css,md}\""
  }
}
```

> `npm start` e `npm run dev` fazem a mesma coisa: abrir o servidor de desenvolvimento.

---

## 4. CONFIGURAÇÃO DO GIT

```bash
# Inicializar repositório
git init

# Criar .gitignore
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js

# Build
dist/
build/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Editor
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Cache
.eslintcache
.parcel-cache
EOF

# Primeiro commit
git add .
git commit -m "chore: initial project setup with Vite + React"
```

### Convenção de commits (Conventional Commits):
```
feat:     Nova funcionalidade
fix:      Correção de bug
style:    Mudanças visuais (CSS, formatação)
refactor: Refatoração sem mudança funcional
chore:    Setup, configs, dependências
docs:     Documentação
perf:     Melhorias de performance
```

### Sequência sugerida de commits:
```
1. chore: initial project setup with Vite + React
2. style: add design system tokens and global styles
3. feat: add Header component with navigation
4. feat: add Footer component
5. feat: add Hero section
6. feat: add Partners logo carousel
7. feat: add About section with accordion
8. feat: add Training Programs section
9. feat: add InBody section
10. feat: add Active Aging section
11. feat: add Video Testimonials section
12. feat: add BMI Calculator
13. feat: add Reviews slider
14. feat: add Consultation CTA section
15. feat: add page routing and subpages
16. fix: responsive adjustments across all breakpoints
17. perf: add lazy loading and code splitting
18. docs: add README with setup instructions
```

---

## 5. GITHUB — PUSH

```bash
# Criar repositório no GitHub (manual ou via CLI)
# Se tiver GitHub CLI:
gh repo create formula-fitness --public --source=. --remote=origin

# Se não tiver, criar manualmente no github.com e depois:
git remote add origin https://github.com/SEU_USUARIO/formula-fitness.git

# Push
git branch -M main
git push -u origin main
```

---

## 6. ESTRUTURA DE ARQUIVOS INICIAL

Após o setup, criar a seguinte estrutura mínima para validar que tudo funciona:

```
src/
├── index.jsx           # Entry point — renderiza <App />
├── App.jsx             # Router wrapper
├── styles/
│   ├── variables.css   # Todos os tokens do DESIGN_SYSTEM.md
│   ├── global.css      # Reset + estilos base (importa variables.css)
│   └── animations.css  # Keyframes globais
├── components/
│   └── layout/
│       ├── Header.jsx  # Navbar placeholder
│       ├── Footer.jsx  # Footer placeholder
│       └── Layout.jsx  # Header + Outlet + Footer
└── pages/
    └── Home.jsx        # Página inicial com texto placeholder
```

### Validação:
```bash
npm run dev
# Deve abrir http://localhost:3000
# Deve mostrar a página sem erros no console
# Deve ter o background escuro e a estrutura base
```

---

## 7. README.md DO PROJETO

```markdown
# Formula Fitness — Website

Website oficial da Formula Fitness, reconstruído com React + Vite.

## Setup

### Pré-requisitos
- Node.js 18+
- npm 9+

### Instalação
git clone https://github.com/SEU_USUARIO/formula-fitness.git
cd formula-fitness
npm install

### Desenvolvimento
npm start
# ou
npm run dev

Abre em http://localhost:3000

### Build de produção
npm run build
npm run preview

### Estrutura
- `src/components/` — Componentes reutilizáveis
- `src/pages/` — Páginas do site
- `src/styles/` — CSS global e design tokens
- `src/data/` — Dados estáticos (textos, menu, etc.)
- `src/hooks/` — Custom hooks

### Deploy
Build estático em `dist/`. Compatível com:
- Vercel
- Netlify
- GitHub Pages
- Qualquer host de arquivos estáticos
```

---

## 8. ESLINT + PRETTIER

```js
// .eslintrc.cjs
module.exports = {
  env: { browser: true, es2021: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn'
  },
  settings: {
    react: { version: 'detect' }
  }
}
```

```json
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "jsxSingleQuote": false
}
```

---

## 9. DEPLOY OPTIONS

### Vercel (recomendado — mais simples):
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Produção
vercel --prod
```

### GitHub Pages:
```bash
# Instalar plugin
npm install -D gh-pages

# Adicionar ao package.json:
# "homepage": "https://SEU_USUARIO.github.io/formula-fitness",
# "scripts": { "deploy": "gh-pages -d dist" }

# Configurar vite.config.js:
# base: '/formula-fitness/'

# Deploy
npm run build
npm run deploy
```

### Netlify:
```bash
# Criar netlify.toml na raiz
cat > netlify.toml << 'EOF'
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOF
```

> O redirect wildcard é **obrigatório** para SPAs com React Router.

---

## 10. ORDEM DE EXECUÇÃO NO CLAUDE CODE

```
PASSO 1: Ler MASTER_PROMPT.md inteiro
PASSO 2: Ler DESIGN_SYSTEM.md inteiro
PASSO 3: Ler INTERACTIONS.md inteiro
PASSO 4: Acessar https://formulafitness.co/ e inspecionar visualmente
PASSO 5: Executar o setup deste documento (seções 1–6)
PASSO 6: Validar que npm start funciona
PASSO 7: Começar a construir componente por componente (ordem do MASTER_PROMPT seção 4)
PASSO 8: Testar responsividade a cada componente
PASSO 9: Montar as páginas completas
PASSO 10: Testar fluxo completo de navegação
PASSO 11: Commit final + push para GitHub
```
