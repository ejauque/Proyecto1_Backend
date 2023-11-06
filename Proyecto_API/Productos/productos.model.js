const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    maxLength: 100,
  },
  descripcion: {
    type: String,
    maxLength: 1000,
  },
  precio: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
    validate: (categoria) => {
      const categoriasValidas = ["Hamburguesa", "Pizza", "Sushi", "Salchipapas", "Pollo", "Saludable", "Arepas", "Mexicana", "Desayunos", "Árabe", "Sanduches", "Asiática", "Parrilla", "Italiana", "Vegetariana", "Helados"]
      return categoriasValidas.includes(categoria);
    },
  },
  restaurante: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  disponible: {
    type: Boolean,
    default: true,
  },
  habilitado: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model('productos', ProductoSchema);