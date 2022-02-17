//Si la URL no le pega a ninguna ruta cae en este Middleware que tira un 404//
module.exports = (request, response) => {
	response.status(404).end()
}