var file = require("fs");

file.readFile("testing.txt",(err,buf)=>{
    if(err){
        console.log(err);
    }
    console.log(buf.toString());
})


var data = "New File Contents";

file.writeFile("temp.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});