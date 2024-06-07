const express=require("express");
const router=express.Router();

router.post("/foodData",(req,res)=>{

    try{
                // console.log( global.food_item);
                // console.log(global.datacategory);
                res.send([global.food_item,global.datacategory]);
                
    }
    catch(error)
    {
      console.error(error.message);
      res.send("server error")
    }
})
module.exports=router;