import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Subcategories",
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  title: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Blogs = mongoose.model("Blogs", blogSchema);

export default Blogs;
