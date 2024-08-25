import { SeriesService, } from "../services/index.js";
import { httpResponse } from "../utils/index.js";


export const SeriesController = {
	create: async (req, res) => {
	  try {
		const data = await SeriesService.create(req.body);
		return httpResponse.CREATED(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  
	getAll: async (req, res) => {
	  try {
		const data = await SeriesService.getAll();
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  
	getById: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await SeriesService.getById(id);
		if (!data) {
		  return httpResponse.NOT_FOUND(res, 'Series not found');
		}
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  
	getSeriesSeasons: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await SeriesService.getSeriesSeasons(id);
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  
	getSeriesEpisodes: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await SeriesService.getSeriesEpisodes(id);
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  
	update: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await SeriesService.update(id, req.body);
		if (!data) {
		  return httpResponse.NOT_FOUND(res, 'Series not found');
		}
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  
	delete: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await SeriesService.delete(id);
		if (!data) {
		  return httpResponse.NOT_FOUND(res, 'Series not found');
		}
		return httpResponse.SUCCESS(res, { message: 'Series deleted successfully' });
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  };