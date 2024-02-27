const mongoose = require("mongoose");
const barbaricDB = "barbaricDB";

mongoose.connect(`mongodb://127.0.0.1:27017/${barbaricDB}`,
    {useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    .then(()=>{
        console.log(`You are connected to ${barbaricDB}`)
    })
    .catch((err)=>{
        console.log(`An error occurred connecting to ${barbaricDB}`, err)
    })