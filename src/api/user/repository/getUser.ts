import userDTO from "../Utils/Dtos";

export function getUser({email}:userDTO){
    return(
        `
        SELECT * FROM users WHERE email = "${email}"
        `
    )
}