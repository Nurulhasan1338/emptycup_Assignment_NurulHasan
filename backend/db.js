const mongose=require('mongoose');
require('dotenv').config();


const connectToMongo = async() => {
    
  mongose.connect(process.env.MONGODB_URI);
  console.log("connect to mongo successfully!!");
}



module.exports = connectToMongo;



