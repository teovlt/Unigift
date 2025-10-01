import express from "express";
import cors from "cors";
import { corsOptions } from "./configuration/corsOptions.js";
import { router } from "./routes/router.js";

const app = express();

// Global middleware
app.use(express.json()); // Parse incoming JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads

// Logger
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Enable CORS with predefined options
app.use(cors(corsOptions));

//Routes
app.use("/api", router);

export default app;
