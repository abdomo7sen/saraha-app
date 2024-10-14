import { Router } from "express"
import {   handleRegister, registerPage } from "./register.controller.js"

export let registerRouter=Router()

registerRouter.get('/register',registerPage )
registerRouter.post('/handleRegister',handleRegister )
