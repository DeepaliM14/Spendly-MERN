const mongoose =  require('mongoose')
const transectionSechema = new mongoose.Schema({
    userid:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:[true,'amount is required' ]
    },
    type:{
        type:String,
        required:[true,"type is required"]
    },
    category:{
        type:String,
        required:[true,'cat is required']
    },
    reference:{
        type:String,
    },
    description:{
        type:String,
        required:[true,'description is required']
    },
    date:{
         type:Date,
         required:[true,'data is required']
    },

},{timestamps : true}
);
const transectionModel= mongoose.model('transections',transectionSechema)
module.exports = transectionModel;