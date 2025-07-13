// backend/models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

// ✅ Fix: Check if model already exists
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
