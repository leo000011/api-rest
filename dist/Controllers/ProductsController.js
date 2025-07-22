"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProductsController {
    async index(req, res) {
        // const {page, limit} = req.query
        // res.status(200).json({page, limit})
        // res.send(`Página ${page} de ${limit} ID: ${id}`)
        const get1 = await prisma.lead.findMany();
        res.status(200).json({ get1 });
    }
    async create(req, res) {
        // const bodySchema = z.object({
        //     name: z.string({required_error:"Name is required!"}).trim().min(6, {message: "Name Must be 6 or more characters" }),
        //     price: z.number().positive({message: "Price Must be positive"}).nullish(),
        // })
        // const {name, price} = bodySchema.parse(req.body)
        // if(!name || !price) {
        //     throw new AppError("Nome e preço do produto são obrigatório!")
        // }
        // throw new AppError("Erro no Servidor e em tudo pata")
        // throw new Error("Erro no Servidor e em tudo pata")
        // res.send()
        const { name } = req.body;
        res.status(201).json({ name });
    }
    async put(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        res.json({ sucess: "atualizado com sucesso!" });
    }
    async delete(req, res) {
        const { id } = req.params;
        res.json();
    }
}
exports.ProductsController = ProductsController;
