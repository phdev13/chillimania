# 🚀 Guia de Deploy no Render.com

## ✅ Configurações Já Realizadas

O projeto já foi preparado com as seguintes configurações para deploy no Render:

- ✅ **server.js** - Servidor Express configurado para servir a SPA corretamente
- ✅ **package.json** - Atualizado com script `start` e dependências de produção
- ✅ **vite.config.ts** - Otimizado para build de produção
- ✅ **.nvmrc** - Node.js versão 18 especificada
- ✅ **build.sh** - Script de build automático
- ✅ **.renderignore** - Arquivo de ignorância otimizado
- ✅ **README.md** - Instruções incluídas

## 📋 Passo a Passo para Deploy

### 1. **Preparar o Repositório GitHub**

```bash
# Se ainda não tem git iniciado:
git init
git add .
git commit -m "Preparação para deploy no Render"
git push origin main
```

### 2. **Acessar Render.com**

1. Visite [https://render.com](https://render.com)
2. Clique em "Sign Up" ou "Sign In"
3. Conecte com sua conta GitHub

### 3. **Criar um Novo Web Service**

1. Na dashboard, clique em **"New +"**
2. Selecione **"Web Service"**
3. Conecte seu repositório GitHub (procure por "Portifolio" ou similarmente)

### 4. **Configurar o Serviço**

Preencha os campos com:

| Campo | Valor |
|-------|-------|
| **Name** | `chillimania-portfolio` |
| **Environment** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `node server.js` |

### 5. **Variáveis de Ambiente (se necessário)**

Se sua aplicação usa APIs (como Gemini API):

1. Vá em **"Environment"**
2. Adicione:
   - **Key:** `VITE_GEMINI_API_KEY` → **Value:** `sua_chave_aqui`
   - **Key:** `GEMINI_API_KEY` → **Value:** `sua_chave_aqui`

### 6. **Deploy**

1. Clique em **"Create Web Service"**
2. O Render iniciará o build automaticamente
3. Aguarde a conclusão (geralmente 2-5 minutos)
4. Você receberá um URL público como: `https://chillimania-portfolio.onrender.com`

## 🔍 Monitoramento

- **Logs de Build:** Visualize em tempo real na aba "Logs"
- **Status:** Veja se está "Live" ou com erros
- **Logs de Runtime:** Monitore o servidor em execução

## 🆘 Troubleshooting

### ❌ "Build Failed"
**Solução:** Verifique os logs. Geralmente é falta de dependências.
```bash
# Localmente, teste:
npm install
npm run build
```

### ❌ "Cannot GET /"
**Solução:** O `server.js` já está configurado. Reinicie o serviço em Render.

### ❌ Erro de CORS
**Solução:** Se consumir APIs externas, adicione headers no `server.js` ou configure a API para aceitar origem do Render.

### ❌ Porta não encontrada
**Solução:** O servidor usa `process.env.PORT` automaticamente. Não precisa configurar.

## 📊 Verificação Final

Após o deploy, teste:

1. ✅ Página inicial carrega
2. ✅ Navegação funciona (rotas)
3. ✅ Carrinho adiciona produtos
4. ✅ Checkout completo funciona
5. ✅ Imagens e CSS carregam corretamente

## 🔄 Updates Futuros

Para fazer um novo deploy após atualizações:

1. Faça commit e push para GitHub
2. Render fará rebuild automaticamente
3. Ou clique em "Redeploy" na dashboard

## 📞 Suporte

Se encontrar problemas:
- Verifique os logs do Render
- Teste localmente com `npm run build && npm run preview`
- Consulte documentação do [Render](https://render.com/docs)

---

**Seu site estará ao vivo em poucos minutos!** 🎉
