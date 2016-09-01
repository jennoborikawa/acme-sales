var Sequelize = require('sequelize'); 
var db = new Sequelize('postgres://localhost:5432/acme_sales', {
	logging: false
}); 

db.authenticate().then(function(result){
	console.log('db connection successful'); 
}); 

var SalesPerson = db.define('salesPerson', {
	name: {
		type: Sequelize.STRING, 
		allowNull: false
	}
}, {
	classMethods: {
		getAll: function(){
			return this.findAll({})
		}, 
		remove: function(salesPersonId){
			return this.findOne({where: {name: salesPersonId}})
		}
	}
}); 

var Region = db.define('region', {
	zipCode : {
		type: Sequelize.INTEGER, 
		allowNull: false
	}
}, {
	classMethods: {
		getAll: function(){
			return Region.findAll({})
		}
	}
}); 

var SalesPersonRegion = db.define('salesPersonRegion', {},{
	classMethods: {
		remove: function(salesPersonId, regionId){
			var rowsBySalesPersonId; 
			var rowsByRegionId; 
			SalesPersonRegion.findAll({where: {salesPersonId: salesPersonId}})
			.then(function(salesPersonRows){
				rowsBySalesPersonId = salesPersonRows;
				return SalesPersonRegion.findAll({where: {regionId: regionId}});  
			})
			.then(function(regionRows){
				rowsByRegionId = regionRows; 
				
			})
		}
	}
}); 

//put SalesPerson and Region foreign keys on the SalesPersonRegion table
SalesPerson.hasMany(SalesPersonRegion); 
Region.hasMany(SalesPersonRegion); 
SalesPersonRegion.belongsTo(SalesPerson); 
SalesPersonRegion.belongsTo(Region); 


module.exports = {
	SalesPerson: SalesPerson, 
	Region: Region, 
	SalesPersonRegion: SalesPersonRegion
}



