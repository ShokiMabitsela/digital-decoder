import Blogs from "../models/blogModel.js";
import expressAsyncHandler from "express-async-handler";

export const createBlog = expressAsyncHandler(async (req, res) => {
  const { subcategory, images, title } = req.body;

  console.log("User in createBlog:", req.User); // Debugging log

  if (!subcategory || !images || !title) {
    res.status(400);
    throw new Error("All fields are required (subcategory, images, title).");
  }

  const newBlog = await Blogs.create({
    user: req.User._id,
    subcategory,
    images,
    title,
  });

  res.status(201).json({
    message: "Blog created successfully",
    data: newBlog,
  });
});


export const updateBlog = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { subcategory, images, title } = req.body;

  
  const blog = await Blogs.findById(id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found.");
  }

 
  if (blog.user.toString() !== req.User._id.toString()) {
    res.status(403);
    throw new Error("You are not authorized to update this blog.");
  }

 
  blog.subcategory = subcategory || blog.subcategory;
  blog.images = images || blog.images;
  blog.title = title || blog.title;

  const updatedBlog = await blog.save();

  res.status(200).json({
    message: "Blog updated successfully",
    data: updatedBlog,
  });
});

export const deleteBlog = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const blog = await Blogs.findById(id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found.");
  }

  await blog.deleteOne();

  res.status(200).json({
    message: "Blog deleted successfully",
  });
});
        