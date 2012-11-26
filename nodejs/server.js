var express = require('express'),
	yardstick = require('yardstick-client'),
	app = express();


app.use(yardstick("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"));

app.get('/', function(req, res) {
	res.send('hello world');
});

console.log("Listening on port ", 3000);
app.listen(3000);