const express = require('express')

const app = express()

app.use((req, res) => {
  res.status(404).json({ mesaage: 'Not found' })
})

app.listen(3000, () => console.log('Server Started!'))
