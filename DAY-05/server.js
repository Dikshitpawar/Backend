const express = require('express')
const connectToDB = require('./src/db/db')

connectToDB()
const app = express();
app.use(express.json())

app.post('/notes' , (req,res)=>{
    const {title,content} = req.body;
    console.log(title,content);

    res.json({
        msg : "note added successfully"
    })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})