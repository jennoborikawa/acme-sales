var router = require('express').Router(); 
module.exports = router; 
var Promise = require('bluebird'); 

var models = require('../db'); 
var SalesPerson = models.SalesPerson; 
var Region = models.Region; 


router.get('/', function(req, res, next){
	Promise.all([SalesPerson.getAll(), Region.getAll()])
	.spread(function(allSalesPeople, allRegions){
		// console.log(allRegions)
		res.render('salesPeople', {
			people: allSalesPeople, 
			regions: allRegions, 
			currentRegion: 'fill later'
		})
	})
	.catch(next);
});

router.post('/', function(req, res, next){
	SalesPerson.create({
		name: req.body.newSalesPerson
	})
	.then(function(newPersonRow){
		res.redirect('/salesPeople')
	})
	.catch(next); 
});







