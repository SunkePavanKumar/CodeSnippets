import express from "express";
import connect from "./db/connect.js";
import "dotenv/config.js";
import cors from "cors";
import userRouter from "./routes/users.route.js";

const app = express();

// body parser to accept the JSON request body
app.use(express.json());
app.use(cors());
app.use("/api/v1/users", userRouter);

const PORT = process.env.PORT || 8000;

const callback = async (err) => {
  if (err) throw err;
  console.log(`App is listening to the port ${PORT}`);
  // connect to the database
  connect();
};
app.listen(PORT, callback);
