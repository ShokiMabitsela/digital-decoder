import express from "express";
import { createBlog, deleteBlog, updateBlog } from "../controllers/blogsController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createBlog);
router.put("/:id", protect, updateBlog)
router.delete("/:id", protect, deleteBlog)

export default router;
