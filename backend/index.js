const PORT = 7000;
const connectToMongo = require('./db');
const cors = require('cors')
const express = require('express')
const records = require("./module/recorde.js");
const app = express()
connectToMongo();  

app.use(cors());
app.use(express.json());


app.get('/api/getrecords',async(req,res,next)=>{
    try {
  
        const data = await records.find();
        if(data.length!==0){
         res.json({"success":true,"data":data});
        }
        else{
         res.json({"success":false,"msg":"no problem"});
        }
       }  catch (error) {
           console.error(error);
           res.status(500).send("some internal error");
       }

})



app.put('/api/update/:id',async(req,res)=>{
    try {
     
      newRecord = {
        name : req.body.name,
        shortlisted : req.body.shortlist
      }

      let rec = await records.findById(req.params.id);

      if(!rec) {return res.status(404).send("Not Found <3");}

      console.log(newRecord)

    const note = await records.findByIdAndUpdate(req.params.id,{$set:newRecord},{new:true})
    res.json(note);

       }  catch (error) {
           console.error(error);
           res.status(500).send("some internal error");
       }

})


app.get('*',(req,res,next)=>{
  res.status(200).json({
    message:'connected successfully'
  })

  
})

app.listen(PORT,()=>{
  console.log(`sever is listening at :https://localhost:${PORT}`);
});



