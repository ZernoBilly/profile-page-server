import express from "express";
import mongoose from "mongoose";

import ProjectCard from "../models/card.js";

//Get all Project Cards
export const getCards = async (req, res) => {
  try {
    const cards = await ProjectCard.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Get specific Project Card
export const getCard = async (req, res) => {
  const { id } = req.params;
  try {
    const card = await ProjectCard.findById(id);
    res.status(200).json(card);
  } catch {
    res.statuts(404).json({ message: error.message });
  }
};

//Create Project Card
export const createCard = async (req, res) => {
  const { title, date, description, selectedFile } = req.body;

  const newCard = new ProjectCard({ title, date, description, selectedFile });

  try {
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//Update Project Card
export const updateCard = async (req, res) => {
  const { id } = req.params;
  const { title, date, description, selectedFile } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id ${id}`);

  const updatedCard = { _id: id, title, date, description, selectedFile };

  await ProjectCard.findByIdAndUpdate(id, updatedCard, { new: true });
  res.json(updatedCard);
};
