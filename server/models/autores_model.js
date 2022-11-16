const mongoose = require('mongoose')

const AutorSchema = new mongoose.Schema({
    nombre: {type: String, require: [true, 'nombre obligatorio'],minlength: 3},
},{timestamps: true })


const AutoresModel = mongoose.model('autormodel',AutorSchema)

module.exports = AutoresModel