import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import path from "path";
import middlewares from "./middlewares";
import router from "./router";

const app = express();

// Setting views enviroments
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

// helmet protects our App
app.use(helmet());
// using body parser for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// using morgan for logs
app.use(morgan("dev"));
app.use(middlewares);

app.use("/", router);

export default app;
