import {EntitySchema, EntitySchemaOptions} from "typeorm";

export const userModel = new EntitySchema({
    name:"User",
    tableName:"Users",
    columns:{
        id:{
            type:Number,
            primary:true,
            generated:'uuid'
        },
        fullName:{
            type: String
        },
        password:{
            type:String
        },
        

    }
})