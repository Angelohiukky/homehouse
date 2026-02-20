# 🏠 HomeHouse - Landing Page Imobiliária

Uma Landing Page moderna, responsiva e interativa desenvolvida "na mão" (Vanilla Code), sem o uso de frameworks CSS pesados como Bootstrap ou Tailwind. O foco do projeto foi o aprendizado sólido dos fundamentos de HTML5, CSS3 e JavaScript Moderno.

## 🚀 Funcionalidades Implementadas

### 🎨 Design & CSS
- **CSS Variables (`:root`)**: Gerenciamento centralizado de cores, sombras e transições.
- **Layout Responsivo**:
  - **Flexbox**: Utilizado no cabeçalho e alinhamentos gerais.
  - **CSS Grid**: Utilizado nas seções de Imóveis, Serviços, Depoimentos e Rodapé. Uso avançado de `repeat(auto-fit, minmax(...))` para grades que se adaptam automaticamente sem media queries excessivas.
  - **Card Layout Inteligente**: Uso de `flex-grow` e `margin-top: auto` para alinhar os botões na base dos cards, garantindo uniformidade visual mesmo com descrições de tamanhos variados.
- **Animações**:
  - **Scroll Animation**: Elementos aparecem suavemente (`Fade In`) conforme a rolagem (Intersection Observer).
  - **Micro-interações**: Efeitos de hover exclusivos para os botões dos cards (scale + shadow), links de navegação e animação de "pulso" no botão do WhatsApp.
  - **Parallax**: Efeito de profundidade no fundo da seção Hero (Desktop).
- **Mobile First**: Menu "Hambúrguer" exclusivo para mobile e adaptações de layout.

### ⚙️ JavaScript & Interatividade
- **Carrossel Automático**: Slider de imagens na seção Hero com transição suave (`opacity`).
- **Menu Mobile**: Lógica de abrir/fechar e troca de ícones (Barras ↔ X).
- **Modal de Contato**: Pop-up funcional com validação de e-mail via Regex antes do envio.
- **Botão "Voltar ao Topo"**: Aparece apenas após rolar a página e possui rolagem suave.

## 📂 Estrutura do Projeto

```text
/
├── index.html      # Estrutura semântica (Header, Main, Sections, Footer)
├── style.css       # Estilos, Reset, Variáveis e Media Queries
└── script.js       # Lógica do Menu, Carrossel, Modal e Animações
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Tags semânticas (`<header>`, `<main>`, `<section>`, `<footer>`).
- **CSS3**: Flexbox, Grid Layout, Keyframes, Transitions.
- **JavaScript (ES6+)**: `const/let`, `Arrow Functions`, `EventListeners`, `IntersectionObserver`.
- **FontAwesome 6**: Ícones vetoriais.
- **Google Fonts**: Tipografia.

## 🔮 O que pode ser feito no futuro (Roadmap)

Para evoluir este projeto para um nível de produção real ou portfólio avançado:

1.  **Página de Detalhes do Imóvel**:
    - Criar uma página separada (`imovel.html`) para mostrar mais fotos e descrição completa ao clicar em um card.

2.  **Filtro de Busca**:
    - Adicionar inputs (JavaScript) para filtrar os imóveis por preço ou tipo (Casa/Ap) em tempo real na tela.

3.  **Mapa Interativo**:
    - Integrar a API do Google Maps ou Leaflet para mostrar a localização do escritório no Rodapé.

4.  **Otimização de Performance**:
    - Converter imagens para formato WebP.
    - Minificar os arquivos CSS e JS.

5.  **Backend**:
    - Conectar o formulário a um backend real (Node.js/PHP) ou banco de dados para salvar os leads, em vez de apenas enviar e-mail.

6.  **Acessibilidade (a11y)**:
    - Melhorar o suporte para leitores de tela (ARIA labels) e navegação por teclado.

## 📝 Como rodar

1.  Clone o repositório ou baixe os arquivos.
2.  Abra o arquivo `index.html` em qualquer navegador moderno.

---

Feito com 💜 para fins de estudo.
```