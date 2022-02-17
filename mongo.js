
const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://admin:admin@cluster0.vamwf.mongodb.net/personalDB?retryWrites=true&w=majority'

//----CONEXION A LA BASE DE DATOS----//
mongoose.connect(connectionString).then(() => {
	console.log('DB connected')
}).catch(err => {
	console.log(err)
})

/* 
//----CREO ELEMENTO DE EJEMPLO----//
const example = new Entry({
    author: 'Fabrizio',
    name: 'Ejemplo',
    year: 2022,
    type: 'ejemplo',
    cover: 'ejemplo'
})

//----GUARDO EL ELEMENTO Y EVALUO POR ERRORES, CIERRO CONECCION----//
example.save()
    .then(result => {
        console.log('Elemento guardado en la base de datos', result)
        mongoose.connection.close()
    })
    .catch(err =>{
        console.log('error:', err)
    })
*/