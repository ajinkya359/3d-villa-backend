const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const dir = "./uploads";



router.get('/:model_id',(req,res)=>{
    console.log(req.params)
    try{
    const file = path.resolve(`./uploads/${req.params.model_id}`);
    console.log(file);
    res.sendFile(path.resolve(`./uploads/${req.params.model_id}`));

    }
    catch(err){res.send(err)}
    
})
router.get('/number_of_files',(req,res)=>{
    fs.readdir(dir, (err, files) => {
      console.log(files.length);
      res.send(files.length)
      return 
    });
    res.send(new Error("Went wrong"))
})



module.exports = router;
