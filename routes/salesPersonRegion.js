var router = require('express').Router(); 
module.exports = router; 
var Promise = require('bluebird'); 

// creates a salesPersonRegion and redirects back to either /regions or /salesPeople
router.post('/:salesPersonId/:regionId', function(req, res, next){
	//this creates a salesPersonId and regionId 
})


// deletes salesPersonRegion and redirects back to either /regions or /salesPeople 
router.delete('/:salesPersonId/:regionId', function(req, res, next){
	// Promise.all([SalesPerson.remove(), Region.remove()])
	SalesPerson.remove(req.params.salesPersonId)
	.then(function(results){
		res.redirect('/salesPeople')
	})
	.catch(next); 
})