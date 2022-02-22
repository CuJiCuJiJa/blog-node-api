const mongoose = require('mongoose')
const Entry = require('../models/Entry')
const { initialEntries, api, server } = require('./helpers')


beforeEach(async () => {
    await Entry.deleteMany()

    const entry1 = new Entry(initialEntries[0])
    await entry1.save()

    const entry2 = new Entry(initialEntries[1])
    await entry2.save()
})

test('entries are returned as Json', async () => {
    await api
        .get('/api/entries/all')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}) 

test('initialEntries exist', async () => {
    const response = await api.get('/api/entries/all')    
    expect(response.body).toHaveLength(initialEntries.length)
})

test('there is a new entry', async () => {
    const newEntry = { //debe ser un objeto javascript no un moongose schema (new Entry)
        "author": "newTestValue",
        "name": "newTestValue",
        "year": 2022,
        "type": "newTestValue",
        "cover": "newTestValue"
    }
    await api
        .post('/api/entries/')
        .send(newEntry)
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
    const response = await api.get('/api/entries/all')

    expect(response.body).toHaveLength(initialEntries.length + 1)
})

afterAll(()=>{
    mongoose.connection.close()
    server.close()
})