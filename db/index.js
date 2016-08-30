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
		}, 
		getCurrent: function(){
			console.log('')
		}
	}
}); 

var SalesPersonRegion = db.define('salesPersonRegion'); 

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



