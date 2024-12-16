import mongoose from "mongoose";
const fullNameSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minlength: [3, "First Name must be at least 3 characters"],
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    minlength: [2, "Last Name must be at least 2 characters"],
    trim: true,
  },
});

// Main User Schema
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: fullNameSchema,  
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],  
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [4, "Password must be at least 4 characters"],
      select: false,  
    },
    socketId: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }  
);
 
const userModel = mongoose.model("User", userSchema);
export default userModel;
