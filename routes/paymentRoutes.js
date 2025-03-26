// src/routes/paymentRoutes.js

import express from 'express';
import { gerarPagamentoController } from '../controllers/paymentController.js';

const router = express.Router();

// Rota para gerar um pagamento
router.post('/gerar-pagamento', gerarPagamentoController);

export default router;
