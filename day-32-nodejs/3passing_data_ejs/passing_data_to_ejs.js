const express=require("express")
const path=require("path")
const app=express()
const port=5000;

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))


app.get("/rolldice",(req,res)=>{
       res.render("rolldice.ejs")
})

app.listen(port,()=>{
    console.log(`server listening at ${port}`)
})