import {Response, Request} from 'express'
export const authorizationHandler = async(Response:Response, Request:Request) =>{
    const authorization: any = Request.headers.authorization?.split(' ')[1] // ["barear" ,"token"][1] = ["token"]
    
}

