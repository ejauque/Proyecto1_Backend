import express from 'express';
import {
  createProducto,
  getProductoById,
  getProductos,
  updateProducto,
  deleteProducto,
} from './productos.controller';

const router = express.Router();

// Endpoint POST /productos
router.post('/productos', createProducto);

// Endpoint GET /productos/:id
router.get('/productos/:id', getProductoById);

// Endpoint GET /productos
router.get('/productos', getProductos);

// Endpoint PATCH /productos/:id
router.patch('/productos/:id', updateProducto);

// Endpoint DELETE /productos/:id
router.delete('/productos/:id', deleteProducto);

export default router;
