import { FileService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const FileController = {
	getAll: async (req, res) => {
		try {
			const data = await FileService.getAll();
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	add: async (req, res) => {
		try {
			const data = await FileService.add(req.body);
			return httpResponse.CREATED(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	getById: async (req, res) => {
		try {
		  const { id } = req.params;
		  const data = await FileService.getById(id);
		  if (!data) {
			return httpResponse.NOT_FOUND(res, 'File not found');
		  }
		  return httpResponse.SUCCESS(res, data);
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	  },

	update: async (req, res) => {
		try {
		  const { id } = req.params;
		  const data = await FileService.update(id, req.body);
		  if (!data) {
			return httpResponse.NOT_FOUND(res, 'File not found');
		  }
		  return httpResponse.SUCCESS(res, data);
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	  },
	
	  delete: async (req, res) => {
		try {
		  const { id } = req.params;
		  const data = await FileService.delete(id);
		  if (!data) {
			return httpResponse.NOT_FOUND(res, 'File not found');
		  }
		  return httpResponse.SUCCESS(res, { message: 'File deleted successfully' });
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	
};

  

