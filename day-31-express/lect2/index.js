//starts our server or listen a request

const express=require("express")
const app=express()
//console.dir(app)//it return object containg lot's of function which we use to developmed our web applicqation
let port=300
app.listen(port,()=>{
    console.log(`server is listing at port no ${port}`)
})
