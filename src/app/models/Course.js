const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;


mongoose.plugin(slug);

const Course = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        maxLength: 600
    },
    images: {
        type: String,
        maxLength: 600
    },
    videoID: {
        type: String,
        maxLength: 600
    },
    level: {
        type: String,
        maxLength: 600
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true
    },

}, {
    timestamps: true,
});
module.exports = mongoose.model('Course', Course);