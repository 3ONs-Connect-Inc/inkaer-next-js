import express from "express";
import { submitShortlist } from "../controllers/shortlistController.js";

const router = express.Router();

router.post("/", submitShortlist);

export default router;
  