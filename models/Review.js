const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    reviewTitle: {
        type: String
    },

    reviewBody: {
        type: String
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
                ref:'User'
    },
},{timestamps:true})



const Review = mongoose.model('Review',reviewSchema)
module.exports = Review