
const express = require('express')

let notes = [];
const app = express()

app.use(express.json())

app.post('/notes',(req,res)=>{
    notes.push(req.body);

    res.json({
        message : "Notes addded successfully!",
        notes : notes 
    })
})


app.listen(3000, ()=>{
    console.log("Server is running on 3000 port")
})