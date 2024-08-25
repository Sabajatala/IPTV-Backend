import express from "express";
import { StreamValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import {  StreamController,} from "../controllers/index.js";

const router = express.Router();
router.post('/', validate(StreamValidationSchema.add), StreamController.add);
router.get('/',  authenticate, StreamController.getAll);
router.get('/:id', authenticate, StreamController.getById);
router.get('/:id/episode', StreamController.getStreamEpisode);
router.get('/:id/user',   StreamController.getStreamUser);
router.get('/:id/episode/season', StreamController.getStreamEpisodeSeason);
router.get('/:id/episode/season/series', StreamController.getStreamEpisodeSeasonSeries);
router.get('/:id/episode/season/series/genre', StreamController.getStreamEpisodeSeasonSeriesGenre);
router.patch('/:id', authenticate, validate(StreamValidationSchema.update), StreamController.update);
router.delete('/:id',  authenticate, StreamController.delete);
export default router;
