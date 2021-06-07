import express from "express";
import PostCard from "../models/card.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from cards!");
});

router.post("/", (req, res) => {
  const card = new PostCard({
    title: req.body.title,
    description: req.body.description,
  });

  card
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ messagge: err });
    });
});

export default router;
