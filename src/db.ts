/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Sequelize } from 'sequelize'
import { type EnvVariable } from './types'
import UserFunc from './Model/UserFunc'
import LogFunc from './Model/LogFunc'
import SessionFunc from './Model/SessionFunc'

const DB_NAME: EnvVariable = process.env.DB_NAME
const DB_PASS: EnvVariable = process.env.DB_PASS
const DB_PORT: EnvVariable = process.env.DB_PORT
const DB_USER: EnvVariable = process.env.DB_USER

const db = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`,
  { logging: false }
)

const connectToDataBase = async (): Promise<void> => {
  try {
    await db.authenticate()
  } catch (error) {
    console.error('Error al conectar la base de datos', error)
  }
}

void connectToDataBase()

UserFunc(db)
LogFunc(db)
SessionFunc(db)

const { User, Log, Session } = db.models

User.hasMany(Session)
Session.belongsTo(User)

Session.hasMany(Log)
Log.belongsTo(Session)

export default db
