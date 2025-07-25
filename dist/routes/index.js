"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const productsRoutes_1 = require("./productsRoutes");
const router = (0, express_1.Router)();
exports.router = router;
router.use("/products", productsRoutes_1.productsRoute);
