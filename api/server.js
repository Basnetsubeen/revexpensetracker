import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;

//Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

//Database Connection
import { dbConnection } from "./src/config/dbConfig.js";
dbConnection();

//Routers

import userRouter from "./src/router/userRouter.js";
app.use("/api/v1/user", userRouter);
import transactionRouter from "./src/router/transactionRouter.js";
import { authMiddleware } from "./src/authMiddleware/authMiddleware.js";
app.use("/api/v1/transaction", authMiddleware, transactionRouter);

//Path
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));

app.use("/", (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  } catch (error) {
    next();
  }
});

//Global error handler
app.use((error, req, res, next) => {
  console.log(error);

  const status = error.status || 404;

  res.status(status).json({
    status: "error",
    message: error.message,
  });
});
//Port
app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server running at http://localhost:${PORT}`);
});
