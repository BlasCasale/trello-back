"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_routes_1 = __importDefault(require("./userRouter.routes"));
const logRouter_routes_1 = __importDefault(require("./logRouter.routes"));
const sessionRouter_routes_1 = __importDefault(require("./sessionRouter.routes"));
const router = (0, express_1.Router)();
router.use('/user', userRouter_routes_1.default);
router.use('/session', sessionRouter_routes_1.default);
router.use('/log', logRouter_routes_1.default);
exports.default = router;
