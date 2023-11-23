
const mongose = require('mongoose')
const { Schema } = mongose;
const recordSchema = new Schema({
    
   name:{
       type:String,
       required:true
   },
   description:{
       type:String,
       required:true
   },
   rating:{
       type:Number,
       default:0
   },
   date:{
       type:Date,
       required:true,
       default:Date.now
   },
   year:{
    type:Number,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   project:{
    type:Number,
    required:true
   },
   contacts:{
    type:[String]
   },
   shortlisted:{
    type:Boolean,
    default:false
   }
  });


module.exports = mongose.model('records',recordSchema);
