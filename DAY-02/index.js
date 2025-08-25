const server = require('express')

const app = server();


app.get('/home' ,(req,res)=>{
    res.send("Welcome to home page");
})

app.listen(3000,()=>{
    console.log("Server is running on 3000 port")
})