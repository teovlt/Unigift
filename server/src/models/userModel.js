import mongoose from "mongoose";
import { userRoles } from "../enums/userRoles.js";
import { RefreshTokenSchema } from "./refreshTokenModel.js";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, select: false },
    roles: { type: String, enum: Object.values(userRoles), default: userRoles.USER },
    avatar: { type: String },
    refreshTokens: { type: [RefreshTokenSchema], select: false },
  },
  { timestamps: true },
);  

export const User = mongoose.model("User", UserSchema);
