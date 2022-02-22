const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const { request, response } = require('express')
const User = require('../models/User')


usersRouter.post('/', async (request, response, next) => {
    const {userName, passHash} = request.body
    const Hash = await bcrypt.hash(passHash, 10)
    const newUser = new User({
        userName, 
        Hash
    })
    const savedUser = await newUser.save().catch(next)
    response.json(savedUser)
})

module.exports = usersRouter