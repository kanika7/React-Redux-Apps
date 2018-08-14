const mongoose = require('mongoose');
var Schema = mongoose.Schema; //Define collection for schema and items

var Projects = new Schema({
    pid:{type: Number},
    name:{type: String},
    desc:{type: String},
    status:{type: String}
}, {collection: 'projects'});

module.exports = mongoose.model('Projects',Projects);