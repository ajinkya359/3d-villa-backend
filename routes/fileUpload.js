const express = require("express");
const router = express.Router();
const multer=require('multer');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        var error=null;
        if (file.mimetype !== "model/gltf-binary") 
        {
        error=new Error({error:"Wrong file type"})
        }
        cb(error, "./uploads");
    },
    filename:(req,file,cb)=>{
         var error = null;
         if (file.mimetype !== "model/gltf-binary") {
           error = new Error("Wrong file");
         }
        cb(error,Date.now()+"--name--"+file.originalname)
    }
})
const upload=multer({storage:storage})

router.post("/", upload.single("model"), (req, res) => {
    console.log(req.file)
//   try {
//     console.log(req.body);
//   } catch (error) {
//     console.log(error);
//   }
  res.send({
      error:false,
      msg:"File uploaded successfully"
  });
});



module.exports = router;
