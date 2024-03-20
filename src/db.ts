import { Sequelize } from 'sequelize'

const { DB_NAME, DB_PASS, DB_PORT, DB_USER } = process.env

const db = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`,
  { logging: false }
)
