const { response } = require("express");
const users = require("../models/user.js");
const bcrypt = require("bcrypt")

class Auth{

     static async register(req,res,next){


        const addedUser = await users.create(req.body);
    
        console.log(addedUser);

        res.status(200).json(addedUser);

    }

    static async login(req,res,next){

       const user = await users.findOne({username : req.body.username});

        if(!user){
          return  res.status(401).send("email hatalı");
        }

        if(await bcrypt.compare(req.body.password,user.password))
        {
                    res.cookie("deneme",123,{httpOnly:true,expires: new Date(Date.now()+100000000),secure:false})

            return  res.status(200).json({cano:"beno"});
            
            
        }

        else{
           return res.status(401).send("şifre hatalı");
        }
        
    }

}

module.exports = Auth;
