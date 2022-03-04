var db = require("../model");
var Person = db.person;

var controllerMethods = {
    findAll : function(req,res){
        Person.findAll({}).then(data=>{
            res.status(200).send(data);
        })
        .catch(error=>{
            res.status(500).send("Error while get All Persons.");
        })        
    },
    findById : function(req,res){
        const id = req.params.id;
        Person.findByPk(id).then(data=>{
            res.status(200).send(data);
        })
        .catch(error=>{
            res.status(500).send("Error while get Person By Id.");
        })                
    },
    create : function(req,res){
        const person = {
            name : req.body.name,
            city : req.body.city,
            mobileNo : req.body.mobileNo,
            email : req.body.email
        };
        
        Person.create(person).then(function(data){
            res.status(201).send(data);
        })
        .catch(error=>{
            res.status(500).send("Error during save person.");
        });
        
    },
    update : function(req,res){
        const updatedId = req.params.id;
        const person = req.body;
        console.log(person);
        Person.update(person,{where : {id : updatedId}}).then(data=>{
            res.status(200).send({message : "Person Updated scuccessfully."});
        })
        .catch(error=>{
            res.status(500).send("Error during update person.");
        })        
    },
    delete : function(req,res){
        const deleteId = req.params.id;
        Person.destroy({where : {id : deleteId}}).then(data=>{
            res.status(200).send({message : "Person deleted Successfully with Id "+deleteId})
        })
        .catch(error=>{
            res.status(500).send("Error while delete Person...!");
        })
    }
}

module.exports = controllerMethods;


