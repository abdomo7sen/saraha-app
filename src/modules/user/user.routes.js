import { Router } from "express"
import { logout, sendMsg, userPage } from "./user.controller.js"

export let userRouter=Router()

userRouter.get('/user/:id',userPage )
userRouter.post('/sendMsg/:id',sendMsg )
userRouter.get('/logout',logout )
