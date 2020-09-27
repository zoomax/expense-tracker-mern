const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  text: {
    type: String,
    required: [true, "please add a description to your expense "],
    trim: true,
  },
  amount: {
      type : Number , 
      required  : [true ,"please add a positive or negative number"] 
  },
  createdAt :  { 
      type : Date , 
      default : Date.now()
  }
});


const TransactionModel = mongoose.model("transactions" , TransactionSchema) ; 


module.exports = TransactionModel ; 
