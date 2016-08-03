var mongoose = require('mongoose');
var schema = mongoose.Schema;


var schema = new schema({Age:String,population:Number });



// module.exports = mongoose.model('Revenue',revenueSchema);
schema.set('collection', 'AgeGroup');

//var collectionName = 'test'
module.exports = mongoose.model('AgeGroup', schema);