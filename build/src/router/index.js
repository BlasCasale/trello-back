"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const logRouter_1 = __importDefault(require("./logRouter"));
const sessionRouter_1 = __importDefault(require("./sessionRouter"));
const router = (0, express_1.Router)();
router.use('/user', userRouter_1.default);
router.use('/session', sessionRouter_1.default);
router.use('/log', logRouter_1.default);
exports.default = router;
