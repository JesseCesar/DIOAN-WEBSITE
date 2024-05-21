import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { validateEmail } from "../validators/validator.js";

export const signup = async (req, res) => {
  try {
    const {fullName, email, password, confirmPassword, role} = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    if(password !== confirmPassword) {
      return res.status(400).json({error:"Passwords don't match"})
    }

    const user = await User.findOne({email})

    if(user) {
      return res.status(400).json({error:"User already exists"})
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      role
    })

    if (newUser){
      await newUser.save();
    // Generate jwt token
    generateTokenAndSetCookie(newUser._id, res);
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      role: newUser.role
    })} else {
      res.status(400).json({error:"Invalid user data"})
    }

  } catch (error) {
    console.log("Error signing up", error.message);
    res.status(500).json({error: error.message})
  }
};


export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    if(!user || !isPasswordCorrect) {
      return res.status(400).json({error:"Invalid credentials"})
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      role: user.role,
      email: user.email,
    })
  } catch (error) {
    console.log("Error logging in", error.message);
    res.status(500).json({error: error.message})
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", {maxAge: 0});
    res.status(200).json({message:"Logged out successfully"})

  } catch (error) {
    console.log("Error logging out", error.message);
    res.status(500).json({error: error.message})
  }
};
