import { UserService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs"

export const UserController = {
  register: async (req, res) => {

    
    try {
      
      const data = await UserService.register(req.body);
      return httpResponse.CREATED(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log('Login attempt with:', { email, password }); // Log input data
  
      const user = await UserService.login(email);
      if (!user) {
        console.log('No user found with email:', email);
        return httpResponse.UNAUTHORIZED(res, 'Invalid email or password');
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
    
      console.log('Password match:', isMatch);
      
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }    
      );
      res.status(200).json({ token });
  
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await UserService.getAll();
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await UserService.getById(id);
      if (!data) {
        return httpResponse.NOT_FOUND(res, 'User not found');
      }
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getUserStreams: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await UserService.getUserStreams(id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getUserStreamEpisodes: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await UserService.getUserStreamEpisodes(id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await UserService.update(id, req.body);
      if (!data) {
        return httpResponse.NOT_FOUND(res, 'User not found');
      }
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await UserService.delete(id);
      if (!data) {
        return httpResponse.NOT_FOUND(res, 'User not found');
      }
      return httpResponse.SUCCESS(res, { message: 'User deleted successfully' });
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },
};
