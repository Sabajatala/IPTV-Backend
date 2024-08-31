import express from "express";
import { GenreValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import {  GenreController,} from "../controllers/index.js";

const router = express.Router();
router.post('/', validate(GenreValidationSchema.add), GenreController.create);
router.get('/getall',authenticate, GenreController.getAll);
router.get('/:id',authenticate, GenreController.getById);
router.get('/:id/series', GenreController.getGenreSeries);
router.get('/:id/series/seasons', GenreController.getGenreSeriesSeasons);
router.patch('/:id',authenticate,validate(GenreValidationSchema.update), GenreController.update);
router.delete('/:id', authenticate, GenreController.delete);
export default router;
