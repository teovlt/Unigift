import mongoose from "mongoose";
import { userRoles } from "../enums/userRoles";
import { RefreshToken } from "./refreshTokenModel";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, select: false },
    roles: { type: userRoles, default: userRoles.USER },
    avatar: { type: String },
    refreshTokens: [RefreshToken.schema],
  },
  { timestamps: true },
);

export const User = mongoose.model("User", UserSchema);
