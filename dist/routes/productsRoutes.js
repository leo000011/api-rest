"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoute = void 0;
const express_1 = require("express");
const myMiddleware_1 = require("../Middleware/myMiddleware");
const ProductsController_1 = require("../Controllers/ProductsController");
const productsController = new ProductsController_1.ProductsController();
const productsRoute = (0, express_1.Router)();
exports.productsRoute = productsRoute;
// const nome = "RUPTURA"
// route.get("/", (req, res) => {
//     res.send("Hello World")
// })
// route.get("/ruptura", (req, res) => {
//     res.send(`Hello ${nome}`)
// })
// route.get("/:id/:user1", (req, res) => {
//     const {id, user1} = req.params
//     res.send(`Products ${id} e o nome ${user1}`)
// })
productsRoute.get("/", productsController.index);
productsRoute.post("/", myMiddleware_1.myMiddleware1, productsController.create);
productsRoute.put("/:id", productsController.put);
