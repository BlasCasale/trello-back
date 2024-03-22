"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const router_1 = __importDefault(require("./router"));
const server = (0, express_1.default)();
server.use((0, morgan_1.default)('dev'));
server.use(express_1.default.json({ limit: '10mb' }));
server.use((req, res, next) => {
    console.log('peticion');
    console.log('req.body = ', req.body);
    // console.log('req.query = ', req.query)
    // console.log('req.params = ', req.params)
    next();
});
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.use(router_1.default);
server.use('*', (req, res) => {
    res.status(404).json({ error: 'Por favor ingrese un endpoint válido.' });
});
exports.default = server;
