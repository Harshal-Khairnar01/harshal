 
 const msgModel=require('../model/messageModel');

class webController{
    static home=(req,res)=>{
        res.render('index')
    }
    static about=(req,res)=>{
        res.render('about')
    }
    static portfolio=(req,res)=>{
        res.render('portfolio')
    }
    static resume=(req,res)=>{
        res.render('resume')
    }
    static contact=(req,res)=>{
        res.render('contact')
    }
    
    static createDoc = async (req, res) => {
        try {
            const { uname, email, msg } = req.body;
            const msgdoc=new msgModel({uname,email,msg})
            
            await msgdoc.save();
            res.redirect('contact')
        } catch (error) {
            console.log(error);
        }
    }      
}

 module.exports=webController;