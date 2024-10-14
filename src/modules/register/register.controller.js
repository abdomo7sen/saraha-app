import { User } from "../../../db/models/user.model.js"
import bcrypt from 'bcrypt'

export let registerPage=(req, res) => res.render('register.ejs',{error:req.query.error,session:null})

export let handleRegister=async(req, res) => {
    
    let isUser=await User.findOne({email:req.body.email})
    if(isUser){
        return res.redirect("/register?error=email already exists")
    }
    req.body.password = bcrypt.hashSync(req.body.password,8)
    await User.insertMany(req.body)
    res.redirect('/login')
}