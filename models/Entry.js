const mongoose = require('mongoose')
const {Schema, model} = mongoose

//----SCHEMA DE ELEMENTO----//    
const entrySchema = new Schema({
    author: String,
    name: String,
    year: Number,
    type: String,
    cover: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

//----EL OBJETO DEVUELTO POR MONGO POSEE POR DEFAULT LOS CAMPOS _ID Y __V QUE NO SON NECESARIOS. PARA ESO SOBRESCRIBO LA FUNCION toJSON USADA EN LA RUTA Y CREO UN CAMPO ID CON EL VALOR DE _ID EL CUAL DESPUÉS BORRO JUNTO A __V----//
entrySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

//----ASIGNO EL SCHEMA AL MODELO ENTRY----//
const Entry = new model('Entry', entrySchema)

module.exports = Entry
