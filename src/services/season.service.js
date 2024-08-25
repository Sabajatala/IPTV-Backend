import { SeasonsModel} from "../models/index.js";

export const SeasonService = {

	
	create: async (seasonData) => {
	  return SeasonsModel.create(seasonData);
	},
  
	
	getAll: async () => {
	  return SeasonsModel.find();
	},
  

	getById: async (id) => {
	  return SeasonsModel.findById(id);
	},
  
	
	getSeasonEpisodes: async (seasonId) => {
	  return EpisodeModel.aggregate([
		{ $match: { seasonId: new mongoose.Types.ObjectId(seasonId) } }
	  ]);
	},
  
	
	update: async (id, updateData) => {
	  return SeasonsModel.findByIdAndUpdate(id, updateData, { new: true });
	},
  
	
	delete: async (id) => {
	  return SeasonsModel.findByIdAndDelete(id);
	},
  };
  