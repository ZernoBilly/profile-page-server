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

  selectedFile: {
    type: String,
  },

  url: {
    type: String,
    require: true,
  },

  gitHub: {
    type: String,
  },
});

const ProjectCard = mongoose.model("ProjectCards", cardSchema);

export default ProjectCard;
