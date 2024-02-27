const mongoose = require("mongoose");


const MiniatureSchema = new mongoose.Schema ({

    title: {
        type: String,
        required: [true, "Title is required!"],
        maxlength: [50, "Title must be no longer than 50 characters!"],
    },

    manufacturer: {
        type: String,
        required: [true, "Manufacturer is required; enter as unknown if necessary."],
    },

    sculptor: {
        type: String,
    },

    code: {
        type: String,
    },

    material: {
        type: String,
        required: [true, "Material is required."],
    },

    yearReleased: {
        type: String,
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

    wishList: {
        type: Boolean,

    },

    

}, {timestamps:true})

const Miniature = mongoose.model("Miniature", MiniatureSchema);

module.exports=Miniature;




