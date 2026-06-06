# CLAUDE CODE — PROMPT INICIAL

> Cole este prompt no Claude Code para começar. Os arquivos de referência devem estar no repositório.

---

## PROMPT PARA COLAR NO CLAUDE CODE:

```
Você vai reconstruir o site https://formulafitness.co/ como um projeto React + Vite moderno e profissional.

CONTEXTO:
- Formula Fitness é um estúdio de personal training em Los Alamitos, Califórnia
- O site atual usa WordPress + Elementor
- A missão é replicar o site com fidelidade total, corrigindo apenas bugs

DOCUMENTOS DE REFERÊNCIA (leia TODOS antes de começar):
1. MASTER_PROMPT.md — Escopo, estrutura, regras e checklist
2. DESIGN_SYSTEM.md — Cores, tipografia, espaçamentos, componentes visuais
3. INTERACTIONS.md — Animações, transições, estados interativos
4. PROJECT_SETUP.md — Setup técnico, Git, deploy

FASE ATUAL: Fase 1 — Réplica Fiel
- Copiar o site existente pixel por pixel
- Mesmo layout, cores, fontes, conteúdo, imagens
- Corrigir bugs visuais e de responsividade
- NÃO redesenhar, NÃO inventar, NÃO melhorar (ainda)

PRIMEIRA AÇÃO:
1. Leia os 4 documentos .md do repositório
2. Acesse https://formulafitness.co/ e mapeie a estrutura visual
3. Execute o setup do PROJECT_SETUP.md (npm create vite, dependências, configs)
4. Garanta que `npm start` funciona com a estrutura base
5. Comece a construir componente por componente, na ordem do MASTER_PROMPT.md seção 4

REGRAS:
- Resultado NÃO pode parecer gerado por IA
- Use as URLs de imagem originais do WordPress como placeholder
- Mobile-first em toda estilização
- Commits organizados seguindo Conventional Commits
- Teste responsividade em cada componente (320px, 768px, 1024px, 1440px)
- Sem dependências desnecessárias — cada npm install precisa justificativa

Comece agora. Leia os docs e execute o setup.
```

---

## PROMPTS DE FOLLOW-UP (usar conforme progresso):

### Após setup completo:
```
O setup está pronto. Agora construa o Header (navbar) com base no site original.
Requisitos:
- Logo à esquerda (usar SVG original)
- Links de navegação com dropdowns
- CTA "Book a Consultation" à direita
- Menu hamburger no mobile com overlay fullscreen
- Navbar fixa com background transition no scroll
Siga o DESIGN_SYSTEM.md para cores e tipografia.
```

### Após Header + Footer:
```
Header e Footer estão prontos. Agora construa a Home page, seção por seção, nesta ordem:
1. Hero (título + subtítulo + CTA + imagem/vídeo)
2. Partners (logo carousel infinito)
3. About / "Health is Wealth" (vídeo + accordion)
4. Training Programs (3 cards de serviço)
5. InBody 580 (layout 2 colunas: imagem + texto)
6. Personal Triumphs (2 colunas: texto + imagem)
7. Active Aging (2 colunas: texto + imagem)
8. Video Testimonials (3 cards com thumbnail)
9. BMI Calculator (form funcional)
10. Reviews Slider (carousel de reviews do Yelp)
11. Consultation CTA (formulário ou âncora)

Faça uma seção por vez. Teste cada uma antes de passar para a próxima.
```

### Para corrigir problemas:
```
A seção [NOME] não está fiel ao original. Acesse https://formulafitness.co/ e compare:
- [descrever a diferença específica]
Ajuste para ficar idêntico ao site real.
```

### Para subpáginas:
```
A Home está completa. Agora construa a página [NOME DA PÁGINA]:
- URL: [URL da página]
- Acesse o link acima e replique o layout fielmente
- Reutilize componentes já criados onde possível
- Adicione a rota no React Router
```

### Para deploy:
```
O site está completo. Agora:
1. Faça um último teste de responsividade em todas as páginas
2. Rode npm run build e confirme que não há erros
3. Faça o commit final
4. Faça push para o GitHub
5. Configure o deploy na Vercel (ou GitHub Pages)
```
