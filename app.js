var express = require('express');
var swig = require('swig'); 
swig.setDefaults({cache: false}); 
var path = require('path'); 
var bodyParser = require('body-parser'); 
var salesPeopleRouter = require('./routes/salesPeople');
var regionsRouter = require('./routes/regions'); 
var salesPersonRegionRouter = require('./routes/salesPersonRegion')
var methodOverride = require('method-override'); 

var app = express(); 

app.set('view engine', 'html'); 
app.engine('html', swig.renderFile); 

module.exports = app; 


app.use(express.static(path.join(__dirname, 'node_modules'))); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(methodOverride('_method')); 

app.use('/salesPeople', salesPeopleRouter);
app.use('/regions', regionsRouter); 
app.use('/salesPersonRegion', salesPersonRegionRouter)

app.get('/', function(req, res, next){
	res.render('index', {})
}); 
