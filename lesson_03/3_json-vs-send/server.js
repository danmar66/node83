const express = require('express')
const books = require('./books')

const app = express()

app.set('json spaces', 8)

app.get('/', (request, response) => {
    response.send("<h1>Home Page</h1>")
})

app.get('/contacts', (req, res) => {
    // console.log(req.method)
    // console.log(req.url)
    // console.log(req)
    res.send("<h2>Contacts page</h2>")
})

app.get('/books', (req, res) => {
    // return res.send(books)
    // return res.send(null)
    return res.json(null)
})

app.listen(3000, () => {
    console.log("server running")
})