const mongoose = require('mongoose');
const Schema = mongoose.Schema

const empleadoSchema = new Schema({
    nombre: String,
    edad: Number,
    sueldo: Number,
    puesto: String
}, {versionKey:false})

module.exports =  mongoose.model('empleados', empleadoSchema)
