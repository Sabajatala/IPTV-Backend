import { EpisodeService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const EpisodeController = {

	create: async (req, res) => {
	  try {
		const data = await EpisodeService.create(req.body);
		return httpResponse.CREATED(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error);
	  }
	},
  
	getAll: async (req, res) => {
	  try {
		const data = await EpisodeService.getAll();
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error);
	  }
	},
  
	getById: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await EpisodeService.getById(id);
		if (!data) {
		  return httpResponse.NOT_FOUND(res, 'Episode not found');
		}
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error);
	  }
	},
  
	getEpisodeStreams: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await EpisodeService.getEpisodeStreams(id);
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error);
	  }
	},
  
	update: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await EpisodeService.update(id, req.body);
		if (!data) {
		  return httpResponse.NOT_FOUND(res, 'Episode not found');
		}
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error);
	  }
	},
  
	delete: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await EpisodeService.delete(id);
		if (!data) {
		  return httpResponse.NOT_FOUND(res, 'Episode not found');
		}
		return httpResponse.SUCCESS(res, { message: 'Episode deleted successfully' });
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error);
	  }
	},
  };