
// inicalizar base 


var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos");

var userSchemaJSON = {
	email:String,
	password:String,
	name:String,
	age:Number,
	email:String,
	date_of_birth:Date
};

//Modelos

//nombre de coleccion si no hay priral
//studen = Students
var User =mongoose.model("User", user_schema);

//modelo de conexiones
module.exports.Use = User;