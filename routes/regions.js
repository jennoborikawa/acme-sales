var router = require('express').Router(); 
var models = require('../db'); 
var SalesPerson = models.SalesPerson; 
var Region = models.Region; 
var Promise = require('bluebird'); 

module.exports = router; 

router.get('/', function(req, res, next){
	Promise.all([Region.getAll(), SalesPerson.getAll()])
	.spread(function(allRegions, allSalesPeople){
		res.render('regions', {
			regions: allRegions, 
			people: allSalesPeople
		})
	})
	.catch(next); 
}); 

router.post('/', function(req, res, next){
	Region.create({
		zipCode: req.body.newRegion
	})
	.then(function(newRegion){
		console.log('region created')
		res.redirect('/regions')
	})
	.catch(next); 
})

