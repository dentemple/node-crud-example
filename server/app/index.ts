/* Lib imports */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

/* Feature imports */
import beveragesRouter from "../api/beverages/routes";

/* Util imports */
import { BASE_URL, MONGO_URI } from "../app/constants";

/* Config */
const app = express();

/* Database */
// FOR DEMONSTRATION PURPOSES ONLY
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
mongoose.connect(MONGO_URI, config);

/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use(`${BASE_URL}/beverages`, beveragesRouter);

app.get(`${BASE_URL}/ping`, (_, res) => res.send("ok"));
app.get(`${BASE_URL}`, (req, res) => res.send(req.url));

export default app;
