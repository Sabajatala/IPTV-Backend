import { GenreService, } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const GenreController = {
	create: async (req, res) => {
	  try {
		const data = await GenreService.create(req.body);
		return httpResponse.CREATED(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  
	getAll: async (req, res) => {
	  try {
		const data = await GenreService.getAll();
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  
	getById: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await GenreService.getById(id);
		if (!data) {
		  return httpResponse.NOT_FOUND(res, 'Genre not found');
		}
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  
	getGenreSeries: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await GenreService.getGenreSeries(id);
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  
	getGenreSeriesSeasons: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await GenreService.getGenreSeriesSeasons(id);
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  
	update: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await GenreService.update(id, req.body);
		if (!data) {
		  return httpResponse.NOT_FOUND(res, 'Genre not found');
		}
		return httpResponse.SUCCESS(res, data);
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  
	delete: async (req, res) => {
	  try {
		const { id } = req.params;
		const data = await GenreService.delete(id);
		if (!data) {
		  return httpResponse.NOT_FOUND(res, 'Genre not found');
		}
		return httpResponse.SUCCESS(res, { message: 'Genre deleted successfully' });
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},
  };
	