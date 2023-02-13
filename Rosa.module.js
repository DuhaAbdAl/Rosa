const mongoose = require('mongoose');


const person= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: {type:String , required:true}
})
module.exports =mongoose.model('Person' ,person);
