import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import { errorHandler, notFound } from "./middleware/errorHandler";

dotenv.config();

const app = express();

const middleware = [
  express.json(),
  express.urlencoded({ limit: "30mb", extended: true }),
  cors(),
];

// Middleware to accept body
app.use(middleware);

// rules of our API
// app.use(apiRules);
app.get("/", (req, res) => {
  res.send("Hi!");
});

// // application routes
// app.use("/api/product", productRoute);
// app.use("/api/users", userRoute);

// error handling
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
