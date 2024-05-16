const express=require("express");
const app=express();
const port=80;
app.get("/",(req,res)=>{
    res.send("this is first express app")
})
app.get("/about",(req,res)=>{
    res.send("this is first express app on about")
})
app.get("/contact-us ",(req,res)=>{
    res.send("this is first express app on countact us")
})
app.get("/services",(req,res)=>{
    res.send("this is first express app on services")
})
app.get("/*",(req,res)=>{
    res.status(404)
    res.send("404 error")
})

app.listen(port,()=>{
    console.log("server is running on port",port)
})