var express = require('express');
var hostname = 'localhost';
var port = 5000; 
var app = express();
var myRouter = express.Router(); 
  
myRouter.route('name_rickandmorty') 

.get(function(req,res){ 
    res.json({message : "The names are:   ", methode : req.method});
})
.post(function(req,res){
    res.json({message : "A", methode : req.method});  
    //const {param} = req.body;
    //if (param === “as”) {
        //return res.json({result : ‘sdsf’})
//} 
})
.put(function(req,res){ 
    res.json({message : "B", methode : req.method});
})
.delete(function(req,res){ 
    res.json({message : "C", methode : req.method});  
    }); 
app.use(myRouter);
app.listen(port, hostname, function(){
	console.log("servidor http://"+ hostname +":"+port); 
});

  