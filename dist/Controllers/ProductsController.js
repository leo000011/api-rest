"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const knex_1 = require("../database/knex");
class ProductsController {
    async index(req, res) {
        // const {page, limit} = req.query
        // res.status(200).json({page, limit})
        // res.send(`Página ${page} de ${limit} ID: ${id}`)
        const courses = await (0, knex_1.knex)("courses").select();
        res.status(200).json(courses);
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
        await (0, knex_1.knex)("courses").insert({ name });
        res.status(201).json({ name });
    }
    async put(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        await (0, knex_1.knex)("courses").update({ name }).where({ id });
        res.json({ sucess: "atualizado com sucesso!" });
    }
}
exports.ProductsController = ProductsController;
