const mongoose = require('mongoose')

const AutorSchema = new mongoose.Schema({
    nombre: {type: String, require: [true, 'nombre obligatorio'],minlength: 3},
    citas: [{
        cita: {type:String, required:[true,'campo requerido']},
        votos:{type:Number,validate:{validator: Number.isInteger,message: "no es un numero"}}
    }]
},{timestamps: true })


const AutoresModel = mongoose.model('autormodel',AutorSchema)

module.exports = AutoresModel
