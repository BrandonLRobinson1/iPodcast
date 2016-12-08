var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var fs = require('fs');
// var fs
//eval(require('fs').readFileSync('./xml.js', 'utf8')); 
//var xml = require('./parseme.xml')
//var xml = require('./xml')
// import xml from './parseme.xml'
xml2js = require('xml2js');



app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('*', (req, res)=>{

    console.log('success')

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/parseme.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
       // console.dir(result);
        res.send(result)
        console.log(result);
        console.log('Done');
    });
});

//res.send('yo')

})

app.listen(3000, ()=>{
  console.log('legion of doom')
})