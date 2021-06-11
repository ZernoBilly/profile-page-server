import express from "express";

//Import Route functions from /controllers
import {
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
} from "../controllers/cards.js";

const router = express.Router();

router.get("/", getCards);
router.get("/:id", getCard);
router.post("/", createCard);
router.patch("/:id", updateCard);
router.delete("/:id", deleteCard);

export default router;
