const AutoresModel = require("../models/autores_model");

const getAll = async (request, response) => {
  const datos = await AutoresModel.find().sort({ nombre: "asc" });
  response.json(datos);
};

const postNuevo = async (request, response) => {
  const { nombre, citas } = request.body;
  const user = new AutoresModel();
  user.nombre = nombre;
  user.citas = citas;

  user
    .save()
    .then((data) => response.json(data))
    .catch((err) => {
      response.status(404).json({ error: err.message });
    });
};

const getId = async (request, response) => {
  let id = request.params.id;

  AutoresModel.findOne({ _id: id })
    .then((data) => response.json(data))
    .catch((err) => {
      response.status(404).json({ error: err.message });
    });
};

const putUpdateId = async (request, response) => {
  let id = request.body.id;
  let nombre = request.body.nombre;

  AutoresModel.updateOne({ id: id }, { nombre: nombre })
    .then((data) => response.json(data))
    .catch((err) => {
      response.status(404).json({ error: err.message });
    });
};

const deleteId = async (request, response) => {
  let id = request.params.id;

  AutoresModel.deleteOne({ _id: id })
    .then((data) => response.json(data))
    .catch((err) => {
      response.status(404).json({ error: err.message });
    });
};

const getCitasAll = async (request, response) => {
  let id = request.params.id;

  AutoresModel.findOne({ _id: id })
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      response.status(404).json({ error: err.message });
    });
};

const citasDelete = async (request, response) => {
  let id_autor = request.params.id;
  let id_cita = request.body.id;

  AutoresModel.findOneAndUpdate(
    { _id: id_autor },
    {
      $pull: {
        citas: { _id: id_cita },
      },
    }
  )
    .then((data) => response.json(data))
    .catch((err) => {
      response.status(404).json({ error: err.message });
    });
};

const nuevasCItas = async (request, response) => {
  let id_autor = request.params.id;
  let nuevacita = request.body.citas;

  AutoresModel.updateOne(
    { _id: id_autor },
    {
      $push: {
        citas: { cita: nuevacita, votos: 0 },
      },
    }
  )
    .then((data) => response.json(data))
    .catch((err) => {
      response.status(404).json({ error: err.message });
    });
};

const voteadd = async (request, response) => {
  let id_autor = request.params.id;
  let id_cita = request.body.id;
  let voto = request.body.votos;

  AutoresModel.updateOne(
    {
      _id: id_autor,
      citas: { $elemMatch: { _id: id_cita } },
    },
    { $set: { "citas.$.votos": voto } }
  )
    .then((data) => response.json(data))
    response.status(404).json({ error: err.message });
};

module.exports = {
  getAll,
  postNuevo,
  getId,
  putUpdateId,
  deleteId,
  getCitasAll,
  citasDelete,
  nuevasCItas,
  voteadd,
};
