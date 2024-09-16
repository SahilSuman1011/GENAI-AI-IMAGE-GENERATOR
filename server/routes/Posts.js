// routes/Posts.js
import express from "express";
import { getAllPosts, createPost } from "../controllers/Posts.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);  // Add this line to handle POST requests

export default router;