const Empleado = require('../model/Empleado');

//Mostrar
module.exports.mostrar = (req, res) => {
    Empleado.find({}, (error, empleados)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error al mostrar los datos'
            })
        }
        //mostrar en el index.ejs como html
        return res.render('index', {empleados: empleados})
    })
}

//crear
module.exports.crear = (req, res) => {
    //console.log(req.body)
    const empleado = new Empleado({
        nombre: req.body.nombre,
        edad: req.body.edad,
        sueldo: req.body.sueldo,
        puesto: req.body.puesto
    })
    empleado.save(function(error, _empleado){
        if(error) {
            return res.status(500).json({
                message: 'Error al crear al registro'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req, res) => {
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const edad = req.body.edad_editar
    const sueldo = req.body.sueldo_editar
    const puesto = req.body.puesto_editar

    Empleado.findByIdAndUpdate(id, {nombre, edad, sueldo, puesto}, (error, empleado) =>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el registro'
            })
        }
        res.redirect('/')   
    })
}

//Eliminar registro

module.exports.eliminar = (req, res) => {
    const id = req.params.id
    Empleado.findByIdAndRemove(id, (error, empleado) =>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Registro'
            })
        }
        res.redirect('/')
    })
}