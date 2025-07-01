import {Request, Response} from 'express'
import { AppError } from '../utils/AppError'
import {z} from "zod"

class ProductsController {

    index(req: Request, res: Response) {
    const {page, limit} = req.query
    
    res.status(200).json({page, limit})
    // res.send(`Página ${page} de ${limit} ID: ${id}`)

    }
    
    create(req: Request, res: Response) {

    const bodySchema = z.object({
        name: z.string({required_error:"Name is required!"}).trim().min(6, {message: "Name Must be 6 or more characters" }),
        price: z.number().positive({message: "Price Must be positive"}).nullish(),
    })

    const {name, price} = bodySchema.parse(req.body)

    // if(!name || !price) {
    //     throw new AppError("Nome e preço do produto são obrigatório!")
    // }


        // throw new AppError("Erro no Servidor e em tudo pata")
        // throw new Error("Erro no Servidor e em tudo pata")

    // res.send()
    res.status(201).json({name, price, user_id: req.user_id})
    }
}


export {ProductsController}