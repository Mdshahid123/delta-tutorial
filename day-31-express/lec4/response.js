// sending a response
//genrally http request is a text based (so that server implmented in any language understand it)
//so text based request is parse by express into the  object
// documntation for res,req object

//https://expressjs.com/en/4x/api.html


const express=require("express")
const app=express()
//console.dir(app)//it return object containg lot's of function which we use to developed our web applicqation
let port=300
//app.listen is use to start or run a server or our web application in beckend at specific port
app.listen(port,()=>{
    console.log(`server is listing at port no ${port}`)
})

//app.use is use to listen a client request for any  routs
    app.use((req,res)=>{
    console.log("request is recevied")
    // req.send(req)//it give request object
    // serve a string
   // res.send("this is a basic response")
   //serve a object but when we serve a java script object to the client then it converted into the json
   // object
    // res.send({
    //     name:"apple",
    //     color:"red",
    //     qty:"10"

    // })
    //serve a html 
    res.send("<h1>fruits</h1>  <ul><li>apple</li><li>banana</li><li>mango</li></ul>")
})

