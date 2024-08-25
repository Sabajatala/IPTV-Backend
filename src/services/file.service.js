import { FileModel} from "../models/index.js";

export const FileService = {
	getAll: async () => {
		return  FileModel.find();
	},

	add: async (body) => {
		return  FileModel.create(body);
	},

	getById: async (id) => {
		return await FileModel.findById(id);
	},

	
		  
	update: async (id, body) => {
		return FileModel.findByIdAndUpdate(id, body, { new: true });
	  },
	
	  delete: async (id) => {
		return FileModel.findByIdAndDelete(id);
	},	  
};