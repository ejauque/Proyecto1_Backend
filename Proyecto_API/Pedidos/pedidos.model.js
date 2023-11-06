const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  restaurante: {
    type: mongoose.Types.ObjectId,
    ref: 'Restaurante',
    required: true,
  },
  productos: [
    {
      producto: {
        type: mongoose.Types.ObjectId,
        ref: 'Producto',
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
      },
    },
  ],
  estado: {
    type: String,
    enum: ['En proceso', 'Enviado', 'Entregado', 'Cancelado'],
    default: 'En proceso',
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  habilitado: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model('pedidos', PedidoSchema);
