var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var app = express();


app.get('/', function(request, response) {
	
	console.log("hello hi hello hi");
	/*request('http://www.google.com/', function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);
          console.log(html); 
      }
	});*/
)};