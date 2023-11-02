const http = require('http')
const app = require('express')()
const { Server } = require('socket.io')
const path = require('path')

// const app = require('express')()

// const express = require('express')
// const app = express()

const httpServer = http.createServer(app)
const io = new Server(httpServer)

const PORT = 5000

io.on('connection', (socket) => {
    socket.on('chatMessage', (message) => {
        socket.broadcast.emit('chatMessage', message)
    })
})

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '/index.html'))
})

httpServer.listen(PORT, (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }

    console.log(`Listening on port ${PORT}`)
})