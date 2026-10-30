# Regras de Motion — Modern Surf

> Diretrizes estritas de animação e micro-interações ("You Don't Need Animations").

---

## 1. Princípio Fundamental de Contenção
- **Menos é mais**: A melhor animação é muitas vezes nenhuma animação.
- Não crie animações apenas porque "fica bonito" ou por puro capricho decorativo.
- Todo movimento deve ser justificado e categorizado em um dos propósitos válidos:
  - **Feedback**: confirmação tátil imediata (ex: `:active { transform: scale(0.97) }`).
  - **Spatial consistency**: orientar o usuário sobre a origem/destino de um elemento (ex: drawer deslizando da borda correspondente).
  - **State indication**: tornar clara uma alteração de estado (ex: accordion expandindo).
  - **Preventing a jarring change**: evitar que conteúdos surjam ou sumam abruptamente no teleport.
  - **Explanation**: explicar visualmente o produto/tecido (restrito a seções explicativas).
  - **Delight**: permitido apenas em momentos raros/comemoração (ex: sucesso na compra ou frete grátis desbloqueado).

## 2. O Portão de Avaliação (The Gate)
Toda sugestão ou implementação de animação deve ser aprovada nos 4 critérios:
1. **Frequência**: Ações repetidas dezenas ou centenas de vezes ao dia devem ser ultra-rápidas ou estáticas.
2. **Propósito**: Deve possuir um dos 6 propósitos declarados acima.
3. **Orçamento de Tempo (Speed Budget)**:
   - Feedback de clique/pressão: 100ms – 160ms
   - Tooltips e popovers pequenos: 125ms – 200ms
   - Menus dropdown: 150ms – 250ms
   - Modais e gavetas (drawers): 200ms – 400ms (máx. 500ms)
4. **Função**: A animação auxilia a compreensão ou atrapalha a leitura/ação? Se atrapalhar, rejeite imediatamente.

## 3. Regras Técnicas de Performance
- **Propriedades permitidas**: Animar quase que exclusivamente `transform` e `opacity`.
- **Proibido animar**: `width`, `height`, `top`, `left`, `margin`, `padding` (causam reflow/layout shift), exceto se manipulado via `height` animado com auto-sizing seguro ou CSS Grid `grid-template-rows: 0fr -> 1fr`.
- **Easings padronizados**:
  - `--ease-out`: `cubic-bezier(0.23, 1, 0.32, 1)`
  - `--ease-in-out`: `cubic-bezier(0.77, 0, 0.175, 1)`
  - `--ease-drawer`: `cubic-bezier(0.32, 0.72, 0, 1)`
- **Acessibilidade**: Sempre suportar `@media (prefers-reduced-motion: reduce)`.

