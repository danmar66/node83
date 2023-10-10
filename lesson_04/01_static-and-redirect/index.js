const express = require('express')
const path = require('path')

const app = express()

// app.use('/static', express.static(path.join(__dirname, '/public')))
app.use('/goods/images/big', express.static(__dirname + '/public'))

app.get('/home', (req, res) => {
    res.send('<h1>Home page</h1>')
})

app.get('/old-home', (req, res) => {
    res.redirect(301, '/home')
})

app.listen(3000, () => console.log('Server Started!'))
