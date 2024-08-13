import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { validateEmail } from "../validators/validator.js";
import sendEmail from '../utils/sendEmail.js';
import crypto from 'crypto';


export const signup = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, role, passcode } = req.body;

    // Validate passcode
    if (passcode !== process.env.SIGNUP_PASSCODE) {
      return res.status(403).json({ error: 'Invalid passcode' });
    }

    // Validate email
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      role
    });

    // Save the new user
    if (newUser) {
      await newUser.save();

      // Generate JWT token
      generateTokenAndSetCookie(newUser._id, res);

      // Respond with user details
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }

  } catch (error) {
    console.log("Error signing up", error.message);
    res.status(500).json({ error: error.message });
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

// Controller for handling forgot password requests
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    console.log('Forgot password request received for email:', email);
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found for email:', email);
      return res.status(404).json({ error: 'User not found' });
    }

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    const resetUrl = `http://localhost:3000/reset-password/${token}`;
    const message = `You requested a password reset. Please go to the following link to reset your password: ${resetUrl}`;

    await sendEmail({
      email: user.email,
      subject: 'Password Reset',
      message,
    });

    console.log('Password reset link sent to:', email);
    res.status(200).json({ message: 'Password reset link sent to your email' });
  } catch (error) {
    console.error('Error in forgotPassword:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for handling password resets
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    console.log('Reset password request received for token:', token);

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      console.log('Invalid or expired token');
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    const salt = await bcrypt.genSalt(10); // Generate a salt
    user.password = await bcrypt.hash(password, salt); // Hash the password
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    console.log('Password reset successfully for user:', user.email);
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error in resetPassword:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
