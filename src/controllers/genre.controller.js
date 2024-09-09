import jwt from 'jsonwebtoken';
import { GenreService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";
import mongoose from 'mongoose';



export const GenreController = {
  
  create: async (req, res) => {
    try {
      const data = await GenreService.create(req.body);
      
      return httpResponse.CREATED(res, { data });
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getAll: async (req, res) => {
    const { page = 1, limit = 5 } = req.query;

    try {
      const { genres, totalPages, currentPage } = await GenreService.getAll({ page: parseInt(page), limit: parseInt(limit) });

      res.status(200).json({ genres, totalPages, currentPage });
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },


  getById: async (req, res) => {
    try {
      const { id } = req.params; 
      const genre = await GenreService.getById(id);
      if (!genre) {
        return httpResponse.NOT_FOUND(res, 'Genre not found');
      }
      const token = jwt.sign({ genre},  process.env.JWT_SECRET, { expiresIn: '4h' });
      return httpResponse.SUCCESS(res, { genre, token });
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },
  

  getAllGenreNames: async (req, res) => {
    try {
      const genreNames = await GenreService.getAllGenreNames();
      res.status(200).json(genreNames); 
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  },

  getGenreSeries: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await GenreService.getGenreSeries(id);
      return httpResponse.SUCCESS(res, { data });
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getGenreSeriesSeasons: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await GenreService.getGenreSeriesSeasons(id);
      return httpResponse.SUCCESS(res, { data });
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await GenreService.update(id, req.body);
      if (!data) {
        return httpResponse.NOT_FOUND(res, 'Genre not found');
      }
      return httpResponse.SUCCESS(res, { data });
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      console.log(`Deleting genre with ID: ${id}`);
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          status: 400,
          response: "Bad Request",
          message: "Invalid ID format",
          data: null
        });
      }
  
      const deletedGenre = await GenreService.delete(id);
  
      if (!deletedGenre) {
        return res.status(404).json({
          status: 404,
          response: "Not Found",
          message: "Genre not found",
          data: null
        });
      }
  
      return res.status(200).json({
        status: 200,
        response: "Success",
        message: "Genre deleted successfully",
        data: null
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        response: "Internal Server Error",
        message: "An error occurred while deleting the genre",
        data: error.message
      });
    }
  }
};
