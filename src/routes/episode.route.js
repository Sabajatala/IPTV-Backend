import express from "express";
import { EpisodeValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import {  EpisodeController,} from "../controllers/index.js";

const router = express.Router();

router.post('/',validate(EpisodeValidationSchema.add), EpisodeController.create);
router.get('/', validate,EpisodeController.getAll);
router.get('/:id',validate, EpisodeController.getById);
router.get('/:id/streams', EpisodeController.getEpisodeStreams);
router.patch('/:id', authenticate, validate(EpisodeValidationSchema.update), EpisodeController.update);
router.delete('/:id',authenticate, EpisodeController.delete);

export default router;
