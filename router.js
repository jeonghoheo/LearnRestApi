import express from "express";
import Api from "./api";

const router = express.Router();

const prevent = event => {
  event.preventDefault();
  console.log("막았다");
};

router.get("/", async (req, res) => {
  const {
    data: { title: name }
  } = await Api.get("/todos/1");
  res.render("home", { title: "Home", name, prevent });
});

router.post("/", async (req, res) => {
  const { post: name } = req.body;
  res.render("home", { title: "Post", name, prevent });
});

export default router;
