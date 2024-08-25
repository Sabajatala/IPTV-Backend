import express from "express";

// routes
import userRoute from "./user.route.js";
import genreRoute from "./genre.route.js";
import streamRoute from "./stream.route.js";
import seriesRoute from "./series.routes.js";
import seasonRoute from "./season.route.js";
import episodeRoute from "./episode.route.js";
import fileRoute from "./file.route.js";


const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/genre", genreRoute);
unProtectedRouter.use("/stream", streamRoute);
unProtectedRouter.use("/series", seriesRoute);
unProtectedRouter.use("/season", seasonRoute);
unProtectedRouter.use("/episode", episodeRoute);
unProtectedRouter.use("/file", fileRoute);
export { protectedRouter, unProtectedRouter };
