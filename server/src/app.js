import express from "express";
import cors from "cors";
import { corsOptions } from "./configuration/corsOptions.js";
import { router } from "./routes/router.js";

const app = express();

//Middlewares
app.use(cors(corsOptions));
app.use(express.json());

//Routes
app.use("/api", router);

export default app;
