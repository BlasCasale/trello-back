"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const LogFunc = (sequelize) => {
    sequelize.define('Log', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true
        },
        creator: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4
        },
        contributor: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.UUID),
            defaultValue: [],
            allowNull: false
        },
        content: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON()),
            defaultValue: [],
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
    });
};
exports.default = LogFunc;
