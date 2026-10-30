# Regras do Projeto — Modern Surf (Five Panel de Tactel)

> Diretrizes arquiteturais, padrões de código e convenções de design para o projeto Modern Surf.

---

## 1. Diretrizes Globais e Idioma
- Toda comunicação, documentação e comentários devem ser em **Português do Brasil (pt-BR)**.
- O tom do projeto é profissional, técnico e com a identidade da cultura do surf e streetwear litorâneo (Santos - SP).

## 2. Convenções de Código
- **Nomenclatura**:
  - Arquivos: `kebab-case.ts` / `kebab-case.tsx` (ex: `cart-drawer.tsx` ou manter consistência com arquivos existentes como `CartDrawer.tsx` respeitando PascalCase para componentes React).
  - Componentes React: `PascalCase` (ex: `ProductLookbookGrid`, `CartDrawer`).
  - Funções, métodos e variáveis: `camelCase` (ex: `handleAddToCart`, `calculateDiscount`).
  - Constantes e enums: `UPPER_SNAKE_CASE` (ex: `PRODUCTS`, `SHIPPING_THRESHOLD`).
- **Tamanho de arquivos**: Manter componentes com no máximo 300 linhas; modularizar subcomponentes sempre que necessário.
- **Imports**: Usar extensões explícitas quando configurado no Vite/TypeScript (`.tsx`, `.ts`).

## 3. Identidade Visual e Design Tokens
- **Paleta de Cores**:
  - `Modern Black`: `#131313` (fundo escuro, textos primários em fundos claros)
  - `Bone`: `#E9E6DE` (fundo base da landing page e cards)
  - `Signal Orange`: `#EB450E` (chamadas de ação, destaque primário, badges e CTAs)
  - `Acid Lime`: `#D3FE89` (acentos fluorescentes, contraste e status)
  - `Deep Olive`: `#504718` (subtítulos secundários e notas técnicas)
  - `Vibrant Blue`: `#0920e6` (acentos editoriais e bordas especiais)
- **Tipografia**:
  - `Anton` (`.font-anton`): Títulos de impacto brutalista e nomes principais.
  - `Oswald` (`.font-oswald`): Títulos de cards e subtítulos condensados.
  - `Space Grotesk` (`.font-mono-code`): Metadados, códigos de produto, badges e preços.
  - `Plus Jakarta Sans`: Texto corrido e parágrafos informativos.
  - `Caveat` (`.font-signature`): Assinaturas pontuais e toques humanos editoriais.

## 4. Engenharia de Componentes e Estado
- O carrinho persiste automaticamente no `localStorage` via chave `'modern_surf_cart'`.
- Cálculos de subtotal, frete, descontos e total centralizados em `src/utils/cart.ts`.
- Checkout integrado direcionando para o WhatsApp oficial com resumo formatado de itens e valores.
- Não introduzir dependências desnecessárias; priorizar React 19, TailwindCSS v4, Lucide Icons e `motion`.

