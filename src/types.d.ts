import { Sequelize } from 'sequelize'

export type SequelizeInstance = Sequelize

// types para el usuario

export type Id = `${string}-${string}-${string}-${string}-${string}`

type MailType = 'gmail' | 'hotmail' | 'yahoo' | 'outlook'

type MailComplete = 'com' | `com.${string}`

type Mail = `${string}@${MailType}.${MailComplete}`

export interface User {
  id: Id
  name: string
  lastName: string
  mail: Mail
  password: string
}

export type UserEntrance = Omit<User, 'id'>

// types para los content del log

interface UserComment {
  id: Id
  comment: string
}

export interface UserCommentEntrance extends UserComment {
  logId: Id
}

export interface ContentLog {
  id: Id
  title: string
  work: string
  comments: UserComment[]
  state: boolean
}

export type ContentLogEntrance = Omit<ContentLog, 'id'>

// types para logs

type DateLimit = `${string}-${string}-${string}`

export interface Log {
  id: Id
  creator: Id
  contributor: Id[]
  content: ContentLog
  dayLimit: DateLimit
}
