//in this lecture we are going to see handling a  any type of request by using app.send()

const express=require("express")
const app=express()
//console.dir(app)//it return object containg lot's of function which we use to developmed our web applicqation
let port=300
//app.listen is use to start or run a server or our web application in beckend at specific port
app.listen(port,()=>{
    console.log(`server is listing at port no ${port}`)
})

//app.use is use to listen a client request at any routs
app.use((req,res)=>{
    console.log("request is recevied")
})