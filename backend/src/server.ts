import express from "express";
import ENV from "./lib/env.js";
import path from "path";
import { connectDb } from "./lib/db.js";

const app = express();

const __dirname = path.resolve();

app.get("/", (req, res) =>
  res.status(200).json({ msg: "success from api 123" })
);

// Make ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDb();

    app.listen(ENV.PORT, () =>
      console.log(`server is running on port ${ENV.PORT}`)
    );
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();
