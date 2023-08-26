import { Router } from "express";

import { registerHandler } from "./Controllers";

/** Setup  */
const user = Router()


user.post('/api/v1/register', registerHandler )
user.post('/api/v1/login')

export default user 