import { SeriesModel} from "../models/index.js";

export const SeriesService = {



  create: async (seriesData) => {
    try {
      return await SeriesModel.create(seriesData);
    } catch (error) {
      throw new Error(`Error creating genre: ${error.message}`);
    }
  },
  
	getTotalCount : async () => {
		try {
		  return await SeriesModel.countDocuments(); 
		} catch (error) {
		  throw new Error(`Error in counting : ${error.message}`);
		}
	  },

    getAll: async ({ page = 1, limit = 5 }) => {
      try {
        const skip = (page - 1) * limit;
        const total = await SeriesModel.countDocuments();
        const series = await SeriesModel.find().skip(skip).limit(limit);
    
        return {
        series,
        totalPages: Math.ceil(total / limit),
        currentPage: page
        };
      } catch (error) {
        throw new Error(`Error in fetching : ${error.message}`);
      }
      },
	
	  getById : async (_id) => {
		try {
		  return await SeriesModel.findById(_id); // Fetch genre by ID
		} catch (error) {
		  throw new Error(`Error fetching series by ID: ${error.message}`);
		}
	  },
  
	
	  getSeriesSeasons: async (seriesId) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(seriesId)) {
                throw new Error('Invalid series ID format');
            }
            return await SeasonModel.aggregate([
                { $match: { seriesId: new mongoose.Types.ObjectId(seriesId) } }
            ]);
        } catch (error) {
            throw new Error(`Error fetching seasons: ${error.message}`);
        }
    },

    getSeriesEpisodes: async (seriesId) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(seriesId)) {
                throw new Error('Invalid series ID format');
            }
            return await SeasonModel.aggregate([
                { $match: { seriesId: new mongoose.Types.ObjectId(seriesId) } },
                {
                    $lookup: {
                        from: 'Episode',
                        localField: '_id',
                        foreignField: 'seasonId',
                        as: 'episodes',
                    },
                },
                { $unwind: "$episodes" },
            ]);
        } catch (error) {
            throw new Error(`Error fetching episodes: ${error.message}`);
        }
    },

    update: async (id, updateData) => {
        try {
          return await SeriesModel.findByIdAndUpdate(id, updateData, { new: true });
        } catch (error) {
          throw new Error(`Error updating series: ${error.message}`);
        }
      },

      delete: async (_id) => {
        return SeriesModel.findByIdAndDelete(_id);
      },
};
