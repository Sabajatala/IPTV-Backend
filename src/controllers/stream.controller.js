import { StreamService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";


	  
	  export const StreamController = {
		getAll: async (req, res) => {
		  try {
			const data = await StreamService.getAll();
			return httpResponse.SUCCESS(res, data);
		  } catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
		  }
		},
	  
		add: async (req, res) => {
		  try {
			const data = await StreamService.add(req.body);
			return httpResponse.CREATED(res, data);
		  } catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
		  }
		},
	  
		getById: async (req, res) => {
		  try {
			const data = await StreamService.getById(req.params.id);
			if (!data) {
			  return httpResponse.NOT_FOUND(res, 'Stream not found');
			}
			return httpResponse.SUCCESS(res, data);
		  } catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
		  }
		},
	  
		getStreamEpisode: async (req, res) => {
		  try {
			const data = await StreamService.getStreamEpisode(req.params.id);
			return httpResponse.SUCCESS(res, data);
		  } catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
		  }
		},
	  
		getStreamUser: async (req, res) => {
		  try {
			const data = await StreamService.getStreamUser(req.params.id);
			return httpResponse.SUCCESS(res, data);
		  } catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
		  }
		},
	  
		getStreamEpisodeSeason: async (req, res) => {
		  try {
			const data = await StreamService.getStreamEpisodeSeason(req.params.id);
			return httpResponse.SUCCESS(res, data);
		  } catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
		  }
		},
	  
		getStreamEpisodeSeasonSeries: async (req, res) => {
		  try {
			const data = await StreamService.getStreamEpisodeSeasonSeries(req.params.id);
			return httpResponse.SUCCESS(res, data);
		  } catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
		  }
		},
	  
		getStreamEpisodeSeasonSeriesGenre: async (req, res) => {
		  try {
			const data = await StreamService.getStreamEpisodeSeasonSeriesGenre(req.params.id);
			return httpResponse.SUCCESS(res, data);
		  } catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
		  }
		},
	  
		update: async (req, res) => {
		  try {
			const data = await StreamService.update(req.params.id, req.body);
			if (!data) {
			  return httpResponse.NOT_FOUND(res, 'Stream not found');
			}
			return httpResponse.SUCCESS(res, data);
		  } catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
		  }
		},
	  
		delete: async (req, res) => {
		  try {
			const data = await StreamService.delete(req.params.id);
			if (!data) {
			  return httpResponse.NOT_FOUND(res, 'Stream not found');
			}
			return httpResponse.SUCCESS(res, { message: 'Stream deleted successfully' });
		  } catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
		  }
		}
	  };
	  