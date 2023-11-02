const http = require('http')
const { Server } = require('socket.io')

const httpServer = http.createServer()
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
})

const PORT = 5000

io.on('connection', (socket) => {
    console.log(`New client connected. Client id = ${socket.id}`)

    socket.on('disconnect', (reason) => {
        console.log(`dissconnected ${socket.id} due to ${reason}`)
    })


    // socket.emit('chatMessage', 'Welcome to chat!')
    // socket.broadcast.emit('chatMessage', 'New client connected')
})

httpServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
