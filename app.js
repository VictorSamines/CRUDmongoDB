const express = require('express');
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const empleados = require('./routes/empleados')

app.use(empleados)

app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log('Server UP!')
})