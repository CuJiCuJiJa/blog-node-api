require('dotenv').config()
require('./mongo')
const { request, response } = require('express')
const express = require('express')
const app =  express()
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const handleErrors = require('./middlewares/handleErrors')
const usersRouter = require('./controllers/userController')
const entriesRouter = require('./controllers/entryController')

app.use(cors())
app.use(express.json())

//----CONTROLLERS-ROUTES----//
app.use('/api/entries', entriesRouter)
app.use('/api/users', usersRouter)
//----MIDDLEWARES----//
app.use(notFound)
app.use(handleErrors)
//-------------------//

const PORT = process.env.PORT
const server = app.listen(PORT, () =>{
    console.log('server running on port', PORT) 
})

module.exports = {app, server}