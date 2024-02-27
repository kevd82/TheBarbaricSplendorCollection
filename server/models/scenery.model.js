const mongoose = require("mongoose");



const ScenerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Name is required."],
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
        maxLength: [400, "Notes may not exceed 400 characters"],
    },

    quantity: {
        type: Number,
    },

    

}, {timestamps:true})

const Scenery = mongoose.model("Scenery", ScenerySchema);

module.exports=Scenery;

