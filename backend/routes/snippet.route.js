import express from "express";
import {
  getSnippets,
  getSnippetsById,
  snippet,
} from "../controllers/snippet.controller.js";

const router = express.Router();

router.post("/", snippet);
router.get("/", getSnippets);
router.get("/:id", getSnippetsById);

export default router;
