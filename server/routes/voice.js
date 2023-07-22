import express from "express";
const router = express.Router();

import { addVoice, getallVoices } from "../controllers/voice.js";

// Post Methods
router.post('/add',addVoice);

// Get Methods
router.get('/all', getallVoices); 

export default router;