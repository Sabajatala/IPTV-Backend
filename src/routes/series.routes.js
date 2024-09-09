import express from "express";
import { SeriesValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import {  SeriesController,} from "../controllers/index.js";

const router = express.Router();

router.post('/',validate(SeriesValidationSchema), SeriesController.create);
router.get('/getall',authenticate, SeriesController.getAll);
router.get('/:id', authenticate, SeriesController.getById);
router.get('/:id/seasons', SeriesController.getSeriesSeasons);
router.get('/:id/seasons/episodes', SeriesController.getSeriesEpisodes);
router.patch('/:id',authenticate, validate(SeriesValidationSchema.update), SeriesController.update);
router.delete('/:id',authenticate, SeriesController.delete);
export default router;

