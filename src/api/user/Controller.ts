import express from 'express'

import { schemaUser } from '../../typings/custom'

export const registerHandler = (Request:express.Request, Response:express.Response)=>{
    try{
        const {fullName, password, email} = schemaUser.parse(Request.body)
        const filterData = {
            fullName: fullName.replace(/\s+/g, ''),
            password: password.replace(/\s+/g, ''),
            email: email.replace(/\s+/g, '')
        }
        
        return Response.json({data:{filterData}})
    }catch(error){
        return Response.json(error)
    }
   
}
