import { Router } from "express"
import {  messagesPage } from "./messages.controller.js"

export let messagesRouter=Router()

messagesRouter.get('/messages',messagesPage )
