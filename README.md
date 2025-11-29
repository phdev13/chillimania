# ChilliMania 🌶️

> **Nota:** Este projeto foi desenvolvido exclusivamente para compor o portfólio do site **[phstatic.com](https://phstatic.com)**.

**ChilliMania** é uma experiência de e-commerce frontend moderna, imersiva e responsiva criada para uma marca fictícia de molhos artesanais e pimentas de alta intensidade. O projeto foca em UI/UX de alta qualidade, microinterações fluidas e um fluxo de compra completo (mockado).

![ChilliMania Cover](https://images.unsplash.com/photo-1590757783937-252f9547d77b?q=80&w=1000&auto=format&fit=crop)

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas de desenvolvimento frontend moderno:

- **React 19** (Functional Components, Hooks)
- **TypeScript** (Tipagem estática estrita)
- **Tailwind CSS** (Estilização utilitária e responsiva)
- **Context API** (Gerenciamento de estado global para o Carrinho)
- **React Router DOM** (Roteamento SPA)
- **Lucide React** (Ícones vetoriais leves)

## ✨ Funcionalidades Principais

### 🛒 Experiência de Compra
- **Carrinho Global:** Estado persistente via Context API e LocalStorage.
- **Cart Drawer:** Sidebar deslizante animada para visualização rápida do carrinho sem sair da página.
- **Quick Add:** Adição rápida de produtos diretamente dos cards de listagem.

### 💳 Fluxo de Checkout Completo
Um processo de checkout multi-etapas totalmente funcional (interface):
1. **Identificação & Entrega:** Formulário com validação visual.
2. **Pagamento:** Simulação de input de cartão de crédito com feedback visual.
3. **Confirmação:** Tela de sucesso com resumo do pedido e ID gerado dinamicamente.

### 🔍 Navegação e Descoberta
- **Filtros Dinâmicos:** Filtragem de produtos por Categoria (Molhos, Pimentas, Kits) e Nível de Ardência (termômetro visual).
- **Página de Produto:** Galeria de imagens, descrição detalhada, controle de quantidade e medidor de picância (`SpicinessMeter`).

### 🎨 UI/UX & Design System
- **Tema Escuro (Dark Mode):** Design sofisticado com paleta de cores vibrante (Vermelho, Laranja, Preto).
- **Animações:** Transições suaves, efeitos de hover, parallax sutil e feedback de interação.
- **Responsividade:** Layout totalmente adaptável para Mobile, Tablet e Desktop.

## 📂 Estrutura do Projeto

```bash
/src
  ├── components/    # Componentes reutilizáveis (Button, Navbar, ProductCard, etc.)
  ├── context/       # Gerenciamento de estado (CartContext)
  ├── pages/         # Telas da aplicação (Home, Shop, Checkout, etc.)
  ├── types/         # Definições de tipos TypeScript
  ├── constants.ts   # Dados mockados (Produtos, Testemunhos)
  └── App.tsx        # Ponto de entrada e rotas
```

## 🚀 Como Usar Localmente

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
# A aplicação estará disponível em http://localhost:5173
```

### Build para Produção
```bash
npm run build
# Cria a pasta `dist` com a versão otimizada
```

### Preview da Build
```bash
npm run preview
# Simula o servidor de produção localmente
```

## 🌐 Deploy no Render

### Pré-requisitos
1. Uma conta no [Render.com](https://render.com)
2. Repositório GitHub com este projeto

### Instruções de Deploy ⚠️ IMPORTANTE

O arquivo `render.yaml` já está configurado com os comandos corretos. Siga os passos:

1. **Conectar ao Render:**
   - Vá em [Render Dashboard](https://dashboard.render.com)
   - Clique em "New +"
   - Selecione "Web Service"
   - Conecte seu repositório GitHub e selecione `phdev13/chillimania`

2. **Configuração automática via render.yaml:**
   - O Render detectará o arquivo `render.yaml` automaticamente
   - Se não detectar, configure manualmente:
     - **Name:** chillimania-portfolio
     - **Environment:** Node
     - **Build Command:** `npm install && npm run build`
     - **Start Command:** `node server.js`
     - **Node Version:** 18

3. **Variáveis de Ambiente:**
   - Se usar APIs, adicione em "Environment Variables":
   - `VITE_GEMINI_API_KEY=sua_chave_api`
   - `GEMINI_API_KEY=sua_chave_api`

4. **Deploy:**
   - Clique em "Create Web Service"
   - O Render fará o build e deploy automaticamente
   - Você receberá um URL público (ex: `https://chillimania-portfolio.onrender.com`)

### Troubleshooting

**Erro "Empty build command; skipping build":**
- Certifique-se que o `render.yaml` foi feito o push
- Ou configure manualmente o Build Command no Render

**Erro "Publish directory dist does not exist":**
- Execute localmente: `npm run build`
- Verifique se a pasta `dist` é criada

**Erro "Cannot find module":**
- Certifique-se de que todas as dependências estão no `package.json`
- Execute `npm install` localmente para testar

**Erro ao servir o HTML:**
- O arquivo `server.js` já está configurado para servir o `index.html` corretamente
- Todas as rotas SPA serão redirecionadas para o `index.html`

**Erro de porta:**
- O servidor usa automaticamente a porta do Render via variável `PORT`

## 🔗 Sobre o Autor

Este projeto demonstra habilidades avançadas em construção de interfaces web, gerenciamento de estado e design system.

Desenvolvido por **PH Static**.
Visite meu portfólio: [phstatic.com](https://phstatic.com)
