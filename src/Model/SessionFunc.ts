import { DataTypes } from 'sequelize'
import { type SequelizeInstance } from '../types'

const SessionFunc = (sequelize: SequelizeInstance): void => {
  sequelize.define('Session', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    creator: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }
  })
}

export default SessionFunc
