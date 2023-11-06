const mongoose = require('mongoose');

const restaurantSchema = new Schema({

    nombre:{
        type: String,
        required: true,
        maxLength: 40,
    },
    
    categorias: {
        type: [String],
        required: true,
        validate: (categorias) => {
            //Arreglo con la mayoría de las categorías de restaurantes de Rappi
          const categoriasValidas = ["Hamburguesa", "Pizza", "Sushi", "Salchipapas", "Pollo", "Saludable", "Arepas", "Mexicana", "Desayunos", "Árabe", "Sanduches", "Asiática", "Parrilla", "Italiana", "Vegetariana", "Helados"]
          return categorias.every((categoria) => categoriasValidas.includes(categoria))
        },
      },

    DomiciliariosPropios: {
        type: Boolean,
        required: true,
    },

    costoEnvioPropio: {
        type: Number,
        default: 0,
      },

    tiempoEstimadoEnvio: {
        type: String,
        required: true,
    },

    administrador: {
        type: mongoose.Types.ObjectId, 
        required: true,
    },

    calificacion: {
        type: Number,
        min: 0,
        max: 5,
    },

    ubicaciones: [
        {
          direccion: {
            type: String,
            required: true,
          },
          rangoServicioMaximo: {
            type: Number,
            required: true,
          },
        },
    ],

    menu: {
        categorias: {
          type: [String],
          required: true,
          unique: true,
        },
        platos: [
          {
            nombre: {
              type: String,
              required: true,
              maxLength: 40,
            },
            descripcion: {
              type: String,
              maxLength: 150,
            },
            precio: {
              type: Number,
              required: true,
            },
          },
        ],
    },
    
    habilitado: {
      type: Boolean,
      default: true,
    },
})

export default mongoose.model('restaurantes', restaurantSchema);