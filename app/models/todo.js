var mongoose = require('mongoose');

// parse a object as the export of this module
module.exports = mongoose.model('Todo', {
	text : String,
	done : Boolean
});