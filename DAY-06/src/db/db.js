const mongoose = require('mongoose')


function connectToDB(){

    mongoose.connect("mongodb+srv://pawardikshit1_db_user:3iu7QHpnogMZt66k@cluster0.wxrkujl.mongodb.net/")
    .then(()=>{
        console.log("connected to DB")
    })
}


module.exports = connectToDB