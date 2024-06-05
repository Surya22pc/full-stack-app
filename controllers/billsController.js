const billsModel = require("../models/billsModel");

// Add Bills
const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.send("Bill Created Successfully!");
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

// Get Bills
const getBillsController = async (req, res) => {
  try {
    const bills = await billsModel.find(); // Correct usage without `new`
    res.send(bills);
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

module.exports = { addBillsController, getBillsController };
