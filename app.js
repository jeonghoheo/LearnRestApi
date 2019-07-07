import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";

const app = express();

// helmet protects our App
app.use(helmet());
// using body parser for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// using morgan for logs
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hi");
});

export default app;
