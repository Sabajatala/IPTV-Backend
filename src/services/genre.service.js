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
      return await GenreModel.countDocuments();
    } catch (error) {
      throw new Error(`Error counting genres: ${error.message}`);
    }
  },

  getAll: async ({ page = 1, limit = 5 }) => {
    try {
      const skip = (page - 1) * limit;
      const total = await GenreModel.countDocuments();
      const genres = await GenreModel.find().skip(skip).limit(limit);

      return {
        genres,
        totalPages: Math.ceil(total / limit),
        currentPage: page
      };
    } catch (error) {
      throw new Error(`Error fetching genres: ${error.message}`);
    }
  },

   getById : async (_id) => {
     try {
      return await GenreModel.findById(_id); 
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
            from: 'Season',  
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

  getAllGenreNames: async () => {
    try {
      const genres = await GenreModel.find({}, 'name'); 
      return genres.map(genre => genre.name); 
    } catch (error) {
      throw new Error(`Error fetching genre names: ${error.message}`);
    }
  },
  
	delete: async (_id) => {
	  return GenreModel.findByIdAndDelete(_id);
	},
};
