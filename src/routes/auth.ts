import { Request, Response, Router } from "express";

const auth = Router()
auth.post('/api/v1/register', (Request:Request, Response:Response)=>{
    console.log('opa')
    Response.sendStatus(200)
})
auth.post('/api/v1/login', (Request:Request, Response:Response)=>{
    console.log('opa')
    Response.sendStatus(200)
})


export default auth