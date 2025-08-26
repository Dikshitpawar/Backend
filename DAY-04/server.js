const express = require('express');

let notes = [];
const app = express()
app.use(express.json())


app.get('/notes' ,(req,res)=>{
    res.json({
        notes : notes
    })
})

app.post('/notes', (req,res)=>{
    notes.push(req.body);

    res.json({
        message:"Note added successfully"
    })
})

app.patch('/notes/:index', (req,res)=>{
    const index = req.params.index;
    const { title } = req.body;
    notes[index].title = title;

    res.json({
        message:"Note upadted successfully"
    })
})


app.delete('/notes/:index', (req,res)=>{
    const index = req.params.index;
    delete notes[index]

    res.json({
        message:"Note delted successfully"
    })
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})