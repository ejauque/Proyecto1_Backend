import express from 'express';
import {
  createRestaurante,
  getRestauranteById,
  getRestaurantes,
  updateRestaurante,
  deleteRestaurante,
} from './restaurantes.controller';

const router = express.Router();

// Endpoint POST /restaurantes
router.post('/restaurantes', createRestaurante);

// Endpoint GET /restaurantes/:id
router.get('/restaurantes/:id', getRestauranteById);

// Endpoint GET /restaurantes
router.get('/restaurantes', getRestaurantes);

// Endpoint PATCH /restaurantes/:id
router.patch('/restaurantes/:id', updateRestaurante);

// Endpoint DELETE /restaurantes/:id
router.delete('/restaurantes/:id', deleteRestaurante);

export default router;