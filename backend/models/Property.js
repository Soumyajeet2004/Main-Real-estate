const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    owner: {type: String, required: true },
    title:{type:String, required:true},
    location:{type:String, required:true},
    price:{type:Number, required:true},
    contact:{type:String, required:true},
    superarea:{type:Number, required:true},
    transaction:{type:String},
    furnishing:{type:String},
    bathroom:{type:Number},
    image:{type:String},
});

module.exports = mongoose.model('Property', propertySchema);