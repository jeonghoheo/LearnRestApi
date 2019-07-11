import express from "express";
import Api from "./api";

const router = express.Router();

router.get("/", async (req, res) => {
  const {
    data: { title: name }
  } = await Api.get("/todos/1");
  res.render("home", { title: "Home", name });
});

export default router;
