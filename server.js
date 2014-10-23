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

	var db = mongoose.connection;

	// We'll also make sure that any connection errors are written to the console.
	db.on('error', console.error);
	db.once('open', function() {
  		// Create your schemas and models here.
	});

	// mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');

	mongoose.connect('mongodb://code:code@proximus.modulusmongo.net:27017/xap2aniP');
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


