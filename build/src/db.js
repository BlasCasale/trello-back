"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/restrict-template-expressions */
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
const UserFunc_1 = __importDefault(require("./Model/UserFunc"));
const LogFunc_1 = __importDefault(require("./Model/LogFunc"));
const SessionFunc_1 = __importDefault(require("./Model/SessionFunc"));
dotenv_1.default.config();
const DB_NAME = process.env.DB_NAME;
const DB_PASS = process.env.DB_PASS;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const db = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`, { logging: false });
const connectToDataBase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db.authenticate();
    }
    catch (error) {
        console.error('Error al conectar la base de datos \n', error);
    }
});
void connectToDataBase();
(0, UserFunc_1.default)(db);
(0, LogFunc_1.default)(db);
(0, SessionFunc_1.default)(db);
const { User, Log, Session } = db.models;
User.hasMany(Session);
Session.belongsTo(User);
Session.hasMany(Log);
Log.belongsTo(Session);
exports.default = db;
