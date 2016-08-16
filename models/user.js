
// inicalizar base 


var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos");

var user_Schema = new Schema( {
	nombre:String,
	apellido:String,
	email:String,
	numero_telefonicp:Number,
	adicional:String,
});

user_Schema.virtual("password_confirmation").get(function(){
	return this.password_confirmation;
}).set(function(password){
	this.password_confirmation = password;
});

//Modelos

//nombre de coleccion si no hay priral
//studen = Students
var User = mongoose.model("User", user_Schema);

//modelo de conexiones
module.exports.Use = User;
//BootstapCDN