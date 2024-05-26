//what is querystring
//genrally hum jabhi url pr kuch search karta hai toh woh query string main chali jati hai
//egp q=something is called query string

//https://chatgpt.com/share/f11b8dc5-d4df-481d-a1f2-116d4f9188ce



//implementation
const express=require('express')
const app=express()
let port=8080
app.listen(port,()=>{
    console.log(`server is listing at port ${port}`)
})

app.get('/search',(req,res)=>{
       let {q} =req.query
       res.send(`serach result for your query${q}`)
})