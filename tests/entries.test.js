const { restart } = require('nodemon')
const supertest = require('supertest')
const app = require('../index')

const api = supertest(app)

test('entries are returned as Json', async () => {
    await api
        .get('/api/entries/')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})