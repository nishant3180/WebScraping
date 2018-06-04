var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

pool.connect(function(err, client,done) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client.query('SELECT AxtriaSalesIQTM__Client_Position_Code__c FROM AxtriaSalesIQTM__Position__c;',function(err,result))
    done(err);
	if(err)
	{
		return console.error('error running query', err);
	}
	
      res.send(result);
    });
});


