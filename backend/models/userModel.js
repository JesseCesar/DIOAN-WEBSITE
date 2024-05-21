import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
    minlength: 6
  },
  role: { type: String, enum: ['admin'], default: 'admin' }
});


const User = mongoose.model("User", userSchema)

export default User;
