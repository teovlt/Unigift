import mongoose from "mongoose";

export const RefreshTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
