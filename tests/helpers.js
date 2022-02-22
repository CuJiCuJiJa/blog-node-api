const supertest = require('supertest')
const {app, server} = require('../index')
const api = supertest(app)
const initialEntries = [
    {
        "author": "TestValue",
        "name": "TestValue",
        "year": 2022,
        "type": "TestValue",
        "cover": "TestValue"
    },
    {
        "author": "TestValue",
        "name": "TestValue",
        "year": 2022,
        "type": "TestValue",
        "cover": "TestValue"
    }
]

module.exports = {initialEntries, server, api}