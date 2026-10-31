const mongoose = require("mongoose")

const listingSchema = new mongoose.Schema({
    streetAddress: {
        type: String
    },

    city: {
        type: String
    },
    price: {
        type: Number
    },
    size: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
                ref:'User'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
                ref:'Category'
    },
},{timestamps:true})



const Listing = mongoose.model('Listing',listingSchema)
module.exports = Listing