import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
});

// compiling Schema into a Model

const Post = mongoose.models.Post || mongoose.model("Post", postSchema); // it means check if already exist then use that model, and if not then create the new one

export default Post;
