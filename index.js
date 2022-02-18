const express=require('express');
const app=express();
const uploadFile=require('./routes/fileUpload')
const singleModel = require("./routes/singleModel");
  const fs = require("fs");
  const dir = "uploads";
const PORT=process.env.PORT|| 5000;
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.static("uploads"));
app.use("/upload", uploadFile);
app.use('/singleModel',singleModel);
app.use('/number_of_models',(req,res)=>{
// console.log("ola")
try{
  fs.readdir(dir, (err, files) => {
    // console.log(files);
    var result=[]
    res.send(files);
    
    return;
  });
}catch(err){
  res.send(err);

}

})
// app.use(express.static(__dirname + "/public"));
// app.use("/uploads", express.static("uploads"));

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
});