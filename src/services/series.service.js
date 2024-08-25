import { SeriesModel} from "../models/index.js";

export const SeriesService = {

	
	create: async (seriesData) => {
	  return SeriesModel.create(seriesData);
	},
  
	
	getAll: async () => {
	  return SeriesModel.find();
	},
  
	
	getById: async (id) => {
	  return SeriesModel.findById(id);
	},
  

	getSeriesSeasons: async (seriesId) => {
	  return SeasonModel.aggregate([
		{ $match: { seriesId: new mongoose.Types.ObjectId(seriesId) } }
	  ]);
	},
  
	
	getSeriesEpisodes: async (seriesId) => {
	  return SeasonModel.aggregate([
		{ $match: { seriesId: new mongoose.Types.ObjectId(seriesId) } },
		{
		  $lookup: {
			from: 'Episode', 
			localField: '_id',
			foreignField: 'seasonId',
			as: 'Episode'
		  }
		},
		{ $unwind: "$Episode" } 
	  ]);
	},

	update: async (id, updateData) => {
	  return SeriesModel.findByIdAndUpdate(id, updateData, { new: true });
	},
  
	
	delete: async (id) => {
	  return SeriesModel.findByIdAndDelete(id);
	},
  };
  