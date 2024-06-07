
const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const jwtsecerate="mynameissharmaakash0615akash@3#$"

const User=require('../model/User');
const { body, validationResult } = require('express-validator');
router.post("/creatuser",[
body('email').isEmail(),
body('name','name is not lessthan 5 digit').isLength({min:5}),
body('password','password is not lessthan 5 digit').isLength({min:5})],
async(req,res)=>{

     const result = validationResult(req);
     if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
     }
  
 const salt=await bcrypt.genSalt(10);
 const secpassword=await bcrypt.hash(req.body.password,salt)

 try{
   await User.create({
       
        name:req.body.name,
        email:req.body.email,
        //  password:req.body.password,
        password:secpassword,
        location:req.body.location
    }).then(res.json({success:true}))
    }
    catch(error)
    {
     console.log(error);
     res.json({success:false});
    }
})

// ---------------------------------------


router.post("/loginuser",[
    body('email').isEmail(),
    body('password','password is invalid').isLength({min:5})],async(req,res)=>{
     
   const result = validationResult(req); 
    if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
   }
   let email=req.body.email;
   try{
      let userdata= await User.findOne({email});
       if(!userdata)
        {
    return res.status(400).json({ errors:" try Login with correct credentials"});       
        }
        const pwdcompare=await bcrypt.compare(req.body.password,userdata.password);

        // if(req.body.password!==userdata.password)
            if(!pwdcompare)
            {
                return res.status(400).json({ errors:" try Login with correct credentials"}); 
            }
           const data={
            user:{
                id:userdata.id
            }
           }
           const authToken=jwt.sign(data,jwtsecerate);
           return  res.json({success:true, authToken: authToken});
        }
        catch(error)
        {
         console.log(error);
         res.json({success:false});
        }
    })

module.exports=router;

