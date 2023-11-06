import Pedido from './pedidos.model';

export async function createPedido(req, res) {
  try {
    const { usuario, restaurante, productos } = req.body;

    const pedido = new Pedido({
      usuario,
      restaurante,
      productos,
    });

    const resultado = await pedido.save();
    res.status(201).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getPedidoById(req, res) {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findById(id);
    res.status(200).json(pedido);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getPedidos(req, res) {
  try {
    const { usuario, enviadoPorUsuario, restaurante, fechaInicio, fechaFin, enviadosSinAceptar } = req.query;
    let filtro = { habilitado: true };

    if (usuario) {
      filtro.usuario = usuario;
    }

    if (enviadoPorUsuario) {
      filtro['productos.producto.usuario'] = enviadoPorUsuario;
    }

    if (restaurante) {
      filtro.restaurante = restaurante;
    }

    if (fechaInicio && fechaFin) {
      filtro.fecha = { $gte: new Date(fechaInicio), $lte: new Date(fechaFin) };
    }

    if (enviadosSinAceptar) {
      filtro.estado = 'Enviado';
    }

    const pedidos = await Pedido.find(filtro);
    res.status(200).json(pedidos);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function updatePedido(req, res) {
  try {
    const { id } = req.params;
    const { productos, estado } = req.body;

    const pedido = await Pedido.findById(id);

    if (pedido.estado === 'Enviado') {
      // Si el pedido ya ha sido enviado, no permitir actualizaciones
      return res.status(400).json({ mensaje: 'No se pueden modificar pedidos enviados.' });
    }

    pedido.productos = productos || pedido.productos;
    pedido.estado = estado || pedido.estado;

    const resultado = await pedido.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function deletePedido(req, res) {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findByIdAndUpdate(
      id,
      {
        $set: {
          habilitado: false,
        },
      },
      { new: true }
    );
    res.status(200).json(pedido);
  } catch (err) {
    res.status(500).json(err);
  }
}
