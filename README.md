# API Monitoramento de Energia

Este projeto foi desenvolvido como parte de uma atividade acadêmica, com foco no uso sustentável da energia (ODS 7) e implementação de uma API em NestJS.

## 🔌 Objetivo
Criar uma API para monitorar o consumo de energia elétrica de uma comunidade, promovendo o uso consciente e fornecendo recursos de alerta e análise de consumo.

## 🌱 Alinhamento com o ODS 7
> Garantir o acesso confiável, sustentável, moderno e a preço acessível à energia para todos.

---

## ⚙️ Funcionalidades

- ✅ **Registrar consumo**  
  Registra o consumo mensal (em kWh) de um usuário, com data e identificação.

- 📊 **Consultar histórico**  
  Permite visualizar os registros de consumo entre datas específicas.

- 🚨 **Gerar alerta de consumo elevado**  
  Se o consumo atual for maior que o do mês anterior, um alerta é gerado automaticamente.

---

## ▶️ Como rodar localmente

```bash
npm install
npm run start:dev
