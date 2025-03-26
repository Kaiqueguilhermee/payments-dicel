// src/models/paymentModel.js

import axios from 'axios';

// URL e credenciais da API da Mangofy
const MANGOFY_API_URL = 'https://checkout.mangofy.com.br/api/v1/payment';  
const AUTHORIZATION_TOKEN = 'vstnk32dac280529a2e8bd61985eae4ed6f86dd035b87368b3c5631ca97a2d55c9d4070d';  // Substitua pelo seu token de autenticação
const STORE_CODE = 'ytjmszhxiikrfsyzufz';  // Substitua pelo seu código da loja

// Função para gerar um pagamento
export const gerarPagamento = async (paymentData) => {
  const headers = {
    "Authorization": `Bearer ${AUTHORIZATION_TOKEN}`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  };

  const itens = [
    {
      "code": "1",
      "name": "ytjmszhxiikrfsyzufz",
      "amount": 200,
      "total": 3
    },

  ];

  // Montando o corpo da requisição para gerar o pagamento
  const body = {
    "store_code": STORE_CODE,
    "external_code": paymentData.external_code || null,
    "payment_method": "pix",
    "payment_format": "regular" ,
    "installments": 1,
    "payment_amount": paymentData.payment_amount,
    "postback_url": null,
    "items": itens,
    "customer": {
      "email": paymentData.customer_email,
      "name": paymentData.customer_name,
      "document": paymentData.customer_document,
      "phone": paymentData.customer_phone,
      "ip": paymentData.customer_ip,
    }
  };

  try {
    const response = await axios.post(MANGOFY_API_URL, body, { headers });
    return response.data;  // Retorna os dados do pagamento gerado
  } catch (error) {
    console.error('Erro ao gerar pagamento:', error.response ? error.response.data : error.message);
    throw new Error('Erro ao gerar pagamento');
  }
};
