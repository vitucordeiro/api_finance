import express from 'express'
import { userSchema } from './Utils/Schemas'
export const registerHandler = (Request:express.Request, Response:express.Response, Next:express.NextFunction)=>{
    try{
        const {first_name, last_name, complete_name, password, email} = userSchema.parse(Request.body)
        
        //This Regex, if you don't know Regex, removes spaces inside any incoming string
        
        const filterData = {
            first_name: first_name.replace(/\s+/g, ''),
            last_name: last_name.replace(/\s+/g, ''),
            complete_name: complete_name.replace(/\s+g/g, ''),
            password: password.replace(/\s+/g, ''),
            email: email.replace(/\s+/g, '')
        }
        Next(filterData)
    }catch(error){
        return Response.json(error)
    }
   
}
