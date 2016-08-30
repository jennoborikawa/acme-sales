var http = require('http'); 
var server = http.createServer(require('./app')); 

var models = require('./db'); 
var SalesPerson = models.SalesPerson; 
var Region = models.Region; 
var SalesPersonRegion = models.SalesPersonRegion

var force = process.env.FORCE ? true : false;

SalesPerson.sync({force: force})
.then(function(){
	return Region.sync({force: force})
})
.then(function(){
	return SalesPersonRegion.sync({force: force})
})
.then(function(){
	server.listen(process.env.PORT, function(){
		console.log('listening on port: ' + process.env.PORT)
	})
})
