import Usuario from './usuario.model';

export async function getUsuario(req, res) {
  try {
    const usuarios = await Usuario.find({ habilitado: true, ...req.query });
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function createUsuario(req, res) {
  try {
    const { nombre, correo, contraseña, direccion, telefono, rol } = req.body;
    const usuario = new Usuario({
      nombre,
      correo,
      contraseña,
      direccion,
      telefono,
      rol,
    });
    const resultado = await usuario.save();
    res.status(201).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function updateUsuario(req, res) {
  try {
    const { id } = req.params;
    const { nombre, correo, contraseña, direccion, telefono, rol, habilitado } = req.body;
    const actualizacion = {
      nombre,
      correo,
      contraseña,
      direccion,
      telefono,
      rol,
      habilitado, // Actualizar el estado de habilitación/deshabilitación del usuario
    };
    const usuario = await Usuario.findByIdAndUpdate(
      id,
      {
        $set: actualizacion,
      },
      { new: true }
    );
    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function deleteUsuario(req, res) {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate(
      id,
      {
        $set: {
          habilitado: false, // Deshabilitar el usuario en lugar de eliminarlo
        },
      },
      { new: true }
    );
    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json(err);
  }
}
