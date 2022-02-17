require('./mongo')

const { request, response } = require('express')
const express = require('express')
const app =  express()

const Entry = require('./models/Entry')
const notFound = require('./middlewares/notFound')
const handleErrors = require('./middlewares/handleErrors')

app.use(express.json())

//----------------RUTAS------------------------//
app.get('/', (request, response) => {
    response.send('<h1>  Los console.log() del back se muestran en la consola de la pc bolú </h1>')
})
app.get('/api/entries', (request, response) => {
    Entry.find({}).then(entry => {
        entry ? response.json(entry) : response.status(404).end()
    })
})
app.get('/api/entry/:id', (request, response, next) => {
    const {id} = request.params

    Entry.findById(id).then(entry => {
        entry ? response.json(entry) : response.status(404).end()
    }).catch(next)
})
app.delete('/api/entry/:id', (request, response, next) => {
    id = request.params.id
    Entry.findByIdAndRemove(id).then(result => {
        result ? response.status(204) //??? borra pero no devuelve el status
        : response.status(404).end() 
    }).catch(next)
})
app.put('/api/entry/:id', (request, response, next) => {
    const id = request.params.id
    const { author, name, year, type, cover } = request.body

    const newDataEntry = { 
        author: author,
        name: name,
        year: year,
        type: type,
        cover: cover
    }
    Entry.findByIdAndUpdate(id, newDataEntry, {new: 'true'}).then(result => {
        result ? response.json(result) :
        response.status(404).end()
    }).catch(next)
})
app.post('/api/entry', (request, response) => {    
    params = request.body
    const newEntry = new Entry({
        "author": params.author,
        "name": params.name,
        "year": params.year,
        "type": params.type,
        "cover": params.cover
    })
    newEntry.save().then(entry => {
        response.json(entry)
    })
})

//----MIDDLEWARES----//
app.use(notFound)
app.use(handleErrors)
//-------------------//

const PORT = 3001
app.listen(PORT, () =>{
    console.log('server running on port', PORT) 
})