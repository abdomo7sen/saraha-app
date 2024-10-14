import express from 'express'
import { conn } from './db/dbConnection.js'
import { homeRouter } from './src/modules/home/home.routes.js'
import { loginRouter } from './src/modules/login/login.routes.js'
import { registerRouter } from './src/modules/register/register.routes.js'
import { messagesRouter } from './src/modules/messages/messages.routes.js'
import { userRouter } from './src/modules/user/user.routes.js'
import session from 'express-session'
import MongoDBStore from 'connect-mongodb-session'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config({path:"./config/.env"})
let mongoession=MongoDBStore(session)
const app = express()
const port = process.env.PORT||3000
var store = new mongoession({
    uri: process.env.MONGO_URL,
    collection: process.env.SESSION_COLLECTION_NAME
  });
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store,
    
}))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use("/public",express.static("public"))
app.use(homeRouter)
app.use(loginRouter)
app.use(registerRouter)
app.use(messagesRouter)
app.use(userRouter)




app.listen(port, () => console.log(`Example app listening on port ${port}!`))