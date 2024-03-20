import server from './src/server'

import dotenv from 'dotenv'
dotenv.config()
const port: string | undefined = process.env.PORT ?? '3000'

server.listen(port, () => {
  try {
    console.log(`Listening on port ${port}`)
  } catch (error) {
    console.error(error)
  }
})
