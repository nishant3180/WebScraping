var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, response) {
  console.log("hello hi hello hi");
	request('http://www.bbc.com/news', function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);
          console.log(html); 
		  $('div[class=gel-layout__item gs-u-float-left@l gs-u-display-block@m gs-u-display-none@xs]').html()
		  
      }
	});
	
});


app.listen(app.get('port'), function() {
	console.log("hello hi hello hi");
  console.log('Node app is running on port', app.get('port'));
});