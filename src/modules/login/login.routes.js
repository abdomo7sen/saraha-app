import { Router } from "express"
import {  handleLogin, loginPage } from "./login.controller.js"

export let loginRouter=Router()

loginRouter.get('/login',loginPage )
loginRouter.post('/handleLogin',handleLogin )
