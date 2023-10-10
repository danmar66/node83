const express = require('express')
const morgan = require('morgan')

const app = express()

const formatLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(morgan(formatLogger))

// const expressEnv = app.get('env')
// console.log(expressEnv)

// console.log(process.env.NODE_ENV)

app.use((req, res) => {
  res.status(404).json({ mesaage: 'Not found' })
})

app.listen(3000, () => console.log('Server Started!'))
