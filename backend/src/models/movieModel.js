const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title : {type: String, required : true},
    plot : {type : String, required : true},
    year : {type: Number, required : true},
    runtime : {type : Number, required : true},
    type : {type: String, required : true},
    awards : {type: Object, required : true}
});

const movies = mongoose.model('movies', userSchema);

module.exports = movies;