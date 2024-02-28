const Scenery = require("../models/scenery.model");




module.exports = {

    findAllScenery: (req, res)=>{
        Scenery.find()
            .then((allScenery)=>{
                console.log(allScenery);
                res.json(allScenery);
            })
            .catch((err)=>{
                console.log("findAllScenery has failed.");
                res.json({message: "Error in findAllScenery.", error: err})
            })
    },

    createNewScenery: (reg, res)=>{
        Scenery.create(req.body)
        .then((newScenery)=>{
            console.log(newScenery);
            res,json(newScenery);
        })
        .catch((err)=>{
            console.log("Error in createNewScenery.");
            res.status(400).json(err)
        })
    },

}



