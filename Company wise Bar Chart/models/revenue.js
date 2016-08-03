var mongoose = require('mongoose');
var schema = mongoose.Schema;


var schema = new schema({Company:String,Income:Number });



// module.exports = mongoose.model('Revenue',revenueSchema);
schema.set('collection', 'Comp');

//var collectionName = 'test'
module.exports = mongoose.model('Comp', schema);