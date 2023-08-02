const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const validateRegisterInput = require('../validation/registerValidation')
const requiresAuth = require("../middleware/auth");

// registration api
router.post("/register", async (req, res) => {
    try {
      const { errors, isValid } = validateRegisterInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      
      const existingEmail = await User.findOne({
        email: new RegExp("^" + req.body.email + "$", "i"),
      });
  
      if (existingEmail) {
        return res
          .status(400)
          .json({ error: "There is already a user with this email" });
      }
  
      
      const hashedPassword = await bcrypt.hash(req.body.password, 12);
  
      
      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
        ethAddress : req.body.ethAddress,
      });
  
      const savedUser = await newUser.save();
  
      const payload = { userId: savedUser._id };
  
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
  
      res.cookie("access-token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
  
      const userToReturn = { ...savedUser._doc };
      delete userToReturn.password;
  
      
      return res.json(userToReturn);
    } catch (err) {
      
      console.log(err);
  
      res.status(500).send(err.message);
    }
  });


  //login api

  router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({
        email: new RegExp("^" + req.body.email + "$", "i"),
      });
  
      if (!user) {
        return res
          .status(400)
          .json({ error: "There was a problem with your login credentials" });
      }
  
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );
  
      if (!passwordMatch) {
        return res
          .status(400)
          .json({ error: "There was a problem with your login credentials" });
      }
  
      const payload = { userId: user._id };
  
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
  
      res.cookie("access-token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
  
      const userToReturn = { ...user._doc };
      delete userToReturn.password;
  
      return res.json({
        token: token,
        user: userToReturn,
      });
    } catch (err) {
      console.log(err);
  
      return res.status(500).send(err.message);
    }
  });
  
  router.get("/current", requiresAuth, (req, res) => {
    if (!req.user) {
      return res.status(401).send("Unauthorized");
    }
  
    return res.json(req.user);
  });

  router.put("/logout", requiresAuth, async (req, res) => {
    try {
      res.clearCookie("access-token");
  
      return res.json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(500).send(err.message);
    }
  });



  router.post('/loginWithWeb3', async (req, res) => {
    const { ethAddress } = req.body;
  
    try {
      const user = await User.findOne({ ethAddress });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      res.json({ token });
    } catch (error) {
      console.log('Error verifying Web3 login:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  router.put("/:userId", requiresAuth, async (req, res) => {
    try {
      // Find the user based on userId provided in the URL parameter
      const user = await User.findById(req.params.userId);
         
      if (!user) {
        return res.status(404).json({ error: "Could not find user" });
      }
  
      // Validate the data received from the request body
      const { isValid, errors } = validateRegisterInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
        
      // Update the user properties
      user.email = req.body.email;
      const hashedPassword = await bcrypt.hash(req.body.password, 12);

      user.password = hashedPassword;
      // Add any other fields you want to update
  
      // Save the updated user in the database
      const updatedUser = await user.save();
  
      // Return the updated user as response
      const userToReturn = { ...updatedUser._doc };
      delete userToReturn.password;
  
      return res.json(userToReturn);
    } catch (err) {
      console.log(err);
      return res.status(500).send(err.message);
    }
  });
  

    

module.exports = router;
