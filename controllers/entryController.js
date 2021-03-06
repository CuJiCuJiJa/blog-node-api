
const {request, response} = require('express')
const entriesRouter = require('express').Router()
const Entry = require('../models/Entry')

entriesRouter.get('/all', (request, response) => {
    Entry.find({}).then(entries => {
        entries ? response.json(entries) : response.status(404).end()
    })
})
entriesRouter.get('/:id', (request, response, next) => {
    const {id} = request.params

    Entry.findById(id).then(entry => {
        entry ? response.json(entry) : response.status(404).end()
    }).catch(next)
})
entriesRouter.delete('/:id', (request, response, next) => {
    id = request.params.id
    Entry.findByIdAndRemove(id).then(result => {
        result ? response.status(204) //??? borra pero no devuelve el status
        : response.status(404).end() 
    }).catch(next)
})
entriesRouter.put('/:id', (request, response, next) => {
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
entriesRouter.post('/', async (request, response) => {    
    const {author, name, year, type, cover} = request.body
    const newEntry = new Entry({
        "author": author,
        "name": name,
        "year": year,
        "type": type,
        "cover": cover
    })
    const savedEntry = await newEntry.save()
    response.json(savedEntry)
})


module.exports = entriesRouter