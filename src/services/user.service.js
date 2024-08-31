import { UserModel } from "../models/index.js";



export const UserService = {
	

		register: async (userData) => {
		  return UserModel.create(userData);
		},
		login: async (email) => {
			try {
			  console.log('Searching for user with email:', email); // Log the email
			  const user = await UserModel.findOne({ email });
			  console.log('User found:', user); // Log the found user
			  return user;
			} catch (error) {
			  throw new Error('Error finding user: ' + error.message);
			}
		  },
		  
	  
		getAll: async () => {
		  return UserModel.aggregate([
			{
			  $lookup: {
				from: 'Stream', 
				localField: '_id',
				foreignField: 'userId',
				as: 'Stream'
			  }
			}
		  ]);
		},
	  
		getById: async (id) => {
		  return UserModel.aggregate([
			{ $match: { _id: new mongoose.Types.ObjectId(id) } },
			{
			  $lookup: {
				from: 'Stream',
				localField: '_id',
				foreignField: 'userId',
				as: 'Stream'
			  }
			}
		  ]);
		},
	  
		getUserStreams: async (userId) => {
		  return StreamModel.aggregate([
			{ $match: { userId: new mongoose.Types.ObjectId(userId) } }
		  ]);
		},
	  
		getUserStreamEpisodes: async (userId) => {
		  return StreamModel.aggregate([
			{ $match: { userId: new mongoose.Types.ObjectId(userId) } },
			{
			  $lookup: {
				from: 'Episode',
				localField: '_id',
				foreignField: 'streamId',
				as: 'Episode'
			  }
			},
			{ $unwind: "$Episode" }, 
		  ]);
		},
	  
		update: async (id, body) => {
		  return UserModel.findByIdAndUpdate(id, body, { new: true });
		},
	  
		delete: async (id) => {
		  return UserModel.findByIdAndDelete(id);
		},
	  };
	  