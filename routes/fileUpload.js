const express = require("express");
const router = express.Router();
const multer=require('multer');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        var error=null;
        console.log(file)
        if (file.mimetype !== "model/gltf-binary") 
        {
            console.log("Wrong file type")
            error=new Error({error:"Wrong file type"})
            cb(null)
            return;
        }
        cb(error, "./uploads");
    },
    filename:(req,file,cb)=>{
         var error = null;
         if (file.mimetype !== "model/gltf-binary") {
                         console.log("Wrong file type")

           error = new Error("Wrong file");
         }
        cb(error,Date.now()+"--name--"+file.originalname)
    }
})
const upload=multer({storage:storage})

router.post("/",upload.single('model'),(req, res) => {
    // if(req.files===undefined){
    //     console.log("no file selected")
    //     res.send({
    //         error:true,
    //         msg:"No file selected"
    //     })
    //     return 
    // }
    // console.log("upload",req.file)
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
