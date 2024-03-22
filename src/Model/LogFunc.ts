import { DataTypes } from 'sequelize'
import { SequelizeInstance } from '../types'

const LogFunc = (sequelize: SequelizeInstance): void => {
  sequelize.define('Log', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    creator: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    contributor: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      defaultValue: [],
      allowNull: false
    },
    content: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
      defaultValue: [],
      allowNull: false
    },
    dayLimit: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['creator', 'id']
      },
      {
        fields: ['contributor']
      }
    ]
  })
}

export default LogFunc
