// imports
const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  removeTransaction,
} = require("../controllers/transactionsController");


// routes
router.route("/").get(getTransactions).post(addTransaction);
router.route("/:id").delete(removeTransaction);
///exports
module.exports = router;
