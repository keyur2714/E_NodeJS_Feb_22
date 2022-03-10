var express=require('express');
var app = express();
const cors = require("cors");
const db = require("./model");

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

var personRoutes = require('./routes/person.routes');

var corsOptions = {
    origin: "http://localhost:4200"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/',function(req,res){
    console.log("Hello Radhe Krishna...!");
    res.send("Hello Radhe Krishna...!");
})

app.get('/sayHello/:id/:name',function(req,res){
    const id = req.params.id;
    const name = req.params.name;
    res.send("Hello...!"+id+" "+name);
})

app.get('/info',function(req,res){
    const name = req.query.name;    
    const city = req.query.city;
    res.send("Hi...!"+name + " " + city);
})

app.use("/api",personRoutes);

app.listen(9090,function(req,res){
    console.log("Server Started on port 9090.");
})

