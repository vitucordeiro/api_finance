import {z} from 'zod'
export const userSchema = z.object({
    
    first_name:z.string({
        required_error: "Full name is required",
    }),
    last_name:z.string({
        required_error: "Password is required"
    }),
    complete_name:z.string({
        required_error: "Complete name is required"
    }),
    password:z.string({
        required_error: "Password is required"
    }),
    email:z.string({
        required_error:"Email is required"
    }).email("Not a valid email"),
})