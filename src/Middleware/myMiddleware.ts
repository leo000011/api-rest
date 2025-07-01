import {Request, Response, NextFunction} from 'express'

export function myMiddleware1(req:Request, res:Response, next:NextFunction ) {
    req.user_id = "1235456"


    console.log(`Passou no teste ${req.user_id}`) 

    return next()
}