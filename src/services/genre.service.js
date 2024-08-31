import mongoose from 'mongoose';
import { GenreModel, SeriesModel } from "../models/index.js";

export const GenreService = {
  create: async (genreData) => {
    try {
      return await GenreModel.create(genreData);
    } catch (error) {
      throw new Error(`Error creating genre: ${error.message}`);
    }
  },

  getTotalCount : async () => {
    try {
      return await GenreModel.countDocuments(); // Count the total number of documents
    } catch (error) {
      throw new Error(`Error counting genres: ${error.message}`);
    }
  },

   getAll : async ({ page = 1, limit = 5 }) => {
    try {
      const skip = (page - 1) * limit; // Calculate the number of documents to skip
      const total = await GenreModel.countDocuments(); // Get the total number of documents
      const genres = await GenreModel.find().skip(skip).limit(limit); // Fetch the paginated genres
      
      return {
        genres,
        totalPages: Math.ceil(total / limit), // Calculate the total number of pages
        currentPage: page
      };
    } catch (error) {
      throw new Error(`Error fetching genres: ${error.message}`);
    }
  },

  getById: async (id) => {
    try {
      return await GenreModel.findById(id);
    } catch (error) {
      throw new Error(`Error fetching genre by ID: ${error.message}`);
    }
  },

  getGenreSeries: async (genreId) => {
    try {
      return await SeriesModel.aggregate([
        { $match: { genreIds: new mongoose.Types.ObjectId(genreId) } }
      ]);
    } catch (error) {
      throw new Error(`Error fetching series for genre: ${error.message}`);
    }
  },

  getGenreSeriesSeasons: async (genreId) => {
    try {
      return await SeriesModel.aggregate([
        { $match: { genreIds: new mongoose.Types.ObjectId(genreId) } },
        {
          $lookup: {
            from: 'Season',  // Use the correct collection name
            localField: '_id',
            foreignField: 'seriesId',
            as: 'Season'
          }
        },
        { $unwind: "$Seasons" }
      ]);
    } catch (error) {
      throw new Error(`Error fetching series seasons for genre: ${error.message}`);
    }
  },

  update: async (id, updateData) => {
    try {
      return await GenreModel.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
      throw new Error(`Error updating genre: ${error.message}`);
    }
  },

  delete: async (id) => {
    try {
      return await GenreModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(`Error deleting genre: ${error.message}`);
    }
  }
};
