const Conversion = require("../models/conversion.model");




module.exports = {

    findAllConversions: (req, res)=>{
        Conversion.find()
            .then((allConversions)=>{
                console.log(allConversions);
                res.json(allConversions);
            })
            .catch((err)=>{
                console.log("findAllConversions has failed.");
                res.json({message: "Error in findAllConversions.", error: err})
            })
    },

    createNewConversion: (req, res)=>{
        Conversion.create(req.body)
        .then((newConversion)=>{
            console.log(newConversion);
            res.json(newConversion);
        })
        .catch((err)=>{
            console.log("Error in createNewConversion.");
            res.status(400).json(err)
        })
    },

}