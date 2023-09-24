import userDTO from "../Utils/Dtos";

export function createUser({first_name, last_name, complete_name, email, password}:userDTO){
    return 
    (`INSERT INTO users(first,name, last_name, complete_name, email, password)
        VALUES
        (
            ${first_name}, ${last_name}, ${complete_name}, ${email}, crypt('${password}', gen_salt('bf'))
        )`)
}