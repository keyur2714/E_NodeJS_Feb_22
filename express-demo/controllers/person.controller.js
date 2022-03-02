var controllerMethods = {
    findAll : function(req,res){
        const personList = [];
        res.send(personList);
    },
    findById : function(req,res){
        const id = req.params.id;
        const personList = [];
        var person = {};
        for(let per of personList){
            if(per.id == id){
                person = per;
                break; 
            }
        }
        res.send(person);
    },
    create : function(req,res){
        const person = req.body;
        console.log(person);
        res.send("Person Saved Successfully.");
    },
    update : function(req,res){
        const updatedId = req.params.id;
        const person = req.body;
        console.log(person);
        res.send("Person updated successfully with id : "+updatedId);
    }
}

module.exports = controllerMethods;


