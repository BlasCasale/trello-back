import express from 'express'
import morgan from 'morgan'
import router from './router/index.routes'
const server = express()

server.use(morgan('dev'))
server.use(express.json({ limit: '10mb' }))
server.use((req, res, next) => {
  console.log('peticion')
  console.log('req.body = ', req.body)
  // console.log('req.query = ', req.query)
  // console.log('req.params = ', req.params)
  next()
})
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})
server.use(router)
server.use('*', (req, res) => {
  res.status(404).json({ error: 'Por favor ingrese un endpoint válido.' })
})

export default server
