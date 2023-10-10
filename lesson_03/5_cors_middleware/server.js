const express = require('express')
const cors = require('cors')
const moment = require('moment')
const fs = require('fs/promises')
const books = require('./books')

const app = express()

app.use(cors())

app.set('json spaces', 8)

app.use(async(req, res, next) => {
    const { method, url } = req
    const date = moment().format("DD-MM-YYYY_hh:mm:ss")
    await fs.appendFile("server.log", `\n${method} ${url} ${date}`)
    next()
})

app.get('/', (request, response) => {
    response.send("<h1>Home Page</h1>")
})

app.get('/contacts', (req, res) => {
    res.send("<h2>Contacts page</h2>")
})

app.get('/books', (req, res) => {
    return res.json(books)
})

app.use((req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})

app.listen(3000, () => {
    console.log("server running")
})