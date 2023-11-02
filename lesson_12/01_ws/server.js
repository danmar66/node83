const { WebSocketServer } = require('ws')

const PORT = 5000

const server = new WebSocketServer({
    port: PORT
})

const clients = []

server.on('connection', function connection(ws) {
    ws.on('error', console.error);
  
    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });
  
    setInterval(() => {
        ws.send('Bang bang! It\'s backend server');
        // socket.send('Bang bang! It\'s backend server')
    }, 1000)
    ws.send('something');
  });

// server.on('connection', (socket) => {
//     console.log('New client connected')
//     clients.push(socket)

//     for (const client of clients) {
//         if (client === socket) {
//             client.send('Welcome to chat')
//         } else {
//             client.send('New user connected')
//         }
//     }

//     socket.on('message', (message) => {
//         console.log('-> ', message.toString())
//     })

//     setInterval(() => {
//         socket.send('Bang bang! It\'s backend server')
//     }, 1000)
// })

console.log(`Listening on port ${PORT}`)