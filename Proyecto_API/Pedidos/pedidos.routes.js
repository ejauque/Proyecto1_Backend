import express from 'express';
import {
  createPedido,
  getPedidoById,
  getPedidos,
  updatePedido,
  deletePedido,
} from './pedidos.controller';

const router = express.Router();

// Endpoint POST /pedidos
router.post('/pedidos', createPedido);

// Endpoint GET /pedidos/:id
router.get('/pedidos/:id', getPedidoById);

// Endpoint GET /pedidos
router.get('/pedidos/', getPedidos);

// Endpoint PATCH /pedidos/:id
router.patch('/pedidos/:id', updatePedido);

// Endpoint DELETE /pedidos/:id
router.delete('/pedidos/:id', deletePedido);

export default router;
