import express from 'express'
import  userDTO  from './Utils/Dtos'
import { userSchema } from './Utils/Schemas'
export const registerHandler = (Request:express.Request, Response:express.Response, Next:express.NextFunction)=>{
    try{
        const {fullName, password, email}:userDTO = userSchema.parse(Request.body)
        
        //This Regex, if you don't know Regex, removes spaces inside any incoming string
        
        const filterData = {
            fullName: fullName.replace(/\s+/g, ''),
            password: password.replace(/\s+/g, ''),
            email: email.replace(/\s+/g, '')
        }
        Next()
        return Response.json({data:{filterData}})
    }catch(error){
        Throw New Error("Don't any data")
        return Response.json(error)
    }
   
}
