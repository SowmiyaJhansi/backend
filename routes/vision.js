var express = require('express');
var router = express.Router();

router.post('/classify', function(req, res, next) {
  // DON'T return the hardcoded response after implementing the backend
  let response = ["shoe", "red", "nike"];

  // Your code starts here //
  const vision=require("google-cloud/vision");
//creates a client
const client=new vision.ImageAnnotatorClient({
    keyFileName: "D:\JAVA TOOL KIT\INTERVIEW TASKS\Eutech (Colombo)\Cloud Project\shoe-cloud-7756e7a1fe23.json"
})

//performs label detection on the image file
client
.labelDetection("public/images/node-vision-sample.gif")
.then((response)=>{
     labels= response[0].labelAnnotations;
     console.log("labels:");
     labels.foreach((label)=>console.log(label.description));
})
.catch((err)=>{
    console.log("ERROR:",err);
});
  // Your code ends here //

  res.json({
    "labels": response
  });
});

module.exports = router;
