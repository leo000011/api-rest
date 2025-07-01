import express, {Request, Response} from 'express'
import { router } from './routes';
import { AppError } from './utils/AppError';
import {ZodError} from "zod"


const PORT = 3333
const app = express();

app.use(express.json())

app.use(router)
//  Middleware global
// app.use(myMiddleware1)


app.use((error:any, req:Request, res: Response, next: any) => {
    if(error instanceof AppError) {
        res.status(error.statusCode).json({message: error.message})
    }

    if(error instanceof ZodError) {
        res.status(400).json({message: "Validation Error!", issues: error.format()})
    }

    res.status(500).json({message: error.message})
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
