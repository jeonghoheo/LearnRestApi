import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import path from "path";

const app = express();

// Setting views enviroments
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

// helmet protects our App
app.use(helmet());
// using body parser for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// using morgan for logs
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

export default app;
