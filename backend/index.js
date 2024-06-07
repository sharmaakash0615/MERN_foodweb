const express=require("express");


const app=express();

const mongoDb =require("./db");
mongoDb();
const port =5000;

 app.use((req,res,next)=>{
 res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
 
 res.header(
    "Access-Control-Allow-Headers", 
    "Origin,X-Requested-With,Content-Type,Accept"
 );
 next();
 })
app.get("/",(req,res)=>{
   
    res.send("hello world")
})
app.use(express.json());
app.use("/api",require("./Routes/CreatUser"))
app.use("/api",require("./Routes/DisplayData"))
app.use("/api",require("./Routes/OrderData"))
app.listen(port,()=>{
    console.log("listen port 5000");
})
