const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
      maxLength: 100,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
      maxLength: 100,
      
    },
    contraseña: {
      type: String,
      required: true,
      
    },
    direccion: {
      type: String,
      maxLength: 500,
    },
    telefono: {
      type: String,
      maxLength: 20,
    },
    pedidos: [
        {
          type: mongoose.Types.ObjectId,
          ref: 'Pedido',
        },
    ],
    rol: {
      type: String,
      enum: ['cliente', 'administrador'],
      default: 'cliente',
    },
    
    habilitado: {
      type: Boolean,
      default: true,
    },
  });

  export default mongoose.model('usuarios', UserSchema);