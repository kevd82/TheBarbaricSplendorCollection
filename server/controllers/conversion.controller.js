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

    

}