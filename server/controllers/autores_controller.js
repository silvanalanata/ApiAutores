const AutoresModel = require("../models/autores_model");

const getAll = async (request, response) => {
  const datos = await AutoresModel.find().sort({nombre: 'asc'});
  response.json(datos);
};

const postNuevo = async (request, response) => {
  const { nombre } = request.body;
  const user = new AutoresModel();
  user.nombre = nombre;

  user
    .save()
    .then((data) => response.json(data))
    .catch((err) => response.json(err));
};

const getId = async (request, response) => {
  let id = request.params.id;

  AutoresModel.findOne({ _id: id })
    .then((data) => response.json(data))
    .catch((err) => response.json(err));
};

const putUpdateId = async (request, response) => {
  let id = request.body.id;
  let nombre = request.body.nombre;

  AutoresModel.updateOne({ id: id }, { nombre: nombre })
    .then((data) => response.json(data))
    .catch((err) => response.json(err));
};

const deleteId = async (request, response) => {
  let id = request.params.id;

  AutoresModel.deleteOne({ _id: id })
    .then((data) => response.json(data))
    .catch((err) => response.json(err));
};

module.exports = {
  getAll,
  postNuevo,
  getId,
  putUpdateId,
  deleteId,
};
