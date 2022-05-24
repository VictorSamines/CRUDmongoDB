const mongoose = require('mongoose');
const url = 'mongodb://localhost/db_empleados'

mongoose.connect(url)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conecctar MongoDB'))

db.once('open', function callback() {
    console.log("Conectado a MongoDB!")
})

module.exports = db
