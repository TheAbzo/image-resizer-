"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//create the server
app.listen(port, () => {
    console.log(`server has started at localhost:${port}`);
});
exports.default = app;
// routes as the middleware
// app.use('/myapiwithout query', routes);
