// server.js

// set up =======================

	// Express is a web framework for node.js
	// that makes nontrivial applications easier to build
	var express = require('express');

	// Create the server instance
	var app = express();
	var mongoose = require('mongoose');
	var morgan = require('morgan');
	var bodyParser = require('body-parser');
	var methodOverride = require('method-override');

// configuration ================

	mongoose.connect('mongodb://zheng:1987911@novus.modulusmongo.net:27017/hiQ5adub');
	app.use(express.static(__dirname + '/public'));
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({'extended':'true'}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({type: 'application/vnd.api+json'}));
	app.use(methodOverride());


// routes ======================================================================

require('./app/routes.js')(app);


	// listen (start app with node server.js) ======================================
	app.listen(8080);
	console.log("App listening on port 8080");


