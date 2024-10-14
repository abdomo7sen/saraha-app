import { User } from "../../../db/models/user.model.js"
import bcrypt from 'bcrypt'


export let loginPage=(req, res) => {
    
    res.render('login.ejs',{error:req.query.error,session:null})

}

export let handleLogin=async(req, res) => {
    
    let isUser=await User.findOne({email:req.body.email})

    if(!isUser|| !bcrypt.compareSync(req.body.password,isUser.password)){
        return res.redirect("/login?error=incorrect email or password")
    }
    req.session.isLoggedIn=true
    req.session.userId=isUser._id
    req.session.name=isUser.name

    res.redirect('/messages')

}

