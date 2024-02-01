import express from 'express';
import { createResidency, getAllResidencies, getResidency } from '../controllers/residencyController.js';
const router = express.Router();

router.post("/register", createResidency);
router.get("/allResidencies", getAllResidencies);
router.get("/:id",getResidency);
export {router as residencyRoute}; 