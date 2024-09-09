import { SeriesService, } from "../services/index.js";
import { httpResponse } from "../utils/index.js";
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';


export const SeriesController = {
	create: async (req, res) => {
	  try {
		const data = await SeriesService.create(req.body);
		console.log( { data });
		return httpResponse.CREATED(res, {data});
	  } catch (error) {
		return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
	  }
	},


	getAll: async (req, res) => {
		const { page = 1, limit = 5 } = req.query;
	
		try {
		  const { series, totalPages, currentPage } = await SeriesService.getAll({ page: parseInt(page), limit: parseInt(limit) });
		  res.status(200).json({ series, totalPages, currentPage });
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
		  const token = jwt.sign({ data },  process.env.JWT_SECRET, { expiresIn: '4h' });
		  return httpResponse.SUCCESS(res, { token ,data});
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
		}
	  },
	  
      getSeriesSeasons: async (req, res) => {
        try {
            const { id } = req.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                return httpResponse.BAD_REQUEST(res, 'Invalid series ID format');
            }

            const data = await SeriesService.getSeriesSeasons(id);
            return httpResponse.SUCCESS(res, data);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
        }
    },

    getSeriesEpisodes: async (req, res) => {
        try {
            const { id } = req.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                return httpResponse.BAD_REQUEST(res, 'Invalid series ID format');
            }

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
		  return httpResponse.SUCCESS(res, { data });
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
		}
	  },

	  async delete(req, res) {
		try {
		  const { id } = req.params;
		  console.log(`Deleting series with ID: ${id}`);
		  if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({
			  status: 400,
			  response: "Bad Request",
			  message: "Invalid ID format",
			  data: null
			});
		  }
	  
		  const deletedSeries = await SeriesService.delete(id);
	  
		  if (!deletedSeries) {
			return res.status(404).json({
			  status: 404,
			  response: "Not Found",
			  message: "series not found",
			  data: null
			});
		  }
	  
		  return res.status(200).json({
			status: 200,
			response: "Success",
			message: "series deleted successfully",
			data: null
		  });
		} catch (error) {
		  return res.status(500).json({
			status: 500,
			response: "Internal Server Error",
			message: "An error occurred while deleting the series",
			data: error.message
		  });
		}
	  }
	
	
};