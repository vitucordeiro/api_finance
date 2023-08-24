
/**
 * Imports
 */

/** Native **/
import express, {Express, Router, json} from 'express'
import cors from 'cors'
import { CorsOptions } from 'cors'

/** Routes **/
import user from './api/user/Routes'
import bodyParser from 'body-parser'
/** Interfaces  **/
import { IRoutesConfig } from './typings/custom'
/** Settings **/
const CorsOptions = {
    origin:`http://localhost:${process.env.PORT}` || "http://localhost:3333" 
}
const routes:IRoutesConfig = { 
    routes : {user}
}


class main {
    private PORT:string
    private Express:Express = express()
    private Routes:Router 

    constructor(PORT:string, Route?:Router ){
        this.PORT = PORT
        this.Routes = Route || this.Express
        }
  
    /**
     * bootstrap
     */
    public bootstrap({routes}:IRoutesConfig) {
        /** Decouple the routes so that it doesn't snowball if one of them goes down **/
      
        this.Express.use(bodyParser.urlencoded({extended:false}))
        this.Express.use(bodyParser.json())
        this.Express.use(cors(CorsOptions))
        
        this.Express.use(routes.user)
        
        this.Express.listen(this.PORT, ()=>{
            console.log("Worked")
            console.log("Server listening on " + this.PORT)

        })
    }
}


const PORT: any = process.env.PORT || "3333"
const initial = new main(PORT )
initial.bootstrap(routes)