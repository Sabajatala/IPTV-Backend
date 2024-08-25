import { StreamModel } from "../models/index.js";

export const StreamService = {

	
	create: async (streamData) => {
	  return StreamModel.create(streamData);
	},
  
	
	getAll: async () => {
	  return StreamModel.find();
	},
  
	
	getById: async (id) => {
	  return StreamModel.findById(id);
	},
  
	
	getStreamEpisode: async (streamId) => {
	  return EpisodeModel.aggregate([
		{
		  $lookup: {
			from: 'Stream', 
			localField: '_id',
			foreignField: 'episodeId',
			as: 'Stream' 
		  }
		},
		{ $unwind: "$Stream" }, 
		{ $match: { 'Stream._id': new mongoose.Types.ObjectId(streamId) } } 
	  ]);
	},
  
	
	getStreamUser: async (streamId) => {
	  return UserModel.aggregate([
		{ 
		  $lookup: {
			from: 'Stream', 
			localField: '_id',
			foreignField: 'userId',
			as: 'Stream' 
		  }
		},
		{ $unwind: "$Stream" }, 
		{ $match: { 'Stream._id': new mongoose.Types.ObjectId(streamId) } } 
	  ]);
	},
  
	
	getStreamEpisodeSeason: async (streamId) => {
	  return SeasonModel.aggregate([
		{ 
		  $lookup: {
			from: 'Episode', 
			localField: '_id',
			foreignField: 'seasonId',
			as: 'Episode' 
		  }
		},
		{ $unwind: "$Episode" }, 
		{ 
		  $lookup: {
			from: 'Stream', 
			localField: 'Episode._id',
			foreignField: 'episodeId',
			as: 'Stream' 
		  }
		},
		{ $unwind: "$Stream" }, 
		{ $match: { 'Stream._id': new mongoose.Types.ObjectId(streamId) } } 
	  ]);
	},
  
	
	getStreamEpisodeSeasonSeries: async (streamId) => {
	  return SeriesModel.aggregate([
		{ 
		  $lookup: {
			from: 'Season', 
			localField: '_id',
			foreignField: 'seriesId',
			as: 'Season' 
		  }
		},
		{ $unwind: "$Seasons" }, 
		{ 
		  $lookup: {
			from: 'Episode', 
			localField: 'Season._id',
			foreignField: 'seasonId',
			as: 'Episode' 
		  }
		},
		{ $unwind: "$Episode" }, 
		{ 
		  $lookup: {
			from: 'Stream', 
			localField: 'Episode._id',
			foreignField: 'episodeId',
			as: 'Stream' 
		  }
		},
		{ $unwind: "$Stream" }, 
		{ $match: { 'Stream._id': new mongoose.Types.ObjectId(streamId) } } 
	  ]);
	},
  
	
	getStreamEpisodeSeasonSeriesGenre: async (streamId) => {
	  return GenreModel.aggregate([
		{ 
		  $lookup: {
			from: 'Series', 
			localField: '_id',
			foreignField: 'genreId',
			as: 'Series' 
		  }
		},
		{ $unwind: "$Series" }, 
		{ 
		  $lookup: {
			from: 'Season', 
			localField: 'Series._id',
			foreignField: 'seriesId',
			as: 'Season' 
		  }
		},
		{ $unwind: "$Season" }, 
		{ 
		  $lookup: {
			from: 'Episode', 
			localField: 'Season._id',
			foreignField: 'seasonId',
			as: 'Episode' 
		  }
		},
		{ $unwind: "$Episode" }, 
		{ 
		  $lookup: {
			from: 'Stream',
			localField: 'Episode._id',
			foreignField: 'episodeId',
			as: 'Stream'
		  }
		},
		{ $unwind: "$Stream" }, 
		{ $match: { 'Stream._id': new mongoose.Types.ObjectId(streamId) } } 
	  ]);
	},
  
	
	update: async (id, updateData) => {
	  return StreamModel.findByIdAndUpdate(id, updateData, { new: true });
	},
  
	
	delete: async (id) => {
	  return StreamModel.findByIdAndDelete(id);
	},
  };
  