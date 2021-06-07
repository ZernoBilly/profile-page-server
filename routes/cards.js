import express from "express";

import {
  getCards,
  getCard,
  createCard,
  updateCard,
} from "../controllers/cards.js";

const router = express.Router();

router.get("/", getCards);
router.get("/:id", getCard);
router.post("/", createCard);
router.patch("/:id", updateCard);

export default router;
