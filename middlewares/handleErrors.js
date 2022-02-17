//Este otro Middleware se encarga de cazar los posibles errores que no sean 404//
module.exports = (error, request, response) => {
	console.error(error)
	error.name === 'CastError' ?  
		response.status(400).send({error: 'request is malformed'}) :
		response.status(500).end()
} 