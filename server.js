const express = require("express");
const connectDB = require("./config/DBConnection");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const transactions = require("./routes/transactions");
const path  = require("path") ; 

dotenv.config({
  path: "./config/config.env",
});
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/transactions", transactions);
if(process.env.NODE_ENV === "production") { 
  app.use(express.static("client/build")) ; 
  app.get("*" , (req , res) => res.sendFile(path.resolve(__dirname) , "client" , "build" , "index.html")) 
}
app.listen(PORT, () => {
  console.log("app is up and running on port:".yellow.bold, PORT.yellow.bold);
});
