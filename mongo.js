
const mongoose = require('mongoose')

const { NODE_ENV, MONGODB_URI, MONGODB_URI_TEST } = process.env 
const connectionString = NODE_ENV === 'development' ? MONGODB_URI_TEST : MONGODB_URI

console.log('using DB', NODE_ENV, connectionString)

//----CONEXION A LA BASE DE DATOS----//
mongoose.connect(connectionString).then(() => {
	console.log('DB connected')
}).catch(err => {
	console.error()
}) 