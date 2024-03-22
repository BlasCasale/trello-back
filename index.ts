import server from './src/server'
import db from './src/db'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT ?? 8001

server.listen(PORT, async () => {
  try {
    await db.sync({ alter: true })
    console.log(`Listening on port ${PORT}`)
  } catch (error) {
    console.error(error)
  }
})
