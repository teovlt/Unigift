import app from "./src/app.js";
import "dotenv/config";
import { connectToDatabase } from "./src/database/index.js";

export function initServer() {
  connectToDatabase();

  if (!process.env.PORT) {
    console.error("Please specify the port number for the HTTP server with the environment variable PORT in the .env file.");
    process.exit(1);
  }

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT} 🚀`);
  });
}

initServer();
