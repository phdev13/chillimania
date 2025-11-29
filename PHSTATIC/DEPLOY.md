# Deploy no Render.com

## Pré-requisitos
- Conta no [Render.com](https://render.com)
- Repositório GitHub com o projeto

## Passos para Deploy

### 1. Preparar o Repositório
```bash
git add .
git commit -m "Prep: Configure for Render deployment"
git push
```

### 2. No Render Dashboard

#### Opção A: Usando render.yaml (Recomendado)
1. Conecte seu repositório GitHub ao Render
2. Render detectará automaticamente o arquivo `render.yaml`
3. Configure as variáveis de ambiente:
   - `GEMINI_API_KEY`: Sua chave da API Gemini

#### Opção B: Criar Manualmente
1. Acesse [dashboard.render.com](https://dashboard.render.com)
2. Clique em "New +" → "Web Service"
3. Conecte seu repositório GitHub
4. Configure:
   - **Name**: phstatic
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   - **Plan**: Free
5. Adicione variáveis de ambiente:
   - `GEMINI_API_KEY`: Sua chave API

### 3. Variáveis de Ambiente

Adicione estas variáveis no Render Dashboard:
- `GEMINI_API_KEY`: Obtenha em [Google AI Studio](https://aistudio.google.com)

### 4. Deploy Automático

Após a configuração inicial, cada push para a branch principal dispara um novo deploy automaticamente.

## Otimizações Aplicadas

✅ Configuração Vite otimizada para produção
✅ Arquivo render.yaml criado
✅ Scripts de start adicionados ao package.json
✅ Variáveis de ambiente documentadas (.env.example)
✅ Build minificado e otimizado

## Troubleshooting

**Build falha?**
- Verifique se `npm run build` funciona localmente
- Confirme todas as dependências estão em package.json

**App não carrega?**
- Verifique GEMINI_API_KEY nas variáveis de ambiente do Render
- Confira os logs no dashboard do Render

**Porta incorreta?**
- O Render atribui porta automaticamente via variável PORT
- Vite está configurado para usar host 0.0.0.0

---

Está tudo pronto para fazer o deploy! 🚀
