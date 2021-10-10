require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const File = require('./models/model')
const fileRouter = require('./routes/routes')
const connection = require('./models/connect')

const app = express()

app.use(fileRouter)


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})