const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send("<h1>Home Page</h1>")
})

app.get('/contacts', (req, res) => {
    // console.log(req.method)
    // console.log(req.url)
    // console.log(req)
    res.send("<h2>Contacts page</h2>")
})

app.listen(3000, () => {
    console.log("server running")
})