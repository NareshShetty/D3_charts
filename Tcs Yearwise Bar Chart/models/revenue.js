var mongoose = require('mongoose');
var schema = mongoose.Schema;


var schema = new schema({year:String,value:Number });



// module.exports = mongoose.model('Revenue',revenueSchema);
schema.set('collection', 'Data');

//var collectionName = 'test'
module.exports = mongoose.model('Data', schema);