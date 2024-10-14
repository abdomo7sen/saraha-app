import { Message } from "../../../db/models/message.model.js"
import { User } from "../../../db/models/user.model.js"


export let userPage=async(req, res) => {
    let user=await User.findById(req.params.id)
    res.render('user.ejs',{user,session:null})
}

export const sendMsg=async(req, res) =>{
    req.body.user=req.params.id
    await Message.insertMany(req.body)
    res.redirect(`/user/`+req.params.id)
}
export const logout=(req, res) =>{
    req.session.destroy(function(err) {
    res.redirect(`/login`)
      })
}