var express = require('express');
var time = require('./time');

var app = express();
var port = process.argv[2] || 8000

// Setup the templates
app.set('view engine', 'pug');
app.set('views', './templates')
// Setup static files
app.use('/static', express.static(__dirname + '/static'))

// Controllers
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/:date', (req, res) => {
    res.json(time.getTimestamp(req.params.date))
})

// Running the server
app.listen(port, () => {
  console.log('Server runing on port ' + port);
})
