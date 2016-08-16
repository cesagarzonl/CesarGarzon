var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
//var User = require("./models/user").User;
var app = express();

app.use("/public", express.static('public'));
app.use(bodyParser.json()); // para peticiones  aplication/json
app.use(bodyParser.urlencoded({extended: true})); //lee parametros de ptiiones 

app.set("view engine","jade");

app.get("/", function(req,res){
	res.render("CesarGarzon");
});
app.get("/contactos", function(req,res){
	res.render("SleeveContactos");
});

app.post("/users", function(req,res){
	var transporter = nodemailer.createTransport('smtps://cigarzonl%40gmail.com:@smtp.gmail.com');


	var mailOptions = {
	    from: '"cesar cool"<cigarzonl@gmail.com>' ,  // sender address
	    to: "cigarzonl@gmail.com" , // list of receivers
	    subject: 'correo enviado por mi pagina ', // Subject line
	    text: 'informacion enviada  nombre : '+req.body.nombre  +'apellido : '+req.body.apellido+'email : '+req.body.email +'Numero Celular : '+req.body.celular +'Requerimiento : '+req.body.adicionales , // plaintext body
	    html: '<h1>informacion enviada </h1 > '+"<p> nombre : </p>"+req.body.nombre  +'<p>  apellido : </p>'+req.body.apellido+'<p>  email : </p>'+req.body.email +'<p>  Numero Celular : </p>'+req.body.celular +'<p> Requerimiento : </p>'+req.body.adicionales , // html body
	};
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
	       return console.log(error);
	    }else{
	    console.log('Message sent: ');
			}		
	    res.render("CesarGarzon");
		});
	});
app.listen(6654);
// verbos httpp => Get / post se alteran los encabezados de la peticion 



