import express from "express";
import { FileValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import {  FileController,} from "../controllers/index.js";

const router = express.Router();
router.get("/", authenticate, FileController.getAll);
router.post("/", validate(FileValidationSchema.add), FileController.add);
router.get("/", authenticate, FileController.getById);
router.patch("/:id", authenticate, validate(FileValidationSchema.update), FileController.update);
router.delete("/:id", authenticate, FileController.delete);
export default router;
