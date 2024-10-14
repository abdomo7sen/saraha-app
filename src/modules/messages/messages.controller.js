import QRCode from 'qrcode'
import { Message } from '../../../db/models/message.model.js'


export let messagesPage=async(req, res) => {
    let qrCodeUrl=`${req.protocol}://${req.get('host')}/user/${req.session.userId}`
    await QRCode.toDataURL('I am a pony!')
    .then(url => {
        qrCodeUrl = url 
    })
    .catch(err => {
      console.error(err)
    })

    let msg=await Message.find({user: req.session.userId})
    let url=`${req.protocol}://${req.get('host')}/user`
    if(req.session.isLoggedIn){
        res.render('messages.ejs',{session:req.session,url,qrCodeUrl,msg})
    }else{
            res.redirect('/login')
        }
    }