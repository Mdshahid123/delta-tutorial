//create a basic  template for instagram page based on floowing routes
//exp /ig/:username

const express=require("express")//external module
const app=express()
const path=require("path")//already installed module
const port=5000

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))

app.get("/ig/:username",(req,res)=>{
        let { username } = req.params;
        console.log(username)
        res.render("instagram",{username});
})

app.listen(port,()=>{
    console.log(`server is listning at ${port}`)
})
