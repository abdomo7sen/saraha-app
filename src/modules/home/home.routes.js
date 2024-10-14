import { Router } from "express"
import { homePage } from "./home.controller.js"

export let homeRouter=Router()

homeRouter.get('/',homePage )
