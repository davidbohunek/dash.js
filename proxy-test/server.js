var express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res, next) {
    var url = req.query.url;
    
    console.log('request >>> ' + url, req.headers);

    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', url, true);
    
    console.log()
    
    if (req.responseType) {
        xhr.responseType = req.responseType;
    }
    
    // if (req.range) {
    //     xhr.setRequestHeader('Range', 'bytes=' + req.range);
    // }
    
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status <= 299) {
            console.log('response <<< ' + url, xhr.response);                        
            res.send(xhr.responseText);
        }
    };
    
    xhr.send();
});

app.listen(8181);