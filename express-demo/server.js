var express=require('express');
var app = express();

var personModel = require('./model/person.model');

app.use(express.json());

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

app.get('/persons',function(req,res){
    const personList = personModel.persons;
    res.send(personList);
})

app.get('/persons/:id',function(req,res){
    const id = req.params.id;
    const personList = personModel.persons;
    var person = {};
    for(let per of personList){
        if(per.id == id){
            person = per;
            break; 
        }
    }
    res.send(person);
})

app.post('/person',function(req,res){
    const person = req.body;
    console.log(person);
    res.send("Person Saved Successfully.");
})

app.put('/person/:id',function(req,res){
    const updatedId = req.params.id;
    const person = req.body;
    console.log(person);
    res.send("Person updated successfully with id : "+updatedId);
})

app.listen(9090,function(req,res){
    console.log("Server Started on port 9090.");
})

