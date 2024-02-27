const mongoose = require("mongoose");



const ConversionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        maxlength: [50, "Title must contain no more than 50 characters!"],
    },

    imageOne: {
        type: String,
        required: [true, "Image is required."],
    },

    imageTwo: {
        type: String,
    },

    imageThree: {
        type: String,
    },

    imageFour: {
        type: String,
    },

    notes: {
        type: String,
        maxLength: [400, "Notes may not exceed 400 characters."],
    },

    quantity: {
        type: Number,
    },

    

}, {timestamps:true})

const Conversion = mongoose.model("Conversion", ConversionSchema)

module.exports = Conversion;