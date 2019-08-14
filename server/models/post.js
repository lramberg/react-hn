const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    url: String,
    upvotes: { type: Number, default: 0 } 
});

module.exports = mongoose.model('Post', postSchema);