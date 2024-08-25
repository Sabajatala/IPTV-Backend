import express from "express";
import { SeasonValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import {  SeasonController,} from "../controllers/index.js";

const router = express.Router();

router.post('/',validate(SeasonValidationSchema.add), SeasonController.create);
router.get('/', authenticate, SeasonController.getAll);
router.get('/:id',authenticate, SeasonController.getById);
router.get('/:id/episodes', SeasonController.getSeasonEpisodes);
router.patch('/:id',authenticate, validate(SeasonValidationSchema.update), SeasonController.update);
router.delete('/:id',authenticate, SeasonController.delete);

export default router;
