import { Router } from "express";
import { productsRoute } from "./productsRoutes";

const router = Router()

router.use("/products", productsRoute )


export {router}