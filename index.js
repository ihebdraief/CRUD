const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors"); 
const postRoute = require("./routes/postRoute"); 
const commentRoute = require("./routes/commentRoute"); 
const userRoute = require("./routes/userRoute");


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection Successfull!"))
  .catch((err) => {
    console.log(err); 
  });  



app.use(cors());
app.use(express.json());
app.use("./routes/postRoute", postRoute );
app.use("./routes/commentRoute", commentRoute );
app.use("./routes/userRoute", userRoute)


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});