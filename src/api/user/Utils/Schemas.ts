import {z} from 'zod'
export const userSchema = z.object({
    
    fullName:z.string({
        required_error: "Full name is required",
    }),
    password:z.string({
        required_error: "Password is required"
    }),
    email:z.string({
        required_error:"Email is required"
    }).email("Not a valid email"),
})