var express = require("express");
var  app = express();
app.set("view engine", "ejs");
var moment = require("moment");
moment().format();


app.get("/", function(req, res){
    res.render("index");
});


app.get("/:data", function(req, res){
    var dateString=req.params.data;
    var momentTime="";
    var natural="";
    var unix="";
    
    if(/^[0-9]*$/.test(dateString))
    {
        momentTime = moment.unix(dateString);
    }
    else {
        momentTime = moment(dateString);
    }
    
    console.log(momentTime);

    if (momentTime.isValid())
    {
        unix= momentTime.format("X");
        natural= momentTime.format("MMMM Do, YYYY");
    }
    
    else
    {
        natural="null";
        unix="null";
    }
    
    res.json({
        "unix": unix,
        "natural":natural
    });

});

    
app.listen(process.env.PORT, process.env.IP);