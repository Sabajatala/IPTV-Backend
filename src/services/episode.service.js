import { EpisodeModel} from "../models/index.js";

export const EpisodeService = {

	
	create: async (episodeData) => {
	  return EpisodeModel.create(episodeData);
	},
  

	getAll: async () => {
	  return EpisodeModel.find();
	},
  
	
	getById: async (id) => {
	  return EpisodeModel.findById(id);
	},
  
	
	getEpisodeStreams: async (episodeId) => {
	  return StreamModel.aggregate([
		{ $match: { episodeId: new mongoose.Types.ObjectId(episodeId) } }
	  ]);
	},
  
	
	update: async (id, updateData) => {
	  return EpisodeModel.findByIdAndUpdate(id, updateData, { new: true });
	},
  
	
	delete: async (id) => {
	  return EpisodeModel.findByIdAndDelete(id);
	},
  };
  