import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// Creacion del app
const app = express();

// Conexión a MongoDB usando mongoose
mongoose
  .connect(
    'mongodb+srv://' +
      process.env.MONGO_USER +
      ':' +
      process.env.MONGO_PASS +
      '@proyectoapi.fm1mpx2.mongodb.net/',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Connected.');
  })
  .catch((err) => {
    console.log('There was an error with connection!');
    console.log(err);
  });

// Middlewares
app.use(cors());
app.use(express.json());

import usuarioRoutes from './Usuarios/usuarios.routes'
app.use('/usuarios', usuarioRoutes)

import restaurantesRoutes from './Restaurantes/restaurantes.routes'
app.use('/restaurantes', restaurantesRoutes)

import productosRoutes from './Productos/productos.routes'
app.use('/productos', productosRoutes)

import pedidosRoutes from './Pedidos/pedidos.routes'
app.use('/pedidos', pedidosRoutes)

// Endpoint para 404
app.use((req, res) => {
  res.status(404).json({ message: 'Not found.' });
});

// Inicia app en puerto 8080
app.listen(8080);
