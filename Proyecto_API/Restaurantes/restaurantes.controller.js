import Restaurante from './restaurantes.model';

export async function createRestaurante(req, res) {
  try {
    const {
      nombre,
      categorias,
      DomiciliariosPropios,
      costoEnvioPropio,
      tiempoEstimadoEnvio,
      administrador,
      calificacion,
      ubicaciones,
      menu,
    } = req.body;

    const restaurante = new Restaurante({
      nombre,
      categorias,
      DomiciliariosPropios,
      costoEnvioPropio,
      tiempoEstimadoEnvio,
      administrador,
      calificacion,
      ubicaciones,
      menu,
    });

    const resultado = await restaurante.save();
    res.status(201).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getRestauranteById(req, res) {
  try {
    const { id } = req.params;
    const restaurante = await Restaurante.findById(id);
    res.status(200).json(restaurante);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getRestaurantes(req, res) {
  try {
    const { categoria, nombre } = req.query;
    let filtro = { habilitado: true };

    if (categoria) {
      filtro.categorias = categoria;
    }

    if (nombre) {
      filtro.nombre = { $regex: new RegExp(nombre, 'i') };
    }

    const restaurantes = await Restaurante.find(filtro);
    res.status(200).json(restaurantes);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function updateRestaurante(req, res) {
  try {
    const { id } = req.params;
    const {
      nombre,
      categorias,
      DomiciliariosPropios,
      costoEnvioPropio,
      tiempoEstimadoEnvio,
      administrador,
      calificacion,
      ubicaciones,
      menu,
      habilitado,
    } = req.body;

    const restaurante = await Restaurante.findByIdAndUpdate(
      id,
      {
        $set: {
          nombre,
          categorias,
          DomiciliariosPropios,
          costoEnvioPropio,
          tiempoEstimadoEnvio,
          administrador,
          calificacion,
          ubicaciones,
          menu,
          habilitado,
        },
      },
      { new: true }
    );

    res.status(200).json(restaurante);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function deleteRestaurante(req, res) {
  try {
    const { id } = req.params;
    const restaurante = await Restaurante.findByIdAndUpdate(
      id,
      {
        $set: {
          habilitado: false,
        },
      },
      { new: true }
    );
    res.status(200).json(restaurante);
  } catch (err) {
    res.status(500).json(err);
  }
}
