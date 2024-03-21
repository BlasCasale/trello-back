import { DataTypes } from 'sequelize'
import { type SequelizeInstance } from '../types'

const UserFunc = (sequelize: SequelizeInstance): void => {
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      get () {
        const name: string = this.getDataValue('name')
        const lastName: string = this.getDataValue('lastName')
        return `${name} ${lastName}`
      }
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  })
}

export default UserFunc
