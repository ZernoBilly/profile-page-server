import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  title: {
    type: String,
    max: 30,
    require: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  description: {
    type: String,
    require: true,
  },
});

const ProjectCard = mongoose.model("ProjectCards", cardSchema);

export default ProjectCard;
