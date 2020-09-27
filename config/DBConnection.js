const mongoose = require("mongoose");
const uri =
  process.env.MONGO_URI || "mongodb://localhost:27017/expense-tracker";

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI , process.env.PORT) ; 
    const connection = await mongoose.connect(
      uri,
      {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`DB connected: ${connection.connection.host}`.green);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
