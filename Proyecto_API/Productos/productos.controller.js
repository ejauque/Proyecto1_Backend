import Producto from './productos.model';

export async function createProducto(req, res) {
  try {
    const { nombre, descripcion, precio, restaurante, categoria } = req.body;

    const producto = new Producto({
      nombre,
      descripcion,
      precio,
      restaurante,
      categoria,
    });

    const resultado = await producto.save();
    res.status(201).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getProductoById(req, res) {
  try {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    res.status(200).json(producto);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getProductos(req, res) {
  try {
    const { restaurante, categoria } = req.query;
    let filtro = { habilitado: true };

    if (restaurante) {
      filtro.restaurante = restaurante;
    }

    if (categoria) {
      filtro.categoria = categoria;
    }

    const productos = await Producto.find(filtro);
    res.status(200).json(productos);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function updateProducto(req, res) {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio, categoria, habilitado } = req.body;

    const producto = await Producto.findByIdAndUpdate(
      id,
      {
        $set: {
          nombre,
          descripcion,
          precio,
          categoria,
          habilitado,
        },
      },
      { new: true }
    );

    res.status(200).json(producto);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function deleteProducto(req, res) {
  try {
    const { id } = req.params;
    const producto = await Producto.findByIdAndUpdate(
      id,
      {
        $set: {
          habilitado: false,
        },
      },
      { new: true }
    );
    res.status(200).json(producto);
  } catch (err) {
    res.status(500).json(err);
  }
}
