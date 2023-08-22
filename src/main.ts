
/**
 * Imports
 */

/** Native **/
import express, {Express, Router} from 'express'

/** No-native **/
import auth from './routes/auth'

/** Interfaces  **/
import IConfig from './interface/main/IConfig'

class main {
    private PORT:string
    private Express:Express = express()
    private Routes:Router 

    constructor(PORT:string, Route?:Router ){
        this.PORT = PORT
        this.Routes = Route || this.Express
        }
    /**
     * config
     */
    public config() {
        this.Express.use(this.Routes)

    }
    /**
     * bootstrap
     */
    public bootstrap({routes}:IConfig) {
        /** Decouple the routes so that it doesn't snowball if one of them goes down **/
        this.Express.use(routes.auth)
        this.Express.listen(this.PORT, ()=>{
            console.log("Worked")
            console.log("Server listening on " + this.PORT)

        })
    }
}

const config:IConfig = { 
    routes : {auth}
}

const PORT: any = process.env.PORT || "3333"
const initial = new main(PORT )
initial.bootstrap(config)