const express = require("express");
const cors = require("cors");
const app = express();



app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin: "http://localhost:300"
}))


// require("./config/mongoose.config")

// require("./routes/conversion.routes")(app)
// require("./routes/miniature.routes")(app)
// require("./routes/scenery.routes")(app)
// require("./routes/user.routes")(app)





app.listen(8000, ()=>console.log("You are connected to port 8000"));