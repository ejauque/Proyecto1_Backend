import express from 'express';
import {
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from './usuarios.controller';

const router = express.Router();

// Endpoint GET /usuarios
router.get('/usuarios', getUsuario);

// Endpoint POST /usuarios
router.post('/usuarios', createUsuario);

// Endpoint PATCH /usuarios
router.patch('/usuarios/:id', updateUsuario);

// Endpoint DELETE /usuarios
router.delete('/usuarios/:id', deleteUsuario);

export default router;
