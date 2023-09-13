const mongoose = require('mongoose')
const reviewSchema = new mongoose.Schema({
    posts:String,
    username:String,
    createdAt:{
        type:Date,
        default: new Date().toISOString()
    }   
})
const Review = mongoose.model('Review',reviewSchema)

module.exports = Review