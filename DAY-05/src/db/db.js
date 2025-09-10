const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect("mongodb+srv://pawardikshit1_db_user:3iu7QHpnogMZt66k@cluster0.wxrkujl.mongodb.net/Cohort")
    .then(()=>{
        console.log("Connected to DB");
    })
}

module.exports = connectToDB