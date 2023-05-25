const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/kitchen")

const noteSchema = {
    order: String,
    name:String,
    number:Number,
    total:Number
}

const Note = mongoose.model("Note", noteSchema);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let newNote = new Note({
        order: req.body.order,
        name: req.body.name,
        number: req.body.number,
        total: req.body.total
    })
    newNote.save();
})

app.listen(3000, function(){
    console.log("server is running on port number 3000");
})