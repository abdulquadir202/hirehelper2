var express = require('express'),
app = express(),
partials = require('express-partials'),
errorHandlers = require('./middleware/errorHandlers'),
routes = require('./routes');

app.set('view engine', 'ejs');
app.set('view options', {defaultLayout:'layout'});

app.use(express.static(__dirname + '/static'));
app.use(partials());

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/services', routes.services);
app.get('/blog', routes.blog);
app.get('/booking', routes.booking);
app.get('/contact', routes.contact);

app.get('/error', function(req, res, next){
	next(new Error('A contrived error'));
});

app.listen(3004)
console.log('server running port 3004');