const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const mongoose = require('mongoose');
const port = 5555;
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));


function printHelper(data){
    console.log('*************************************************************');
    console.log(data);
    console.log('*************************************************************');
}



//404 error
app.get ('*', (req, res) => {
    res.send("...404... <br /> Damn, that sucks brah... <br /> I hope that someone gets around to fixing this. <br /> \¯\\\_\(\ツ\)\_\/\¯");
})

//Server Port
app.listen(port, function() {
    console.log("listening on port: ",port);
})