"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const AppError_1 = require("./utils/AppError");
const zod_1 = require("zod");
const PORT = 3333;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.router);
//  Middleware global
// app.use(myMiddleware1)
app.use((error, req, res, next) => {
    if (error instanceof AppError_1.AppError) {
        res.status(error.statusCode).json({ message: error.message });
    }
    if (error instanceof zod_1.ZodError) {
        res.status(400).json({ message: "Validation Error!", issues: error.format() });
    }
    res.status(500).json({ message: error.message });
});
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
