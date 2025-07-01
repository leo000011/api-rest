import {Router} from 'express'
import {myMiddleware1} from "../Middleware/myMiddleware"

import { ProductsController } from '../Controllers/ProductsController'

const productsController = new ProductsController()

const route = Router()

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

route.get("/", productsController.index)

route.post("/", myMiddleware1, productsController.create )


export {route}
