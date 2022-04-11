const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const recipeSchema = new Schema({
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    prepTime: {type: String, required: true},
    cookTime: {type: String, required: true},
    content: {type: String, required: true},
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);