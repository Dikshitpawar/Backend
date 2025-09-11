const express = require('express')
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/note.model')

connectToDB()
const app = express()
app.use(express.json())

app.post('/notes', async (req,res)=>{
    const {title,content} = req.body
    console.log(title,content)

    await noteModel.create({
        title,content
    })

    res.json({
        msg:"Note created successfully"
    })
})


app.get('/notes' ,async (req,res)=>{
    const notes =await noteModel.find()

    res.json({
        msg:"Note fetch successfully",
        notes
    })
})


app.patch('/notes/:id')

app.listen(3000, ()=>{ 
    console.log("Server is running on 3000 port")
})