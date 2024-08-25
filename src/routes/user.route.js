import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import {  UserController} from "../controllers/index.js";

const router = express.Router();

router.post('/registration', UserController.register);
router.post('/login', UserController.login);
router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.get('/:id/streams', UserController.getUserStreams);
router.get('/:id/streams/episode', UserController.getUserStreamEpisodes);
router.patch('/:id',authenticate, validate(UserValidationSchema.update), UserController.update);
router.delete('/:id', authenticate, UserController.delete);
export default router;
