import { Router } from "express";
import { route } from "./productsRoutes";

const router = Router()

router.use("/products", route )


export {router}