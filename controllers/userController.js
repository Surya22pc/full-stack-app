const userModel = require("../models/userModel");


// Login user
const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await userModel.findOne({ userId, password, verified: true });
    if (user) {
        res.status(200).send(user);
      
    }
    else{
        res.json({
            message:"Login Fail",
            user,
        });
    }
    // Handle successful login
   
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

// Register user
const registerController = async (req, res) => {
  try {
    const newUser = new userModel({...req.body,verified});
    await newUser.save();
    res.status(200).send("User Registered Successfully!");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error registering user");
  }
};

module.exports = { loginController, registerController };
