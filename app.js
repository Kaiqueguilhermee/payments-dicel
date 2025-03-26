// src/app.js

import express from 'express';
import path from 'path';
import paymentRoutes from './routes/paymentRoutes.js';

const app = express();

// Configurações do Express
app.use(express.json());  // Para aceitar JSON no corpo das requisições
app.use(express.urlencoded({ extended: true }));  // Para parsing de formulários

// Registrar as rotas de pagamento
app.use('/pagamento', paymentRoutes);

// Rota inicial (para testar)
app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema de pagamentos!');
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
