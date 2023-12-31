
/**
 * Imports
 */

/** Native **/
import express, {Express} from 'express'
import cors from 'cors'

/** Routes **/
import user from './api/user/Routes'
import bodyParser from 'body-parser'
/** Interfaces  **/
import { IRoutesConfig } from './typings/custom'
/** Settings **/

const routes = { 
    routes : user
}


class main {
    private PORT:string
    private Express:Express = express()
     

    constructor(PORT:string  ){
        this.PORT = PORT || ""
        }
    
        /**
         * config
         */
        public config() {
            this.Express.use(bodyParser.urlencoded({extended:false}))
            this.Express.use(bodyParser.json())
            this.Express.use(cors({
                origin:"*",
                allowedHeaders:["GET", "POST", "DELETE", "PUT"]
            }))
            
        }
    /**
     * bootstrap
     */
    public bootstrap({routes}:IRoutesConfig) {
        /** Decouple the routes so that it doesn't snowball if one of them goes down **/
        this.config()
  
        this.Express.use(routes)
        
        
        this.Express.listen(this.PORT, ()=>{
            console.log("Worked")
            console.log("Server listening on " + this.PORT)

        })
    }
}


const PORT: string = process.env.PORT || "3333"
const initial = new main(PORT)
initial.bootstrap(routes)