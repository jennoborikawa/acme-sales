var router = require('express').Router(); 
module.exports = router; 
var Promise = require('bluebird'); 

var models = require('../db'); 
var SalesPerson = models.SalesPerson; 
var Region = models.Region; 
var SalesPersonRegion = models.SalesPersonRegion; 


//this gets called when you click the 'Add' button 
// creates a salesPersonRegion and redirects back to either /regions or /salesPeople
router.post('/:salesPersonId/:regionId', function(req, res, next){
	//this creates a salesPersonId and regionId 
	SalesPersonRegion.create({
		salesPersonId: req.params.salesPersonId,
		regionId: req.params.regionId
	})
	.then(function(newSalesPersonRegion){
		res.redirect('back')
	})
	.catch(next); 
})


// deletes salesPersonRegion and redirects back to either /regions or /salesPeople 
router.delete('/:salesPersonId/:regionId', function(req, res, next){
	SalesPersonRegion.remove(req.params.salesPersonId, req.params.regionId)
	.then(function(results){
		res.redirect('back'); 
		// res.redirect('/salesPeople')
	})
	.catch(next); 
})





