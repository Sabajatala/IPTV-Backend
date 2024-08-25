import { GenreModel} from "../models/index.js";

export const GenreService = {


	create: async (genreData) => {
	  return GenreModel.create(genreData);
	},

	getAll: async () => {
	  return GenreModel.find();
	},
  
	
	getById: async (id) => {
	  return GenreModel.findById(id);
	},
  
	
	getGenreSeries: async (genreId) => {
	  return SeriesModel.aggregate([
		{ $match: { genreIds: new mongoose.Types.ObjectId(genreId) } }
	  ]);
	},
  
	
	getGenreSeriesSeasons: async (genreId) => {
	  return SeriesModel.aggregate([
		{ $match: { genreIds: new mongoose.Types.ObjectId(genreId) } },
		{
		  $lookup: {
			from: 'Season', 
			localField: '_id',
			foreignField: 'seriesId',
			as: 'Season'
		  }
		},
		{ $unwind: "$Season" } 
	  ]);
	},
  
	
	update: async (id, updateData) => {
	  return GenreModel.findByIdAndUpdate(id, updateData, { new: true });
	},
  
	
	delete: async (id) => {
	  return GenreModel.findByIdAndDelete(id);
	},
  };
  