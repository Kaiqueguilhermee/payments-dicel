// src/controllers/paymentController.js

import { gerarPagamento } from '../models/paymentModel.js';

// Função para gerar pagamento
export const gerarPagamentoController = async (req, res) => {
  const { payment_amount, customer_email, customer_name, customer_document, customer_phone, customer_ip, cybersource_fingerprint, seon_fingerprint } = req.body;

  // Montando os dados do pagamento
  const paymentData = {
    payment_amount,
    customer_email,
    customer_name,
    customer_document,
    customer_phone,
    customer_ip,
    cybersource_fingerprint,
    seon_fingerprint,
  };

  try {
    // Chama o modelo para gerar o pagamento
    const pagamento = await gerarPagamento(paymentData);

    // Retorna os dados do pagamento em formato JSON
    res.json({
      success: true,
      message: 'Pagamento gerado com sucesso!',
      paymentDetails: pagamento,  // Passa os detalhes do pagamento para a resposta JSON
    });
  } catch (error) {
    // Caso ocorra algum erro, retorna uma resposta de erro em JSON
    res.json({
      success: false,
      message: 'Erro ao gerar pagamento. Tente novamente.',
      error: error.message,
    });
  }
};
