"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const UserFunc = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING(40),
            allowNull: false
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING(40),
            allowNull: false
        },
        fullName: {
            type: sequelize_1.DataTypes.VIRTUAL,
            allowNull: false,
            get() {
                const name = this.getDataValue('name');
                const lastName = this.getDataValue('lastName');
                return `${name} ${lastName}`;
            }
        },
        mail: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: sequelize_1.DataTypes.STRING(20),
            allowNull: false
        }
    });
};
exports.default = UserFunc;
