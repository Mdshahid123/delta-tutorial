//what is path parameter
//https://chatgpt.com/share/cb1719e2-d469-40b7-84b7-2a35b4ee6457

//implementation

const express=require("express")
const app=express()
let port=3000
app.listen(port,()=>{
    console.log(`server is listing at ${port}`)
})

app.get('/:username/:userid',(req,res)=>{
    let userid=req.params.userid // or let {userid,username}=req.params
    let username=req.params.username
    res.send(`${userid} and ${username}`)
})


