
const Miniature = require("../models/miniature.model");




module.exports = {

    findAllMiniatures: (req, res)=>{
        Miniature.find()
            .then((allMiniatures)=>{
                console.log(allMiniatures);
                res.json(allMiniatures);
            })
            .catch((err)=>{
                console.log("findAllMiniatures has failed.");
                res.json({message: "Error in findAllMiniatures", error: err});
            })
    },

    createNewMiniature: (req, res)=>{
        Miniature.create(req.body)
        .then((newMiniature)=>{
            console.log(newMiniature);
            res.json(newMiniature);
        })
        .catch((err)=>{
            console.log("Error in createNewMiniature.");
            res.status(400).json(err);
        })
    },

    findOneMiniature: (req, res)=>{
        Miniature.findOne({_id: req.params.id})
        .then((oneMiniature)=>{
            console.log("findOneMiniature has failed.");
            res.json({message: "Error in findOneMiniature", error: err});
        })
    },

    deleteMiniature: (req, res)=>{
        Miniature.deleteOne({_id: req.params.id})
        .then((deletedMiniature)=>{
            console.log(deletedMiniature);
            res.json(deletedMiniature);
        })
        .catch((err)=>{
            console.log("deleteMiniature has failed.");
            res.json({message: "Error in deleteMiniature.", error: err});
        })
    },

}