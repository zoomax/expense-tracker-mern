// imports
const TransactionModel = require("./models/transaction");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
const getTransactions = async (req, res, next) => {
  try {
    const transactions = await TransactionModel.find();
    res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "server error",
      message: err.message,
    });
  }
};
// @desc    Add all transactions
// @route   POST /api/v1/transactions
// @access  public
const addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await TransactionModel.create({
      text,
      amount,
    });
    res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((error) => error.message);
      console.log(messages);
      res.status(400).json({
        success: false,
        error: "server error",
        messages,
      });
    }
    res.status(500).json({
      success: false,
      error: "server error",
      message: err.message,
      error: err.name,
    });
  }
};

// @desc    Remove all transactions
// @route   POST /api/v1/transactions
// @access  Public
const removeTransaction = async (req, res, next) => {
  try {
    let id = req.params.id;
    const transaction = await TransactionModel.findById(id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "no transaction",
      });
    }
    await transaction.remove();
    return res.status(200).json({
      success: true,
      message: "transaction deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  getTransactions,
  addTransaction,
  removeTransaction,
};
